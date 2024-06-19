Qué abarca este proyecto:
Se utilizó Yaak que es una alternativa a postman para probar las rutas.
Se utiliza standard para lintar el código.
Se utiliza ejs, que es un template engine o sistema de plantillas.
Existe otros como handlebars o moustage. Ejs es un sitema de plantillas
basado en javascript.

1. Instalación del proyecto
2. Uso de Middleware
    Un middleware es una función que se ejecuta antes de que llegue a las peticiones
2. Usuarios en bas de datos 
    Se usa una base de datos sencilla para agilizar y priorizar los contenidos actuales.
    Se utiliza una dependencia que se llama db-local. Esto nos permite crear una base de 
    datos local para pruebas y no tener que levantar una base de datos más compleja.
    Esto puede servir para proyectos sencillos y que nos da unos métodos para buscar 
    datos, para crear y actualizarlos en nuestro disco duro. 
    Para crear la id no hace falta que instalemos ninguna dependencia para generar ids. 
    Normalmente una base de datos generan la id como MongoDB. En este caso se usa random UUID.
    Random UUID tiene como punto negativo que es malo para hacer indexación dependiendo de la 
    base de datos que utilices.
3. Registro de usuarios
4. Autenticación básica con login y password
5. Verificación de autenticación (Usando hashes y salts)
6. Sesió de ususario con cookie
    La sesión es cuando el usuario entre diferentes navegaciones somos capaces de saber que
    el usuario tiene la sesión iniciada y los permisos adecuados. Para esto se utilizará JWT
    JSON Web Token que nos ayudará a guardar diferente información para intercambiar de manera segura.
    Para almacenar el token usaremos cookies. Local storage no sería recomendable. Dentro de todas las 
    opciones, las cookies son mejor que el localStorage porque tienen una capa de seguridad adicional
    que se llama "http only" esto significa que no pueden ser accedidas a través de javascript y sólo se
    pueden acceder en la petición en el servidor. Esto no significa que estemos 100% seguros pero es una
    capa más de seguridad (no es vulnerable al cross site scripting).
7. Rutas protegidas
8. Json Web Token
9. Refactorizar con un middleware
10. Cerrar sesión
11. Mas adelante Refresh Tokens, Passport y OAuth 2.0