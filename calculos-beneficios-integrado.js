// calculos-beneficios-integrado.js

// Inserta aquí todas las tablas y funciones JS para la calculadora

// Este archivo debe cargarse en el HTML con:
// <script src="https://cdn.jsdelivr.net/gh/andreseliecerramirez/sindicato-data/scripts/calculos-beneficios-integrado.js"></script>

// EJEMPLO BÁSICO (se reemplazará con el contenido real completo):

document.addEventListener("DOMContentLoaded", () => {
  const ingreso = document.getElementById("ingreso");
  const jornada = document.getElementById("jornada");
  const caja = document.getElementById("caja");

  [ingreso, jornada, caja].forEach(element => {
    element.addEventListener("change", () => {
      document.getElementById("antiguedad").textContent = "Cálculo en progreso...";
      // Aquí va el resto del cálculo real
    });
  });
});
