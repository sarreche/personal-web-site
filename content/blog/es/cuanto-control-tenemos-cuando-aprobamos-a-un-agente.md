---
title: "¿Cuánto control tenemos cuando aprobamos lo que hace un agente?"
description: "Supervisar a un agente exige contexto, tiempo y criterio. Un paper invita a revisar qué condiciones necesita la persona que queda a cargo de sus decisiones."
publishedAt: "2026-10-26"
---

Imaginá que un agente termina un cambio y te pide aprobación. Te muestra un resumen ordenado, una lista de archivos y las pruebas que ejecutó. Hay un botón para continuar y otro para rechazar.

Formalmente, la decisión está en tus manos. Pero ¿tenés lo necesario para tomarla? ¿Sabés qué cambió, qué quedó afuera y qué evidencia sostiene el resumen? ¿Podrías explicar qué pasaría si aceptás?

Es un ejemplo hipotético, aunque la pregunta es bastante concreta. Poner una persona al final de un proceso exige pensar qué trabajo le estamos pidiendo hacer.

Eso me dejó [AI Agents Push Humans Out of the Loop](https://arxiv.org/html/2608.23642v3), de Margaret Mitchell, Avijit Ghosh y Samir Passi. Su tesis: el diseño actual puede dificultar la supervisión y erosionar capacidades necesarias para ejercerla. Proponen apoyo técnico y organizacional para quien supervisa.

## Una advertencia que merece leerse con cuidado

Es un artículo de posición, revisado en septiembre de 2026. Reúne literatura y recomendaciones; no presenta un experimento nuevo que establezca un deterioro inevitable por usar agentes.

Yo lo leería como una invitación a evaluar condiciones de trabajo. Si un sistema depende de que alguien detecte sus errores, tenemos que comprobar que esa persona puede hacerlo en el contexto donde lo estamos usando.

La pregunta cambia según la tarea. Revisar un borrador permite detenerse, consultar una fuente y volver mañana. Autorizar una operación que modifica datos requiere entender sus consecuencias antes de ejecutarla. El mismo botón puede estar pidiendo decisiones muy diferentes.

Me parece especialmente útil que el debate se pueda llevar a esas situaciones. Para mejorar un proceso necesito saber qué decisión estamos delegando, qué queda bajo responsabilidad humana y cómo vamos a evaluar esa intervención.

## Volver al trabajo lleva tiempo

En [mi experiencia con los agentes](/blog/mi-experiencia-hasta-ahora-con-los-agentes) conté cómo fui dando más autonomía y prestando más atención al producto. Sigo viendo valor en poder concentrarme en el resultado y dejar que una herramienta resuelva parte de la implementación.

Este paper me lleva a agregar una pregunta: cuando tengo que intervenir, ¿cómo reconstruyo lo que pasó?

Imaginá que dejaste avanzar una tarea y volviste cuando apareció una decisión importante. Para revisarla quizás necesites recuperar el objetivo, las restricciones, los cambios ya hechos y los supuestos que aparecieron durante la ejecución.

Yo reservaría tiempo para ese regreso. Una pausa en la ejecución podría servir para presentar el estado del trabajo, las decisiones pendientes y las alternativas disponibles. El resumen sería una entrada a la revisión, con acceso a los registros y materiales que permitan comprobarlo.

Sin esa posibilidad, pedir aprobación puede terminar trasladando a la persona una decisión para la que todavía no tiene contexto suficiente.

## Una experiencia cómoda también necesita evaluación

Una investigación de 2021 citada en el paper, [To Trust or to Think](https://arxiv.org/abs/2102.09692), probó intervenciones que exigían más reflexión en decisiones asistidas por IA. Con 199 participantes, encontró menos aceptación de recomendaciones incorrectas frente a interfaces explicativas simples. Las intervenciones más eficaces recibieron peores valoraciones subjetivas, y el beneficio varió entre participantes.

Es un estudio acotado de apoyo a decisiones; no una prueba de agentes autónomos actuales. Aun así, deja una tensión interesante: qué interfaz preferimos y cuál nos ayuda a decidir mejor pueden tener respuestas distintas.

Mi conclusión práctica sería evaluar ambas cosas. Quiero que una herramienta sea agradable y ágil, pero también quiero saber si puedo detectar un problema cuando aparece.

Tampoco agregaría obstáculos por principio. Cada interrupción tendría que justificar qué decisión necesita, qué información aporta y por qué aparece en ese momento. Si todo requiere atención urgente, cuesta entender dónde concentrarse.

## Diseñar una aprobación que permita decidir

Para un cambio que puede afectar a terceros, propondría que la revisión pueda responder estas preguntas:

- ¿Qué acción concreta estamos por autorizar y sobre qué datos o sistemas?
- ¿Qué se comprobó y qué sigue siendo un supuesto?
- ¿Dónde puedo consultar la evidencia sin depender del relato del agente?
- ¿Qué alternativas tengo, incluyendo pedir más información o frenar?
- ¿Qué podemos recuperar si algo sale mal y qué consecuencias serían irreversibles?

Por ejemplo, antes de una modificación masiva de registros querría ver el alcance, una muestra representativa y el procedimiento de recuperación. Para corregir una frase de un borrador, aceptaría un control mucho más liviano.

También definiría de antemano qué operaciones puede hacer el agente por su cuenta. Esa autorización tendría límites verificables. Así podríamos dedicar la revisión a decisiones que necesitan criterio, sin convertir cada paso en una solicitud idéntica de permiso.

## El trabajo de revisar necesita un lugar

Una buena interfaz ayuda, pero yo también miraría cómo se organiza el equipo. ¿Quién revisa? ¿Con qué conocimiento? ¿Cuántas tareas tiene abiertas? ¿Puede pedir una pausa sin que se interprete como falta de productividad?

Si asignamos a alguien la responsabilidad de detectar errores, su agenda tiene que incluir ese trabajo. También necesita autoridad para cuestionar y detener una operación. Hacerse responsable de una aprobación debería venir acompañado de medios para evaluarla.

Reservaría, además, oportunidades para practicar y explicar las tareas que estamos delegando. Me interesa que el equipo pueda revisar un caso, entender una discrepancia y resolver una excepción con criterio propio.

Lo propondría como una práctica a evaluar, ajustada al dominio y a la experiencia de cada persona. No podemos asumir que una receta mantiene todas las capacidades ni que todo uso de IA las debilita.

## Comprobar que seguimos pudiendo intervenir

Antes de ampliar la autonomía, haría una prueba en un entorno controlado, con casos conocidos y errores representativos. Miraría cuáles detecta el equipo, qué evidencia consulta y si logra detener o corregir el proceso.

Mediría el resultado conjunto: calidad del trabajo, tiempo de revisión, errores que pasan y costo de recuperación. Una aprobación rápida, por sí sola, me dice poco sobre esas propiedades.

Para mí, ahí está el aporte más útil de esta lectura: **si la seguridad depende de una intervención humana, la capacidad de intervenir también tiene que ser parte de lo que evaluamos.**

El objetivo es poder delegar con fundamento y conservar las condiciones para hacernos cargo cuando corresponda.

Sigo estas conversaciones en [mi canal de YouTube](https://www.youtube.com/@saarreche). Un abrazo.

## Referencias

- [Mitchell, Ghosh y Passi: AI Agents Push Humans Out of the Loop, versión 3](https://arxiv.org/html/2608.23642v3), 6 de septiembre de 2026. Artículo de posición; esta nota desarrolla una lectura y propuestas propias a partir del texto.
- [Buçinca, Malaya y Gajos: To Trust or to Think](https://arxiv.org/abs/2102.09692), 2021. Investigación sobre intervenciones para reducir la dependencia excesiva de recomendaciones de IA.
