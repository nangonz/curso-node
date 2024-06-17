Qué abarca este proyecto:
Se utilizó Yaak que es una alternativa a postman para probar las rutas.
Se utiliza standard para lintar el código

1. Instalación del proyecto
2. Usuarios en bas de datos 
    Se usa una base de datos sencilla para agilizar y priorizar los contenidos actuales
3. Registro de usuarios
4. Autenticación básica con login y password
5. Verificación de autenticación (Usando hashes y salts)
6. Sesió de ususario con cookie
    Local storage no sería recomendable y se analizará el porqué de esta afirmación.
    Dentro de todas las opciones, las cookies son mejor que el localStorage
    Las cookies no van a desaparecer, lo que se quitará son las Third party cookies que son
    las de análiticas, publicidad y trakeo.
    Las cookies del propio dominio van a seguir existiendo
7. Json Web Token
8. Refactorizar con un middleware
9. Cerrar sesión
10. Mas adelante Refresh Tokens, Passport y OAuth 2.0