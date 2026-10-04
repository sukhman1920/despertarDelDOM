USO DE IA ----------------------------------------------------------------------------------------

- Pregunta: uso div o section para separar, cuál es mejor para el proyecto ?
- Respuesta: Puedes usar div perfectamente, no estaría mal. Pero en este caso yo usaría section porque semánticamente representa mejor una parte concreta de la página: el carrito.
-----
- Pregunta: como guardar información de cada vehículo para el carrito, marca y precio de productos que están en un div ?
- Respuesta: Me explicó cómo utilizar dataset para acceder desde JavaScript a los atributos data-* del HTML. A partir de esto añadí data-coche y data-precio a los productos y utilicé esos datos para crear los objetos que guardo en el carrito.
-----
- Pregunta: Cómo puedo hacer un buscador para filtrar los productos de mi página ?
- Respuesta: Me explicó y dio para utilizar el evento input, recorrer los productos y comprobar con includes() si el nombre coincide con lo escrito. Después me ayudó a ocultarlos usando classList
-----
- Pregunta: diferencia entre vh y % para ajustar imagenes ?
- Respuesta: px es un tamaño fijo, vh depende de la altura de la pantalla y % depende del elemento que lo contiene. Principalmente vh para que los tamaños se adapten a la pantalla. En las imágenes podemos usar 100% para que ocupen todo el ancho de la tarjeta.
-----
- Pregunta: Te paso mi proyecto y la avaluación que me han dado. Dime qué cosas debería mejorar del código para que esté mejor hecho y aproveche más JavaScript y el DOM, pero sin cambiar demasiado mi forma de hacerlo.
- Respuesta: La IA propuso mejorar principalmente el carrito para hacerlo dinámico utilizando arrays y createElement(), mejorar el buscador mediante classList, utilizar delegación de eventos, unificar el uso de let y const y crear una función común para el modo oscuro. También recomendó revisar y limpiar el código antes de la entrega.
-----
- Pregunta: Cómo puedo hacer que el carrito sea dinámico y que los productos aparezcan cuando pulso comprar ?
- Respuesta: Me explicó cómo guardar las compras en un array de objetos y crear los elementos del carrito con createElement() y appendChild().
-----
- Pregunta: Cómo puedo poner un botón de eliminar en cada producto que aparece en el carrito ?
- Respuesta: Me explicó cómo crear el botón desde JavaScript y añadirle un evento click para eliminar el elemento correspondiente.
-----
- Pregunta: Cómo hago para que al eliminar un producto también se actualice el total ?
- Respuesta: Me ayudó a eliminar la compra del array y a crear una función para recalcular la cantidad y el precio total del carrito.
-----
- Pregunta: Cómo puedo evitar repetir el código de actualizar la cantidad y el total ?
- Respuesta: Me explicó que podía crear una función actualizarCarrito() y llamarla tanto al comprar como al eliminar.
-----
- Pregunta: Cómo puedo detectar qué botón de comprar he pulsado sin poner un evento a cada botón ?
- Respuesta: Me explicó cómo utilizar la delegación de eventos, poniendo el evento en el catálogo y utilizando event.target y closest().
-----
- Pregunta: Cómo puedo hacer que el buscador oculte los productos sin cambiar directamente el style ?
- Respuesta: Me explicó cómo crear una clase .oculto en CSS y añadirla o quitarla con classList.
-----
- Pregunta: Cómo puedo reutilizar el código del modo oscuro en vez de repetirlo ?
- Respuesta: Me ayudó a crear toggleModoOscuro() y utilizar esa función tanto en el botón como en el evento del teclado.
-----
- Pregunta: Cómo puedo usar el data-coche que tengo en cada producto ?
- Respuesta: Me explicó cómo acceder a él con dataset.coche y guardarlo dentro del objeto de cada compra.
-----
- Pregunta: Cómo puedo hacer que si compro dos veces el mismo coche se pueda eliminar solo una de las compras ?
- Respuesta: Me explicó que podía guardar cada compra como un objeto independiente y utilizar indexOf() para localizar exactamente la que quiero eliminar.
-----
- Pregunta: Cómo puedo mostrar los precios con un formato más adecuado ?
- Respuesta: Me explicó cómo utilizar toLocaleString() para mostrar los números con separadores de miles.
-----
- Pregunta: Cuándo debería utilizar let y cuándo const en JavaScript ?
- Respuesta: Me explicó que debía usar const cuando la referencia no cambia y let cuando el valor puede cambiar.

HECHO A MANO -------------------------------------------------------------------------------------

La estructura principal del proyecto la realicé manualmente, incluyendo el HTML de la página, la estructura del catálogo, los productos, imágenes, precios, botones y carrito.

También hice manualmente gran parte del CSS, incluyendo el diseño de las tarjetas, distribución de los elementos, botones, buscador, efectos hover, colores, tamaños y estilos del modo oscuro.

En JavaScript fue donde más ayuda he necesitado, especialmente para entender la manipulación del DOM, los eventos, el buscador, el carrito y el modo oscuro. Aun así, fui adaptando y probando el código en mi propio proyecto y comprobando su funcionamiento en el navegador.


AUTOPSIA -----------------------------------------------------------------------------------------

Buscador con style.display:

Decidí ocultar los productos directamente con style.display porque era una solución sencilla y fácil de entender. Como alternativa podría haber utilizado una clase CSS como .oculto junto con classList, pero preferí mantenerlo simple. Al final lo cambio por mejoras.

Carrito basado en contadores:

El carrito inicialmente solo guarda la cantidad de productos y el precio total. Podría haber creado una lista de productos comprados y permitir eliminarlos individualmente, pero descarté esa opción para mantener el proyecto más sencillo y centrarme en las funcionalidades principales. Al final lo cambio por mejoras.


