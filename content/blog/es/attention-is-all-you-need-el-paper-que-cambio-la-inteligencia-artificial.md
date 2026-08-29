---
title: "Attention Is All You Need: el paper que cambió la inteligencia artificial"
description: "Cómo el Transformer reemplazó la recurrencia por autoatención y se convirtió en una de las bases técnicas de la inteligencia artificial moderna."
publishedAt: "2026-08-29"
---

Durante mucho tiempo hablamos de la inteligencia artificial como una tecnología del futuro. Hoy podemos pedirle a una máquina que escriba, traduzca, programe, analice documentos o nos ayude a aprender.

Ese cambio no tiene una única causa. Es el resultado de décadas de investigación, mejores chips, cantidades enormes de datos y nuevos métodos de entrenamiento. Pero hay un trabajo que ocupa un lugar central en esta historia.

En 2017, ocho investigadores publicaron un paper de once páginas llamado **Attention Is All You Need**. Presentaba una arquitectura diseñada para traducción automática: el **Transformer**.

El paper no inventó la atención, los modelos de lenguaje ni la inteligencia artificial generativa. Su aporte fue combinar ideas existentes de una forma radical: construir un modelo de secuencias basado en atención, sin redes recurrentes ni convoluciones en su arquitectura principal.

Esa decisión cambió el rumbo del campo.

## El problema de procesar una secuencia

El lenguaje no es una bolsa de palabras. El orden altera el significado y una palabra puede depender de otra que apareció mucho antes.

Durante años, las redes neuronales recurrentes —incluidas las LSTM y GRU— fueron una respuesta dominante. Procesaban una secuencia paso a paso y actualizaban un estado interno con cada elemento.

El mecanismo funcionaba, pero tenía dos limitaciones importantes.

Primero, la información entre posiciones lejanas debía atravesar muchos pasos. Segundo, el cálculo era inherentemente secuencial: para procesar una posición había que esperar el resultado de la anterior.

Eso dificultaba aprovechar el paralelismo de las GPU. Cuando aumentaban la longitud de las secuencias, los datos y el tamaño de los modelos, la espera se convertía en un cuello de botella.

## La atención ya existía

Antes del Transformer, la atención ya ayudaba a los sistemas de traducción. En vez de comprimir toda una frase de entrada en una sola representación, permitía que el modelo volviera a mirar sus distintas partes al producir cada palabra de salida.

No todas las palabras recibían el mismo peso. El modelo aprendía cuáles eran más relevantes en cada momento.

Pero normalmente la atención acompañaba a una red recurrente. El salto de *Attention Is All You Need* fue preguntar: **¿qué ocurre si eliminamos por completo la recurrencia y organizamos todo el modelo alrededor de la atención?**

La respuesta fue el Transformer.

## Qué es la autoatención

En la autoatención, cada elemento de una secuencia puede relacionarse directamente con los demás elementos de esa misma secuencia.

Consideremos esta oración:

> El animal no cruzó la calle porque estaba cansado.

Para interpretar “cansado”, el modelo necesita relacionarlo con “animal”. Una red recurrente transporta información a través de los pasos intermedios. La autoatención puede establecer esa conexión de manera directa.

La analogía no es perfecta, pero podemos imaginar que todas las palabras están en una habitación y cada una pregunta cuáles de las demás necesita para construir su significado contextual.

Eso acorta el camino entre posiciones distantes y permite calcular muchas relaciones en paralelo.

## Queries, keys y values

El mecanismo se construye con tres representaciones de cada elemento:

- La **query** expresa qué información está buscando.
- La **key** expresa qué información puede ser relevante.
- El **value** contiene la información que se aportará.

La query de un token se compara con las keys de los demás. Esas compatibilidades se convierten en pesos y los pesos determinan cómo combinar los values.

El paper llama a esta operación **scaled dot-product attention**:

> Attention(Q, K, V) = softmax(QKᵀ / √dₖ)V

No hace falta memorizar la fórmula. Su lógica es más importante: medir compatibilidades, normalizarlas y mezclar la información según su relevancia.

Las operaciones se expresan como multiplicaciones de matrices, una tarea que las GPU ejecutan con enorme eficiencia. La arquitectura no solo aprendía relaciones directas: también estaba muy bien alineada con el hardware necesario para escalar.

## Por qué hay múltiples cabezas

Una frase contiene distintas relaciones al mismo tiempo: gramaticales, semánticas, posicionales y referenciales.

La **multi-head attention** proyecta queries, keys y values en varios espacios y ejecuta múltiples operaciones de atención en paralelo. Cada cabeza puede capturar patrones distintos; después, sus resultados se combinan.

No se programa a una cabeza para buscar sujetos y a otra para resolver pronombres. Esas especializaciones pueden emerger durante el entrenamiento si ayudan a resolver la tarea.

El Transformer base del paper utilizaba ocho cabezas. La idea importante no es el número, sino la posibilidad de observar simultáneamente una secuencia desde diferentes subespacios de representación.

## Si todo ocurre a la vez, ¿dónde queda el orden?

