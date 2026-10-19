---
title: "¿Qué es un embedding y cómo ayuda a buscar más allá de las palabras exactas?"
description: "Un mapa para encontrar textos relacionados, incluso cuando usan otras palabras. Cómo funcionan los embeddings, qué aportan a un chat con documentos y dónde están sus límites."
publishedAt: "2026-10-19"
---

Imaginá que querés pedir vacaciones y buscás «cómo pedir vacaciones» en los documentos de tu empresa. El procedimiento existe, pero se llama «Solicitud de licencia anual». Si el buscador depende de encontrar las mismas palabras, quizá tengas que adivinar cómo lo tituló otra persona.

Una búsqueda semántica puede acercarte a ese documento aunque escribas distinto. Para eso, una de las herramientas disponibles son los **embeddings**: representaciones numéricas que permiten comparar textos por las relaciones que un modelo aprendió a reconocer.

Me interesa explicar esta idea porque ayuda a mirar con otros ojos un buscador o un chat empresarial. Encontrar algo relacionado con una pregunta es útil. Después hay que comprobar si ese contenido realmente la responde.

## Un texto convertido en coordenadas

Un embedding representa un elemento mediante una lista de números, llamada vector. En este artículo vamos a pensar en textos: una frase, una pregunta o un fragmento de un documento.

Podés imaginar esa lista como las coordenadas de un lugar en un mapa. Al comparar dos representaciones, el sistema calcula una medida de cercanía. Un modelo preparado para búsqueda intenta que esa medida ayude a encontrar contenido relevante para la consulta.

