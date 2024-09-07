// function saludarUsuario(nombre, apellido, edad) {
//     let mensajeEdad = edad >= 18 ? "Muchas gracias por visitarnos " : "Eres menor de edad ";
//     let saludo = `Hola, ${nombre} ${apellido} !! ${mensajeEdad}.`;
//     console.log(saludo); 

    
//     if (edad < 18) {
//         despedirUsuario(nombre, apellido, edad); 
//     }
// }

// function despedirUsuario(nombre, apellido, edad) {
//     console.log("no puedes estar aqui !!");

//     for (let i = edad; i < 18; i++) {
//         console.log(`Adiós, ${nombre} ${apellido}!`);
//     }
// }

// let nombre = prompt("Bienvenido, ingresá tu nombre");
// let apellido = prompt("Ingresá tu apellido");
// let edad = prompt("Ingresa tu edad");

// edad = parseInt(edad); 

// if (isNaN(edad)) {
//     console.log("Por favor, ingresa una edad válida.");
// } else {
//     saludarUsuario(nombre, apellido, edad); 
// }

//? segunda preentrega


const tienda = {
    productos: [
        { nombre: 'manzana', precio: 50, stock: 10 },
        { nombre: 'banana', precio: 20, stock: 15 },
        { nombre: 'naranja', precio: 40, stock: 20 },
        { nombre: 'frutillas', precio: 20, stock: 8 }
    ]
};

const mostrarProductos = () => {
    return tienda.productos.map(prod => `${prod.nombre} - $${prod.precio} (Stock: ${prod.stock})`).join('\n');
};

const calcularTotal = (carrito) => {
    return carrito.reduce((total, item) => {
        return total + (item.precio * item.cantidad);
    }, 0).toFixed(2);
};

const carritoDeCompras = () => {
    let carrito = [];

    while (true) {
        const seleccion = prompt(`Tienda de Frutas:\n${mostrarProductos()}\n\nEscribe el nombre de la fruta que deseas comprar (o escribe 'salir' para finalizar):`);

        if (seleccion.toLowerCase() === 'salir') {
            console.log('El usuario decidió salir.');
            break;
        }

        const producto = tienda.productos.find(prod => prod.nombre === seleccion.toLowerCase());

        if (!producto) {
            alert('Fruta no encontrada. Inténtalo de nuevo.');
            console.log('Selección inválida:', seleccion); 
            continue;
        }

        const cantidad = parseInt(prompt(`¿Cuántas ${producto.nombre}s deseas comprar?`));

        if (isNaN(cantidad) || cantidad <= 0) {
            alert('Cantidad no válida.');
            console.log('Cantidad no válida ingresada:', cantidad); 
            continue;
        }

        if (cantidad > producto.stock) {
            alert(`No tenemos suficiente stock. Solo quedan ${producto.stock} disponibles.`);
            console.log(`Stock insuficiente para ${producto.nombre}. Solicitado: ${cantidad}, Disponible: ${producto.stock}`); 
            continue;
        }

        carrito.push({
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: cantidad
        });

        producto.stock -= cantidad; 
        alert(`Has añadido ${cantidad} ${producto.nombre}(s) a tu carrito.`);
        console.log(`Producto añadido: ${producto.nombre}, Cantidad: ${cantidad}, Stock restante: ${producto.stock}`); 
    }

    if (carrito.length > 0) {
        const detalleCompra = carrito.map(item => `${item.cantidad} ${item.nombre}(s) - $${(item.precio * item.cantidad).toFixed(2)}`).join('\n');
        const total = calcularTotal(carrito);
        alert(`Detalle de tu compra:\n${detalleCompra}\n\nTotal a pagar: $${total}`);
        console.log('Detalle de la compra:', carrito); 
        console.log('Total a pagar:', total); 
    } else {
        alert('No has realizado ninguna compra.');
        console.log('El usuario no realizó ninguna compra.'); 
    }
};

carritoDeCompras();
