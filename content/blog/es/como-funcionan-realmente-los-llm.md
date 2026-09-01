---
title: "Cómo funcionan realmente los LLM"
description: "Un recorrido desde las palabras hasta los tokens, vectores, atención y probabilidades para entender qué ocurre dentro de un gran modelo de lenguaje cuando responde."
publishedAt: "2026-09-01"
---

Escribís una pregunta. Esperás unos segundos. Y del otro lado aparece una respuesta que parece entender lo que dijiste.

No solo completa una frase. Puede explicar un concepto, adaptar el tono, escribir código, descubrir una contradicción o seguir una idea que empezó muchos párrafos atrás.

La experiencia es tan natural que resulta difícil no imaginar algún tipo de voz pensando detrás de la pantalla.

Pero dentro de un gran modelo de lenguaje no hay una voz escribiendo la respuesta entera. Tampoco hay una base de datos donde cada pregunta tenga guardado su texto correspondiente. Hay una secuencia de operaciones matemáticas que transforma texto en números, relaciona esos números entre sí y calcula, una y otra vez, qué token debería venir después.

Esa descripción suena demasiado simple para explicar todo lo que vemos.

Y, sin embargo, ese es justamente el punto interesante: una regla de entrenamiento aparentemente sencilla, llevada a una escala enorme, puede producir comportamientos que ya no parecen sencillos en absoluto.

## El modelo nunca recibe palabras

Supongamos que escribimos:

> La inteligencia artificial está cambiando el trabajo.

Nosotros vemos palabras y una oración con sentido. El modelo recibe otra cosa.

Antes de entrar a la red neuronal, el texto pasa por un **tokenizador**. Su trabajo es dividirlo en unidades que pertenecen a un vocabulario finito. Algunos tokens representan palabras completas; otros, partes de una palabra, signos de puntuación o fragmentos frecuentes.

“Inteligencia” podría ser un token en un modelo y varios en otro. Una palabra poco habitual, un nombre propio o una expresión en un idioma con menor presencia en los datos puede dividirse en más piezas.

Cada una de esas piezas se convierte en un identificador numérico. El modelo ya no ve letras. Ve algo parecido a:

`[1842, 293, 8174, 156, 9021]`

Los números no contienen significado por sí mismos. Son índices dentro del vocabulario, como los números de una ficha en un catálogo.

Este primer paso explica algunas rarezas que, desde afuera, parecen absurdas. El modelo puede escribir una palabra sin dificultad y, aun así, equivocarse al contar sus letras. Nosotros pensamos en la palabra como una unidad visual; el modelo puede haberla recibido dividida en fragmentos que no coinciden con esas letras.

También explica por qué el límite de una conversación se mide en tokens y no en páginas. El modelo no procesa documentos como los vemos nosotros. Procesa una secuencia de unidades discretas.

## De identificadores a posiciones en un espacio

Una lista de enteros todavía no dice demasiado. Para trabajar con ella, el modelo transforma cada token en un **embedding**: un vector compuesto por muchos números.

Podemos imaginarlo como una posición dentro de un espacio con una enorme cantidad de dimensiones. No existe un eje que diga “animal” y otro que diga “tristeza”. Durante el entrenamiento, el sistema aprende representaciones distribuidas donde ciertos patrones, usos y relaciones terminan ubicándose de formas útiles para predecir texto.

Palabras utilizadas en contextos parecidos suelen adquirir representaciones relacionadas. Pero el embedding inicial tampoco es el significado definitivo del token.

Pensemos en la palabra “banco”. Puede ser una institución financiera o un lugar donde sentarse. El identificador inicial puede ser el mismo. Lo que cambia su interpretación es el contexto.

Y ahí entramos al corazón del Transformer.

## El orden también tiene que convertirse en matemática

Si entregáramos únicamente un conjunto de embeddings, el modelo tendría palabras, pero no sabría en qué orden aparecieron.

“El perro mordió al hombre” y “el hombre mordió al perro” contienen elementos muy parecidos y cuentan historias bastante distintas.

