// Función para saludar al usuario
function saludarUsuario(nombre, apellido, edad) {
    let mensajeEdad = edad >= 18 ? "Muchas gracias por visitarnos " : "Eres menor de edad ";
    let saludo = `Hola, ${nombre} ${apellido} !! ${mensajeEdad}.`;
    console.log(saludo); 

    
    if (edad < 18) {
        despedirUsuario(nombre, apellido, edad); 
    }
}

function despedirUsuario(nombre, apellido, edad) {
    console.log("no puedes estar aqui !!");

    for (let i = edad; i < 18; i++) {
        console.log(`Adiós, ${nombre} ${apellido}!`);
    }
}

let nombre = prompt("Bienvenido, ingresá tu nombre");
let apellido = prompt("Ingresá tu apellido");
let edad = prompt("Ingresa tu edad");

edad = parseInt(edad); 

if (isNaN(edad)) {
    console.log("Por favor, ingresa una edad válida.");
} else {
    saludarUsuario(nombre, apellido, edad); 
}
