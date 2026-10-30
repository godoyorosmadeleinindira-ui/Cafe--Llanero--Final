PROYECTO - CAFÉ LLANERO
Proyecto Café Llanero: sitio web, carrito de compras y registro de clientes

Propietaria: Madelein Godoy
Dirección: Carrera 13 # 9-57, barrio Centauros, Pore, Casanare
Celular: 314 465 5541

FUNCIONALIDADES IMPLEMENTADAS
- Menú responsive con classList.toggle().
- Archivo js/app.js vinculado antes del cierre de </body>.
- Identificación de productos mediante data-id, data-nombre y data-precio.
- Agregar productos al carrito mediante eventos click.
- Renderizado dinámico de los productos con createElement() y appendChild().
- Cálculo y actualización del total en tiempo real.
- Botón Eliminar para cada producto.
- Botón Vaciar Carrito que reinicia el listado y el total en $0.
- Conservación de la validación del formulario de contacto.
- Formulario de registro de clientes con nombre, correo, celular y contraseña con confirmación.
- Validación de campos obligatorios, formato de correo, número de celular, longitud mínima de contraseña y coincidencia de contraseñas.
- Prevención de registros duplicados por correo en el mismo navegador.
- Guardado local de nombre, correo, celular y fecha; la contraseña nunca se almacena.
- Enlace “Registro” agregado al menú de navegación.

ESTRUCTURA
- index.html: contenido y estructura.
- css/estilos.css: estilos, diseño responsive y estilos del carrito.
- js/app.js: menú responsive, validación del formulario y carrito.
- img/: imágenes de la galería.

PARA PROBAR
1. Extraer el ZIP.
2. Abrir la carpeta en Visual Studio Code.
3. Abrir index.html con Live Server o directamente en el navegador.
4. Ir a la sección Menú.
5. Pulsar "Agregar al carrito" en uno o varios productos.
6. Comprobar que el total se actualiza.
7. Pulsar "Eliminar" para comprobar el descuento.
8. Pulsar "Vaciar Carrito" para comprobar que el total vuelve a $0.
9. Reducir el tamaño de la ventana para comprobar el menú responsive.

REPOSITORIO DE GITHUB
Agregar aquí el enlace al repositorio de GitHub antes de entregar:
[Pegar aquí el enlace del repositorio]

NOTA
El taller solicita entregar un archivo .zip con la estructura completa del proyecto y el enlace al repositorio de GitHub.


REGISTRO DE CLIENTES - CÓMO PROBAR
1. Abrir el sitio con Live Server o en un navegador.
2. Seleccionar “Registro” en el menú.
3. Completar los campos con datos de prueba y una contraseña de al menos 8 caracteres.
4. Probar las validaciones dejando campos vacíos o escribiendo contraseñas diferentes.
5. Enviar el formulario y verificar el mensaje de registro exitoso.
6. Intentar registrar nuevamente el mismo correo para verificar el control de duplicados.

IMPORTANTE
Esta es una demostración académica del lado del cliente. Los datos se guardan solo en el almacenamiento local del navegador y no se envían a un servidor ni crean una cuenta segura. No usar contraseñas reales. Para producción se necesita un backend, base de datos y almacenamiento seguro de contraseñas.
