import obtenerSaludo from "./saludador";

const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const edad = parseInt(document.querySelector("#edad").value);
  const genero = document.querySelector("#genero").value;
  const idioma = document.querySelector("#idioma").value;

  const mensaje = obtenerSaludo(nombre, genero, edad, idioma);
  
  div.innerHTML = `<p>${mensaje}</p>`;
});
