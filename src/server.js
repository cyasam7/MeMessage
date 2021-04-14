import express from "express";
import ServicesMessage from "./services/message";
import ServicesCanciones from "./services/cancion";
import cron from "node-cron";
import WhatsAppWeb from "baileys";
import fs from "fs";
const app = express();

/* Middlewares */
app.use(express.json());

const client = new WhatsAppWeb();

(async () => {
  const authJSON = JSON.parse(fs.readFileSync(__dirname + "/auth.json"));
  await client.connectSlim(authJSON);
  cron.schedule("* * * * * *", () => {
    const [mensaje, index] = ServicesMessage.getMessage();
    const cancion = ServicesCanciones.regresarEnlaceDeCancion(index);
    const mensajeCompleto = `${mensaje} \n${cancion}`;
    console.log(mensajeCompleto);
    client
      .sendTextMessage(
        "5216182276490@s.whatsapp.net",
        mensajeCompleto
      )
      .then(() => {
        console.log("Se mando mensaje");
      });
  });
})();

export default app;
