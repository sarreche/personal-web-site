---
title: "¿Qué es la deuda técnica y por qué la IA puede hacerla crecer más rápido?"
description: "Generar código se volvió barato, pero mantenerlo no. La deuda técnica funciona como una hipoteca, y con IA es más fácil que nunca firmarla sin leer la letra chica."
publishedAt: "2026-10-15"
---

Hay una pregunta que aparece seguido en equipos y reuniones: ¿qué es exactamente la deuda técnica? Se nombra mucho, casi siempre con tono de queja, pero pocas veces alguien se detiene a explicarla.

La mejor forma que encontré de contarlo, después de más de 24 años trabajando en software, es con una hipoteca.

Y esta semana aparecieron dos noticias que muestran por qué esa hipoteca puede crecer mucho más rápido cuando hay inteligencia artificial en el medio. No tanto porque la IA escriba mal código, sino porque escribe mucho, muy rápido, y alguien tiene que pagar las cuotas.

## La deuda técnica es una hipoteca

Cuando sacás una hipoteca, recibís hoy algo que no podrías pagar de contado. A cambio, te comprometés a pagar cuotas durante años, con intereses.

En software pasa algo muy parecido. Tomás un atajo para llegar a tiempo a una fecha: duplicás una función en vez de generalizarla, dejás una regla de negocio escrita a mano en un lugar raro, postergás una prueba. Llegás antes. Pero cada cambio futuro en esa zona cuesta un poco más, porque primero hay que entender, rodear o arreglar lo que quedó a medias.

Ese costo extra son los intereses.

Hay algo importante: la deuda no es mala en sí misma. Igual que una hipoteca, a veces endeudarse es la decisión correcta. Lanzar antes, validar una idea, llegar a una demo que define un contrato. El problema aparece cuando te endeudás sin darte cuenta, cuando nadie sabe cuánto se debe ni a qué tasa.

Y ahí la IA cambia la escala.

## Generar código se volvió barato

En un artículo publicado esta semana, Anthropic contó cómo rediseñó su sistema de control de versiones. Según sus propias cifras, en mayo de 2026 fusionaban en promedio unos 2.500 cambios de código por día y, en septiembre, superaban los 30.000.

Con ese volumen, el control de versiones se les volvió el principal cuello de botella de desarrollo. Construyeron su propio sistema, Scion, y migraron su monorepo en cinco meses. Anthropic aclara que su caso es muy atípico: usan Claude para programar mucho más que casi cualquier otra empresa. Aun así, anticipa que estas presiones podrían aparecer en otras organizaciones dentro de seis a doce meses.

Hay un detalle del mismo artículo que me parece todavía más interesante que los números. Cuentan que muchas veces el rol de los ingenieros fue decirle «no» al modelo, porque el agente a veces violaba restricciones centrales del sistema o sobrediseñaba partes para cubrir problemas hipotéticos.

Ya lo había planteado en [Demasiado código: ¿quién revisa todo eso?](/blog/demasiado-codigo-quien-revisa-todo-eso): el cuello de botella no desapareció, se mudó. Escribir dejó de ser la parte cara. Entender, revisar y sostener, no.

## Seis propuestas, dos aprobadas

El segundo caso viene de Google. En un artículo publicado junto con Gemini 4 Argon, su equipo contó un experimento concreto: le pidieron al modelo que mejorara el rendimiento de ADK, su framework de agentes en Python. Según Google, el repositorio tenía unas 205.000 líneas de código y casi 17.000 pruebas unitarias.

El agente trabajó solo durante 11 horas, de noche. A la mañana había propuesto seis optimizaciones en 32 archivos.

En la revisión, el equipo se quedó con dos y descartó cuatro:

- Una caché que mejoraba un benchmark sintético, pero que podía devolver datos viejos entre sesiones.
- Un chequeo que leía un atributo privado de otra librería y podía romperse en silencio con una actualización menor.
- Una reescritura que hacía más difícil de leer una parte central del código sin mejorar la latencia real.
- Un índice que sumaba complejidad y solo ayudaba en pruebas sintéticas.

