function regresarEnlaceDeCancion() {
  const numAleatorio = Math.random() * (10 - 0) + 0;
  return `https://www.youtube.com/watch?v=7qFfFVSerQo&list=PLqCkfO1fHW1cNER9Fz0PsxeLRal80zEX3&index=${numAleatorio}`;
}
export default { regresarEnlaceDeCancion };
