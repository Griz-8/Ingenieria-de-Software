import obtenerSaludo from "./saludador";

describe("Saludador Completo", () => {
  test("debería saludar formalmente a una mujer en inglés por la tarde", () => {
    // Parámetros: nombre, genero, edad, idioma, hora (15 = 3 PM)
    expect(obtenerSaludo("Jane", "femenino", 35, "en", 15)).toEqual("Good afternoon, Ms. Jane");
  });

  test("debería saludar informalmente a un joven en español por la mañana", () => {
    expect(obtenerSaludo("Pedro", "masculino", 20, "es", 9)).toEqual("Buenos días, Pedro");
  });
});