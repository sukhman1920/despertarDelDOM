USO DE IA ----------------------------------------------------------------------------------------

- Pregunta: uso div o section para separar mejor para el proyecto
- Respuesta: Puedes usar div perfectamente, no estaría mal. Pero en este caso yo usaría section porque semánticamente representa mejor una parte concreta de la página: el carrito.
-----
- Pregunta: como guardar información de cada vehículo para el carrito, marca y precio de productos que están en un div.
- Respuesta: utilizar data-nombre_atributo, así JS luego puede leer esta información.
-----
- Pregunta: como hacer un buscador.
- Respuesta: usar input con elun type=text.
-----
- Pregunta: diferencia entre vh y % para ajustar imagenes.
- Respuesta: px es un tamaño fijo, vh depende de la altura de la pantalla y % depende del elemento que lo contiene. Principalmente vh para que los tamaños se adapten a la pantalla. En las imágenes podemos usar 100% para que ocupen todo el ancho de la tarjeta.
-----
- Pregunta: Te paso mi proyecto y la avaluación que me han dado. Dime qué cosas debería mejorar del código para que esté mejor hecho y aproveche más JavaScript y el DOM, pero sin cambiar demasiado mi forma de hacerlo.
- Respuesta: La IA propuso mejorar principalmente el carrito para hacerlo dinámico utilizando arrays y createElement(), mejorar el buscador mediante classList, utilizar delegación de eventos, unificar el uso de let y const y crear una función común para el modo oscuro. También recomendó revisar y limpiar el código antes de la entrega.


HECHO A MANO -------------------------------------------------------------------------------------

La estructura principal del proyecto la realicé manualmente, incluyendo el HTML de la página, la estructura del catálogo, los productos, imágenes, precios, botones y carrito.

También hice manualmente gran parte del CSS, incluyendo el diseño de las tarjetas, distribución de los elementos, botones, buscador, efectos hover, colores, tamaños y estilos del modo oscuro.

En JavaScript fue donde más ayuda he necesitado, especialmente para entender la manipulación del DOM, los eventos, el buscador, el carrito y el modo oscuro. Aun así, fui adaptando y probando el código en mi propio proyecto y comprobando su funcionamiento en el navegador.


AUTOPSIA -----------------------------------------------------------------------------------------

Buscador con style.display:

Decidí ocultar los productos directamente con style.display porque era una solución sencilla y fácil de entender. Como alternativa podría haber utilizado una clase CSS como .oculto junto con classList, pero preferí mantenerlo simple. Al final lo cambio por mejoras.

Carrito basado en contadores:

El carrito inicialmente solo guarda la cantidad de productos y el precio total. Podría haber creado una lista de productos comprados y permitir eliminarlos individualmente, pero descarté esa opción para mantener el proyecto más sencillo y centrarme en las funcionalidades principales. Al final lo cambio por mejoras.


