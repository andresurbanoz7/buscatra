document.addEventListener("DOMContentLoaded", () => {
  const ingreso = document.getElementById("ingreso");
  const jornada = document.getElementById("jornada");
  const caja = document.getElementById("caja");

  const fechaCorte = new Date("2025-05-01");

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
    ]
  };
  sueldoBase[20] = sueldoBase[30];

  // ... Aquí se insertarían las demás tablas (movilización, caja, presentismo, etc.)
const tablaMovilizacion = {
  45: [
    { min: 0, max: 0.49, valor: 32000 },
    { min: 0.5, max: 0.99, valor: 41000 },
    { min: 1, max: 1.99, valor: 65000 },
    { min: 2, max: 2.99, valor: 65000 },
    { min: 3, max: 3.99, valor: 75000 },
    { min: 4, max: 4.99, valor: 75000 },
    { min: 5, max: 9.99, valor: 75000 },
    { min: 10, max: 40, valor: 75000 }
  ],
  30: [
    { min: 0, max: 0.49, valor: 27960 },
    { min: 0.5, max: 0.99, valor: 30000 },
    { min: 1, max: 1.99, valor: 30000 },
    { min: 2, max: 2.99, valor: 30000 },
    { min: 3, max: 3.99, valor: 37440 },
    { min: 4, max: 4.99, valor: 37440 },
    { min: 5, max: 9.99, valor: 37440 },
    { min: 10, max: 39.99, valor: 37440 }
  ],
  20: [
    { min: 0, max: 0.49, valor: 18640 },
    { min: 0.5, max: 0.99, valor: 20000 },
    { min: 1, max: 1.99, valor: 20000 },
    { min: 2, max: 2.99, valor: 20000 },
    { min: 3, max: 3.99, valor: 24960 },
    { min: 4, max: 4.99, valor: 24960 },
    { min: 5, max: 9.99, valor: 24960 },
    { min: 10, max: 39.99, valor: 24960 }
  ]
};
 
