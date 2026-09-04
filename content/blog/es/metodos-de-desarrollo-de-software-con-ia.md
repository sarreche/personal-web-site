---
title: "Métodos de desarrollo de software que cobran relevancia con la IA"
description: "Prompts, vibe coding, especificaciones, TDD y agentes: qué sigue vigente y qué conviene revisar cuando delegamos la implementación en una IA."
publishedAt: "2026-09-04"
---

Hay una pregunta que me interesa cada vez más cuando hablamos de programar con IA: ¿cómo organizamos el trabajo cuando podemos delegar buena parte de la implementación?

Porque pedir código es relativamente fácil. Lo complicado aparece cuando ese código tiene que convivir con lo que ya existe, resolver una necesidad real y seguir funcionando después de la demostración. Ahí vuelven preguntas bastante conocidas: qué estamos construyendo, qué dejamos afuera, cómo lo vamos a probar y quién decide si está listo.

Este año preparé un video sobre distintas formas de desarrollar software con IA. Al volver al guion para este artículo, encontré ideas que mantendría y algunas afirmaciones que hoy escribiría con más cuidado. Sobre todo, esa sensación de que estamos estrenando seis metodologías y dejando atrás todo lo anterior.

No lo veo tan ordenado. Estamos mezclando prácticas que tienen décadas con herramientas nuevas y formas de delegar que todavía estamos aprendiendo a usar. Esa mezcla me parece bastante más interesante que la búsqueda de una metodología que venga a reemplazar a todas las demás.

## La generación de código tiene historia

La ingeniería de software nunca fue solamente organizar personas para que escribieran código. También se ocupó de entender problemas, coordinar decisiones, administrar cambios y sostener sistemas en producción. Poner Agile, Scrum y DevOps en una misma bolsa como si fueran métodos para tipear más rápido deja afuera buena parte de su propósito.

