---
title: "OpenAI propone una solución a Navier–Stokes usando 10.000 agentes"
description: "Qué afirma la propuesta matemática de OpenAI, cómo funcionó la organización multiagente y por qué todavía necesita revisión independiente."
publishedAt: "2026-09-10"
---

Uno de los problemas más difíciles de la matemática lleva casi un siglo haciendo una pregunta que, al principio, parece bastante sencilla: si un fluido empieza moviéndose suavemente, ¿puede llegar a un punto en el que su velocidad se vuelva matemáticamente incontrolable?

El 8 de septiembre de 2026, OpenAI publicó una propuesta de respuesta.

La noticia ya sería enorme por el problema involucrado. Pero además contiene una segunda historia: según la empresa, el trabajo no salió de una conversación brillante con un único modelo. Participaron del orden de **10.000 agentes concurrentes**, organizados en grupos que probaron caminos distintos, compartieron hallazgos y trabajaron durante casi cuatro días.

Entonces hay dos preguntas que conviene separar.

La primera es si la propuesta realmente resuelve el problema de Navier–Stokes.

La segunda es si acabamos de ver una nueva forma de investigar: no una inteligencia artificial aislada contestando una pregunta, sino una organización artificial completa explorando un problema científico.

Ambas cosas son fascinantes. Ninguna merece que saltemos los matices.

## Qué describen las ecuaciones de Navier–Stokes

Navier–Stokes es el nombre de una familia de ecuaciones que intenta describir cómo se mueven los fluidos.

Estamos hablando del agua alrededor de un barco, el aire sobre el ala de un avión, la sangre dentro de una arteria o las corrientes de la atmósfera. En lugar de seguir una por una todas las moléculas, las ecuaciones tratan al fluido como un medio continuo y describen cómo cambia su velocidad en cada punto del espacio y del tiempo.

En ese balance aparecen la aceleración, la presión, las fuerzas externas y la viscosidad: esa tendencia que tiene un fluido real a suavizar diferencias bruscas de velocidad.

También aparece una dificultad decisiva. El fluido transporta su propio movimiento. La velocidad modifica la velocidad, y eso permite que estructuras de distintas escalas se estiren, interactúen y concentren de formas extremadamente complejas.

En dos dimensiones entendemos bastante mejor el comportamiento. En tres dimensiones, los vórtices pueden estirarse y amplificarse. Ahí vive el gran problema.

## La pregunta del millón de dólares

Desde el trabajo de Jean Leray en 1934 sabemos que existen soluciones globales en un sentido matemático más débil y con energía finita. Lo que permanecía abierto era si una solución que empieza perfectamente suave puede conservar esa suavidad para siempre en tres dimensiones.

Quizá la viscosidad siempre termina dominando y evita cualquier catástrofe matemática.

O quizá el propio movimiento puede concentrar velocidad o vorticidad en una región cada vez más pequeña hasta producir una singularidad en tiempo finito.

En este contexto, una singularidad no es necesariamente una explosión literal dentro de un vaso de agua. Significa que alguna cantidad matemática crece sin límite y la solución suave ya no puede continuar como antes.

En el año 2000, el Clay Mathematics Institute incluyó esta pregunta entre sus siete Problemas del Milenio, cada uno asociado a un premio de un millón de dólares.

La formulación oficial permite resolver el problema por más de un camino. Se puede demostrar que las soluciones suaves siempre existen o construir un contraejemplo permitido por el enunciado: datos iniciales y una fuerza externa suaves que, aun así, produzcan una singularidad.

Esto es central para entender qué presentó OpenAI.

## Lo que OpenAI afirma haber demostrado

