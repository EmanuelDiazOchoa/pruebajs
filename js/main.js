let nombre = prompt("Bienvenido, ingresá tu nombre");
let apellido = prompt("Ingresá tu apellido");
let edad = prompt("Ingresa tu edad");

edad = parseInt(edad);

if (isNaN(edad)) {
    console.log("Por favor, ingresa una edad válida.");
} else {
    let mensajeEdad = edad >= 18 ? "mayor de 18 años" : "menor de 18 años";
    
    let saludo = `Hola, ${nombre} ${apellido} !! Eres ${mensajeEdad}.`;
    
    console.log(saludo);
}