Mirá esa lista con ojos de hipoteca. Ninguno de esos cambios rompía algo hoy. Todos pasaban, o casi. Pero cada uno era un crédito con intereses: un error difícil de reproducir, una dependencia frágil, un código que el próximo en tocarlo iba a tardar más en entender.

El propio equipo de Google lo resume en una frase que me quedó dando vueltas: el agente explora, el mantenedor resta.

## El detalle de la guía de onboarding

Hay otra parte del caso que vale la pena contar. En una primera ronda le dieron al modelo el objetivo sin ninguna instrucción sobre cómo trabaja el equipo. El agente encontró mejoras reales, pero también cambió sin querer un esquema público y corrió solo una parte de las pruebas.

Para la segunda ronda pusieron en el repositorio las pautas de los mantenedores, como una guía de onboarding para un ingeniero nuevo. También activaron el modo `/goal` y le pidieron al agente que trabajara hasta terminar y preparara un pull request sin mezclar. Con ambas cosas, leyó las reglas antes de tocar el código, trabajó durante 11 horas y corrió las 16.892 pruebas unitarias. El equipo de Google atribuye a esa segunda ronda un resultado mucho más completo; no solo a las instrucciones.

Me gusta mucho esa imagen, porque le saca magia al asunto. Un agente se parece bastante a una persona muy capaz que recién llega: sabe hacer muchas cosas, pero no conoce tus acuerdos, tu historia ni lo que no se toca. Si no se lo explicás, va a firmar créditos en tu nombre sin saberlo.

## Lo que veo en las empresas grandes

En las corporaciones esto no es teoría. Mucho del software que sostiene a las grandes empresas es viejo, con procesos pesados de mantener, y eso ocurre con frecuencia. Ahí la deuda ya existe, y muchas veces nadie sabe bien cuánta es.

Lo que me funcionó en esos contextos es cambiar el orden en que se usa la IA.

Primero, para entender. Pedirle que recorra un módulo, explique qué hace, detecte dependencias y arme documentación que hoy no existe.

Después, para verificar. Que proponga pruebas sobre el comportamiento actual antes de cambiar nada, para saber qué se rompe si tocás algo.

Recién entonces, para desarrollar. Y con una definición de terminado bien trabajada, para que no haga más de lo que hace falta. Un agente sin límites claros tiende a mejorar cosas que nadie le pidió, y cada mejora no pedida es un poco más de superficie que mantener.

No tanto usar la IA para escribir más rápido, sino usarla para saber qué estás pagando.

## Qué preguntas haría antes de aceptar un cambio

Si tu equipo ya trabaja con agentes, te propongo algunas preguntas sencillas para cada cambio grande:

- ¿Alguien del equipo puede explicar este cambio sin leer el código delante?
- ¿Resuelve un problema real o mejora un benchmark?
- ¿Depende de detalles internos de otra librería o de otro sistema?
- ¿Agrega estado, caché o complejidad que vamos a tener que cuidar?
- Si mañana falla, ¿quién se hace cargo?

Ninguna de estas preguntas es nueva. Son ingeniería de software de siempre. Lo nuevo es la cantidad de veces por día que hay que hacerlas.

Y una más, quizás la más incómoda: ¿estamos midiendo cuánto código entra o cuánto código entendemos?

## Cierre

La IA no inventó la deuda técnica. Lo que hace es abaratar muchísimo el acto de endeudarse. Un crédito que antes llevaba días de trabajo ahora se firma en minutos, y llega prolijo, con nombres razonables y pruebas en verde.

Por eso creo que el rol que más valor gana no es el de quien genera más, sino el de quien sabe restar. Quien mira seis propuestas y tiene el criterio para quedarse con dos.

Si tu equipo genera el doble de código que hace un año, ¿también entiende el doble?

## Referencias

- Anthropic, [Redesigning source control at Anthropic](https://www.anthropic.com/engineering/redesigning-source-control) (13 de octubre de 2026).
- Google Developers Blog, [Optimizing a 200,000-line Python codebase overnight with Gemini 4 Argon](https://developers.googleblog.com/en/optimizing-a-200000-line-python-codebase-overnight-with-gemini-4-argon/) (13 de octubre de 2026).

Sigo estas conversaciones en [mi canal de YouTube](https://www.youtube.com/@saarreche). Un abrazo.
