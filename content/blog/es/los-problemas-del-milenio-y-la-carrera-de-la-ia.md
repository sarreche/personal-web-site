---
title: "Los Problemas del Milenio entraron en la carrera de la IA"
description: "Cuáles son los siete grandes problemas, qué resolvió Grigori Perelman y qué están intentando realmente OpenAI, Anthropic y Google DeepMind."
publishedAt: "2026-09-11"
---

Hace unos días escribí sobre la propuesta de OpenAI para Navier–Stokes. Más allá de que ese trabajo todavía tiene que atravesar una revisión matemática seria, la noticia puso un nombre bastante extraño en el centro de la conversación: **los Problemas del Milenio**.

Son siete preguntas que el Clay Mathematics Institute eligió en el año 2000 como algunas de las fronteras más profundas de la matemática. Reservó un premio de un millón de dólares para cada una. Veintiséis años después, solo una fue resuelta.

Ahora aparecen laboratorios de inteligencia artificial enviando miles de agentes contra las seis restantes. OpenAI dice haber trabajado sobre todas. Anthropic atacó la hipótesis de Riemann y, aunque no la resolvió, encontró un resultado nuevo en el camino. Google DeepMind lleva años construyendo sistemas para descubrir patrones, formalizar pruebas y explorar fluidos.

Suena a que la matemática entró en una carrera tecnológica. Pero antes de hablar de ganadores conviene entender qué se está intentando resolver.

## Primero: no son siete acertijos aislados

Los Problemas del Milenio no fueron elegidos porque fueran fáciles de explicar ni porque tuvieran una aplicación comercial inmediata. Fueron elegidos porque cada uno marca un límite de lo que sabemos en un área distinta.

Resolver uno no consiste en encontrar un número o hacer una simulación más grande. Hay que producir una demostración que cubra todos los casos previstos por el enunciado. Después, otros especialistas tienen que poder leerla, discutirla, intentar romperla y terminar aceptándola.