const tablaCaja = {
  45: [
    { min: 0, max: 0.49, valor: 31000 },
    { min: 0.5, max: 0.99, valor: 39000 },
    { min: 1, max: 1.99, valor: 46000 },
    { min: 2, max: 2.99, valor: 50000 },
    { min: 3, max: 3.99, valor: 50000 },
    { min: 4, max: 4.99, valor: 62000 },
    { min: 5, max: 9.99, valor: 62000 },
    { min: 10, max: 40, valor: 68000 }
  ],
  30: [
    { min: 0, max: 0.49, valor: 203 },
    { min: 0.5, max: 0.99, valor: 203 },
    { min: 1, max: 1.99, valor: 203 },
    { min: 2, max: 2.99, valor: 232 },
    { min: 3, max: 3.99, valor: 232 },
    { min: 4, max: 4.99, valor: 250 },
    { min: 5, max: 9.99, valor: 250 },
    { min: 10, max: 40, valor: 250 }
  ]
};
tablaCaja[20] = tablaCaja[30];
const tablaPresentismo = {
  45: [
    { min: 0, max: 0.49, valor: 26001 },
    { min: 0.5, max: 0.99, valor: 28920 },
    { min: 1, max: 1.99, valor: 36268 },
    { min: 2, max: 2.99, valor: 43269 },
    { min: 3, max: 3.99, valor: 47353 },
    { min: 4, max: 4.99, valor: 47353 },
    { min: 5, max: 9.99, valor: 52602 },
    { min: 10, max: 40, valor: 55300 }
  ],
  30: [
    { min: 0, max: 0.49, valor: 16500 },
    { min: 0.5, max: 0.99, valor: 17100 },
    { min: 1, max: 1.99, valor: 25000 },
    { min: 2, max: 2.99, valor: 25000 },
    { min: 3, max: 3.99, valor: 32000 },
    { min: 4, max: 4.99, valor: 32000 },
    { min: 5, max: 9.99, valor: 35000 },
    { min: 10, max: 40, valor: 41000 }
  ],
  20: [
    { min: 0, max: 0.49, valor: 12000 },
    { min: 0.5, max: 0.99, valor: 17000 },
    { min: 1, max: 1.99, valor: 19000 },
    { min: 2, max: 2.99, valor: 21000 },
    { min: 3, max: 3.99, valor: 22000 },
    { min: 4, max: 4.99, valor: 22000 },
    { min: 5, max: 9.99, valor: 26000 },
    { min: 10, max: 40, valor: 29000 }
  ]
};
const tablaAguinaldo = {
  septiembre: {
    45: [
      { min: 0, max: 0.49, valor: 72000 },
      { min: 0.5, max: 0.99, valor: 72000 },
      { min: 1, max: 1.99, valor: 88500 },
      { min: 2, max: 2.99, valor: 112000 },
      { min: 3, max: 3.99, valor: 129000 },
      { min: 4, max: 4.99, valor: 129000 },
      { min: 5, max: 9.99, valor: 136500 },
      { min: 10, max: 40, valor: 155000 }
    ],
    30: [
      { min: 0, max: 0.49, valor: 46500 },
      { min: 0.5, max: 0.99, valor: 47000 },
      { min: 1, max: 1.99, valor: 64000 },
      { min: 2, max: 2.99, valor: 64000 },
      { min: 3, max: 3.99, valor: 70000 },
      { min: 4, max: 4.99, valor: 70000 },
      { min: 5, max: 9.99, valor: 81000 },
      { min: 10, max: 40, valor: 88000 }
    ]
  },
  diciembre: {
    45: [
      { min: 0, max: 0.49, valor: 72000 },
      { min: 0.5, max: 0.99, valor: 72000 },
      { min: 1, max: 1.99, valor: 88500 },
      { min: 2, max: 2.99, valor: 112000 },
      { min: 3, max: 3.99, valor: 129000 },
      { min: 4, max: 4.99, valor: 129000 },
      { min: 5, max: 9.99, valor: 136500 },
      { min: 10, max: 40, valor: 155000 }
    ],
    30: [
      { min: 0, max: 0.49, valor: 46500 },
      { min: 0.5, max: 0.99, valor: 47000 },
      { min: 1, max: 1.99, valor: 64000 },
      { min: 2, max: 2.99, valor: 64000 },
      { min: 3, max: 3.99, valor: 70000 },
      { min: 4, max: 4.99, valor: 70000 },
      { min: 5, max: 9.99, valor: 81000 },
      { min: 10, max: 40, valor: 88000 }
    ]
  }
};
tablaAguinaldo.septiembre[20] = tablaAguinaldo.septiembre[30];
tablaAguinaldo.diciembre[20] = tablaAguinaldo.diciembre[30];

