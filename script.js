function verificarClave() {
  const clave = document.getElementById("password").value;
  const correcta = "justthetwoofus";

  if (clave === correcta) {

    const login = document.getElementById("login-section");
    const carta = document.getElementById("carta");

    // Oculta el login suavemente
    login.style.opacity = 0;

    setTimeout(() => {
      login.style.display = "none";
      carta.classList.remove("hidden");
      carta.style.opacity = 1;
    }, 800);

  } else {
    alert("Esa no es la clave correcta.");
  }
}