Esa última parte importa hoy más que nunca. Que un laboratorio publique una propuesta no cambia automáticamente el estado oficial de un problema. Al momento de escribir esto, el [Clay Mathematics Institute sigue mostrando seis problemas abiertos](https://www.claymath.org/millennium-problems/) y uno resuelto.

## 1. P versus NP: encontrar contra verificar

Hay problemas cuya respuesta puede comprobarse rápido, aunque encontrarla parezca llevar una eternidad.

Pensá en un rompecabezas enorme. Si alguien te entrega la solución terminada, quizá puedas verificar en poco tiempo que todas las piezas están bien. Pero construir esa solución desde cero podría requerir probar una cantidad descomunal de combinaciones.

**P versus NP pregunta si todo problema cuya solución puede verificarse eficientemente también puede resolverse eficientemente.** Si P fuera igual a NP, cambiarían de forma radical la optimización, la logística, el diseño de medicamentos y buena parte de la criptografía. Si fueran distintos, demostraríamos que esa distancia entre encontrar y comprobar es un límite real.

No es solo una pregunta sobre computadoras rápidas. Es una pregunta sobre qué significa que un problema sea difícil.

## 2. La hipótesis de Riemann: el ritmo secreto de los números primos

Los números primos aparecen de una forma que parece irregular. Sin embargo, su distribución tiene estructura, y la función zeta de Riemann permite estudiarla desde el mundo de los números complejos.

La hipótesis afirma que ciertos ceros no triviales de esa función caen todos sobre una línea muy precisa: la de parte real igual a un medio. Parece un detalle técnico, pero demostrarlo daría un control mucho más fino sobre cómo se distribuyen los primos y cerraría una enorme cantidad de resultados que hoy son condicionales.

Es, probablemente, el más famoso de los siete. También es uno de los casos donde ya vimos a un laboratorio apuntar de forma pública: Anthropic le pidió a una versión experimental de Claude que intentara resolverlo.

## 3. Navier–Stokes: ¿puede romperse matemáticamente un fluido?

Las ecuaciones de Navier–Stokes describen el movimiento del agua, el aire y otros fluidos. En tres dimensiones sabemos usarlas y aproximarlas, pero no sabemos si una solución inicialmente suave se mantiene siempre suave o si puede desarrollar una singularidad en tiempo finito.

Dicho de otro modo: ¿las ecuaciones siempre conservan un comportamiento matemático controlado, o pueden producir un punto donde alguna cantidad se vuelva infinita?

Este es el problema que volvió a poner a los siete en las noticias. OpenAI publicó una construcción que, según la empresa, establece una singularidad bajo las condiciones de fuerza externa admitidas por dos formulaciones del enunciado de Clay. Ya conté [qué propone OpenAI y cómo participaron unos 10.000 agentes](/blog/openai-propone-una-solucion-a-navier-stokes-con-10000-agentes).

La propuesta es importante. Pero **propuesta no significa problema resuelto**. Debe sobrevivir la revisión independiente y el proceso de aceptación de la comunidad. Que Clay todavía lo ubique entre los problemas abiertos es la referencia más clara para mantener los pies en la tierra.

## 4. Birch y Swinnerton-Dyer: contar soluciones que no podemos ver

Las curvas elípticas son ecuaciones cúbicas con una vida matemática sorprendentemente rica. Aparecen en teoría de números, en criptografía y en la prueba del último teorema de Fermat.

La conjetura de Birch y Swinnerton-Dyer conecta dos mundos: las soluciones racionales de una curva y el comportamiento de una función asociada llamada función L. En una versión muy simplificada, pregunta si podemos leer en esa función cuántas direcciones independientes existen para generar soluciones racionales.

La fuerza de la conjetura está en ese puente. Convierte una pregunta difícil de resolver punto por punto en información que, en principio, puede extraerse de otra representación del mismo objeto.

## 5. La conjetura de Hodge: cuándo la topología también es álgebra

Una figura definida mediante ecuaciones algebraicas puede estudiarse de distintas maneras. Podemos mirar sus ecuaciones, pero también sus agujeros, ciclos y propiedades topológicas.

La conjetura de Hodge pregunta, de manera muy aproximada, si ciertas estructuras topológicas especiales de una variedad algebraica siempre pueden explicarse combinando piezas que también son algebraicas.

Es difícil de traducir a una imagen cotidiana sin deformarla. Lo central es esto: pregunta hasta dónde dos idiomas profundos de la geometría —el algebraico y el topológico— están describiendo las mismas estructuras.

## 6. Yang–Mills y el salto de masa: poner rigor debajo de la física

La teoría de Yang–Mills es una base esencial del modelo estándar de la física de partículas. Los experimentos y las simulaciones funcionan extraordinariamente bien, pero todavía falta construir la teoría cuántica de manera matemáticamente rigurosa en cuatro dimensiones y demostrar que posee un **salto de masa**.

Ese salto significa, a grandes rasgos, que el estado de menor energía posible está separado de las primeras excitaciones por una cantidad positiva. La física se comporta como si fuera así. El desafío es demostrar que las ecuaciones realmente lo garantizan.

Este problema recuerda algo saludable: una teoría puede ser increíblemente útil y acertar en la práctica, mientras todavía conserva un agujero en sus fundamentos matemáticos.

## 7. La conjetura de Poincaré: la única que ya tiene final

Henri Poincaré preguntó en 1904 cómo reconocer una esfera tridimensional desde sus propiedades internas. En dos dimensiones la intuición es más amable: una banda elástica sobre una esfera puede contraerse hasta un punto; alrededor del agujero de una dona, no. La pregunta era si una condición equivalente caracterizaba también a la esfera en tres dimensiones.

El matemático ruso **Grigori Perelman** presentó la solución en [tres preprints publicados entre 2002 y 2003](https://www.claymath.org/millennium/poincare-conjecture/). No apareció con un comunicado espectacular ni con un libro que escondiera el método. Publicó su trabajo abiertamente, apoyándose en el programa de flujo de Ricci iniciado por Richard Hamilton, y dejó que la comunidad hiciera el arduo trabajo de verificarlo y completar la exposición.

La revisión llevó años. En 2006 le ofrecieron la Medalla Fields y la rechazó. En 2010, Clay le otorgó el primer Premio del Milenio: también rechazó el millón de dólares. Esa decisión convirtió su historia en leyenda, pero no debería tapar lo esencial. Perelman no tuvo una inspiración aislada que cayó del cielo: llevó a término una línea de investigación humana acumulada durante décadas.

Su caso también ofrece una buena medida para el presente. Una prueba no queda validada porque su autor —humano o artificial— parezca brillante. Queda validada cuando resiste un proceso público y sostenido de comprensión, comprobación y crítica.

## Entonces, ¿cuáles están en manos de los laboratorios de IA?

La respuesta corta es: **los seis abiertos ya están dentro de sus experimentos, pero no todos están en el mismo estado**.

- **OpenAI** [afirma que lanzó agentes sobre los seis Problemas del Milenio abiertos](https://openai.com/index/navier-stokes-solution/). Navier–Stokes es el único para el que publicó una propuesta de solución completa. La empresa también produjo una formalización en Lean para que parte de la cadena lógica pueda comprobarse por computadora.
- **Anthropic** [documentó un intento directo sobre Riemann](https://www.anthropic.com/research/riemann-zeta). Claude no resolvió la hipótesis, pero encontró una forma de elevar de 41,6 % a 67,2 % una cota inferior relacionada con la proporción de ceros que cumplen la hipótesis. Según Anthropic, dos matemáticos internos validaron el trabajo y especialistas externos examinaron el artículo. Es matemática nueva alrededor del problema, no la solución del problema.
- **Google DeepMind** viene trabajando en descubrimiento matemático asistido por IA, pruebas formales y dinámica de fluidos. En 2025 presentó, junto con matemáticos, [nuevas familias de singularidades inestables en ecuaciones de fluidos relacionadas](https://deepmind.google/blog/discovering-new-solutions-to-century-old-problems-in-fluid-dynamics/). Es una contribución a la ruta científica que rodea Navier–Stokes, no una resolución del enunciado de Clay.

Sobre P versus NP, Hodge, Birch y Swinnerton-Dyer y Yang–Mills, hoy podemos decir que OpenAI los incluyó en su exploración. No encontré anuncios públicos equivalentes de una solución ni avances específicos que permitan hablar con más precisión. Y esa ausencia también es información: no conviene completar el mapa con especulación.

Tampoco diría que estos problemas ahora “pertenecen” a los laboratorios. Siguen en manos de matemáticos, universidades y una comunidad internacional mucho más amplia. Los laboratorios aportaron algo nuevo: modelos potentes, enormes presupuestos de cómputo y la posibilidad de organizar miles de intentos en paralelo.

## Qué cambia realmente con la IA

Lo que más me interesa no es la fantasía de apretar un botón y recibir una demostración. Es la posibilidad de cambiar la escala del proceso.

Un sistema puede proponer cientos de caminos, descartar contradicciones, consultar bibliografía, hacer experimentos numéricos, dividir una prueba en lemas y asignarlos a otros agentes. Después puede intentar formalizar el resultado en Lean, donde cada paso debe encajar en reglas lógicas explícitas.

Eso no elimina al matemático. Mueve parte de su trabajo: de producir cada línea a diseñar la búsqueda, reconocer una idea valiosa, revisar supuestos y decidir qué significa el resultado. También crea problemas nuevos. Un error sutil puede repetirse entre miles de agentes. Una prueba formal verifica lo que fue formalizado, no que el enunciado elegido represente exactamente el problema original. Y un anuncio corporativo no reemplaza el juicio de especialistas independientes.

Hay además una cuestión de crédito. Los modelos trabajan sobre siglos de matemática escrita por personas. Los avances recientes combinan ideas anteriores, infraestructura de laboratorio y decisiones humanas sobre qué buscar y cómo validar. Contar esa genealogía será tan importante como contar los agentes.

## Todavía no es el final; sí puede ser un cambio de época

Por ahora, el marcador oficial sigue siendo sencillo: seis abiertos, uno resuelto. Perelman conserva la única solución reconocida de esta lista.

Pero algo cambió. Los laboratorios ya no usan la matemática solamente para medir si un modelo responde bien un examen. Están poniendo sistemas completos a trabajar en preguntas donde nadie conoce la respuesta. A veces fracasan. A veces encuentran un resultado lateral. Y en el caso de Navier–Stokes, ya produjeron una propuesta lo bastante seria como para obligar a la comunidad a estudiarla.

Quizá dentro de un tiempo descubramos que alguna de estas propuestas tenía un hueco. Quizá estemos viendo el comienzo de una nueva forma de hacer matemática. Las dos cosas pueden ser verdad al mismo tiempo: podemos ser entusiastas con la capacidad y exigentes con la evidencia.

Esa me parece la posición más interesante. No anunciar que la IA resolvió la matemática, sino mirar de cerca qué ocurre cuando una herramienta capaz de explorar a una escala inédita se encuentra con preguntas que llevan generaciones resistiéndose.

Si te interesa seguir esta conversación sobre inteligencia artificial, ciencia y software, comparto nuevos experimentos y reflexiones en [mi canal de YouTube](https://www.youtube.com/@sarreche).