Por eso el sistema incorpora información sobre la posición. El Transformer original utilizaba funciones sinusoidales. Muchos modelos modernos emplean técnicas como **RoPE**, que introduce relaciones de posición mediante rotaciones aplicadas dentro del mecanismo de atención.

No hace falta dominar la fórmula para quedarse con la idea importante: antes de relacionar los tokens, el modelo necesita alguna forma de representar dónde está cada uno y a qué distancia se encuentra de los demás.

El significado no depende solamente de qué apareció. También depende del orden.

## Atención: decidir qué partes del contexto importan

La palabra *atención* puede engañarnos porque suena psicológica. Dentro del Transformer no significa que el modelo se concentre como una persona.

Es una operación matemática que permite actualizar la representación de cada token utilizando información de otros tokens de la secuencia.

Para hacerlo, cada representación produce tres vectores que suelen llamarse **query**, **key** y **value**.

Una forma intuitiva de pensarlo es esta:

- La *query* expresa qué información está buscando el token actual.
- La *key* describe qué clase de información puede ofrecer cada token anterior.
- El *value* contiene la información que será transmitida si esa relación resulta relevante.

El sistema compara queries con keys, calcula puntajes, los normaliza y combina los values según esos pesos. Así, la representación de una palabra deja de depender solo de su identidad inicial y empieza a incorporar el contexto que la rodea.

En “deposité dinero en el banco”, los tokens vinculados con dinero y depósito empujan la representación de “banco” hacia la interpretación financiera. En otra oración, “me senté en el banco de la plaza”, las relaciones serían diferentes.

Los modelos autoregresivos aplican además una **máscara causal**: cuando calculan el próximo token, cada posición puede atender a lo que apareció antes, pero no a aquello que todavía no fue generado. No pueden mirar el futuro de la respuesta. Tienen que construirlo.

## Muchas miradas al mismo tiempo

Un Transformer no realiza una sola operación de atención. Utiliza varias cabezas en paralelo.

Cada cabeza aprende proyecciones distintas y puede especializarse en relaciones diferentes. Una puede resultar útil para conectar un pronombre con el sustantivo al que se refiere. Otra puede seguir patrones de puntuación, dependencias sintácticas o relaciones que no tienen una traducción humana tan clara.

Conviene no imaginar un diccionario limpio donde cada cabeza tiene una función perfectamente nombrada. Las representaciones se distribuyen, se superponen y todavía no entendemos por completo cómo todos los circuitos internos producen cada comportamiento.

Pero la intuición sirve: el modelo no mira el contexto de una única manera. Construye varias lecturas parciales y combina sus resultados.

## Atención no es todo lo que ocurre en una capa

La atención permite mover información entre posiciones. Después, cada posición pasa por una red neuronal llamada habitualmente **MLP** o red *feed-forward*.

Si la atención pregunta “¿de dónde debería traer información?”, la MLP se parece más a “¿qué transformación debería aplicar a lo que ahora sé?”. Es allí donde pueden activarse y combinarse muchos patrones aprendidos durante el entrenamiento.

Ambas operaciones se conectan mediante caminos residuales. En lugar de reemplazar por completo la representación anterior, cada bloque agrega cambios sobre un flujo que atraviesa el modelo. La normalización ayuda a mantener estable ese proceso.

Atención. MLP. Conexiones residuales. Normalización.

Ese bloque se repite muchas veces.

En las primeras capas pueden formarse relaciones relativamente locales. A medida que la información atraviesa el modelo, las representaciones incorporan patrones cada vez más ricos. Cuando llegan al final, el vector correspondiente a la última posición resume —de manera imperfecta y comprimida— lo que el modelo necesita del contexto para elegir qué sigue.

## De vuelta al vocabulario

Al terminar la última capa, seguimos teniendo vectores. Para producir texto, el modelo proyecta la representación final hacia una lista con una puntuación para cada token de su vocabulario.

