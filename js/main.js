// //? primera preentrega
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

// //? segunda preentrega


// const tienda = {
//     productos: [
//         { nombre: 'manzana', precio: 50, stock: 10 },
//         { nombre: 'banana', precio: 20, stock: 15 },
//         { nombre: 'naranja', precio: 40, stock: 20 },
//         { nombre: 'frutillas', precio: 20, stock: 8 }
//     ]
// };

// const mostrarProductos = () => {
//     return tienda.productos.map(prod => `${prod.nombre} - $${prod.precio} (Stock: ${prod.stock})`).join('\n');
// };

// const calcularTotal = (carrito) => {
//     return carrito.reduce((total, item) => {
//         return total + (item.precio * item.cantidad);
//     }, 0).toFixed(2);
// };

// const carritoDeCompras = () => {
//     let carrito = [];

//     while (true) {
//         const seleccion = prompt(`Tienda de Frutas:\n${mostrarProductos()}\n\nEscribe el nombre de la fruta que deseas comprar (o escribe 'salir' para finalizar):`);

//         if (seleccion.toLowerCase() === 'salir') {
//             console.log('El usuario decidió salir.');
//             break;
//         }

//         const producto = tienda.productos.find(prod => prod.nombre === seleccion.toLowerCase());

//         if (!producto) {
//             alert('Fruta no encontrada. Inténtalo de nuevo.');
//             console.log('Selección inválida:', seleccion); 
//             continue;
//         }

//         const cantidad = parseInt(prompt(`¿Cuántas ${producto.nombre}s deseas comprar?`));

//         if (isNaN(cantidad) || cantidad <= 0) {
//             alert('Cantidad no válida.');
//             console.log('Cantidad no válida ingresada:', cantidad); 
//             continue;
//         }

//         if (cantidad > producto.stock) {
//             alert(`No tenemos suficiente stock. Solo quedan ${producto.stock} disponibles.`);
//             console.log(`Stock insuficiente para ${producto.nombre}. Solicitado: ${cantidad}, Disponible: ${producto.stock}`); 
//             continue;
//         }

//         carrito.push({
//             nombre: producto.nombre,
//             precio: producto.precio,
//             cantidad: cantidad
//         });

//         producto.stock -= cantidad; 
//         alert(`Has añadido ${cantidad} ${producto.nombre}(s) a tu carrito.`);
//         console.log(`Producto añadido: ${producto.nombre}, Cantidad: ${cantidad}, Stock restante: ${producto.stock}`); 
//     }

//     if (carrito.length > 0) {
//         const detalleCompra = carrito.map(item => `${item.cantidad} ${item.nombre}(s) - $${(item.precio * item.cantidad).toFixed(2)}`).join('\n');
//         const total = calcularTotal(carrito);
//         alert(`Detalle de tu compra:\n${detalleCompra}\n\nTotal a pagar: $${total}`);
//         console.log('Detalle de la compra:', carrito); 
//         console.log('Total a pagar:', total); 
//     } else {
//         alert('No has realizado ninguna compra.');
//         console.log('El usuario no realizó ninguna compra.'); 
//     }
// };

// carritoDeCompras();

// //! tercera entrega

// document.addEventListener('DOMContentLoaded', () => {
//     const buttons = document.querySelectorAll('.add-to-cart');

    
//     buttons.forEach(button => {
//         button.addEventListener('click', (event) => {
//             const productId = event.target.getAttribute('data-product');
//             const productPrice = event.target.getAttribute('data-price');
//             addToCart(productId, productPrice);
//         });
//     });

    
//     document.getElementById('cart-link').addEventListener('click', () => {
//         displayCart();
//     });

    
//     function addToCart(productId, productPrice) {
//         let cart = JSON.parse(localStorage.getItem('cart')) || [];
//         const product = {
//             id: productId,
//             name: `Producto ${productId}`,
//             price: productPrice
//         };

//         cart.push(product);
//         localStorage.setItem('cart', JSON.stringify(cart));
//         alert(`Producto ${productId} añadido al carrito`);
//     }

    
//     function displayCart() {
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];
//         const cartContainer = document.getElementById('cart-items');
//         const totalPriceElement = document.getElementById('total-price');
//         let total = 0;

//         cartContainer.innerHTML = '';
//         if (cart.length === 0) {
//             cartContainer.innerHTML = '<p>El carrito está vacío.</p>';
//             totalPriceElement.textContent = 'Total: $0.00';
//         } else {
//             cart.forEach(item => {
//                 const productElement = document.createElement('div');
//                 productElement.textContent = `${item.name} - $${item.price}`;
//                 cartContainer.appendChild(productElement);
//                 total += parseFloat(item.price);
//             });
//             totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
//         }

//         document.getElementById('cart').style.display = 'block'; 
//     }

    
//     window.clearCart = function() {
//         localStorage.removeItem('cart');
//         document.getElementById('cart-items').innerHTML = '<p>El carrito está vacío.</p>';
//         document.getElementById('total-price').textContent = 'Total: $0.00';
//     };

    
//     document.getElementById('checkout-button').addEventListener('click', () => {
//         alert('¡Gracias por tu compra!');
//         clearCart(); 
//     });
// });

//? entrega final 


let cart = [];
let cartElement = document.getElementById('cart');
let cartItemsElement = document.getElementById('cart-items');
let totalPriceElement = document.getElementById('total-price');


function addToCart(productId, productName, price) {
    
    let existingProduct = cart.find(item => item.productId === productId);

    if (existingProduct) {
        
        existingProduct.quantity += 1;
    } else {
        
        cart.push({ productId, productName, price, quantity: 1 });
    }

    
    localStorage.setItem('cart', JSON.stringify(cart));

    
    updateCart();
}


function updateCart() {
    
    cartItemsElement.innerHTML = '';
    
    let totalPrice = 0;

    
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.productName} - Cantidad: ${item.quantity} - Precio: $${(item.price * item.quantity).toFixed(2)}`;
        cartItemsElement.appendChild(itemElement);

        
        totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;

    
    if (cart.length > 0) {
        cartElement.style.display = 'block';
        cartElement.classList.add('active');
    } else {
        cartElement.style.display = 'none';
        cartElement.classList.remove('active');
    }
}


function clearCart() {
    cart = [];
    localStorage.removeItem('cart');
    updateCart();
}


window.addEventListener('load', () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
});


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const productId = event.target.getAttribute('data-product');
        const price = parseFloat(event.target.getAttribute('data-price'));
        const productName = event.target.previousElementSibling.previousElementSibling.textContent;
        addToCart(productId, productName, price);
    });
});


document.getElementById('checkout-button').addEventListener('click', () => {
    alert('¡Gracias por tu compra!');
    clearCart();  
});


 fetch('https://api.tienda.com/checkout', {
     method: 'POST',
     body: JSON.stringify(cart),
     headers: {
         'Content-Type': 'application/json'
     }
 })
 .then(response => response.json())
 .then(data => {
     alert('Compra realizada con éxito');
     clearCart();  
 })
 .catch(error => {
     console.error('Error en la compra:', error);
 });
