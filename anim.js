// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Like a wildflower", time: 15 },
  {text: "So many colors but not enough", time: 19 },
  { text: "To picture your smile", time: 23 },
  { text: "Make it never fade it can make my day", time: 28 },
  { text: "Just wait, oh", time: 34 },
  { text: "I can be your love, your sunlight", time: 38 },
  { text: "So keep your eyes on me", time: 43 },
  { text: "On me", time: 44 },
  { text: "Dance to the daisies or any flower", time: 49 },
  { text: "Or stand there and I can't tell you apart", time: 53.5 },
  { text: "I'll be rain for you even on sunny days", time: 57 },
  { text: "So paint my world with your color", time: 62 },
  { text: "Let's lie in the sun, for hours and hours", time: 85 },
  { text: "Till the day goes by and though", time: 89 },
  { text: "We might not be forever", time: 92.5 },
  { text: "Just hold my hand anyways", time: 97 },
  { text: "Let's bloom in ways", time: 100 },
  { text: "Where we can touch the stars, even though they're far", time: 103 },
  { text: "But if you wanna stay then I'll", time: 107 },
  { text: "With you", time: 110.5 },
  { text: "Dance to the daisies or any flower", time: 117 },
  { text: "Or stand there and I can't tell you apart", time: 120 },
  { text: "I'll be rain for you even on sunny days", time: 126 },
  { text: "So paint my world with your color", time: 128.5 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);