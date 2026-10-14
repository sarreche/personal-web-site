---
title: "¿Qué tiene que mirar un líder cuando escribir código ya no es el cuello de botella?"
description: "Más código no garantiza mejores entregas. Qué decisiones tomar sobre revisión, conocimiento compartido, prioridades y capacidad del equipo cuando la IA acelera la implementación."
publishedAt: "2026-10-14"
---

Imaginá una reunión de seguimiento en la que el equipo muestra más actividad que nunca. Hay cambios nuevos, funcionalidades en demostración y agentes trabajando en paralelo. La sensación es buena, hasta que alguien pregunta qué llegó a las personas que usan el producto y qué mejoró para ellas.

Entonces aparecen los pendientes: esto espera revisión, aquello todavía no se integró, lo otro necesita una decisión. El equipo produjo mucho. Todavía cuesta saber cuánto avanzó.

Es una situación que me interesa mirar desde el lugar de quien lidera. Ya escribí sobre [la paradoja de la productividad](https://sarreche.vercel.app/blog/la-paradoja-de-la-productividad-quien-se-queda-con-el-tiempo) y sobre [quién revisa todo el código que generamos](https://sarreche.vercel.app/blog/demasiado-codigo-quien-revisa-todo-eso). Hoy la pregunta es qué decisiones tomar cuando ese problema aparece en tu equipo.

## Lo que conviene medir antes de celebrar

Nunca hubo una equivalencia segura entre escribir código y entregar valor. También antes de la IA escribíamos soluciones equivocadas, acumulábamos deuda y confundíamos actividad con progreso. La generación rápida hace más fácil acumular esas decisiones antes de entender sus consecuencias.

El [working paper de Fiona Chen y James Stratton](https://fion.ac/jellyfish.pdf), con datos de 718 firmas hasta marzo de 2026, estima tras adoptar agentes un 30 % más de líneas y un 49 % más de tiempo entre apertura y merge, sin aumento estadísticamente significativo en tareas resueltas. Es observacional: ese intervalo incluye esperas y el resultado no demuestra un beneficio nulo ni mide directamente valor para clientes.

Por eso, si una cola de revisión crece, antes de buscar culpables miraría qué está esperando cada cambio. Puede faltar una persona disponible, una decisión de producto, una prueba o información para entenderlo. Cada causa pide una respuesta distinta.

## La revisión necesita lugar en la planificación

Si alguien tiene una semana completa de desarrollo asignado y además debe revisar todo lo que producen los demás y sus agentes, el plan ya está comprometido. La revisión terminó convertida en una tarea invisible que hay que resolver entre otras tareas, o fuera de horario.

Como líder, le daría capacidad explícita. También limitaría los cambios abiertos según lo que el equipo pueda evaluar e integrar. Si una herramienta puede iniciar diez trabajos, pero nosotros podemos cerrar dos con atención, abrir los diez puede empeorar la entrega.

Eso no significa poner todas las decisiones en manos de la persona más experimentada. Esa persona puede ayudar a definir criterios, acompañar revisiones y explicar qué riesgos está mirando. Si siempre recibe los problemas al final, agotada y con una fecha de entrega encima, además perdemos una oportunidad de formar a quienes podrían compartir esa responsabilidad.

La capacidad de revisión también se construye.

## Entender lo suficiente para sostenerlo

No espero que cada integrante memorice el repositorio. Sí me gustaría que los cambios importantes tengan un responsable y que alguien más pueda explicar qué problema resuelven, qué decisiones tomaron y dónde mirar si fallan.

Una documentación generada automáticamente puede ayudar. Pero tenerla no confirma que alguien la haya leído, comprendido o contrastado con el sistema. Una conversación breve sobre una decisión difícil puede revelar más que muchas páginas de descripción.

También cuidaría el tamaño de las entregas. Una propuesta acotada permite discutir un supuesto antes de que se convierta en una arquitectura entera. Cuando un cambio exige horas para reconstruir su intención, conviene preguntarse si llegó demasiado grande o demasiado tarde a la conversación.

En el fondo, estoy intentando preservar algo práctico: que el equipo conserve la confianza para modificar lo que construye.

## La verificación tiene que acompañar al riesgo

No le pediría el mismo proceso a una corrección de texto que a una migración de datos, un cambio de permisos o una integración de pagos. El equipo técnico necesita participar en esa clasificación y definir las comprobaciones apropiadas.

Para los cambios con mayor impacto, me interesaría acordar antes de implementar cómo vamos a verificar el comportamiento esperado y cómo volver atrás si algo falla. Que un agente genere pruebas es útil; todavía hay que decidir si esas pruebas representan el problema real.

Una segunda revisión automática puede aportar otra mirada. Su valor depende de lo que encuentre y de lo que nosotros hagamos con ese resultado. Agregar más controles sin mirar sus efectos también puede volver más larga la cola.

Quien lidera no necesita inspeccionar cada línea. Necesita contar con criterio técnico dentro del equipo, darle tiempo y autoridad, y hacer preguntas que permitan detectar dónde el proceso está perdiendo confiabilidad.

## Cambiar las preguntas de seguimiento

En una reunión, probaría con estas preguntas:

- ¿Qué llegó a producción y qué evidencia tenemos de que ayudó?
- ¿Qué trabajo lleva más tiempo esperando y qué decisión lo destraba?
- ¿Quién puede explicar y sostener cada cambio importante?
- ¿Cuánto esfuerzo estamos gastando en revisar y rehacer, y cabe dentro de la jornada?
- ¿Qué podemos simplificar, dividir o dejar de hacer para terminar mejor lo prioritario?

Las usaría para entender el sistema, no para construir un ranking de personas. Si terminamos premiando cantidad de commits o de tareas cerradas, probablemente el equipo aprenda a producir más de esas señales. Me interesa que pueda señalar un riesgo, pedir contexto o proponer eliminar una funcionalidad sin sentir que está mostrando menos productividad.

Incluso llegar a producción es una etapa, no una prueba automática de valor. Después hay que mirar si lo usa alguien, si mejora el problema original y cuánto cuesta mantenerlo.

## Aprovechar la velocidad con una intención clara

Para explorar una idea o construir un prototipo, generar rápido puede abrir posibilidades enormes. Podés comparar alternativas y descartar una propuesta antes de invertir meses. Ese aprendizaje tiene valor aunque el código termine en la papelera.

Lo importante es acordar cuándo estamos explorando y cuándo estamos asumiendo un compromiso de mantenimiento. Si una demo pasa a ser un servicio del que dependen clientes, cambian las preguntas sobre pruebas, operación, soporte y responsabilidad. Esa transición merece una decisión explícita.

Creo que ahí hay una parte central del liderazgo con IA: decidir qué merece entrar en el sistema, dar al equipo condiciones para comprenderlo y revisar si el resultado está cumpliendo su propósito. Comprar capacidad para generar más es relativamente sencillo. Desarrollar criterio compartido lleva práctica, tiempo y conversaciones.

Y quizá una de las mejores señales de progreso sea poder decir: estamos entregando algo útil y sabemos cómo seguir cuidándolo.

Sigo explorando estas preguntas sobre software, trabajo e IA en [mi canal de YouTube](https://www.youtube.com/@saarreche). Un abrazo.
