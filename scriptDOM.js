// ----------------------- JS ----------------------- 


// Variables que van cambiando durante el uso del carrito.
let cantidad = 0;
let total = 0;

// Array donde se guardan las compras realizadas
const carrito = [];

// Variable de elementos del HTML necesarios para el JS

// Elementos del carrito que utilizo para mostrar los datos
const cantidadTexto = document.querySelector("#cantidad");
const totalTexto = document.querySelector("#total");
const listaCarrito = document.querySelector("#listaCarrito");

// Elementos relacionados con el catálogo y el buscador
const buscador = document.querySelector("#buscador");
const productos = document.querySelectorAll(".producto");
const catalogo = document.querySelector(".catalogo");

// Botón del modo oscuro
const modoOscuro = document.querySelector("#ModoOscuro");

// Función que actualiza la cantidad y el precio total del carrito
function actualizarCarrito() {

    cantidad = carrito.length;
    total = 0;

    // Recorro las compras y sumo sus precios
    for (let i = 0; i < carrito.length; i++) {
        total = total + carrito[i].precio;
    }

    // Muestro los nuevos valores en el HTML
    cantidadTexto.textContent = `Cantidad: ${cantidad}`;
    totalTexto.textContent = `Total: ${total.toLocaleString("es-ES")} $`;
}

// Detecto los botones de comprar desde el catálogo
catalogo.addEventListener("click", function(evento) {
    if (evento.target.tagName === "BUTTON") {
        // Busco la tarjeta del coche al que pertenece el botón
        const producto = evento.target.closest(".producto");

        // Cojo los datos guardados en data-*
        const precio = producto.dataset.precio;
        const coche = producto.dataset.coche;
        const nombre = producto.querySelector(".titulo_coche").textContent;

        // Creo un objeto con los datos de la compra
        const compra = {
            coche: coche,
            nombre: nombre,
            precio: Number(precio)
        };
        
        // Guardo compra en el array
        carrito.push(compra);
        
        // Actualizo cantidad y total
        actualizarCarrito();
        
        // Creo un elemento para mostrar la compra del carrito
        const elemento = document.createElement("p");

        elemento.textContent = `${coche.toUpperCase()} | ${nombre} - ${Number(precio).toLocaleString("es-ES")} $`;
        
        listaCarrito.appendChild(elemento);

        // Creo el botón para eliminar esta compra
        const botonEliminar = document.createElement("button");

        botonEliminar.textContent = "Eliminar";
        elemento.appendChild(botonEliminar);

        // Elimino la compra cuando pulso el botón
        botonEliminar.addEventListener("click", function() {

            const posicion = carrito.indexOf(compra);

            carrito.splice(posicion, 1);
            elemento.remove();

            actualizarCarrito();
        });
    }
});

// ------------------------ BUSCADOR ------------------------

// Se ejecuta cada vez que escribo en el buscador
buscador.addEventListener("input", function() {
    
    // Cojo el texto escrito y lo paso a minúsculas
    const texto = buscador.value.toLowerCase();

    for (let i = 0; i < productos.length; i++) {
        const nombre = productos[i].querySelector(".titulo_coche").textContent.toLowerCase();
        
        // Muestro los productos que coinciden con la búsqueda
        if (nombre.includes(texto)) {
            productos[i].classList.remove("oculto");
        
            // Oculto los que no coincidan
        } else {
            productos[i].classList.add("oculto");
        }
    }
});

// ------------------------ MODO OSCURO ------------------------

// Función que activa o desactiva el modo oscuro
function toggleModoOscuro() {
    document.body.classList.toggle("oscuro");
}

// Activar el modo oscuro desde el botón
modoOscuro.addEventListener("click", function() {
    toggleModoOscuro();
});

// Activar el modo oscuro desde la tecla L
document.addEventListener("keydown", function(event) {
    if (event.key.toLowerCase() === "l" && event.target !== buscador) {
        toggleModoOscuro();
    }
});