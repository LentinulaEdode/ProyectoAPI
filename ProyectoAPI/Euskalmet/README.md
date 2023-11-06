Los archivos pertenecientes a la idea "original" (uso de la API de Euskalmet) se encuentran incompletos, como se puede apreciar. 

-----> 
Si accedemos al archivo './Euskalmetapi.js', veremos que en la solicitud fetch, se especifica la URL y se configura la solicitud a la API. Aquí, la autorización requiere un token Bearer (Authorization), el host (Host), el tipo de contenido aceptado (Accept), la codificación aceptada (Accept-Encoding), y la conexión mantenida (Connection).

Luego, se encadena una serie de métodos .then(). Cuando la respuesta de la solicitud llega, se convierte en un objeto JSON utilizando res.json(). Después de convertir la respuesta, se llama a la función callback proporcionada con los datos resultantes.

Si ocurre algún error durante la solicitud, se maneja en el método .catch(), que imprimirá un mensaje de error en la consola.

La función formatDate se utiliza para formatear una fecha en el formato yyyyMMdd. 

La variable url contiene un objeto con un método llamado weatherForecast. Este método construye una URL específica para consultar el pronóstico del tiempo. Toma varios argumentos, como regionId, inDays, zoneId, y locId, y utiliza la fecha actual junto con estos argumentos para construir la URL completa para la solicitud.

debugCallback es una función de devolución de llamada que se ejecuta cuando se completa la solicitud y se obtiene una respuesta.

Finalmente, se realiza una llamada a fetchData con una URL generada por el método url.weatherForecast, que se construye con argumentos específicos. La respuesta se maneja con la función debugCallback, que imprime los datos en la consola

------>
En cuanto al archivo './script.js', tomándolo como el documento "limpio" para acceder a la API, se compone de la siguiente manera: 
la función fetchData toma dos argumentos: la URL y el callback. Esta función se encarga de realizar una solicitud GET a la URL especificada y luego llama a la función callback con los datos de respuesta. Se agrega la clave API a la solicitud.
La función formatDate toma una fecha como argumento y la formatea como una cadena en el formato "yyyymmdd", necesario dado que la fecha en bruto no se podía sacar de otro modo.
La función debugCallback se utiliza para imprimir los resultados de la solicitud en la consola.

Finalmente, se llama a la función fetchData para obtener el pronóstico del tiempo para una región, zona y ubicación específicas (en este caso, "basque_country", "great_bilbao" y "bilbao") con un desfase de 2 días. El resultado se muestra en la consola mediante la función debugCallback. 

------>
Respecto a los documentos relativos a la presentación del proyecto, siendo HTML y CSS, el archivo más interesante podría ser el CSS, dado que pretendía ser una web-app sumamente responsive.

- Uso de :root: Establece variables CSS personalizadas que se pueden utilizar en todo el documento. Estas variables se definen con el prefijo "--" y se utilizan para definir colores, fuentes, tamaños de fuente, pesos de fuente, sombras y otros valores reutilizables en todo el diseño.

- Selectores globales: Se establecen estilos globales para elementos como ul, a, img, span, input, button, li, etc. Por ejemplo, se quita la decoración de viñetas de las listas (list-style: none) y se establecen estilos comunes para varios elementos. También se configura el comportamiento de los botones, los vínculos, las imágenes, etc.

- Estilos para los elementos :focus-visible y ::selection: Establece cómo se deben mostrar los elementos cuando están enfocados o se realiza una selección.

- Configuración de scrollbar: Define el estilo de la barra de desplazamiento para navegadores webkit (como Google Chrome).

- Importación de fuentes: Se utiliza la regla @font-face para importar una fuente llamada "Material Symbols Rounded" y hacerla accesible para su uso en la página. Esto permite mostrar iconos especiales.

- Estilos para los iconos: Define cómo se deben mostrar los íconos utilizando la fuente importada "Material Symbols Rounded". Los iconos se configuran para ser redondeados y se establece un tamaño fijo.

- Estilos para varios componentes: El código define estilos para componentes como botones (btn-primary), tarjetas (card), tarjetas grandes (card-lg), tarjetas pequeñas (card-sm), encabezados (heading), campos de búsqueda (search-field), etc.

- Estilos para la barra de búsqueda: Define cómo se ve y se comporta la barra de búsqueda y cómo se muestra la lista de resultados de la búsqueda. También se configura un ícono de carga cuando se realiza una búsqueda.

- Estilos para la vista actual del clima y el pronóstico: Define cómo se deben mostrar los detalles del clima actual y el pronóstico del tiempo, incluidos los íconos de clima y la información del clima.

- Estilos para los aspectos destacados: Define cómo se deben mostrar los aspectos destacados, que incluyen tarjetas de alto contraste y badges para indicar la calidad del aire (AQI).

- Estilos para el slider: Define cómo se debe mostrar y comportar un slider de elementos, como las tarjetas del pronóstico del tiempo.

- Estilos para el pie de página.

- Estilos para la pantalla de carga y errores: Define cómo se muestra una pantalla de carga y cómo se manejan los errores en la página.



Debido a múltiples problemas presentados con la autenticación de la API key, así como al acceso a los propios datos, se "migró" a una nueva API de carácter abierto y gratuito: OpenWeather.