Esas puntuaciones se llaman **logits**. Después se convierten en una distribución de probabilidades.

El modelo podría calcular algo así:

- “modelo”: 18 %
- “sistema”: 13 %
- “proceso”: 9 %
- miles de tokens restantes: probabilidades menores

Según la configuración de generación, el sistema puede elegir el token con mayor probabilidad o muestrear entre varias posibilidades. Parámetros como la temperatura modifican cuánto se concentra o dispersa esa elección.

El token elegido se agrega al texto. Luego todo vuelve a ocurrir para calcular el siguiente.

Una respuesta extensa no aparece completa dentro del modelo. Se construye token por token, y cada token nuevo pasa a formar parte del contexto utilizado para producir el próximo.

Por eso una pequeña decisión al principio puede cambiar el resto de la respuesta. El modelo no recorre un texto que ya había escrito internamente. Va creando un camino y condicionando sus pasos siguientes.

## ¿Cómo aprendió a hacer todo esto?

Antes de responder preguntas, el modelo pasó por un entrenamiento sobre grandes cantidades de texto.

Durante el preentrenamiento recibe secuencias donde el token siguiente ya es conocido. Hace una predicción, mide la diferencia entre su distribución y el resultado real, y utiliza esa señal de error para ajustar sus parámetros mediante descenso por gradiente y retropropagación.

Nadie programa manualmente una regla para cada palabra. Los pesos cambian un poco en cada actualización. Repetido a enorme escala, ese proceso hace que el modelo capture regularidades del lenguaje, asociaciones entre conceptos, estilos, estructuras de código y muchos patrones presentes en los datos.

Lo que normalmente llamamos “el modelo” es, en buena medida, la arquitectura más todos esos pesos aprendidos.

Dos sistemas pueden compartir una arquitectura muy parecida y comportarse de formas diferentes porque fueron entrenados con datos, objetivos y decisiones distintas. La arquitectura define qué operaciones son posibles. Los pesos contienen las regularidades adquiridas durante el entrenamiento.

Después suele llegar el **postentrenamiento**. Un modelo que solo aprendió a continuar texto no necesariamente sabe comportarse como un asistente. Puede completar una pregunta con otra pregunta, imitar conversaciones extrañas o producir algo que no ayuda al usuario.

El ajuste con ejemplos de instrucciones, preferencias humanas u otras señales le enseña qué clase de respuesta se espera: seguir pedidos, mantener ciertos límites, reconocer formatos y resultar más útil. Esto no vuelve infalible al sistema. Cambia su comportamiento.

## “Solo predice el próximo token” es verdad, pero no alcanza

Decir que un LLM predice el siguiente token es correcto. El problema aparece cuando usamos esa frase como si cerrara la discusión.

Un ajedrecista también mueve una pieza por vez. Eso no significa que elegir la siguiente jugada sea una tarea trivial.

Para predecir correctamente el próximo token en un paper, una conversación, un programa o una demostración matemática, el modelo necesita construir representaciones útiles de muchos patrones que generan ese texto. A suficiente escala, la predicción puede favorecer capacidades que se parecen a traducir, resumir, programar, seguir instrucciones o resolver ciertos problemas.

Eso no demuestra que el modelo entienda como una persona. Tampoco demuestra lo contrario. La pregunta filosófica por el entendimiento no queda resuelta mirando una fórmula.

Lo que sí podemos decir es que “autocompletar” ya no describe bien la complejidad de las transformaciones internas. La salida se produce un token por vez, pero el cálculo que decide cada token utiliza todo un sistema de representaciones contextuales aprendido a gran escala.

El objetivo es simple de enunciar. El comportamiento emergente no necesariamente lo es.

## El modelo no es todo el producto

Cuando usamos ChatGPT, Claude, Gemini o cualquier asistente moderno, rara vez interactuamos con un LLM aislado.

Alrededor del modelo puede haber instrucciones del sistema, filtros, recuperación de documentos, búsquedas en internet, memoria almacenada, herramientas, ejecución de código y reglas que deciden cuándo pedir confirmación.

