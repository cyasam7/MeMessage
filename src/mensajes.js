/* Dentro de esta lista de mensajes se escojera un mensaje aleatorio para ser mandado.*/
export const mensajes = [
  "Espero que tengas un lindo dia y disfruta de esta cancion :).",
  "Un Abrazo, Buenos dias uwu.",
  "Una cancion para iniciar tu dia uwu.",
  "Buenos dias, Suerte en tus clases uwu.",
  "Despierta! Hoy sera un bonito dia.",
  "Sin alarmas y sin sorpresas. Silencio, silencio.",
];

/* Funcion que regresa un mensaje aleatioro del arreglo */
export function getMessage() {
  const numAleatorio = Math.floor(Math.random() * (mensaje.length - 0)) + 0;
  return mensajes[numAleatorio];
}