Las coordenadas las produce un modelo entrenado. Los números no vienen con etiquetas como «vacaciones», «tristeza» o «finanzas». Tampoco existe un mapa único que todos los sistemas compartan: la representación depende del modelo y de la tarea. La [explicación de Google sobre el espacio de embeddings](https://developers.google.com/machine-learning/crash-course/embeddings/embedding-space) desarrolla esos límites de la analogía.

## El supermercado como mapa imaginario

Pensá en un supermercado organizado por usos. La yerba, el café y el té podrían quedar en una zona; los detergentes, en otra. Si buscás algo para preparar una bebida caliente, esa organización te orienta.

Podemos usar esa imagen para pensar en textos relacionados. Un mapa semántico podría acercar «solicitud de licencia anual» y «cómo pedir vacaciones». Para ilustrar relaciones entre palabras, esperaríamos que «perro» tuviera más relación con «gato» que con «detergente».

Estos son ejemplos imaginarios, no distancias medidas en un modelo concreto. El mapa real tiene muchas dimensiones y sus relaciones pueden resultar menos intuitivas que las góndolas. La analogía sirve para imaginar la cercanía; no describe un supermercado escondido dentro de la computadora.

La misma idea de encontrar vecinos puede servir para recomendar artículos o productos relacionados. Lo que cuenta como «relacionado» depende del sistema: compartir tema, uso o preferencias no siempre lleva a los mismos vecinos.

## Cómo se transforma eso en una búsqueda

Una forma habitual de preparar una búsqueda es generar embeddings de los textos que queremos consultar y guardarlos junto con una referencia a sus originales. Cuando llega la pregunta, se genera una representación compatible y se buscan los candidatos más cercanos.

Así podría aparecer nuestro procedimiento de licencia anual. La [documentación de Sentence Transformers](https://www.sbert.net/examples/sentence_transformer/applications/semantic-search/README.html) explica este uso de representaciones para recuperar textos relevantes, incluyendo búsquedas donde una pregunta breve se compara con pasajes más largos.

Buscar por palabras sigue siendo útil. Si necesitás el expediente «AB-1042», una coincidencia exacta puede importar más que encontrar documentos sobre temas parecidos. Por eso existen sistemas que combinan búsqueda por palabras y búsqueda vectorial. Elegir una herramienta depende también de qué preguntas esperamos hacerle.

## Qué pasa cuando el chat usa tus documentos

RAG es la sigla en inglés de *generación aumentada por recuperación*. La idea es recuperar información y dársela como contexto a un modelo que prepara la respuesta. Los embeddings pueden participar en esa recuperación, junto con otros métodos; RAG no exige usar exclusivamente búsqueda vectorial. La [documentación de Elastic](https://www.elastic.co/docs/solutions/search/rag) describe opciones de búsqueda por texto, vectores y combinaciones de ambas.

En un ejemplo sencillo, el recorrido sería:

1. Preparar fragmentos de los documentos y sus referencias.
2. Recuperar los que parezcan relevantes para la pregunta.
3. Pasárselos al modelo para que elabore una respuesta apoyada en ellos.

Si aparece una política de vacaciones vieja o correspondiente a otro país, aumenta el riesgo de responder mal. Un modelo puede advertir que falta información y pedir una aclaración, pero no conviene contar con que siempre compense una recuperación defectuosa.

Incluso con el fragmento correcto puede interpretar mal una condición. Por eso conviene revisar la recuperación y la respuesta como dos partes del trabajo.

## Parecido no significa verdadero

Imaginá dos frases: «El proyecto se aprobó» y «El proyecto no se aprobó». Comparten tema y casi todas las palabras, pero afirman cosas incompatibles. Según el modelo y la forma de compararlas, pueden recibir una puntuación de similitud alta.

No hay una distancia universal para ese par. El estudio [SemAntoNeg](https://aclanthology.org/2022.blackboxnlp-1.20/) analiza paráfrasis con negaciones y antónimos, y encuentra diferencias importantes entre modelos. No es una prueba de estas dos frases en español; sí muestra por qué conviene comprobar cómo maneja un sistema esas distinciones.

Una puntuación de similitud tampoco comprueba si el proyecto fue aprobado en la realidad. Para eso necesitamos evidencia: por ejemplo, el acta vigente de la reunión y su contexto.

Algo parecido pasa con las fechas. Dos procedimientos pueden tratar exactamente el mismo tema y tener instrucciones distintas porque uno reemplazó al otro. La cercanía temática por sí sola no establece cuál sigue vigente.

## Qué revisaría en un chat empresarial

Antes de elegir otro modelo porque una respuesta salió mal, miraría qué información recibió. Probaría con preguntas concretas y documentos cuyo contenido podamos comprobar:

- ¿Qué fragmentos recuperó y de qué documentos vienen?
- ¿Incluyen la condición o excepción que cambia la respuesta?
- ¿Son la versión vigente y corresponden al caso consultado?
- ¿El sistema respeta los permisos de acceso de quien pregunta?
- ¿Qué hace cuando no encuentra respaldo suficiente?

Retomando las vacaciones: que el chat encuentre la política de licencias es un buen comienzo. Todavía falta ver si aplica a tu situación y si la respuesta respeta lo que dice.

Los embeddings llevan años utilizándose y ayudan a buscar más allá de las coincidencias literales. Entender ese mecanismo permite hacer preguntas mejores sobre el sistema que estamos usando, sin necesitar fórmulas.

**Antes de evaluar qué tan bien responde tu chat, mirá qué información encontró para responder.**

## Referencias

- Google, [Embedding space and static embeddings](https://developers.google.com/machine-learning/crash-course/embeddings/embedding-space).
- Sentence Transformers, [Semantic Search](https://www.sbert.net/examples/sentence_transformer/applications/semantic-search/README.html).
- Elastic, [RAG](https://www.elastic.co/docs/solutions/search/rag).
- Vahtola, Creutz y Tiedemann, [It Is Not Easy To Detect Paraphrases: Analysing Semantic Similarity With Antonyms and Negation Using the New SemAntoNeg Benchmark](https://aclanthology.org/2022.blackboxnlp-1.20/), 2022.

Sigo estas conversaciones en [mi canal de YouTube](https://www.youtube.com/@saarreche). Un abrazo.
