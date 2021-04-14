const mensajes = [
  "Espero que tengas un lindo dia y disfruta de esta cancion :).",
  "Un Abrazo, Buenos dias uwu.",
  "Una cancion para iniciar tu dia uwu.",
  "Buenos dias, Suerte en tus clases uwu.",
  "Despierta! Hoy sera un bonito dia.",
  "Sin alarmas y sin sorpresas. Silencio, silencio."
];

function getMessage() {
  const numAleatorio = Math.floor(Math.random() * (5 - 0)) + 0;
  return [mensajes[numAleatorio], numAleatorio]
}

export default {
  getMessage,
};
