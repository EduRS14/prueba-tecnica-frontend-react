# Frontend de la Prueba Técnica

### Desarrollador: **Eduardo Rivas**

El presente proyecto representa el frontend de una aplicación. Está desarrollada
usando las tecnologías React 19.1.0, Next.js 15.5.4, TypeScript y Tailwind CSS.

La aplicación se conecta a un backend hecho con Java 21, Spring Boot 3.5.6 y PostgreSQL, y con ello,
a través de una interfaz limpia y ordenada, el usuario puede aprovechar la información.

Este frontend tiene dos páginas desarrolladas:
- Principal: En esta, mediante un sistema de paginación de 5 elementos conseguida en
  el backend, se aprovecha dicha funcionalidad para mostrar la información de objetos
  de características primordiales de un bus en este caso, mediante una tabla.
- /bus/id: En esta, se logra obtener la información de un bus del caso en base a un
  id, y se muestran sus datos en pantalla.

El frontend desarrollado automáticamente inicia en la página principal. En la lista de
elementos obtenidos y mostrados mediante una tabla, cada uno posee un botón de detalles,
el cual al presionarse abrirá una nueva pestaña, donde se podrá visualizar la segunda
página desarrollada, con datos del bus escogido. 

Para un inicio correcto del proyecto, es necesaria la instalación de los paquetes 
necesarios de Node.js para su ejecución, mediante el siguiente comando:
```bash
npm install
```
