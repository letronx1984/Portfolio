document.addEventListener("DOMContentLoaded", () => {
  const texto = "Juan Carlos Gorriti";
  const span = document.getElementById("nombre");

  let i = 0;


  const cursor = document.createElement("span");
  cursor.classList.add("cursor");
  span.after(cursor);

  function escribir() {
    if (i < texto.length) {
      span.textContent += texto.charAt(i);
      i++;
      setTimeout(escribir, 120); 
    }
  }

  setTimeout(escribir, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  const desc =
    "Desarrollador backend con experiencia en Java, Spring Boot, Angular y bases de datos. Me apasiona crear soluciones digitales modernas, escalables y con buena experiencia de usuario.";
  const span = document.getElementById("descripcion");

  let i = 0;


  const cursor = document.createElement("span");
  cursor.classList.add("cursor");
  span.after(cursor);

  function escribir() {
    if (i < desc.length) {
      span.textContent += desc.charAt(i);
      i++;
      setTimeout(escribir, 25); 
    }
  }

  setTimeout(escribir, 100);
});
