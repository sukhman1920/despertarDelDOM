let cantidad = 0;
let total = 0;

const botones = document.querySelectorAll(".producto button");
const cantidadTexto = document.querySelector("#cantidad");
const totalTexto = document.querySelector("#total");

var buscador = document.querySelector("#buscador");
var productos = document.querySelectorAll(".producto");


var modoOscuro = document.querySelector("#ModoOscuro");

for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function() {

        var producto = this.parentElement;
        var precio = producto.dataset.precio;

        cantidad++;
        total = total + Number(precio);

        cantidadTexto.textContent = `Cantidad: ${cantidad}`;
        totalTexto.textContent = `Total: ${total} $`;
    });
}

buscador.addEventListener("input", function() {
    var texto = buscador.value.toLowerCase();

    for (var i = 0; i < productos.length; i++) {
        var nombre = productos[i].querySelector(".titulo_coche").textContent.toLowerCase();

        if (nombre.includes(texto)) {
            productos[i].style.display = "block";
        } else {
            productos[i].style.display = "none";
        }
    }
});

modoOscuro.addEventListener("click", function() {
    document.body.classList.toggle("oscuro");
});

document.addEventListener("keydown", function(evento) {
    if (evento.key.toLowerCase() === "l") {
        document.body.classList.toggle("oscuro");
    }
});