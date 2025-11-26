# Módulo 4: Ejercicio de evaluación final

Antes de empezar a realizar el ejercicio, hay que crear un nuevo repositorio desde GitHub Classroom usando [este enlace](https://classroom.github.com/a/YcpIKHni). Una vez creado, hay que clonarlo en nuestro ordenador y en la carpeta creada empezaremos a trabajar en el ejercicio.

El ejercicio consiste en desarrollar un API que permita **insertar, modificar, listar y eliminar** recetas de cocina utilizando Express.js, Node.js y MySQL.

## 1. Bases de datos

Crea una base de datos en MySQL llamada "recipessapp" que contenga la siguiente tabla:

-   **"recipes"**: esta tabla debe tener los siguientes campos:
    -   **"id"**: un identificador único para cada receta (tipo: INT y es una clave primaria que se incrementa automáticamente).
    -   **"name"**: el nombre de la receta (tipo: VARCHAR).
    -   **"ingredients"**: una lista de ingredientes separados por comas (tipo: VARCHAR).
    -   **"instructions"**: las instrucciones para preparar la receta (tipo: LONGTEXT).
    -   **"deleted_at"**: Fecha y hora de la eliminación de la receta (tipo: DATETIME).

## 2. API RESTful

Utiliza Express.js y Node.js para crear una API RESTful que permita realizar las siguientes operaciones:

-   **Obtener todas las recetas (GET /recipes):** La respuesta del servidor debe ser un `json` con el array de recetas.

-   **Obtener una receta por su ID (GET /recipe/:id).** Recibe en un URL param el id de una receta y devolverá un json con el objeto con todos los campos de esa receta.

-   **Crear una nueva receta (POST /recipe):** este endpoint espera en el body de la petición toda la información de la receta a insertar. La respuesta del servidor debe ser un texto de "Receta creada".

-   **Actualizar una receta existente (PUT /recipe/:id):** donde `id` en la ruta es el identificador de la receta que se quiere actualizar. Este endpoint también espera por el body de la petición un objeto con toda la información de la receta actualizada. La respuesta del servidor debe ser un texto de "Receta actualizada".

-   **Eliminar una receta (PATCH /recipe/:id):** donde `id` es el identificador de la receta que se quiere eliminar. La respuesta del servidor debe ser un texto de "Receta eliminada".

> NOTA: En todos los endpoints desarrollados el servidor debe comprobar que los datos recibidos desde el navegador son correctos. En caso de que los datos no sean correctos, el servidor debe devolver un estado de 400.
> Para esta gestión debemos buscar información de como hacerlo, hay muchas maneras, elige la que quieras!

**Todos los endpints serán ejecutados con el Postman, no es necesario implementar una aplicación frontend.**

## Pasos a seguir

1. Crea una base de datos y la tabla como te indicamos más arriba (usando MySQL Workbench).
2. Conecta la el servidor Express de la API a la base de datos MySQL utilizando el módulo `mysql2/promises` de Node.js.
3. Implementa las rutas necesarias para manejar las operaciones mencionadas anteriormente.
4. Asegúrate de incluir validaciones adecuadas en el código de tu servidor para garantizar que los campos obligatorios estén presentes y que los tipos de datos sean correctos.

> NOTA: Ves paso por paso comprobando que funciona el código. Pon muchos `console.log()` para verificar que funciona y luego los quitas.

## Bonus

Si os sobra tiempo, os proponemos otros endpoints para realizar que **no son obligatorios**. Consiste en implementar un sistema de autenticación con JWT (JSON Web Tokens) que incluya las funcionalidades de registro y inicio de sesión.

Te dejamos algunas pistas...

### Instrucciones sobre el bonus

1. Crea una base de datos en MySQL llamada "users" que contenga la siguiente tabla:

-   **"users"**: esta tabla debe tener los siguientes campos:
    -   **"id"**: un identificador único para cada usuario (tipo: INT y es clave primaria).
    -   **"name"**: el nombre del usuario (tipo: VARCHAR).
    -   **"email"**: el correo electrónico del usuario (tipo: VARCHAR, único).
    -   **"password"**: la contraseña del usuario (tipo: VARCHAR).

2. Los endpoints a desarrollar son:

-   **Registro de usuario (POST /registro)**: esta ruta debe permitir el registro de un nuevo usuario. El cuerpo de la solicitud debe incluir el nombre, el correo electrónico y la contraseña del usuario:

    ```json
    {
        "name": "nombre",
        "user": "usuario",
        "pass": "contraseña1234"
    }
    ```

-   **Inicio de sesión (POST /login)**: esta ruta debe permitir que un usuario existente inicie sesión. El cuerpo de la solicitud debe incluir el correo electrónico y la contraseña del usuario:

    ```json
    {
        "user": "usuario",
        "pass": "contraseña1234"
    }
    ```

    Verifica las credenciales proporcionadas con los registros de la base de datos. Si son válidas, genera y devuelve un token JWT para autenticar al usuario.

3. Implementa un middleware de autenticación que verifique el token JWT en cada solicitud del API de recetas (el CRUD de recetas del principio). Si el token es válido, permite que la solicitud continúe; de lo contrario, devuelve un error de autenticación.

## Entrega

> **27/11/2025 a las 18:00 horas**

Solo debéis hacer commits y merges en la rama main/master de vuestro repositorio hasta la fecha límite. Si después del ejercicio queréis seguir trabajando sobre el ejercicio, lo podéis hacer en otra rama y no debéis mergearla hasta que vuestra tutora os envíe las calificaciones.

## Normas

Este ejercicio está pensado para que lo realices de forma individual en clase, pero podrás consultar tus dudas con la profesora y tus compañeras si lo consideras necesario. Ellas no te darán directamente la solución de tu duda, pero sí pistas para poder solucionarla. Aún facilitando la comunicación entre compañeras, durante la prueba no debes copiar código de otra persona ni acceder a su portátil. Confiamos en tu responsabilidad.

La evaluación es una buena oportunidad para conocer cómo estás progresando, saber qué temas debes reforzar durante las siguientes semanas y cuáles dominas. Te recomendamos que te sientas cómoda con el ejercicio que entregues y no envíes cosas copiadas que no entiendas.

Si detectamos que has entregado código que no es tuyo, no entiendes y no lo puedes defender, suspendes el módulo. Tu objetivo no debería ser pasar la evaluación sino convertirte en programadora, y esto debes tenerlo claro en todo momento.

Al final tendrás un feedback sobre aspectos a destacar y a mejorar en tu ejercicio, y sabrás qué objetivos de aprendizaje has superado.

**¡Al helado de vainilla y el hada madrina!!**