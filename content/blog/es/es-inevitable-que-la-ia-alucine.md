---
title: "¿Es inevitable que la IA alucine?"
description: "Un paper sostiene que los modelos de lenguaje siempre inventarán cosas. La pregunta interesante no es solo si pueden equivocarse, sino cuándo deberían admitir que no saben."
publishedAt: "2026-10-01"
---

Hay una escena que se repite bastante cuando trabajo con IA. Le pido una referencia, una fecha o el nombre de una investigación. La respuesta llega rápido, bien escrita, con ese tono que parece decir «quedate tranquilo, esto es así». Después abro la fuente y descubro que el detalle no estaba, o que el artículo citado no existe.

Esa mezcla de fluidez y error es lo que solemos llamar una *alucinación*. El término no me encanta —la máquina no está viviendo una experiencia—, pero sirve para nombrar un problema real: una afirmación convincente que no se sostiene.

Por eso me llamó la atención un [paper de 2024 titulado *LLMs Will Always Hallucinate, and We Need to Live With This*](https://arxiv.org/pdf/2409.05746). Su tesis es fuerte: las alucinaciones no serían un defecto pasajero que desaparecerá al entrenar un modelo más grande. Estarían ligadas a límites estructurales de estos sistemas.

La idea merece una lectura seria. También merece una pregunta incómoda: **¿qué significa exactamente «inevitable»?**

## Un modelo no puede tener todos los datos

Una parte del argumento resulta bastante intuitiva. Ningún conjunto de entrenamiento contiene todos los hechos del mundo. Aparecen investigaciones nuevas, cambian las leyes, se publican datos mañana y hay información privada a la que el modelo jamás tuvo acceso.

Además, aunque un dato esté en alguna parte de sus fuentes, recuperarlo bien no está garantizado. El modelo puede mezclar contextos o completar un hueco con algo que suena plausible. El paper recorre estos puntos —datos incompletos, recuperación imperfecta, interpretación ambigua y generación— para explicar por qué mejorar una sola pieza no resuelve todos los errores.

Hasta ahí, estoy bastante de acuerdo con la advertencia práctica. Si le pido a una IA una respuesta sobre cualquier tema, en cualquier momento, no debería esperar que siempre sepa la verdad.

Pero **no saber no es lo mismo que inventar**.

## El salto que el paper no termina de justificar

En una de sus demostraciones, los autores toman una afirmación verdadera que no puede verificarse usando el conjunto de entrenamiento del modelo y la consideran una alucinación. A mi juicio, ahí cambian de problema: una frase puede ser verdadera aunque el sistema no tenga cómo comprobarla con sus datos. La falta de verificación es una razón para expresar incertidumbre, no una prueba de falsedad.

El trabajo también recurre al problema de la parada para sostener que un LLM no puede prever todas sus posibles generaciones. Pero el hecho de que exista un límite general para ciertos programas no demuestra, por sí solo, que cada respuesta de un asistente concreto tenga que incluir un error factual. Una conversación puede tener un límite de longitud; un sistema puede interrumpir la generación; y, sobre todo, puede optar por no responder una pregunta que no puede sostener.

No pretendo resolver acá todas las discusiones formales del paper. Sí me parece importante no convertir una prepublicación con una tesis provocadora en el titular «la matemática probó que la IA siempre miente». Eso es más de lo que sus argumentos permiten concluir sin debate.

## La salida menos espectacular: decir «no sé»

Una [investigación posterior de OpenAI sobre alucinaciones](https://openai.com/index/why-language-models-hallucinate/) propone mirar también los incentivos. Si a un modelo lo premiamos por acertar y no le damos valor a reconocer incertidumbre, adivinar puede rendir mejor que abstenerse. A veces acertará de casualidad; otras, inventará con seguridad.

Esto cambia bastante la conversación. Si obligamos al asistente a responder todas las preguntas, los errores sobre hechos que no conoce son una posibilidad persistente. Si puede decir «no tengo suficiente información», pedir una aclaración o consultar una fuente comprobable, puede evitar *algunas* alucinaciones. La contrapartida es que, si se abstiene ante todo, deja de ser útil.

Entonces no buscamos ni una máquina que conteste siempre ni una que nunca se arriesgue. Buscamos una que sepa distinguir mejor cuándo tiene base para afirmar algo, cuándo debe verificar y cuándo debe parar.

## Consultar fuentes ayuda, pero no hace magia

Conectar un modelo a documentos o a la web reduce un tipo importante de error: ya no depende solo de lo que quedó en sus parámetros. Pero todavía puede elegir una fuente equivocada, leerla mal, citar un párrafo que no respalda su afirmación o mezclar dos resultados.

Me pasa incluso escribiendo este blog: encontrar un enlace no significa haber comprobado lo que dice el texto. Tengo que abrir la fuente, entender qué afirma realmente y separar los hechos de mi interpretación. Cuando el asunto es reciente o delicado, esa revisión importa todavía más.

Por eso, para mí, la respuesta práctica no es «no uses IA porque alucina» ni «usala tranquilo porque ahora tiene búsqueda». Es diseñar el trabajo alrededor de su incertidumbre: pedir fuentes para las afirmaciones verificables, revisar las decisivas, conservar la posibilidad de corregir y no delegar sin control una decisión que puede afectar a alguien.

El paper me deja una advertencia valiosa, aunque no compre su conclusión más absoluta: **la fluidez no es una garantía de verdad**. Un buen asistente no es el que tiene una respuesta para todo. Es el que puede ayudar mucho sin esconder el momento en que no sabe.

Esta vez no hay video dedicado al tema. Si querés seguir explorando conmigo estas preguntas sobre IA y software, te espero en [mi canal de YouTube](https://www.youtube.com/@saarreche).