El modelo base recibe un contexto y produce tokens. Si parece recordar una conversación de la semana anterior, probablemente el producto recuperó información y volvió a incluirla en el contexto. Si cita una página reciente, algún componente tuvo que buscarla y entregarle el contenido. Si modifica un archivo, existe una herramienta externa que convierte texto generado en una acción real.

Esta distinción importa mucho.

Nos ayuda a no atribuirle memoria permanente a un sistema que por sí solo no la posee. También explica por qué el mismo modelo puede comportarse de forma muy distinta en dos aplicaciones: cambian las instrucciones, las herramientas, la información disponible y los controles que lo rodean.

Muchas de las capacidades que hoy llamamos “IA” surgen de la combinación entre modelo y arquitectura de producto.

## Lo que esta mecánica explica sobre sus límites

Entender el recorrido también vuelve menos misteriosos algunos errores.

El modelo está optimizado para producir una continuación plausible, no para garantizar que cada afirmación corresponda con el mundo. Puede generar una fuente inexistente porque la secuencia tiene la forma estadística de una referencia convincente. Puede perder una instrucción dentro de un contexto muy largo porque la información compite a través de muchas capas y relaciones. Puede fallar en una cuenta sencilla aunque escriba una explicación brillante, porque predecir patrones lingüísticos no equivale a ejecutar siempre un algoritmo aritmético fiable.

Las herramientas, la recuperación de fuentes y la verificación pueden reducir esos problemas. No cambian la naturaleza básica del modelo.

También entendemos por qué la redacción del prompt importa, aunque no exista una frase mágica. El prompt es parte de la secuencia que condiciona todas las representaciones siguientes. Dar contexto, ejemplos y criterios claros modifica el problema que el modelo intenta continuar.

No estamos hablándole a una mente escondida. Estamos construyendo el contexto sobre el que se realizará el próximo cálculo.

## Una máquina simple de describir, difícil de comprender

El recorrido completo cabe en pocas líneas:

Texto. Tokens. Embeddings. Posición. Bloques de atención y MLP. Logits. Probabilidades. Un token nuevo. Y otra vez desde el principio.

La idea general es accesible. Lo extraordinario aparece en la escala: miles de millones de parámetros, cantidades inmensas de ejemplos y capas de operaciones cuyos resultados se combinan de maneras que todavía intentamos interpretar.

Para mí, entender esto no le quita valor a la tecnología. Se lo devuelve.

No necesitamos imaginar magia para reconocer que construimos un sistema asombroso. Tampoco necesitamos creer que hay una persona dentro para tomar en serio sus capacidades.

Un LLM es una máquina entrenada para predecir el lenguaje. En el camino, aprende representaciones que le permiten hacer mucho más de lo que esa frase parece prometer.

Y quizás esa sea la parte más fascinante: conocemos las operaciones, diseñamos la arquitectura y ejecutamos el entrenamiento, pero todavía estamos aprendiendo a explicar con precisión todo lo que aparece cuando esas piezas trabajan juntas.

## Referencias

- 0xkato, [*How LLMs Actually Work*](https://www.0xkato.xyz/how-llms-actually-work/), 2026.
- Vaswani et al., [*Attention Is All You Need*](https://arxiv.org/abs/1706.03762), 2017.
- Kudo y Richardson, [*SentencePiece: A Simple and Language Independent Subword Tokenizer and Detokenizer for Neural Text Processing*](https://arxiv.org/abs/1808.06226), 2018.
- Brown et al., [*Language Models are Few-Shot Learners*](https://arxiv.org/abs/2005.14165), 2020.
- Su et al., [*RoFormer: Enhanced Transformer with Rotary Position Embedding*](https://arxiv.org/abs/2104.09864), 2021.
- Ouyang et al., [*Training Language Models to Follow Instructions with Human Feedback*](https://arxiv.org/abs/2203.02155), 2022.

