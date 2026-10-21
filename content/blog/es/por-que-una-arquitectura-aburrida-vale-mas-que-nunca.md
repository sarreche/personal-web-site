---
title: "¿Por qué una arquitectura aburrida vale más que nunca?"
description: "La IA facilita construir sistemas. Elegir algo que podamos entender, actualizar y mantener sigue siendo una decisión nuestra. El aviso de PHP lo recuerda."
publishedAt: "2026-10-21"
---

El 20 de octubre, el equipo de PHP [anunció una publicación de seguridad](https://www.php.net/archive/2026.php#2026-10-20-1) para el 21 a las 14:00 UTC, las 11:00 en Montevideo. El aviso habla de dos vulnerabilidades críticas, ambas con una puntuación CVSS v4.0 de 9,2.

Al consultar el anuncio para esta nota, los detalles y las versiones afectadas y corregidas seguían pendientes de esa publicación. No alcanza para decir qué instalaciones están expuestas ni para afirmar que hay explotación activa.

El aviso me parece una buena entrada a una discusión que la IA vuelve más urgente: qué elegimos construir y quién se ocupa de sostenerlo después.

Creo que una arquitectura aburrida vale más que nunca. Pero esa elección trae una obligación: mantenerla viva.

## Lo conocido tiene un valor concreto

En 2015, Dan McKinley escribió [Choose Boring Technology](https://mcfunley.com/choose-boring-technology). Una de sus ideas centrales es que las tecnologías conocidas permiten conocer mejor sus formas de fallar. También propone pensar el costo de las herramientas sobre el sistema completo.

Esa mirada sigue siendo útil. Cuando algo se rompe, ayuda tener documentación, procedimientos que el equipo entiende y herramientas que sabe usar. Elegir una tecnología también implica elegir cómo vas a investigar sus problemas.

PHP es un lenguaje y un entorno de ejecución; por sí solo no define una arquitectura. Podés construir un sistema sencillo o uno dificilísimo de operar usando la misma tecnología. El aviso sirve para hablar de mantenimiento, no para demostrar que cualquier aplicación hecha en PHP es una buena decisión.

Para mí, una arquitectura aburrida tiene una propiedad bastante concreta: el equipo puede explicar cómo funciona y qué haría si una parte falla.

## La IA abarata el primer paso

Con un agente podés pedir una API, una cola, un panel y una integración. Si la tarea sale bien, en poco tiempo tenés una solución funcionando. Eso amplía lo que podés intentar.

Pero cada pieza que aceptás incorpora decisiones: dónde corre, qué permisos tiene, cómo se actualiza, qué datos guarda y de qué depende. Que el agente pueda conectarlas no resuelve esas preguntas por el equipo.

Ahí veo un riesgo: confundir la facilidad para generar una solución con la capacidad para sostenerla. Una integración que llevó diez minutos puede acompañarte durante años.

En [La IA y la hipoteca de la deuda técnica](/blog/la-ia-y-la-hipoteca-de-la-deuda-tecnica) aparece esa preocupación por lo que queda después de construir. Acá la llevaría a una decisión anterior: cuántas piezas necesitamos incorporar para resolver el problema.

La IA puede ayudarnos a implementar más alternativas. El criterio para elegir entre ellas sigue haciendo falta.

## Una solución pequeña también exige criterio

Imaginá un caso hipotético: una empresa necesita recibir solicitudes, aprobarlas y enviar una confirmación. Un equipo propone una aplicación con una base de datos y un proceso para los envíos. Otro propone varios servicios, una cola y distintos entornos de ejecución.

Las dos propuestas podrían funcionar. Para decidir, preguntaría qué necesidad concreta justifica cada separación. ¿Hay cargas distintas? ¿Equipos que deben desplegar por separado? ¿Una tarea que necesita aislarse? ¿O estamos agregando piezas porque ahora es fácil generarlas?

Si una aplicación alcanza y el equipo sabe operarla, empezaría por ahí. Si aparecen requisitos que justifican separar componentes, revisaría la decisión.

La simplicidad tampoco se mide contando servidores. Un único proceso lleno de dependencias ocultas puede ser más difícil de mantener que varios servicios con responsabilidades claras. Lo que importa es poder seguir una operación, localizar un error y hacer un cambio sin adivinar sus consecuencias.

## Aburrido necesita alguien a cargo

El aviso de PHP muestra una parte del trabajo: un equipo comunica un problema y prepara una corrección. Para que eso proteja una aplicación, todavía hay un recorrido que hacer.

Alguien tiene que saber qué versión usa, revisar si está afectada, conseguir la actualización por el canal correspondiente, comprobar compatibilidad y desplegarla. También tiene que poder verificar el resultado y recuperar el servicio si algo sale mal.

Ese recorrido puede estar repartido entre el equipo, un proveedor y una plataforma de alojamiento. Lo importante es que las responsabilidades estén claras. Pagar un servicio administrado también requiere entender qué cubre.

Una aplicación puede seguir respondiendo mientras se vuelve cada vez más difícil actualizarla. Que nadie la toque durante años dice poco sobre su salud si tampoco sabemos cómo cambiarla.

Por eso, cuando hablamos de una arquitectura que va a durar, incluiría tiempo de mantenimiento y responsables. Son parte del diseño que hace posible seguir usándola.

## Las preguntas que haría antes de agregar otra pieza

Antes de aceptar una tecnología propuesta por una persona o un agente, pondría estas preguntas sobre la mesa:

- ¿Qué problema concreto resuelve y qué alternativa más simple tenemos?
- ¿Quién del equipo puede explicar cómo opera y cómo falla?
- ¿Quién recibe sus avisos de seguridad y decide las actualizaciones?
- ¿Cómo comprobamos un cambio y cómo volvemos atrás si falla?
- ¿Qué pasa con los datos y la operación si necesitamos reemplazarla?

No hace falta responder con un documento enorme. Sí hace falta que las respuestas existan y que otra persona pueda encontrarlas.

También reservaría espacio para aprender herramientas nuevas. A veces una necesidad justifica asumir incertidumbre. En ese caso, conviene hacer explícito qué esperamos ganar, qué tenemos que aprender y quién va a sostener esa elección.

## Elegir pensando en los próximos cinco años

La IA vuelve más accesible explorar soluciones. Me parece una oportunidad para comparar mejor y elegir con más información. También exige resistir la tentación de incorporar todo lo que podemos generar.

Una arquitectura conocida y mantenida permite dedicar atención al problema del negocio. Su valor depende de que podamos seguir actualizándola, entender sus límites y cambiarla cuando haga falta.

La pregunta que me interesa dejar es esta: **¿qué vamos a poder mantener dentro de cinco años, con el equipo y los recursos que razonablemente podemos sostener?**

Si querés revisar tu stack con alguien de afuera, contámelo. Sigo estas conversaciones en [mi canal de YouTube](https://www.youtube.com/@saarreche).

Un abrazo.

## Referencias

- [PHP: aviso de publicación crítica de seguridad, 20 de octubre de 2026](https://www.php.net/archive/2026.php#2026-10-20-1). Fuente del anuncio; consultar PHP para los detalles y versiones de la publicación.
- [Dan McKinley: Choose Boring Technology, 2015](https://mcfunley.com/choose-boring-technology). Marco para pensar el costo operativo de incorporar tecnologías.