Tampoco estamos ante la primera generación automática de código. Los lenguajes específicos de dominio y sus generadores tienen una historia larga; ya permitían expresar ciertas soluciones a un nivel distinto del código de implementación. [Martin Fowler sobre lenguajes específicos de dominio](https://martinfowler.com/bliki/DomainSpecificLanguage.html).

Lo que me interesa de la IA es la posibilidad de trabajar sobre pedidos abiertos, conversar sobre alternativas y revisar una implementación durante el mismo intercambio. Eso nos obliga a pensar qué decisiones estamos delegando y cuáles estamos dejando implícitas sin darnos cuenta.

## Trabajar con prompts: la conversación necesita dejar algo más

El ejemplo más sencillo sería pedir: «Escribí una función que lea este CSV y calcule estadísticas». Después vemos el resultado, corregimos algo y seguimos conversando. Podemos llamar a eso *prompt-driven development*, aunque prefiero entenderlo como una forma de interacción antes que como un proceso completo de ingeniería.

En el guion original decía que los prompts no eran verificables ni servían como documentación. Es demasiado tajante. Podemos guardarlos, versionarlos y evaluar qué resultados producen. Incluso pueden contener requisitos muy precisos. Lo que no deberíamos esperar es que repetir la misma frase garantice una implementación idéntica, especialmente si cambian el modelo, el contexto o las herramientas disponibles.

El problema que me preocupa es más cotidiano: tomar decisiones importantes durante una conversación y no dejarlas registradas en ningún otro lugar.

Volvamos al CSV. ¿Qué hacemos con una fila incompleta? ¿Se descarta, se informa o se detiene la importación? ¿Qué significa un campo vacío? Si resolvemos esas preguntas por chat y después desaparecen entre veinte pedidos de cambios, el próximo que toque el sistema tendrá que reconstruir la conversación.

Yo querría que esas decisiones terminaran en el repositorio, en una especificación, en ejemplos o en pruebas. El prompt puede iniciar el trabajo; no tiene por qué ser el único lugar donde vive su explicación.

## Vibe coding: explorar una idea sin confundirlo con validarla

Hay algo muy atractivo en describir una aplicación, verla aparecer y ajustar lo que no nos convence. Para explorar una idea, esa facilidad tiene muchísimo valor. Podemos descubrir que una pantalla sobra o que el flujo que imaginábamos resulta incómodo antes de invertir demasiado en él.

Pero conviene precisar el término. En la distinción que hace Simon Willison, *vibe coding* implica despreocuparse del código que se está generando. Usar IA y revisar cuidadosamente la implementación es otra forma de trabajar. No todo desarrollo asistido por IA entra en la misma categoría. [Agentic Engineering Patterns](https://simonwillison.net/2026/Feb/23/agentic-engineering-patterns/).

Imaginemos una aplicación de reservas. La demo permite elegir una hora, confirmar y ver un mensaje de éxito. Hasta ahí, perfecto. Pero todavía no sabemos qué pasa si dos personas reservan el mismo horario al mismo tiempo o si alguien intenta modificar la reserva de otro usuario.

Eso no vuelve inútil al prototipo. Nos permite ubicarlo: comprobamos una parte de la experiencia, mientras otras preguntas siguen abiertas. El riesgo aparece cuando empezamos a tratar esa demo como si ya hubiera respondido todo.

## Especificaciones: hacer visibles las decisiones

El desarrollo guiado por especificaciones, o *spec-driven development*, propone darle más peso a la descripción de lo que queremos construir antes de generar la implementación. Hay herramientas actuales que organizan ese recorrido; GitHub Spec Kit, por ejemplo, estructura un flujo de especificación, plan, tareas e implementación. [Documentación de Spec Kit](https://github.github.com/spec-kit/).

A mí me interesa menos el nombre que la conversación que obliga a tener.

«Quiero una aplicación de reservas» deja muchas decisiones abiertas. Una descripción más útil podría establecer que un horario admite una sola reserva confirmada, que las cancelaciones tienen un plazo y que el usuario solamente puede consultar sus propios datos. También debería decir qué pasa cuando una operación falla.

No hace falta escribir cincuenta páginas para cada cambio. Para una funcionalidad pequeña, unas pocas reglas y ejemplos pueden alcanzar. Y si durante la implementación descubrimos que entendimos mal el problema, hay que poder revisar esa descripción.

Una especificación en lenguaje natural sigue teniendo ambigüedades. Tampoco demuestra por sí sola que el código sea correcto. Su valor está en dejar algo concreto que podamos discutir y contrastar con el resultado, en lugar de depender de que el modelo haya interpretado nuestra intención como esperábamos.

## TDD: las pruebas ayudan a dirigir, pero también hay que revisarlas

Test-Driven Development ya proponía orientar el diseño mediante pruebas mucho antes de los asistentes actuales. Su ciclo incluye escribir una prueba que falle por el comportamiento pendiente, implementar lo necesario para pasarla y refactorizar. Esa última parte importa: acumular código que pasa tests no alcanza para mantener un buen diseño. [Descripción de TDD](https://martinfowler.com/bliki/TestDrivenDevelopment.html).

Con IA podemos repartir ese trabajo de distintas maneras. Una persona puede definir los casos relevantes y pedirle al agente que implemente. También puede pedirle que proponga pruebas, discutirlas y recién después avanzar. Lo importante es que no desaparezca la pregunta sobre qué estamos comprobando.

En el ejemplo de reservas, una prueba podría verificar que dos solicitudes concurrentes no confirmen el mismo horario. Eso da una señal mucho más concreta que pedir «evitá errores de concurrencia» y confiar en la explicación final.

Ahora bien, si el agente interpreta mal la regla y escribe tanto la prueba como la implementación a partir de esa interpretación, ambas pueden coincidir y estar equivocadas. Una batería de tests tampoco cubre automáticamente seguridad, rendimiento, accesibilidad o todos los fallos posibles.

Por eso cambiaría otra frase del guion: los tests no son toda la verdad del sistema. Son evidencia sobre los casos que decidimos comprobar. Me gusta usarlos para acortar la distancia entre lo que pedimos y lo que observamos, sin convertir el color verde del pipeline en una autorización para dejar de pensar.

## Trabajar con agentes no exige inventar un organigrama

Cuando hablamos de desarrollo con agentes, podemos imaginar un arquitecto, un programador y un tester virtuales pasándose tareas. Es una posibilidad, pero no es el requisito que define el enfoque. Un solo agente puede inspeccionar un proyecto, usar herramientas y continuar a partir de lo que encuentra. La distinción entre un recorrido fijo y un agente que decide sus siguientes pasos está bien explicada en la guía de Anthropic sobre sistemas agénticos. [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents).

Para mí, la diferencia práctica está en cuánto del recorrido delegamos. En vez de pedir una función aislada, podemos asignar un cambio acotado y esperar que se investigue el código existente, se proponga una solución y se presenten los resultados de las verificaciones.

Ahí cobra importancia la forma de encargar el trabajo. «Arreglá las reservas» es un pedido enorme. «Investigá por qué se permiten reservas duplicadas, proponé una corrección y no cambies el esquema de datos sin consultarlo» define mejor tanto el objetivo como los límites.

Podemos sumar otros agentes cuando haya trabajo independiente o una revisión que lo justifique. Pero multiplicarlos también exige coordinar cambios, resolver desacuerdos y revisar qué evidencia produjo cada uno. No asumiría que agregar un rol con nombre de tester equivale a tener una validación independiente.

El resultado que quiero recibir incluye el cambio, las pruebas ejecutadas, las limitaciones encontradas y las decisiones pendientes. Eso me permite revisar el trabajo sin tener que confiar solamente en un «terminado».

## La intención es un punto de partida, no un sistema terminado

*Intent-driven development* es una etiqueta que usaría con cautela. Puede describir un enfoque orientado a objetivos, pero no la presentaría como una metodología única, cerrada y compartida por toda la industria.

Pedir «quiero reducir las reservas que quedan sin confirmar» es un buen comienzo. Nos dice qué problema importa y permite explorar varias soluciones. Quizás falte un recordatorio. Quizás el proceso de pago sea confuso. Quizás estemos pidiendo demasiados datos.

Todavía hace falta entender qué ocurre, elegir una intervención y decidir cómo mediremos si mejora algo. Si saltamos directamente del objetivo al código, la IA también puede construir con mucha prolijidad una solución al problema equivocado.

Por eso ya no usaría el ejemplo del guion que pedía un backend de pagos «seguro» y dejaba el resto a la IA. Palabras como seguridad, escala o cumplimiento abren preguntas; no las resuelven. Alguien tiene que convertirlas en decisiones y verificaciones concretas.

## Cómo se combinan en un trabajo real

No siento que haya que elegir una de estas etiquetas y jurarle fidelidad. En una misma funcionalidad podemos conversar para entender el problema, probar una idea con un prototipo, registrar las reglas, escribir tests y delegar parte de la implementación a un agente.

En la aplicación de reservas, por ejemplo, primero intentaría entender por qué se producen los duplicados. Después dejaría explícita la regla que queremos preservar, prepararía una forma de reproducir el fallo y encargaría una corrección acotada. Revisaría el cambio y cómo se comporta al publicarlo. Si aparecen casos que no habíamos contemplado, actualizaría también las pruebas y la descripción del comportamiento.

Ese recorrido no pierde valor porque la IA escriba buena parte del código. Me parece que se vuelve más necesario cuando podemos producir cambios más rápido de lo que llegamos a comprender sus consecuencias.

Al volver a este tema, me quedo con una idea menos espectacular que la del guion original, pero más útil para mi trabajo: especificar, probar, revisar y aprender del uso real siguen teniendo muchísimo sentido. Ahora tenemos otra capacidad de ejecución y necesitamos aprender a aprovecharla sin soltar esas prácticas.

Quiero poder delegar cada vez más. También quiero entender qué estoy aceptando cuando digo que algo está listo. Para mí, esa tensión es una buena parte de la ingeniería de software que nos toca hacer hoy.

Si querés ver la reflexión que dio origen a este artículo, te dejo [el video en YouTube](https://youtu.be/fVzUN4-WVuU). Lo grabé este año; esta versión retoma el tema y ajusta algunos matices del planteo original.
