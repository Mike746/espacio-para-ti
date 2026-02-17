let destinoAcceso = "";

function mostrarLogin(destino) {
  destinoAcceso = destino;

  console.log("Destino elegido:", destinoAcceso);

  document.getElementById("main-content").style.display = "none";
  document.getElementById("login-general").style.display = "block";
}


function verificarAcceso() {
  const clave = document.getElementById("password-general").value;
  const correcta = "justthetwoofus"; // tu clave real

  if (clave === correcta) {

    document.getElementById("login-general").style.display = "none";

    if (destinoAcceso === "carta") {
      const carta = document.getElementById("carta");
      carta.classList.remove("hidden");
    }

    if (destinoAcceso === "emocional") {
      alert("Mi amorcito, esta es la segunda parte de tu regalo, se que actualmente es algo complicado que hablemos por telefono o mensaje, por tanto, queria hacer esto para los días que no tivieramos mucho tiempo para hablar pero te sintieras mal o algo. Este es un espacio en todo el basto mundo del internet que es tuyo, en el que vas a poder leer cosas que yo escribi pensando en ti. Tu eres todo para mi, te quiero ❤️ Voy a estar agregando mas cosas y haciendole actualizaciones, espero que te guste my love 😊 PD: Espero que te guste y te ayude, pero, no me reemplaces con esto 😥, me encanta hablar contigo 😊")
      const seccion = document.getElementById("seccion-emocional");
      seccion.style.display = "block";
    }

  } else {
    alert("Clave incorrecta.");
  }
}



function mostrarCarta() {
  const carta = document.getElementById("carta");
  carta.style.display = "block";
  setTimeout(() => {
    carta.style.opacity = 1;
  }, 50);
}

function mostrarSeccionEmocional() {
  const seccion = document.getElementById("seccion-emocional");
  seccion.style.display = "block";
  setTimeout(() => {
    seccion.style.opacity = 1;
  }, 50);
}



/*
  Seccion de lo nuevo la parte de la carga de los mensajes
 */

let baseMensajes = {};

fetch("mensajes.json")
.then(response => response.json())
.then(data => {
  baseMensajes = data;
  console.log("Mensajes cargados: ", baseMensajes);
})

.catch(error => console.error("Error cargando mensajes: ", error));

function obtenerFrase(categoria){
  const categoriaData = baseMensajes[categoria];

  if (!categoria){
    return "Algo se esta construyendo para ti.";
  }

  const frases = categoriaData.frases;
  const randomindex = Math.floor(Math.random() * frases.length);
  return frases[randomindex];
}

function mostrarFrase(categoria) {
  const frase = obtenerFrase(categoria);
  const contenedor = document.getElementById("frase-resultado");

  contenedor.style.opacity = 0;

  setTimeout(() => {
    contenedor.innerText = frase;
    contenedor.style.opacity = 1;
  }, 300);
}
