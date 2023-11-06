Este código forma parte de una aplicación web para obtener datos meteorológicos y sugerir una actividad al azar para una persona que se encuentre aburrida. 

---- URLs de las API:   -----

apiURL: Almacena la URL de la API que se utilizará para obtener datos meteorológicos basados en la ciudad proporcionada por el usuario.
boredApiURL: Almacena la URL de la API que proporciona una actividad al azar para una persona, generalmente en estado aburrida.


---- Recuperación de la ciudad guardada: ----

La aplicación verifica si hay una ciudad previamente buscada guardada en el almacenamiento local del navegador (localStorage). Si existe, se muestra en el cuadro de búsqueda.


---- Función updateWeather(city):   -----

Esta función se llama cuando se busca el tiempo en una ciudad. Realiza varias acciones, incluyendo:
Llama a checkWeather(city) para obtener datos meteorológicos.
Llama a getFiveDayForecast(city) para obtener el pronóstico de cinco días.
Llama a giveActivity() para obtener una actividad al azar.


---- Función checkWeather(city): ----- 

Realiza una solicitud a la API de datos meteorológicos con la ciudad proporcionada.
Verifica si la respuesta indica un error 404 (ciudad no encontrada).
Si la respuesta es exitosa, se actualiza la información meteorológica en la página, incluyendo la imagen del clima, el fondo, la ciudad, la temperatura, la humedad, la velocidad del viento y la sensación térmica.


---- Event Listeners: ----- 

Se agrega un evento al botón de búsqueda (searchBtn) para buscar el clima en la ciudad ingresada por el usuario cuando se hace clic en el botón.
Se agrega un evento al cuadro de búsqueda (searchBox) para realizar la búsqueda al presionar la tecla "Enter".


---- Función getFiveDayForecast(city):  ----- 

Realiza una solicitud a la API de pronóstico de cinco días con la ciudad proporcionada.
Divide los datos del pronóstico en días individuales y muestra la temperatura máxima, la temperatura mínima, el ícono del clima y el día de la semana para cada día.


---- Funciones forecastIcon(weather) y forecastBackground(weather):  ----- 

Estas funciones toman el tipo de clima (como "Clouds", "Clear", "Rain", etc.) como entrada y devuelven la URL de la imagen del ícono del clima y la cadena de fondo CSS en forma de un gradiente lineal según el tipo de clima.


---- Función giveActivity():  ----- 

Realiza una solicitud a la API de actividad aburrida.
Si la solicitud tiene éxito, muestra una actividad al azar en la parte inferior de la página.
En resumen, este código es parte de una aplicación web que permite a los usuarios buscar datos meteorológicos y obtener actividades al azar para combatir el aburrimiento. Combina datos de múltiples fuentes y ofrece una experiencia interactiva para el usuario.

