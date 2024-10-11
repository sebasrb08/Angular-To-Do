## TO-DO - Backend (Spring Boot) & Frontend (Angular)

Este proyecto es una aplicación simple de gestión de tareas que utiliza un **backend** hecho con **Spring Boot** y una **base de datos MySQL**. El frontend, hecho con **Angular**, está integrado dentro del backend en la carpeta `resources/static`.



----------

### Características

-   CRUD de Tareas: Crear, Leer, Actualizar y Eliminar tareas.
-   Base de datos MySQL: Utiliza JPA (Java Persistence API) para gestionar la persistencia de los datos.
-   Frontend en Angular: El frontend está empaquetado dentro del proyecto de Spring Boot y se sirve directamente desde el backend.

----------

###Tecnologías Utilizadas

-   Backend: Java con Spring Boot.
-   Frontend: Angular.
-   Base de Datos: MySQL.
-   ORM: JPA (Java Persistence API) con Hibernate.

----------

### Prerrequisitos

Asegúrate de tener instalados los siguientes programas:

1.  Java 17.
2.  Maven.
3.  Node.js y npm (si necesitas trabajar en el frontend).
4.  MySQL.

----------

### Configuración del Proyecto
    
1.  **Configurar la Base de Datos**
    
    Crea una base de datos en MySQL llamada `to_do_list` (o cambia el nombre en la configuración si prefieres otra).
    
    `CREATE DATABASE to_do_list;` 
    
    Luego, actualiza las credenciales de la base de datos en el archivo **application.properties**
    
    `spring.datasource.url=jdbc:mysql://localhost:3306/to_do_list
    spring.datasource.username=tu-usuario
    spring.datasource.password=tu-contraseña` 
    
3.  **Construir y Ejecutar el Backend**
    
    1.  Asegúrate de estar en el directorio del proyecto.
    2.  Usa Maven para construir y ejecutar el proyecto de Spring Boot:
    
    
    `mvn clean install
    mvn spring-boot:run` 
    
    El backend estará disponible en `http://localhost:8080`.
    
4.  **Servir el Frontend (Angular)**
    
    El frontend está empaquetado dentro de la carpeta `src/main/resources/static`. No necesitas configuraciones adicionales para que funcione. Una vez que ejecutes el backend, el frontend será servido desde `http://localhost:4200` .
    

----------

**Endpoints de la API**

Estos son los principales endpoints para gestionar las tareas:

-   GET `/task` - Obtiene todas las tareas.
-   POST `/task` - Crea una nueva tarea.
-   PUT `/task/{id}` - Actualiza una tarea existente.
-   DELETE `/task/{id}` - Elimina una tarea por su ID.

----------



**Desarrollo del Frontend**

Si deseas realizar cambios en el frontend (Angular), sigue estos pasos:

1.  Navega al directorio del frontend (en `src/main/resources/static`).
 
    `cd src/main/resources/static `
2.  Desplegar el proyecto
`npm start`
`ng serve`

    
    El frontend estará disponible en `http://localhost:4200`. Una vez que termines las modificaciones, puedes generar una nueva versión de producción:
   
