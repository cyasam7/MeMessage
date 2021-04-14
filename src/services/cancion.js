const canciones = [
  "https://www.youtube.com/watch?v=7qFfFVSerQo&list=PLqCkfO1fHW1cNER9Fz0PsxeLRal80zEX3&index=1",
  "https://www.youtube.com/watch?v=fHiGbolFFGw&list=PLqCkfO1fHW1cNER9Fz0PsxeLRal80zEX3&index=2",
  "https://www.youtube.com/watch?v=n5h0qHwNrHk&list=PLqCkfO1fHW1cNER9Fz0PsxeLRal80zEX3&index=3",
  "https://www.youtube.com/watch?v=yI2oS2hoL0k&list=PLqCkfO1fHW1cNER9Fz0PsxeLRal80zEX3&index=4",
  "https://www.youtube.com/watch?v=8nTFjVm9sTQ&list=PLqCkfO1fHW1cNER9Fz0PsxeLRal80zEX3&index=5",
  "https://www.youtube.com/watch?v=1uYWYWPc9HU&list=PLqCkfO1fHW1cNER9Fz0PsxeLRal80zEX3&index=6",
  "https://www.youtube.com/watch?v=TTAU7lLDZYU&list=PLqCkfO1fHW1cNER9Fz0PsxeLRal80zEX3&index=7",
  "https://www.youtube.com/watch?v=cfOa1a8hYP8&list=PLqCkfO1fHW1cNER9Fz0PsxeLRal80zEX3&index=8",
  "https://www.youtube.com/watch?v=u5CVsCnxyXg&list=PLqCkfO1fHW1cNER9Fz0PsxeLRal80zEX3&index=9",
  "https://www.youtube.com/watch?v=XFkzRNyygfk&list=PLqCkfO1fHW1cNER9Fz0PsxeLRal80zEX3&index=10",
];

function regresarEnlaceDeCancion(numero) {
  if (numero === 5) {
    return canciones[8];
  }
  const numAleatorio = Math.floor(Math.random() * (9 - 0)) + 0;
  return canciones[numAleatorio];
}
export default { regresarEnlaceDeCancion };