Al eliminar la recurrencia aparece un problema: la autoatención por sí sola no sabe qué token apareció primero.

Por eso el Transformer suma una **codificación posicional** a la representación de cada token. El modelo original utilizaba funciones seno y coseno de diferentes frecuencias para crear una señal única y estructurada para cada posición.

Los autores también probaron posiciones aprendidas y obtuvieron resultados similares. Eligieron la versión sinusoidal porque podía facilitar la extrapolación a secuencias más largas.

Las implementaciones posteriores desarrollaron otros métodos, pero la necesidad permanece: si la arquitectura no procesa en orden, debemos incorporar la noción de posición por otro camino.

## Encoder, decoder y generación

El Transformer original era un modelo de traducción con dos partes.

El **encoder** procesaba la frase de entrada y construía representaciones contextuales. El **decoder** utilizaba esas representaciones para generar la salida un elemento a la vez.

Ambos apilaban capas de atención, redes *feed-forward*, conexiones residuales y normalización. El decoder añadía atención sobre la salida del encoder y utilizaba una máscara para impedir que una posición mirara tokens futuros durante el entrenamiento.

Ese enmascaramiento conserva el comportamiento autorregresivo: al predecir el siguiente token, el modelo solo puede utilizar los anteriores.

El título, por lo tanto, era provocador, no literal. El Transformer también necesitaba embeddings, capas densas, posiciones, normalización y otros componentes. “Attention is all you need” significaba que la atención podía reemplazar a la recurrencia y la convolución como mecanismo central para relacionar una secuencia.

## El resultado que volvió imposible ignorarlo

Una arquitectura nueva necesita algo más que elegancia conceptual: tiene que funcionar.

En traducción inglés-alemán, el Transformer grande alcanzó 28,4 BLEU y superó por más de dos puntos los mejores resultados publicados, incluidos ensambles. En inglés-francés obtuvo 41,0 BLEU, por encima de los modelos individuales previos, con una fracción de su costo de entrenamiento.

El modelo era más paralelizable, se entrenaba más rápido y produjo resultados competitivos o superiores. Esa combinación abrió una nueva dirección de investigación.

## De una máquina de traducción a una plataforma general

El paper no presentó un asistente universal. Presentó una solución para transducción de secuencias. Pero la arquitectura resultó suficientemente general para escapar de su propósito original.

BERT explotó principalmente el encoder para aprender representaciones bidireccionales. GPT desarrolló la rama autorregresiva basada en decoder. T5 reformuló múltiples tareas bajo un esquema de texto a texto.

Después llegaron modelos más grandes, nuevas técnicas de entrenamiento, ajuste con instrucciones, retroalimentación humana, recuperación de información, herramientas y multimodalidad.

Los asistentes actuales no son solamente “el Transformer de 2017”. Pero muchas de sus capacidades se construyeron sobre la vía que aquel trabajo hizo práctica: aprender representaciones contextuales a gran escala mediante atención.

La idea también salió del texto. Imágenes, audio y video pueden representarse como conjuntos o secuencias de elementos relacionados, y los Transformers se adaptaron a esas modalidades.

## El Transformer también tiene límites

La atención completa compara cada posición con todas las demás. Su costo crece de forma cuadrática con la longitud de la secuencia. Contextos extensos pueden exigir enormes cantidades de memoria y cómputo.

La paralelización tampoco significa bajo consumo. Al hacer posible el escalamiento, la arquitectura contribuyó a una carrera hacia modelos mucho mayores.

Y atención no equivale a comprensión humana. Los pesos de atención son cálculos matemáticos, no una explicación completa de por qué un modelo respondió algo. El sistema todavía puede inventar información, reproducir sesgos y producir errores con enorme confianza.

La arquitectura es poderosa. No es infalible ni necesariamente definitiva.

## El verdadero legado

Cuando una tecnología triunfa, su aparición parece inevitable. En 2017 no lo era.

Procesar una secuencia en orden parecía una consecuencia natural de que la secuencia tuviera orden. El Transformer separó ambas cosas: preservó posición y relaciones sin depender de una cadena de estados recurrentes.

Su legado no es una configuración exacta de seis capas, ocho cabezas o una codificación sinusoidal. Muchas de esas decisiones cambiaron.

Lo que sobrevivió fue una idea: **una secuencia puede comprenderse construyendo relaciones directas y aprendidas entre sus elementos**.

Un paper sobre traducción automática reorganizó la manera de procesar lenguaje, facilitó el escalamiento y se convirtió en una de las bases de la IA moderna.

La atención no fue literalmente todo lo que necesitábamos. Pero fue la pieza que permitió que muchas de las demás comenzaran a encajar.

## Referencia

- Ashish Vaswani et al., [*Attention Is All You Need*](https://proceedings.neurips.cc/paper_files/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf), NeurIPS 2017.

---

Este texto nació a partir de un guion que preparé para experimentar con contenido audiovisual asistido por inteligencia artificial. Podés [ver el video original en YouTube](https://youtu.be/Bd-p2JCNj6Q).
