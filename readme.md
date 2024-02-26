[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ws8pVqhg)
![](https://imgur.com/MiDuWQ5.png)
# MUDApp: : La app de las mudanzas. Paso 2 Diseño y Desarrollo del backend (APIRest)


## Introducción

Una start-up de nueva creación ha solicitado una aplicación para dinamizar el mundo de las mudanzas y del transporte de paquetería en general.

La aplicación tiene cierta semejanza con la aplicación de UBER y, su objetivo principal es poner en contacto a personas con necesidades de transporte de bienes con transportistas que tengan un vehículo de las características adecuadas a esas necesidades.

Necesitamos abordar la parte de desarrollo del interfaz de cliente, para ello queremos una aplicación SPA (single-page application) conectada a la API que habéis desarrollado. La interfaz debe ser dinámica y atractiva y debe poder adaptarse a cualquier dispositivo. Queremos un logo que identifique la aplicación con el concepto de empresa que queremos montar.

## Requerimientos UI

A los requerimientos que se lanzaron para la parte de back-end, listados más abajo, habría que añadir algunos requerimientos de navegación:

<details>
  <summary><b>Home</b></summary>

  - La **home**, debe constar de:
    - Una **barra de navegación** superior que sin estado mostrará:
      - Un logo con el nombre de la app
      - Un avatar

      - Comportamiento de la barra de navegación:
        - Al clicar el logo se navega a la home
        - Al clicar el avatar:
          - si no hay usuario logado navega a la página de login/register
          - si el usuario está logado debe mostrar un menú con los elementos: profile, my transports, logout. El avatar, así mismo debe mostrar el nombre del usuario cuando está logado.
      - Aspecto:
        - En modo móvil, la barra de navegación será de tipo bottom navigation, con todas las opciones del menú:
          ![bottom-navigation](https://lh3.googleusercontent.com/14jax4TqtGJ1R7uteNETMHtrB4_83FOVLCsLW3VxWh17Mle2RiCPiUwPgN0hEXqkCr-281geh88fDMuEZyGVTyhZ_j8hO9RHElEa=w1064-v0)
        - En modo laptop la barra será muy minimalista y deberá desaparecer con el scroll-down del contenido y aparecer con el scroll-up.
    - Una **caja de búsqueda de transportistas** que filtrará en tiempo real la lista desplegada.
    - Una **lista de transportistas** que mostrará una "card" con la información minima del transportista. La lista tendrá scroll infinito y debe cargarse de forma diferida. Cada tarjeta mostrará dos botones: "Ver más" y Contratar.
      - "Ver más": muestra un modal con una ampliación de la información.
      - Contratar: Comprueba si está logado el cliente y si, es así aparecerá un cuadro de contratado.
</details>

<details>
  <summary><b>Usuaria-Cliente (en adelante Cliente) no registrada</b></summary>

  - Puede registrarse
  - Puede realizar búsquedas por condiciones: Localidad, Destino, nº paquetes, tamaño máximo del paquete, fecha del transporte.

  </details>
  <details>
  <summary><b>Cliente registrada</b></summary>

  - Puede logarse
  - Puede recuperar la contraseña
  - Puede realizar búsquedas por condiciones: Localidad, Destino, nº paquetes, tamaño máximo del paquete, fecha del transporte.
  - Puede actualizar su perfil de usuaria (menos nombre, email)
  - Puede seleccionar un transportista de una lista
  - Puede contratar el servicio de un transportista
  - Puede pagar el servicio
  - Puede cancelar un servicio si todavía no lo ha pagado
  - Puede ver el detalle del servicio contratado
  - Puede valorar el servicio realizado
  - Puede comentar el servicio realizado (sólo 1 vez)
  - Puede enviar un mensaje a un transportista contratado.
  - Puede visualizar mensajes de un transportista contratado

  </details>
<details>
  <summary><b>Usuaria-Proveedor de transporte (en adelante Transportista) no registrada</b></summary>

  - Puede registrarse

  </details>
  <details>
  <summary><b>Transportista registrada</b></summary>

  - Puede logarse
  - Puede recuperar la contraseña
  - Puede dar de alta un vehículo
  - Puede modificar los datos de un vehículo
  - Puede eliminar los datos de un vehículo
  - Puede actualizar su perfil de usuaria (menos nombre, email). Puede cambiar su estado a NO DISPONIBLE.
  - Puede ver el detalle del servicio contratado
  - Puede enviar un mensaje a un cliente.
  - Puede visualizar mensajes de un cliente.
  - Pueden ver la lista de condiciones del servicio.

  </details>

  <details>
  <summary><b>Administradora de la aplicación</b></summary>

  - Puede visualizar la lista de clientes y transportistas
  - Puede realizar búsquedas por palabras claves.
  - Puede editar la lista de condiciones del servicio de transporte.
  - Puede editar o borrar un cliente
  - Puede editar o borrar un transportista
  - Puede editar o borrar un servicio
  - Notifica a los transportistas valorados que van a recibir un pago.


  </details>

  <details>
  <summary><b>Sistema</b></summary>

  - Filtra la lista de transportistas por el check de disponibilidad
  - Modifica la disponibilidad de un transportista cuando se ha recibido el pago de un servicio.
  - Modifica la disponibilidad de un transportista cuando se ha finalizado un servicio.
  - Modifica la disponibilidad e un transportista si se ha cancelado un servicio.
  - Notifica al cliente que tiene que valorar un servicio cuando se ha realizado.
  - Ajusta la valoración del transportista con cada valoración de un cliente.

  </details>

## Requerimientos técnicos
- Desarrollo con React Vite + Vitest (intentad utilizar TDD para el desarrollo)
- Buenas prácticas de arquitectura y programación.

## Modalidades pedagógicas

- Los equipos serán de entre 5 y 6 personas.
- El proyecto se desarrollará durante 2 semanas. Debe entregarse el 7 de Marzo.
- El trabajo debe organizarse en equipo a través de kanban y ceremonias SCRUM.
- El trabajo se desarrollará en 2 sprints.
- Se hará una demo final del producto al final del segundo sprint.
- El diseño corre a cargo del equipo.

## Criterios de rendimiento

- El resultado final debe tener los elementos requeridos y las funcionalidades descritas en las historias de usuario de la parte de backend.
- Los commits del proyecto deben estar asociados a una issue de Github
- Cada issue debe contener una historia de usuario.
- La presentación habla de manera concisa sobre los obstáculos utilizando términos técnicos
- El desarrollo apoya consistentemente la información compartida oralmente.

## Modalidades de evaluación

- La presentación de la demostración frente a los formadores se completará con una sesión de preguntas / respuestas para justificar las decisiones técnicas. Feedback mediante pull-request
- Tras la entrega del proyecto habrá una sesión de autoevaluación y de evaluación de los miembros del proyecto.

## Entregables
- Aplicación funcionando en un entorno de producción. Valorable algún proceso de CI/CD.
- Repositorio de GitHub con el código de la aplicación y fichero Readme.md; con enlaces a kanban, figma... Valorable índice de contenidos en el readme.
- Presentación

## Competencias a validar

  <details>
  <summary><b>Maquetación web</b></summary>

- La maquetación tiene en cuenta las características funcionales descritas en los casos de uso o historias de usuario
- La secuencia de pantallas se formaliza mediante un diagrama
- La maquetación y la secuencia de pantallas son validadas por el usuario
- La maquetación respeta la carta gráfica de la empresa v es adecuada con la experiencia del usuario y el dispositivo al que va dirigido
- La maquetación respeta los principios de seguridad de una interfaz de usuario
- La maquetación tiene en cuenta los requisitos de seguridad específicos de la aplicación
- El contenido de la maquetación está escrito, en castellano o en inglés, de manera adaptada al interlocutor y sin errores

</details>

  <details>
  <summary><b>Desarrollo de una interfaz de usuario web dinámica y adaptable</b></summary>

- Las páginas web respetan la carta gráfica de la empresa y están alineadas con la experiencia del usuario, incluyendo la experiencia móvil.
- La arquitectura de la aplicación se ajusta a las buenas prácticas de desarrollo y seguridad de las aplicaciones web
- La aplicación web está optimizada para dispositivos móviles
- El código fuente está documentado o autodocumentado
- La aplicación web está publicada en un servidor
- Los test garantizan que las páginas web cumplen los requisitos descritos en las especificaciones
- Los test de seguridad siguen un método reconocido por la profesión
- El tema de la búsqueda se expresa con precisión en castellano o inglés
- La documentación técnica relacionada con las tecnologías asociadas, en castellano o en inglés, se entiende (sin interpretaciones erróneas).
- El proceso de búsqueda permite resolver un problema técnico o implementar una nueva funcionalidad
- El monitoreo de vulnerabilidades conocidas permite identificar y corregir vulnerabilidades potenciales
- Se comparten los resultados de la búsqueda, oralmente o por escrito, con la pareja o equipo.

</details>