const tablaVacaciones = {
  verano: {
    45: [
      { min: 0, max: 0.49, valor: 5246 },
      { min: 0.5, max: 0.99, valor: 5246 },
      { min: 1, max: 1.99, valor: 5600 },
      { min: 2, max: 2.99, valor: 6000 },
      { min: 3, max: 3.99, valor: 6380 },
      { min: 4, max: 4.99, valor: 6380 },
      { min: 5, max: 9.99, valor: 7300 },
      { min: 10, max: 40, valor: 8200 }
    ],
    30: [
      { min: 0, max: 0.49, valor: 3617 },
      { min: 0.5, max: 0.99, valor: 3617 },
      { min: 1, max: 1.99, valor: 4050 },
      { min: 2, max: 2.99, valor: 4100 },
      { min: 3, max: 3.99, valor: 4250 },
      { min: 4, max: 4.99, valor: 4250 },
      { min: 5, max: 9.99, valor: 4650 },
      { min: 10, max: 40, valor: 4650 }
    ]
  },
  invierno: {
    45: [
      { min: 0, max: 0.49, valor: 5246 },
      { min: 0.5, max: 0.99, valor: 5246 },
      { min: 1, max: 1.99, valor: 7000 },
      { min: 2, max: 2.99, valor: 7000 },
      { min: 3, max: 3.99, valor: 8200 },
      { min: 4, max: 4.99, valor: 8200 },
      { min: 5, max: 9.99, valor: 8700 },
      { min: 10, max: 40, valor: 9300 }
    ],
    30: [
      { min: 0, max: 0.49, valor: 3969 },
      { min: 0.5, max: 0.99, valor: 3969 },
      { min: 1, max: 1.99, valor: 4900 },
      { min: 2, max: 2.99, valor: 5100 },
      { min: 3, max: 3.99, valor: 5250 },
      { min: 4, max: 4.99, valor: 5250 },
      { min: 5, max: 9.99, valor: 5600 },
      { min: 10, max: 40, valor: 5700 }
    ]
  }
};
tablaVacaciones.verano[20] = tablaVacaciones.verano[30];
tablaVacaciones.invierno[20] = tablaVacaciones.invierno[30];
const tablaBTN = {
  45: [
    { min: 0, max: 12, ant: 1000, contrato: 2000 },
    { min: 13, max: 23, ant: 1450, contrato: 2400 },
    { min: 24, max: 35, ant: 1600, contrato: 2500 },
    { min: 36, max: 54, ant: 2000, contrato: 2500 },
    { min: 55, max: 117, ant: 2500, contrato: 3000 },
    { min: 118, max: 500, ant: 3000, contrato: 3000 }
  ],
  30: [
    { min: 0, max: 12, ant: 950, contrato: 1200 },
    { min: 13, max: 22, ant: 1250, contrato: 1400 },
    { min: 23, max: 35, ant: 1350, contrato: 1500 },
    { min: 36, max: 54, ant: 1550, contrato: 1800 },
    { min: 55, max: 107, ant: 1650, contrato: 2000 },
    { min: 108, max: 368, ant: 1800, contrato: 2050 }
  ]
};
tablaBTN[20] = tablaBTN[30];

  // Función auxiliar para buscar valores en tablas por antigüedad
  function buscarTabla(tabla, jornada, meses) {
    return tabla[jornada].find(r => meses >= r.min && meses <= r.max)?.valor || 0;
  }

  function buscarBTN(tabla, jornada, meses) {
    const tramo = tabla[jornada].find(r => meses >= r.min && meses <= r.max);
    return tramo ? (meses * tramo.ant) + (33 * tramo.contrato) : 0;
  }

  function calcularAntiguedad(fechaIngreso) {
    const fecha = new Date(fechaIngreso);
    const diff = fechaCorte - fecha;
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 30.4375)); // meses aproximados
  }

  function actualizar() {
    const fechaIngreso = ingreso.value;
    const tipoJornada = parseInt(jornada.value);
    const tieneCaja = caja.value === "si";

    if (!fechaIngreso || !tipoJornada) return;

    const mesesAntiguedad = calcularAntiguedad(fechaIngreso);
    const anios = mesesAntiguedad / 12;

    // Calculamos valores
    const base = sueldoBase[tipoJornada].find(r => anios <= r.anios)?.valor || 0;
    const movilizacion = buscarTabla(tablaMovilizacion, tipoJornada, mesesAntiguedad);
    const cajaAsignacion = tieneCaja ? buscarTabla(tablaCaja, tipoJornada, mesesAntiguedad) : 0;
    const presentismo = buscarTabla(tablaPresentismo, tipoJornada, mesesAntiguedad);
    const aguinaldo = buscarTabla(tablaAguinaldo.septiembre, tipoJornada, mesesAntiguedad);
    const vacacionesVerano = buscarTabla(tablaVacaciones.verano, tipoJornada, mesesAntiguedad);
    const vacacionesInvierno = buscarTabla(tablaVacaciones.invierno, tipoJornada, mesesAntiguedad);
    const btn = buscarBTN(tablaBTN, tipoJornada, mesesAntiguedad);

    const total = base + movilizacion + cajaAsignacion + presentismo;

    // Mostrar en el HTML
    document.getElementById("antiguedad").textContent = mesesAntiguedad + " meses";
    document.getElementById("base").textContent = "$" + base.toLocaleString();
    document.getElementById("movilizacion").textContent = "$" + movilizacion.toLocaleString();
    document.getElementById("caja_asignacion").textContent = cajaAsignacion > 0 ? "$" + cajaAsignacion.toLocaleString() : "No aplica";
    document.getElementById("presentismo").textContent = "$" + presentismo.toLocaleString();
    document.getElementById("aguinaldo").textContent = "$" + aguinaldo.toLocaleString();
    document.getElementById("verano").textContent = "$" + vacacionesVerano.toLocaleString();
    document.getElementById("invierno").textContent = "$" + vacacionesInvierno.toLocaleString();
    document.getElementById("btn").textContent = "$" + btn.toLocaleString();
    document.getElementById("total").textContent = "$" + total.toLocaleString();
  }

  ingreso.addEventListener("change", actualizar);
  jornada.addEventListener("change", actualizar);
  caja.addEventListener("change", actualizar);
});
