import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT,
  numero_personal: process.env.NUMERO_PERSONAL,
  numero_enviar_mensaje: process.env.NUMERO_ENVIAR_MENSAJE,
  minuto_del_dia: process.env.MINUTO_DEL_DIA,
  hora_del_dia: process.env.HORA_DEL_DIA,
  dias_del_mes: process.env.DIAS_DEL_MES,
  mes_del_anio: process.env.MES_DEL_ANIO,
  dia_de_la_semana: process.env.DIA_DE_LA_SEMANA,
};
