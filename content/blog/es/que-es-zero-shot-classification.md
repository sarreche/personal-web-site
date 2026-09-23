---
title: "Zero-shot classification: clasificar sin haber visto ejemplos"
description: "Qué significa clasificación zero shot, cómo puede ordenar textos con categorías nuevas y qué conviene comprobar antes de confiar en el resultado."
publishedAt: "2026-09-23"
---

Imaginá que abrís el correo de una empresa y encontrás cientos de mensajes sin ordenar. Algunos hablan de cobros, otros de problemas técnicos, otros de cancelaciones. Querés separarlos para que lleguen al equipo correcto.

Durante mucho tiempo, una manera de automatizar eso fue reunir ejemplos de cada categoría, etiquetarlos y entrenar un clasificador. Funciona, pero hay un detalle incómodo: antes de ahorrar trabajo, tenés que hacer bastante trabajo. Y cuando aparece una categoría nueva, quizá debas volver a preparar datos.

La **clasificación zero shot** ofrece otra posibilidad: darle al modelo el texto y los nombres de las categorías que te interesan, incluso si nunca recibió ejemplos etiquetados de *esas categorías para esa tarea*.

Suena a truco. En realidad, aprovecha algo que el modelo aprendió antes.

## Qué significa «zero shot»

*Shot* es un ejemplo. En este contexto, *zero shot* significa que no mostramos ejemplos resueltos de la tarea concreta al pedirle una clasificación.

Supongamos que el mensaje dice: «Me cobraron dos veces la suscripción de este mes». Le damos estas opciones:

- Facturación.
- Soporte técnico.
- Cancelaciones.

El resultado esperado es **Facturación**. No tuvimos que escribir cien correos de muestra con su etiqueta correspondiente para definir esa categoría.

Eso no quiere decir que el modelo parta de cero, ni que jamás haya visto las palabras «cobro» o «facturación». Fue entrenado previamente con grandes cantidades de datos o con otras tareas. Lo nuevo es la aplicación concreta y el conjunto de etiquetas que le presentamos ahora.

La [explicación de Hugging Face](https://huggingface.co/tasks/zero-shot-classification) lo plantea justamente así: clasificar un texto entre clases candidatas sin haber entrenado el modelo para esas clases específicas.

## Cómo logra elegir una categoría

Hay varias formas de hacerlo. Una de las más conocidas usa un modelo entrenado para decidir si dos frases son compatibles entre sí.

Con el mensaje sobre el cobro, el sistema puede construir frases como «Este mensaje trata sobre facturación», «Este mensaje trata sobre soporte técnico» y «Este mensaje trata sobre cancelaciones». Luego compara el mensaje original con cada una. La categoría cuya frase resulte más compatible queda mejor posicionada.

No hace falta entender las matemáticas internas para usar la idea. Lo importante es que **los nombres y la redacción de las categorías forman parte de la entrada**. «Problemas de cuenta», «acceso» y «soporte técnico» pueden solaparse. Si las etiquetas son vagas, el resultado también puede serlo.

También podemos pedirle a un modelo de lenguaje una clasificación mediante una instrucción sin darle ejemplos. Es otra manera de trabajar en modo zero shot. En ambos casos, el modelo aprovecha aprendizaje previo para interpretar una tarea nueva.

## Por qué resulta útil

Lo veo especialmente interesante cuando todavía estamos explorando un problema.

Podés probar categorías para ordenar consultas, comentarios, documentos o noticias sin crear desde el primer día un conjunto grande de textos etiquetados. Si mañana descubrís que «devoluciones» merece su propia categoría, podés agregarla y observar qué ocurre.

Esa flexibilidad permite hacer prototipos y entender mejor los datos. A veces el resultado más valioso no es automatizar el flujo entero: es descubrir qué categorías tienen sentido antes de invertir en una solución más específica.

Hay otro detalle práctico. Un mismo mensaje puede pertenecer a más de una clase. «No puedo entrar a mi cuenta y quiero cancelar» toca acceso y cancelación. Si el sistema está configurado para elegir una sola etiqueta, tendrá que forzar una decisión. En un problema así conviene permitir varias etiquetas o diseñar una regla de derivación más cuidadosa. La [documentación de la tarea](https://huggingface.co/docs/inference-providers/tasks/zero-shot-classification) distingue ambos modos.

## El número de confianza no es una garantía

Una interfaz puede mostrar «Facturación: 90 %». Es tentador leerlo como «hay un 90 % de probabilidad de que la clasificación sea correcta». No necesariamente significa eso.

En muchos sistemas, el puntaje expresa cómo compiten las etiquetas que le ofrecimos al modelo. Si ninguna encaja, igual puede haber una ganadora. Y si cambiamos la lista, la redacción de las etiquetas o el modo de permitir múltiples categorías, pueden cambiar los puntajes.

Por eso me parece importante reservar una salida como **«ninguna de las anteriores»** o enviar casos dudosos a revisión humana. Un mensaje sobre una estafa, por ejemplo, no debería terminar automáticamente en «facturación» solo porque era la opción menos mala.

Antes de conectar esta técnica a decisiones reales, probaría una muestra de mensajes representativa: ejemplos claros, mensajes ambiguos, categorías nuevas y textos que no pertenecen a ninguna. Miraría no solo cuántos acierta, sino qué tipo de error comete. Mandar una consulta general al equipo equivocado es molesto; tratar una alerta urgente como una consulta rutinaria puede ser mucho peor.

## Cuándo alcanza y cuándo hay que ir más lejos

Zero shot sirve muy bien como punto de partida cuando hay pocos ejemplos etiquetados, las categorías cambian o necesitamos aprender rápido cómo se distribuyen los textos.

Si la tarea se vuelve estable y manejamos grandes volúmenes, puede convenir recopilar casos reales, revisar errores y comparar el resultado con un clasificador entrenado para ese dominio. También puede ser útil dar unos pocos ejemplos en la instrucción: eso ya sería *few shot*, porque el modelo ve demostraciones de la tarea antes de clasificar.

No hay una técnica que gane siempre. Lo interesante de zero shot es que baja el costo de empezar. Nos deja hacer una pregunta bastante poderosa con pocos preparativos: **«Si estas fueran mis categorías, ¿cómo ordenarías lo que ya tengo?»**.

La respuesta no reemplaza el criterio para definir las categorías ni la comprobación de los errores. Pero puede convertir una pila de textos desordenados en una primera conversación útil sobre el problema.

Si te interesa seguir explorando conceptos de IA con ejemplos prácticos, comparto más ideas en [mi canal de YouTube](https://www.youtube.com/@saarreche).
