import express from "express";
import cron from "node-cron";
import WhatsAppWeb from "baileys";
import fs from "fs";
import { config } from "./config";
import { getMessage } from "./mensajes";

/* Servidor */
const app = express();

/* Middlewares */
app.use(express.json());

const client = new WhatsAppWeb();

const dir = __dirname + "/credencial/auth.json";

const existAuthJson = fs.existsSync(dir); /* Existe Credenciales */

if (!existAuthJson) { /* Si no existe */
  client 
    .connectSlim()/* Genera QR donde se tendra que escanear */
    .then(() => {
      const auth = client.base64EncodedAuthInfo();/* Una vez escaneado se crea la crencial */
      const json = JSON.stringify(auth);
      fs.writeFileSync(dir, json);/* Se guarda */
    })
    .then(() => {
      /* Se apaga el servidor */
      console.log("Se apagara el servidor.");
      console.log("Vuelvelo a encender para iniciar la rutina de mensajes.");
      process.exit(0);
    });
}
/* Una vez creadas las licensias se inicia sesion */
cron.schedule(
  `${config.minuto_del_dia} ${config.hora_del_dia} ${config.dias_del_mes} ${config.mes_del_anio} ${config.dia_de_la_semana}`,
  async () => {
    const authJSON = JSON.parse(fs.readFileSync(dir));/* Se le la credencial */

    await client.connectSlim(authJSON);/* Se utiliza para iniciar sesion */

    const mensaje = getMessage(); /* Se obtiene mensaje */

    /* Se manda mensaje */
    client
      .sendTextMessage(
        `${config.numero_enviar_mensaje}@s.whatsapp.net`,
        mensaje
      )
      .then(() => {
        console.log("Se mando mensaje");
      });
    client.close();
  }
);

export default app;
