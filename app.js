let texto = "";
let input;

do {
    input = prompt("Ingresa un texto (escribe 'ESC' para salir):");
    if (input !== null && input !== "ESC") {
        texto += input + " ";
        console.log("Resultado actual: " + texto);
    }
} while (input !== null && input !== "ESC");

console.log("Programa terminado.");