const mensajes = [
  "Espero que tengas un lindo dia y disfruta de esta cancion :).",
  "Un Abrazo, Buenos dias uwu.",
  "Una cancion para iniciar tu dia uwu.",
  "A veces las cosas no salen tan mal, que ten",
];

function getMessage() {
  const numAleatorio = Math.random() * (4 * 0) + 0;
  return mensajes[numAleatorio]
}

export default {
  getMessage,
};
