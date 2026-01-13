document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     EFECTO ESCRITURA - NOMBRE
  ================================ */
  const nombreSpan = document.getElementById("nombre");

  if (nombreSpan) {
    const texto = "Juan Carlos Gorriti";
    let i = 0;

    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    nombreSpan.after(cursor);

    function escribirNombre() {
      if (i < texto.length) {
        nombreSpan.textContent += texto.charAt(i);
        i++;
        setTimeout(escribirNombre, 120);
      }
    }

    setTimeout(escribirNombre, 1000);
  }

  /* ===============================
     EFECTO ESCRITURA - DESCRIPCIÓN
  ================================ */
  const descSpan = document.getElementById("descripcion");

  if (descSpan) {
    const desc =
      "Desarrollador backend con experiencia en Java, Spring Boot, Angular y bases de datos. Me apasiona crear soluciones digitales modernas, escalables y con buena experiencia de usuario.";
    let j = 0;

    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    descSpan.after(cursor);

    function escribirDesc() {
      if (j < desc.length) {
        descSpan.textContent += desc.charAt(j);
        j++;
        setTimeout(escribirDesc, 25);
      }
    }

    setTimeout(escribirDesc, 100);
  }

  /* ===============================
     FORMULARIO DE CONTACTO (EmailJS)
  ================================ */
  const form = document.getElementById("form");
  const btn = document.getElementById("button");

  if (form && btn) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      btn.value = "Sending...";

      const serviceID = "default_service";
      const templateID = "template_qexkf4o";

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = "Send Email";
          alert("Mensaje enviado correctamente 🚀");
          form.reset();
        })
        .catch((err) => {
          btn.value = "Send Email";
          alert("Error al enviar el mensaje 😥");
          console.error(err);
        });
    });
  }

});