En su [publicación oficial](https://openai.com/index/navier-stokes-solution/), OpenAI dice que su sistema construyó una prueba analítica y una formalización en Lean de un resultado muy específico.

El fluido empieza en reposo. Después recibe una fuerza externa suave. La energía total permanece finita, pero la velocidad crece sin límite en una zona cada vez más pequeña y alcanza una singularidad en tiempo finito.

Según la empresa, esto establece las alternativas C y D de la formulación oficial del Problema del Milenio.

La precisión importa. La propuesta no dice que cualquier flujo cotidiano va a explotar ni que se resolvió el caso sin fuerza externa. Utiliza una fuerza, pero esa fuerza tiene que ser suave. No sería válido introducir desde afuera un empujón infinito y presentar como descubrimiento la singularidad que uno mismo colocó ahí.

El desafío es construir un movimiento donde las partes de la ecuación crezcan y, al mismo tiempo, se cancelen con tanta precisión que la fuerza externa final siga siendo perfectamente regular.

## La imagen central: un vórtice que se afina

La construcción se organiza alrededor de un vórtice: una región de fluido que gira, entra en espiral y se estira como un hilo.

A medida que se acerca el momento singular, el núcleo se vuelve más delgado. El giro y el movimiento axial aumentan, mientras el volumen donde ocurre todo esto se reduce.

Aquí aparece una idea que al principio resulta contraintuitiva: **la velocidad puede crecer sin límite aunque la energía total permanezca acotada**.

Imaginemos una aguja dibujada en un gráfico. En cada paso se vuelve más alta, pero también mucho más estrecha. La altura puede tender al infinito mientras el área total debajo sigue siendo finita.

Algo parecido ocurre en la propuesta. La velocidad máxima aumenta dentro de una región cuyo volumen disminuye todavía más rápido. Como la energía depende de integrar el cuadrado de la velocidad sobre todo el espacio, una velocidad enorme en un lugar suficientemente pequeño no obliga por sí sola a que la energía completa explote.

La analogía ayuda a imaginarlo. No reemplaza la prueba de 166 páginas.

## El trabajo difícil es mantener suave la fuerza

Uno podría inventar casi cualquier movimiento de un fluido y luego calcular qué fuerza externa haría falta para sostenerlo. El problema aparece si esa fuerza también se vuelve infinita. En ese caso no construimos una singularidad desde la dinámica del fluido; solamente la escondimos en el empujón.

El vórtice base funciona en la región central, pero al conectarlo con un exterior tranquilo aparece un desequilibrio en una zona con forma de anillo. Sin una corrección, la fuerza necesaria allí perdería suavidad.

La propuesta agrega pulsos oscilatorios localizados. Podemos imaginarlos como ondulaciones pequeñas y cuidadosamente orientadas. Aunque individualmente suban y bajen, su interacción no lineal produce un efecto medio sobre el flujo de fondo.

Esos pulsos transportan el momento que falta y cancelan la parte peligrosa del desequilibrio. Luego aparecen correcciones sucesivas para reducir los errores restantes, orden por orden, hasta dejar un residuo que pueda actuar como la fuerza externa suave permitida por el problema.

Dicho sin fórmulas: la construcción intenta lograr que el propio movimiento del fluido produzca el balance que necesita, en lugar de pedirle una fuerza imposible desde afuera.

Si todos esos pasos resisten el análisis, el resultado encaja en uno de los caminos expresamente aceptados por el enunciado.

## Una prueba en Lean tampoco cierra sola la discusión

OpenAI también publicó una formalización en Lean, un asistente de pruebas que comprueba si cada paso se deriva de las definiciones y resultados anteriores dentro del sistema formal.

Esto es mucho más fuerte que entregar solamente una explicación en lenguaje natural. Permite inspeccionar dependencias, definiciones y pasos lógicos con una precisión difícil de sostener a mano en una construcción tan extensa.

Pero Lean no certifica por sí solo que el problema histórico haya quedado cerrado.

Todavía hay que comprobar que la formalización representa exactamente el enunciado relevante, que las definiciones capturan las condiciones exigidas y que no se introdujo una diferencia sutil entre el teorema formalizado y el problema original. Después viene la revisión de especialistas y, finalmente, la aceptación de la comunidad matemática.

OpenAI dice que su resultado resuelve las alternativas C y D, pero también aclara que no pretende reclamar el Premio del Milenio. Por eso, hoy prefiero hablar de una **propuesta de solución acompañada por una prueba formal**, no de un capítulo definitivamente cerrado.

Esa cautela no le quita importancia. Es parte de cómo funciona la matemática.

## El modelo no era Astra

Otro detalle se pierde fácilmente en los titulares.

La propuesta no fue generada principalmente por GPT-6 Astra. OpenAI afirma que utilizó un modelo interno todavía en entrenamiento y “significativamente más capaz” que Astra.

Astra apareció después. Según la publicación, dedicó 17 horas adicionales a formalizar y verificar el resultado en Lean.

La diferencia importa porque estamos viendo dos tipos de trabajo. Un sistema explora, inventa y combina caminos matemáticos. Otro convierte el resultado en una estructura formal que puede ser revisada con herramientas automáticas.

No es simplemente un modelo respondiendo mejor a una pregunta. Es un proceso con etapas, funciones distintas y mecanismos de comprobación.

## Cómo trabajan 10.000 agentes sobre el mismo problema

El experimento comenzó el 1 de septiembre. OpenAI quería evaluar su modelo interno en los Problemas del Milenio y algunas preguntas relacionadas.

En lugar de darle una consigna gigantesca a un solo agente, dividió el trabajo.

Distintos grupos recibieron variantes diferentes del problema. Algunos intentaron demostrar la existencia de soluciones suaves. Otros buscaron un contraejemplo. También hubo agentes trabajando sobre problemas cercanos que podían ofrecer ideas útiles.

Uno de esos escalones fue el problema de regularidad para las ecuaciones de Euler, similares a Navier–Stokes pero sin el término de viscosidad. Cerca de cien agentes trabajaron aproximadamente 50 horas en una propuesta para ese caso.

Cuando ese camino produjo algo prometedor, OpenAI desplazó recursos hacia Navier–Stokes y compartió los hallazgos con nuevos grupos. Codex fue utilizado para consolidar ideas de distintos equipos y volver a introducir los resultados más útiles en otras líneas de trabajo.

El grupo que finalmente produjo la propuesta llegó a involucrar del orden de 10.000 agentes simultáneos. La empresa dice que alcanzaron el resultado unas 88 horas después de iniciar el esfuerzo.

Solo durante el trabajo sobre Navier–Stokes, esos agentes intercambiaron 2,7 millones de mensajes y produjeron aproximadamente 130.000 millones de tokens de salida.

Son cifras comunicadas por OpenAI sobre una infraestructura interna. No podemos reconstruir completamente el experimento desde afuera. Aun así, revelan una escala de trabajo difícil de ignorar.

## La unidad de inteligencia empieza a cambiar

La parte que más me interesa quizá no sea que hubo 10.000 agentes. El número impresiona, pero la cantidad por sí sola no resuelve nada.

Diez mil agentes repitiendo el mismo error solo producen una versión muy cara del mismo error.

Lo decisivo fue la organización: dividir el problema, crear diversidad de enfoques, mover recursos hacia las rutas prometedoras, rescatar resultados parciales, cruzar conocimiento y verificar lo construido.

Eso se parece menos a conversar con un chatbot y más a dirigir un instituto de investigación temporal.

La unidad de trabajo deja de ser únicamente el modelo. También incluye la arquitectura que decide:

- qué preguntas recibe cada grupo;
- qué herramientas puede utilizar;
- cuándo comparte información;
- cómo se seleccionan los resultados útiles;
- cuándo se abandona un camino;
- cómo se comprueba la propuesta final.

Estamos viendo algo parecido en programación. Un modelo potente importa, pero el sistema que organiza su trabajo puede importar tanto como él.

## No empezaron desde cero

Hay décadas de matemática humana detrás de cualquier resultado de este tipo.

Los agentes trabajaron sobre definiciones, teoremas, técnicas, bibliotecas formales y problemas construidos por personas. Matemáticos e investigadores eligieron qué evaluar, diseñaron el sistema, supervisaron el proceso y prepararon la publicación.

La propia OpenAI también explica que el proyecto comenzó después de escuchar rumores relacionados con trabajos de Levent Alpöge y Tristan Buckmaster sobre las ecuaciones de Euler. Tras contactarlos, la empresa determinó que se trataba de un resultado diferente y reconoció su prioridad en el caso de Euler con fuerza.

Esto no reduce el posible logro. Lo ubica dentro del proceso real de la ciencia: una conversación acumulativa donde las ideas tienen historia, autores y contextos.

Hablar de “la IA resolvió Navier–Stokes” borra tanto la organización humana como la tradición matemática que hizo posible el intento.

## Qué sería realmente histórico

Si la propuesta supera la revisión independiente, estaríamos frente a un resultado matemático extraordinario.

Pero incluso si aparece un error reparable o una dificultad más profunda, el experimento ya deja una señal.

Miles de agentes pudieron explorar en paralelo, especializarse, fallar por caminos diferentes, conservar ideas parciales y reunirlas en una construcción extensa que luego fue trasladada a un asistente formal de pruebas.

Quizá la próxima generación de descubrimientos no aparezca preguntándole una sola vez a una superinteligencia. Puede venir de construir comunidades artificiales de investigadores, críticos, coordinadores y verificadores que trabajen junto a científicos humanos.

Eso abre preguntas nuevas. ¿Cómo auditamos una investigación producida a esa escala? ¿Cómo atribuimos contribuciones? ¿Cómo evitamos que una idea incorrecta se propague entre miles de agentes? ¿Quién asume la responsabilidad cuando una organización artificial completa entrega una conclusión?

El desafío deja de ser solamente construir un modelo que razone mejor. También pasa por aprender a organizar muchas inteligencias sin perder rigor, contexto ni responsabilidad.

Entonces, ¿OpenAI resolvió Navier–Stokes?

Hoy diría que presentó una propuesta concreta, técnicamente ambiciosa y acompañada por una formalización verificable. La empresa afirma que establece una singularidad de velocidad en tiempo finito, con energía acotada y una fuerza externa suave. Ahora la matemática tiene que hacer lo que siempre hace frente a una prueba importante: revisarla, atacarla y decidir si cada pieza se sostiene.

Mientras eso ocurre, ya podemos prestar atención a la segunda historia. No vimos solamente una IA respondiendo una pregunta difícil. Vimos el ensayo de una organización científica compuesta por miles de agentes.

Si la prueba se confirma, tendremos que hablar de un hito matemático y de un hito en inteligencia artificial. Si necesita correcciones, seguiremos teniendo delante una demostración de hacia dónde puede avanzar la investigación asistida.

Podés acompañar la explicación completa y contarme qué te impresiona más —la propuesta matemática, la prueba en Lean o la escala multiagente— en [el video original de YouTube](https://youtu.be/1xoghaOmnIs).

