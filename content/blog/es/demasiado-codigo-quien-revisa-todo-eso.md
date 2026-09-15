---
title: "Demasiado código: ¿quién revisa todo eso?"
description: "La IA volvió barato generar código, pero entenderlo, revisarlo y mantenerlo sigue costando. El cuello de botella simplemente cambió de lugar."
publishedAt: "2026-09-15"
---

Imaginemos una fábrica donde, de un día para otro, una máquina empieza a producir diez veces más rápido.

Al principio todos festejan. Hasta que las piezas se acumulan frente al control de calidad, ocupan el pasillo y nadie puede enviarlas porque la siguiente etapa sigue trabajando a la misma velocidad de siempre.

La máquina mejoró.

La fábrica, no necesariamente.

Creo que algo parecido está ocurriendo con el desarrollo de software. La inteligencia artificial volvió mucho más rápido y barato escribir código. Un agente puede tomar una idea, recorrer el repositorio, modificar varios archivos y entregar un pull request mientras nosotros hacemos otra cosa.

Es una capacidad extraordinaria. También nos deja una pregunta bastante menos glamorosa:

**¿Quién revisa todo ese código?**

Porque generar no es lo mismo que entender. Y escribir código nunca fue lo mismo que entregar software.

## Los estudios parecen contradecirse

Buscar una respuesta simple en los datos tampoco ayuda demasiado.

GitHub realizó un ensayo controlado con más de doscientos desarrolladores experimentados. En una tarea acotada, quienes utilizaron Copilot tuvieron una probabilidad 53,2 % mayor de superar todas las pruebas. El código también obtuvo mejoras pequeñas pero estadísticamente significativas en legibilidad, fiabilidad, mantenibilidad y concisión.

