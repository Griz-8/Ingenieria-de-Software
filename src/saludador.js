function obtenerSaludo(nombre, genero, edad, idioma, horaActual = new Date().getHours()) {
  let saludoBase = "";
  let tratamiento = "";

  // 1. Lógica de Idioma y Hora
  if (idioma === "es") {
    if (horaActual < 12) saludoBase = "Buenos días";
    else if (horaActual < 20) saludoBase = "Buenas tardes";
    else saludoBase = "Buenas noches";

    // 2. Lógica de Edad y Género (Español)
    if (edad > 30) {
      tratamiento = (genero === "masculino") ? "Sr. " : "Sra. ";
    }
  } else {
    if (horaActual < 12) saludoBase = "Good morning";
    else if (horaActual < 20) saludoBase = "Good afternoon";
    else saludoBase = "Good evening";

    // 2. Lógica de Edad y Género (Inglés)
    if (edad > 30) {
      tratamiento = (genero === "masculino") ? "Mr. " : "Ms. ";
    }
  }

  return `${saludoBase}, ${tratamiento}${nombre}`;
}

export default obtenerSaludo;