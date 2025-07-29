function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
      // Si quieres que vaya a otra página tuya:
      window.location.href = "https://nueva-web-phi.vercel.app/";

      // O si quieres que vaya a otra web, por ejemplo:
      // window.location.href = "https://starbucks.com";
    } else {
      alert("Por favor completa todos los campos");
    }
  }