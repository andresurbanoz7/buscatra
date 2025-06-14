
document.addEventListener("DOMContentLoaded", () => {
  const ingreso = document.getElementById("ingreso");
  const jornada = document.getElementById("jornada");
  const caja = document.getElementById("caja");

  const sueldoBase = {
    45: [
      { anios: 1.99, valor: 11000 }, { anios: 2.99, valor: 12000 }, { anios: 3.99, valor: 13000 },
      { anios: 4.99, valor: 14000 }, { anios: 5.99, valor: 15000 }, { anios: 6.99, valor: 16000 },
      { anios: 7.99, valor: 17000 }, { anios: 8.99, valor: 18000 }, { anios: 9.99, valor: 19000 },
      { anios: 10.99, valor: 20000 }, { anios: 11.99, valor: 21000 }, { anios: 12.99, valor: 22000 },
      { anios: 13.99, valor: 23000 }, { anios: 14.99, valor: 24000 }, { anios: 15.99, valor: 25000 },
      { anios: 16.99, valor: 26000 }, { anios: 17.99, valor: 27000 }, { anios: 18.99, valor: 30000 },
      { anios: 19.99, valor: 31000 }, { anios: 20.99, valor: 32000 }, { anios: 21.99, valor: 33000 },
      { anios: 22.99, valor: 34000 }, { anios: 23.99, valor: 33000 }, { anios: 24.99, valor: 34000 },
      { anios: 30.99, valor: 40000 }, { anios: 31.99, valor: 41000 }, { anios: 32.99, valor: 42000 },
      { anios: 40.00, valor: 43000 }
    ],
    30: [
      { anios: 1.99, valor: 8800 }, { anios: 2.99, valor: 9600 }, { anios: 3.99, valor: 10400 },
      { anios: 4.99, valor: 11200 }, { anios: 5.99, valor: 12000 }, { anios: 6.99, valor: 12800 },
      { anios: 7.99, valor: 13600 }, { anios: 8.99, valor: 14400 }, { anios: 9.99, valor: 15200 },
      { anios: 10.99, valor: 16000 }, { anios: 11.99, valor: 16800 }, { anios: 12.99, valor: 17600 },
      { anios: 13.99, valor: 18400 }, { anios: 14.99, valor: 19200 }, { anios: 15.99, valor: 20000 },
      { anios: 16.99, valor: 20800 }, { anios: 17.99, valor: 21600 }, { anios: 18.99, valor: 24000 },
      { anios: 19.99, valor: 24800 }, { anios: 20.99, valor: 25600 }, { anios: 21.99, valor: 26400 },
      { anios: 22.99, valor: 27200 }, { anios: 23.99, valor: 26400 }, { anios: 24.99, valor: 27200 },
      { anios: 30.99, valor: 32000 }, { anios: 31.99, valor: 32800 }, { anios: 32.99, valor: 33600 },
      { anios: 40.00, valor: 34400 }
    ],
    20: [] // Igual a 30 horas
  };
  sueldoBase[20] = sueldoBase[30];

  function buscarValor(tabla, anios) {
    for (let i = 0; i < tabla.length; i++) {
      if (anios <= tabla[i].anios) return tabla[i].valor;
    }
    return 0;
  }

  function calcular() {
    const fechaIngreso = new Date(ingreso.value);
    const fechaCorte = new Date("2025-05-01");
    if (isNaN(fechaIngreso)) return;

    const meses = (fechaCorte.getFullYear() - fechaIngreso.getFullYear()) * 12 +
                  (fechaCorte.getMonth() - fechaIngreso.getMonth());
    const anios = meses / 12;
    const jornadaVal = parseInt(jornada.value);
    const conCaja = caja.value === "si";

    document.getElementById("antiguedad").textContent = `${meses} meses (${anios.toFixed(1)} años)`;

    // Sueldo Base
    let aumento = buscarValor(sueldoBase[jornadaVal], anios);
    if (!conCaja) aumento += 7000;

    document.getElementById("base").textContent = `$${aumento.toLocaleString("es-CL")}`;
    document.getElementById("movilizacion").textContent = "$0";  // por implementar
    document.getElementById("presentismo").textContent = "$0";   // por implementar
    document.getElementById("caja_asignacion").textContent = "$0"; // por implementar
    document.getElementById("total").textContent = `$${aumento.toLocaleString("es-CL")}`; // temporal

    document.getElementById("aguinaldo").textContent = "$0";
    document.getElementById("verano").textContent = "$0";
    document.getElementById("invierno").textContent = "$0";
    document.getElementById("btn").textContent = "$0";
  }

  [ingreso, jornada, caja].forEach(el => el.addEventListener("change", calcular));
});