Es un resultado positivo y sirve para descartar una frase demasiado cómoda: el código generado con IA no es necesariamente malo. Pero también es [una investigación del proveedor](https://github.blog/news-insights/research/does-github-copilot-improve-code-quality-heres-what-the-data-says/), sobre una API concreta y dentro de un ejercicio que no representa años de evolución de un producto real.

El [informe DORA de 2024](https://dora.dev/research/2024/dora-report/) encontró otra combinación interesante. Una mayor adopción de IA estaba asociada con más productividad individual, mejor flujo, mejor documentación y mejor calidad percibida del código. Al mismo tiempo, se relacionaba con menor estabilidad y menor rendimiento del proceso de entrega.

Después está METR. En un experimento de comienzos de 2025, mantenedores experimentados trabajaron sobre repositorios que conocían bien. Con las herramientas de IA disponibles entonces tardaron un 19 % más, aunque creían haber sido más rápidos. Su [actualización de 2026](https://metr.org/blog/2026-02-24-uplift-update/) reconoce que repetir la medición se volvió complicado: algunos participantes ya no querían trabajar sin IA, elegían qué tareas someter al experimento y utilizaban varios agentes al mismo tiempo. METR considera probable que las herramientas actuales ayuden más, pero no afirma saber cuánto.

Entonces, ¿la IA acelera o frena?

La respuesta poco espectacular es: depende de la persona, la tarea, el repositorio y, sobre todo, de qué parte del proceso estemos midiendo.

## Un archivo terminado no es software terminado

Un agente puede producir en minutos una funcionalidad que parece completa. Los nombres son razonables, el diff está ordenado, hay documentación y todas las pruebas aparecen en verde.

Pero antes de que el cambio llegue a una persona usuaria quedan algunas preguntas:

- ¿Resuelve el problema correcto?
- ¿Entendió las reglas del negocio o completó los vacíos con supuestos razonables pero falsos?
- ¿Duplicó una capacidad que ya existía en otro lugar?
- ¿Las pruebas cubren el comportamiento importante o solamente confirman la interpretación usada para generar el código?
- ¿Qué ocurre con datos antiguos y casos extraños?
- ¿Cómo afecta seguridad, rendimiento, operación y costos?
- ¿Quién va a entenderlo cuando falle dentro de seis meses?

Estas preguntas no son una objeción contra la IA. Son ingeniería de software. Existían antes de los modelos y van a seguir existiendo aunque un agente sea capaz de escribir una aplicación completa.

Lo nuevo es la velocidad con la que el trabajo puede llegar a esa etapa.

Antes, escribir el cambio consumía una parte considerable del tiempo y actuaba como un límite natural. Si cada funcionalidad requería días, había menos funcionalidades esperando revisión. Hoy podemos abrir cinco, diez o cincuenta frentes sin que se multiplique la cantidad de personas capaces de comprenderlos con atención.

El cuello de botella no desapareció. Se mudó.

## Cuando el código es barato, comprenderlo se vuelve caro

Durante mucho tiempo usamos líneas de código, commits y pull requests como señales de actividad. Nunca fueron métricas demasiado buenas. Con agentes pueden volverse directamente absurdas.

Un equipo puede duplicar el código generado y no entregar el doble de valor. Puede incluso terminar con más superficie que mantener, más dependencias, más inconsistencias y más decisiones que nadie recuerda haber tomado.

También aparece un efecto psicológico que reconozco bastante en mi propio trabajo.

Cuando escribo una solución línea por línea, el proceso me obliga a recorrer una parte de sus decisiones. Eso no garantiza que la entienda bien, pero existe una fricción: recuerdo por qué agregué una condición, qué alternativa probé y dónde dudé.

Cuando un agente me entrega quinientas líneas prolijas en treinta segundos, es fácil confundir **familiaridad visual con comprensión**. Todo tiene el aspecto correcto. Los nombres parecen buenos. Hay comentarios. Los tests pasan. Mi cerebro empieza a deslizarse por el diff en lugar de interrogarlo.

La revisión seria, sin embargo, no se volvió diez veces más barata. Todavía exige reconstruir la intención, seguir flujos, buscar efectos laterales y pensar en todo lo que no aparece en el caso feliz.

La nueva escasez puede no ser la capacidad de escribir. Puede ser la capacidad de prestar atención.

## Podemos acelerar la estación equivocada

Supongamos que un equipo tarda dos semanas desde que recibe una necesidad hasta que la funcionalidad llega a producción.

Quizás escribir el código ocupa dos días. El resto se va en entender el pedido, aclarar reglas, conseguir permisos, esperar una decisión, revisar, probar, coordinar con otro equipo y descubrir una excepción que nadie había mencionado.

Si un agente reduce esos dos días a dos horas, la demostración de productividad es impresionante. Pero el tiempo total puede seguir cerca de las dos semanas.

Peor aún: como ahora podemos producir muchas más propuestas de cambio, corremos el riesgo de saturar revisión, integración y pruebas. Aceleramos una estación y congestionamos todas las siguientes.

Esto no ocurre solamente en programación. La productividad de una herramienta no es automáticamente la productividad de una organización. Un redactor puede generar veinte borradores, pero alguien tiene que decidir cuáles vale la pena publicar. Un analista puede producir cien informes, pero otra persona debe leerlos y actuar. La abundancia de salida puede crear escasez de atención.

En software, esa escasez además tiene consecuencias acumulativas. El código que aceptamos hoy queda viviendo con nosotros. Hay que actualizarlo, operarlo, protegerlo y explicárselo a la próxima persona que toque el sistema.

## El problema de las pruebas que se dan la razón a sí mismas

Una respuesta frecuente es: “No importa cuánto código genere el agente si también genera las pruebas”.

Las pruebas son indispensables, pero no resuelven solas el problema.

Si el mismo razonamiento interpreta el requisito, implementa la solución y escribe los tests, puede cometer un error perfectamente consistente. El código hace exactamente lo que las pruebas esperan. Las pruebas verifican exactamente lo que el código hace. Y ambos entendieron mal el negocio.

Es como un estudiante que redacta la pregunta, escribe la respuesta y después se pone la nota.

Por eso conviene separar generación y verificación. Los criterios importantes deberían existir antes del código cuando sea posible. También hacen falta revisión humana, análisis estático, pruebas de integración, datos representativos y, en ciertos casos, otro modelo trabajando con una función explícitamente crítica.

Usar un segundo agente no convierte la validación en independiente por arte de magia. Dos modelos pueden compartir los mismos puntos ciegos. Pero asignar roles diferentes, fuentes distintas y criterios externos reduce la posibilidad de que todo el sistema simplemente se felicite a sí mismo.

## Qué deberíamos medir ahora

Si producir código deja de ser la parte escasa, necesitamos mirar el recorrido completo.

Me interesaría saber cuánto tiempo pasa desde que entendemos una necesidad hasta que funciona en producción. Cuánto espera un cambio en revisión. Con qué frecuencia una entrega causa un incidente o requiere retrabajo. Cuántos defectos llegan a usuarios. Cuánto tardamos en recuperar el servicio y, sobre todo, si la funcionalidad mejoró aquello para lo que fue construida.

También mediría el inventario de trabajo:

- ¿Cuántos cambios están abiertos simultáneamente?
- ¿Cuántos fueron generados pero nadie tiene capacidad de revisar?
- ¿Cuánto tiempo pasan esperando en lugar de avanzando?
- ¿Cuánto código nuevo reemplaza algo anterior y cuánto se suma para siempre?

Y agregaría una pregunta difícil de convertir en un dashboard:

**¿Quién entiende este cambio y puede hacerse cargo si mañana deja de funcionar?**

Si la respuesta es “el agente”, todavía no tenemos una respuesta.

## Cómo usar la velocidad sin perder el control

La solución no es volver artificialmente lenta a la IA. Es rediseñar la fábrica alrededor de una máquina mucho más rápida.

### Trabajar con cambios pequeños

Que el agente pueda producir muchísimo no significa que deba entregarlo en un solo bloque. Un cambio acotado se entiende, prueba, integra y revierte mejor. Además, permite corregir la dirección antes de acumular miles de líneas sobre un supuesto equivocado.

### Invertir antes en la especificación

Si no sabemos qué problema queremos resolver, la IA puede ayudarnos a construir la solución incorrecta a una velocidad extraordinaria. Explorar requisitos, restricciones y criterios de aceptación puede generar más valor que pedir código cinco minutos antes.

### Diseñar la verificación por separado

Las pruebas, revisiones y controles importantes no deberían ser un adorno generado al final. Necesitan expresar riesgos reales y provenir de perspectivas distintas. Cuanto más autónoma sea la generación, más deliberado tiene que ser el sistema de verificación.

### Limitar el trabajo en curso

Si un equipo puede revisar tres cambios con atención, abrir veinte no crea productividad. Crea una fila. El agente debería tomar trabajo según la capacidad total del sistema, no según su propia capacidad de producir.

### Premiar la simplificación

A veces el mejor resultado de un agente no es escribir mil líneas nuevas. Puede ser descubrir cómo eliminar dos mil, reutilizar una capacidad existente o demostrar que la funcionalidad no hace falta. Cuando generar es fácil, decir “esto no debería existir” se vuelve una contribución especialmente valiosa.

### Mantener propiedad humana y de equipo

No hace falta que una persona escriba cada línea. Sí hace falta que alguien comprenda la intención, acepte el riesgo y sostenga el resultado en el tiempo. La autoría puede automatizarse. La responsabilidad no desaparece con la misma facilidad.

## Más código dejó de ser una victoria

La inteligencia artificial puede mejorar la programación. Hay contextos donde aumenta la calidad, ahorra una cantidad enorme de tiempo y permite que equipos pequeños construyan cosas que antes estaban fuera de su alcance.

También hay situaciones donde agrega trabajo, crea una ilusión de velocidad o traslada el esfuerzo hacia revisión, pruebas e integración.

No necesitamos elegir entre celebrar la IA y desconfiar de ella. Necesitamos dejar de mirar solamente la máquina rápida y observar la fábrica completa.

Cuando escribir código se vuelve barato, comprenderlo se vuelve más valioso. Cuando producir cambios es fácil, elegir cuáles merecen llegar a producción se vuelve más importante. Y cuando un agente puede trabajar durante horas sin cansarse, la responsabilidad por lo que deja funcionando sigue perteneciendo a alguien.

El verdadero salto no lo va a dar el equipo que genere más código. Lo va a dar el que convierta esa capacidad en software útil, estable y comprensible sin llenar el futuro de trabajo que nadie sabe mantener.

En [este video](https://youtu.be/FvHs2juDTg4) desarrollo la pregunta y la conecto con otro problema cada vez más visible: la IA puede producir mucho más rápido de lo que una organización puede decidir, revisar y aprender.

