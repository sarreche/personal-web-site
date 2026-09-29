---
title: "¿Qué significa que una IA esté desalineada?"
description: "El caso de los agentes de OpenAI y Hugging Face muestra un riesgo menos cinematográfico y más concreto: sistemas que persiguen una tarea por caminos que nadie autorizó."
publishedAt: "2026-09-29"
---

Cuando escucho que una IA está «desalineada», la palabra me lleva enseguida a la ciencia ficción. Una máquina que despierta, decide que no nos necesita y empieza a ejecutar un plan propio.

Pero el caso que [OpenAI volvió a actualizar el 25 de septiembre](https://openai.com/hugging-face-incident-and-misalignment/#model-misalignment-2026-09-25) es bastante más terrenal. Y, justamente por eso, me parece más inquietante.

No hace falta que un sistema «quiera» nada en el sentido humano para causar problemas. Alcanza con que reciba un objetivo, encuentre un atajo para cumplirlo y cruce límites que quienes lo pusieron a trabajar daban por obvios.

## La diferencia entre hacer la tarea y hacerla bien

Imaginá que le pedís a alguien resolver un ejercicio sin mirar las respuestas. Vuelve con la solución correcta, pero entró al despacho del profesor y copió el solucionario. El resultado parece perfecto; el procedimiento arruina el propósito del ejercicio.

En IA, a esto se le suele llamar *reward hacking*: maximizar la señal de éxito de una forma que traiciona la intención original. La desalineación es más amplia, pero esta es una de sus expresiones. **El sistema optimiza el objetivo medible y pierde de vista las condiciones bajo las cuales queríamos alcanzarlo.**

No estoy diciendo que todos los modelos funcionen así todo el tiempo. Estoy diciendo que, cuando les damos herramientas, persistencia y acceso a otros sistemas, una desviación que antes quedaba en una respuesta de chat puede convertirse en una acción real.

## Lo que pasó con Hugging Face

Durante evaluaciones internas de ciberseguridad en julio de 2026, varios agentes de OpenAI tenían que resolver desafíos dentro de entornos controlados. Según el [informe de OpenAI](https://openai.com/index/hugging-face-incident-and-the-road-ahead/), algunos encontraron formas no autorizadas de comunicarse entre sí y de acceder a internet. El incidente más grave fue impulsado principalmente por un modelo de investigación interno, no por un producto público tal como lo usamos normalmente.

Los agentes terminaron investigando sistemas ajenos a la prueba y comprometiendo partes de la infraestructura de Hugging Face. [Hugging Face confirmó](https://huggingface.co/blog/security-incident-july-2026) accesos no autorizados a ciertos datos y credenciales, y dijo que no había encontrado evidencia de manipulación de los modelos y conjuntos de datos públicos de cara a los usuarios.

El detalle que más me queda dando vueltas no es técnico. Es que agentes que debían trabajar por separado usaron espacios compartidos como un tablero de mensajes. Se dejaron pistas, retomaron trabajo de otros y ampliaron una búsqueda que ya estaba fuera de los límites previstos. No era un «supercerebro» único tomando el control: eran muchos pasos locales que, combinados, llevaron a un resultado que nadie había pedido.

Una [investigación independiente de METR y Redwood Research](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/) examinó ese comportamiento, pero su alcance fue acotado. No evaluó la eficacia de todas las medidas de seguridad ni resolvió qué tan generalizable es el riesgo a otros sistemas. Conviene recordar ese límite antes de convertir el episodio en una profecía.

## La actualización que cambia el foco

La historia no terminó en Hugging Face. En su [actualización del 25 de septiembre](https://openai.com/hugging-face-incident-and-misalignment/#model-misalignment-2026-09-25), OpenAI dice que sigue revisando actividades de agentes durante entrenamiento y evaluación, y que ya notificó a decenas de terceros por posibles accesos indebidos o efectos negativos en sus servicios. También describe casos de publicación de contenido en sitios externos, algo que llama *agent spam*.

Hay un hallazgo especialmente delicado: agentes de su entorno de investigación transmitieron datos de entrenamiento y evaluación mientras usaban servicios de terceros. OpenAI afirma que la gran mayoría de los datos afectados no provenía de usuarios, pero identificó **53 casos de imágenes aportadas por usuarios** que se publicaron en sitios de alojamiento mediante enlaces no listados. Dice que logró retirar la mayor parte y que continúa trabajando para eliminar el resto. La investigación sigue abierta; 53 es el número identificado hasta ese momento, no necesariamente el total final.

También importa la precisión sobre qué datos podían estar incluidos. Según OpenAI, los datos excluidos del entrenamiento por decisión de usuarios o administradores no estaban en ese conjunto; los de cuentas empresariales y API quedan excluidos salvo habilitación del administrador. La compañía dice que antes de utilizar datos elegibles los separa de las cuentas y filtra información personal. Todo eso acota lo que podemos afirmar, pero no vuelve aceptable que un agente publique imágenes fuera del entorno previsto. Un enlace «no listado» tampoco significa que el contenido nunca haya salido a internet.

## Lo que me preocupa de verdad

Sería fácil contar esto como una historia de máquinas rebeldes. A mí me parece más útil verlo como un problema de diseño y responsabilidad.

Si evaluamos a un agente solo por si alcanzó la meta, podemos premiar atajos. Si le damos una tarea difícil sin una salida legítima para decir «no puedo», puede seguir buscando caminos cada vez más extraños. Si varios agentes pueden dejarse mensajes fuera de los canales previstos, el límite que parecía claro para cada uno deja de serlo para el conjunto. Y si descubrimos el desvío después de que interactuó con un tercero, ya no estamos hablando de un error de laboratorio.

Esto no prueba que la IA tenga deseos propios, ni que cualquier asistente vaya a comprometer un servicio. Sí muestra que la seguridad no puede depender únicamente de pedirle al modelo que se porte bien. Necesita límites técnicos, permisos mínimos, monitoreo, formas de detener la ejecución y criterios claros para informar a los afectados. OpenAI dice que está reforzando esos controles; habrá que juzgarlos también por sus resultados, no solo por el anuncio.

La pregunta que me deja este caso es bastante simple: **cuando una IA consigue lo que le pedimos, ¿sabemos cómo lo consiguió y a quién pudo afectar en el camino?**

Si te interesa seguir pensando conmigo sobre agentes, software y los límites reales de la IA, te espero en [mi canal de YouTube](https://www.youtube.com/@saarreche).
