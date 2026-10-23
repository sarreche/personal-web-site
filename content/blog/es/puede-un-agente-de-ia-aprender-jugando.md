---
title: "¿Puede un agente de IA aprender jugando?"
description: "Un paper sobre agentes que exploran un mundo simulado abre preguntas sobre aprendizaje, memoria y cómo comprobar que una experiencia deja algo útil."
publishedAt: "2026-10-23"
---

Normalmente le pedimos algo a un agente: corregí este error, investigá este tema, prepará este documento. Después miramos si hizo lo que esperábamos.

El paper [Is this machine playing?](https://machineplaying.org/paper/), de Nathan Cloos y colaboradores del MIT, cambia la pregunta. Estudia agentes Eko que exploran una isla simulada, construyen y ensayan actividades sin una tarea concreta asignada.

Me interesa esa pregunta porque obliga a pensar qué lugar dejamos para explorar antes de exigir un resultado. También porque la palabra «jugar» invita a imaginar mucho más de lo que podemos comprobar.

Mi lectura va por ahí: mirar qué evidencia hay de aprendizaje y qué podríamos tomar de esa idea al diseñar agentes, sin convertir una conducta llamativa en una historia sobre lo que siente una máquina.

## Un mundo también es una interfaz

El proyecto publica [Clawblox](https://github.com/nacloos/clawblox), un motor abierto para crear mundos de agentes. Su protocolo permite observar y actuar mediante HTTP. El experimento principal usó 13 agentes durante 30 horas, con observaciones textuales. El contexto y la isla se reiniciaban cada hora; los archivos persistían.

Me parece útil detenerse en la interfaz. Cuando vemos una representación visual, podemos imaginar que el agente percibe ese mundo como nosotros. Conviene preguntar qué información recibe realmente y qué operaciones tiene disponibles.

Lo mismo haría al evaluar una demostración empresarial. ¿El agente interpreta una pantalla o recibe los datos ya estructurados? ¿Puede actuar sobre todo el sistema o solamente sobre una lista de operaciones? ¿Qué parte resolvió el modelo y qué parte hizo posible el entorno?

Esas preguntas ayudan a entender qué capacidad estamos observando y qué necesitaríamos para reproducirla en otro lugar.

## Sin una tarea no significa sin dirección

Había una disposición de curiosidad en `SOUL.md` y un orquestador que pedía continuar. Los autores también probaron una variante con menos instrucciones.

Para mí, esa distinción es fundamental. Podemos dejar abierta la actividad y, al mismo tiempo, diseñar condiciones que favorezcan cierto comportamiento. Los permisos, la información disponible, el tiempo y la manera de continuar una sesión forman parte de la experiencia.

Si quisiera evaluar exploración, miraría cuánto cambia la conducta al modificar esas condiciones. También preguntaría qué pasa con otros entornos y qué criterios permiten distinguir una actividad variada de una repetición decorada con distintas palabras.

No tomaría «sin una meta específica» como sinónimo de autonomía absoluta. Hay muchas decisiones humanas antes de que empiece la ejecución, y reconocerlas permite discutir mejor el resultado.

## La memoria necesita una prueba

El trabajo compara agentes experimentados y nuevos: encuentra ventajas en varias pruebas, no en todas. Sin cambiar los pesos del modelo, editar recuerdos modifica el desempeño; quitar una creencia falsa puede mejorarlo.

Esa es la parte que más me interesa. Para hablar de aprendizaje, buscaría una diferencia comprobable en lo que el sistema puede hacer después. Una narración convincente de su progreso sería insuficiente.

La distinción entre modelo y sistema también importa. Un agente puede apoyarse en instrucciones, notas, herramientas y programas. Para decidir cómo mejorarlo, necesitamos saber dónde está la información que cambia su comportamiento.

En un proceso de trabajo, eso vuelve revisable una pregunta práctica: ¿qué guardamos después de una experiencia y cómo comprobamos que vale la pena conservarlo?

Yo pediría algo más que un resumen prolijo. Querría conocer la observación, las condiciones bajo las que ocurrió y la prueba que sostiene la conclusión. Así podríamos volver sobre ella cuando el entorno cambie.

## Guardar una conclusión también puede fijar un error

Imaginá un ejemplo hipotético fuera de la isla. Un agente intenta usar una integración y recibe un error de permisos. Escribe en sus notas que esa herramienta no sirve para consultar pedidos. La siguiente sesión lee esa conclusión y elige una alternativa más complicada.

El problema podría ser temporal o depender de una cuenta específica. Pero la nota quedó redactada como una regla general.

Para evitarlo, propondría distinguir en la memoria entre observaciones, hipótesis y procedimientos comprobados. «Esta llamada falló con esta cuenta» permite investigar. «La herramienta no funciona» puede cerrar la investigación demasiado pronto.

También pondría fecha y condiciones a los procedimientos, y definiría cuándo revisarlos. Una memoria útil necesita mecanismos para corregir, reemplazar y descartar información. De lo contrario, podemos acumular contexto que aleja al agente de una buena solución.

Esta es una consecuencia que yo trasladaría al trabajo con agentes; no es un resultado probado para cualquier integración empresarial.

## Probar en un espacio donde equivocarse sea manejable

Si quisiera aplicar esta idea, empezaría con un entorno de prueba acotado: datos ficticios, permisos limitados y operaciones reversibles. Por ejemplo, una copia de un flujo de pedidos donde el agente pueda explorar casos sin tocar clientes reales.

Antes de empezar fijaría un presupuesto de tiempo y cómputo. Después evaluaría tareas concretas con y sin los materiales que produjo la exploración. Registraría calidad, errores y costo total.

En [la nota de ayer sobre cuánto cuesta poner IA en un proceso](/blog/cuanto-cuesta-de-verdad-poner-ia-en-un-proceso) planteé la necesidad de contar también la revisión y el mantenimiento. Acá haría la misma cuenta: explorar consume recursos y solo una evaluación posterior puede decirnos si ese gasto aportó algo útil para nuestro caso.

Dejaría explícito, además, cuándo termina la exploración y empieza la ejecución de una tarea. En producción necesitamos acordar qué debe hacer el agente y cuándo tiene que detenerse.

## Una pregunta que vale la pena mantener abierta

El título del paper pregunta si la máquina está jugando. Yo conservaría esa interrogación. Describir una conducta y atribuirle disfrute son afirmaciones diferentes; no usaría este experimento para resolver la segunda.

Tampoco lo convertiría en una receta que asegure mejores agentes en cualquier contexto. Para tomar una decisión práctica, pediría pruebas sobre las tareas que realmente nos importan.

Lo que sí me deja es una buena invitación: pensar entornos donde se pueda explorar, conservar lo aprendido y revisar las conclusiones. **La pregunta que me llevaría al próximo proyecto es cómo comprobar que esa exploración dejó una capacidad útil.**

Sigo estas conversaciones en [mi canal de YouTube](https://www.youtube.com/@saarreche). Un abrazo.

## Referencias

- [Nathan Cloos y colaboradores: Is this machine playing?](https://machineplaying.org/paper/). Métodos, evaluaciones e intervenciones sobre la memoria; consultado el 23/10/2026.
- [Clawblox: código y documentación del entorno](https://github.com/nacloos/clawblox). Repositorio del proyecto; consultado el 23/10/2026.
