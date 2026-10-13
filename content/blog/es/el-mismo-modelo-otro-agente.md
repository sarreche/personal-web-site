---
title: "El mismo modelo, otro agente: por qué cambia tanto el resultado"
description: "Una lectura de Finding the Right Fit y una reflexión sobre cómo elegimos agentes: el modelo importa, pero también las herramientas, la verificación y el trabajo que queremos resolver."
publishedAt: "2026-10-13"
---

Cuando hablamos de trabajar con IA, una de las primeras preguntas suele ser qué modelo estamos usando. Tiene sentido: queremos saber si estamos eligiendo una herramienta capaz de ayudarnos. Pero esa pregunta deja afuera una parte del trabajo.

Entre pedir algo y recibir un resultado hay archivos que leer, herramientas que ejecutar, errores que interpretar y decisiones sobre cuándo seguir o terminar. Todo eso también puede salir bien o mal.

[*Finding the Right Fit*](https://arxiv.org/abs/2610.00917) compara 66 configuraciones en tres benchmarks y observa cambios en el ranking al variar la combinación.

## Qué estamos comparando cuando comparamos agentes

Un *harness* rodea al modelo con herramientas, contexto y reglas de ejecución. [La tabla 1 del paper](https://arxiv.org/html/2610.00917) contrasta 63 tareas de Terminal-Bench 4:

| Sistema de ejecución | Claude Opus 5 | GPT-6 Astra |
| --- | --- | --- |
| OpenHands | 57,14 % | 49,21 % |
| PI | 30,16 % | 60,32 % |

Son porcentajes de tareas resueltas. Los autores [reconocen límites](https://arxiv.org/html/2610.00917): una ejecución por tarea, sin medir variabilidad entre repeticiones ni igualar todos los parámetros.

Mi lectura es que conviene tomar en serio la combinación que usamos. Si veo solamente la primera fila, puedo llevarme una impresión distinta de la que tendría mirando la segunda. Para elegir una herramienta para mi trabajo, quiero entender qué condiciones acompañan al número.

## Un error necesita volver como información

Imaginá que le pedís a un agente preparar un archivo y que, a mitad del proceso, un comando queda esperando una respuesta que nunca llega. El modelo puede tener capacidad para encontrar una solución, pero primero necesita enterarse de qué pasó.

Un sistema podría dejarlo esperando hasta agotar el tiempo. Otro podría interrumpir el comando y devolver un mensaje que permita diagnosticar el problema. Para la persona que hizo el pedido, ambos casos pueden parecer «la IA se trabó». Al revisarlos, las preguntas son diferentes.

Este ejemplo me lleva a mirar el trabajo entre las respuestas. ¿La herramienta devolvió el error completo? ¿El agente pudo reconocer qué parte había fallado? ¿Se conservó lo que ya estaba hecho? Son preguntas de diseño de software, y pueden importar mucho cuando delegamos tareas largas.

También me recuerdan algo bastante humano: si queremos que alguien corrija un trabajo, tenemos que darle información útil sobre lo que necesita cambiar. Repetir «intentá de nuevo» aporta poco cuando la persona —o el agente— sigue mirando la misma evidencia incompleta.

## Para el blog, terminar tiene un significado concreto

Llevándolo a este espacio, yo no consideraría terminado un artículo porque un agente diga que lo revisó. Necesito que el texto represente lo que quiero contar, que la lectura sea clara, que las fuentes sostengan las afirmaciones y que ambas versiones del idioma se correspondan.

Después hay otro plano: que las páginas se generen bien y los enlaces lleven al lugar correcto. Un build exitoso puede comprobar una parte de eso. No puede decidir si un párrafo suena a mí ni si una interpretación del paper es razonable.

Para un video pasa algo parecido. Un archivo exportado puede estar técnicamente completo y todavía tener una frase confusa, una imagen fuera de lugar o un ritmo que no acompaña la idea. Antes de automatizar más pasos, me sirve definir qué resultado estoy dispuesto a aceptar y cómo voy a revisarlo.

Estas son aplicaciones que yo saco de la lectura. El paper no evaluó mi proceso editorial, y no tendría sentido trasladar aquellos porcentajes directamente al blog o al canal.

## Cómo probaría una combinación en mi trabajo

Elegiría unas pocas tareas representativas: investigar una afirmación con fuentes, convertir un guion en artículo, revisar una traducción o corregir un problema pequeño del sitio. Usaría los mismos materiales y criterios para comparar las alternativas.

Además del resultado, miraría cuánto tiempo dediqué a aclarar el pedido, cuántas correcciones hicieron falta y qué errores tuve que detectar yo. También anotaría el costo. Una salida rápida puede dejar trabajo pendiente; una más cara puede ahorrar revisión, o simplemente costar más. Prefiero comprobarlo con ejemplos que conozca.

Intentaría repetir algunas tareas antes de entusiasmarme con una victoria aislada. Y cambiaría una cosa por vez cuando quisiera entender un fallo. Si cambio el modelo, las instrucciones y las herramientas al mismo tiempo, después me cuesta saber qué ayudó.

## La pregunta que me deja la lectura

Me interesa seguir probando modelos nuevos. También quiero prestar más atención a cómo los pongo a trabajar. A veces voy a necesitar más capacidad; otras, un pedido mejor definido, una herramienta que devuelva bien sus errores o una comprobación que todavía falta.

Eso hace más interesante la pregunta inicial. Además de «¿qué modelo usás?», podemos preguntar «¿qué le pedís, con qué herramientas y cómo sabés que terminó bien?». Ahí aparece una conversación mucho más cercana al trabajo real.

Podés leer [el paper completo en arXiv](https://arxiv.org/pdf/2610.00917). Para este artículo no hay video, pero sigo compartiendo estas exploraciones en [mi canal de YouTube](https://www.youtube.com/@saarreche). Un abrazo.
