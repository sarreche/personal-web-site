---
title: "El terror de Anthropic es una multiplicación de matrices"
description: "El meme parece una clase de álgebra lineal, pero resume bastante bien la ansiedad laboral alrededor de la IA. Y también simplifica unas cuantas cosas."
publishedAt: "2026-09-14"
coverImage: "/images/blog/el-terror-de-anthropic-multiplicacion-de-matrices.png"
coverAlt: "Meme titulado El terror de los trabajadores de Anthropic que muestra una multiplicación de matrices"
---

Hay una imagen circulando por internet que muestra una multiplicación de matrices. Una fila de la primera matriz se cruza con una columna de la segunda para producir un elemento de la tercera.

Arriba dice:

**“El terror de los trabajadores de Anthropic.”**

Si nunca estudiaste álgebra lineal, el meme puede parecer una advertencia muy específica: aparentemente la gente que trabaja en uno de los laboratorios de inteligencia artificial más importantes del mundo vive aterrorizada por un parcial de primer año.

Y, siendo honestos, tampoco sería tan raro. Hay conocimientos que uno aprende, aprueba y devuelve casi intactos a la universidad. La multiplicación de matrices suele estar en esa lista.

Pero el chiste apunta a otra cosa.

Claude, ChatGPT, Gemini y prácticamente todos los grandes modelos actuales existen gracias a cantidades absurdas de operaciones como la que aparece en la imagen. Debajo de la conversación, del tono amable y de esa respuesta que parece haber entendido exactamente lo que quisimos decir, hay números organizados en matrices que se multiplican a una velocidad difícil de imaginar.

La broma es que los trabajadores de Anthropic están construyendo una máquina capaz de automatizar parte del trabajo intelectual y que, en el fondo, esa máquina es una multiplicación de matrices repetida una barbaridad de veces.

No es Terminator entrando por la puerta.

Es álgebra lineal con presupuesto.

## Qué está ocurriendo en la imagen

La operación del meme toma una fila de la primera matriz y una columna de la segunda. Multiplica sus elementos posición por posición y suma los resultados.

En el ejemplo, el primer valor de la matriz final sería:

**c₁ = a₁ × b₁ + a₂ × b₄ + a₃ × b₇**

Después se repite el procedimiento con otras filas y columnas hasta completar la matriz resultante.

No hay conciencia. No hay intención. La matriz no se detiene a pensar si quiere quedarse con tu empleo. Ni siquiera sabe que es lunes.

Solo transforma un conjunto de números en otro siguiendo una regla precisa.

Visto así, cuesta creer que esta operación esté relacionada con sistemas capaces de programar, traducir, analizar documentos, generar imágenes o explicar por qué tu planta parece estar muriendo.

Sin embargo, lo está.

## Por qué los modelos necesitan tantas matrices

Para trabajar con lenguaje, un modelo primero representa los tokens —fragmentos de palabras— como vectores de números. Esos números no son una definición de diccionario. Son posiciones dentro de un espacio matemático aprendido durante el entrenamiento.

A partir de ahí, el modelo transforma esas representaciones una y otra vez. Las combina con grandes matrices de pesos, aplica otras operaciones, compara relaciones entre tokens y va construyendo nuevas representaciones del contexto.

En un transformer, incluso la atención que ayudó a cambiar toda la industria depende de multiplicaciones entre matrices. Las consultas y las claves se combinan para estimar qué partes del contexto deberían importar. Luego esos pesos se usan para mezclar los valores. Entre una etapa y otra aparecen más capas, más proyecciones y, sí, más matrices.

Si querés entrar con más detalle en esa arquitectura, ya escribí sobre [cómo funcionan realmente los LLM](/blog/como-funcionan-realmente-los-llm) y sobre [el paper *Attention Is All You Need*](/blog/attention-is-all-you-need-el-paper-que-cambio-la-inteligencia-artificial).

La versión brutalmente resumida sería:

1. Convertimos el lenguaje en números.
2. Multiplicamos y transformamos esos números muchísimas veces.
3. Convertimos el resultado nuevamente en una probabilidad sobre el próximo token.
4. Repetimos hasta que aparece un correo convincente, una función de TypeScript o una explicación innecesariamente extensa de cómo hervir un huevo.

Ahí vive la primera capa del meme: detrás de algo que llamamos “inteligencia” hay una operación que muchos recuerdan de una pizarra.

## “Solo es multiplicación de matrices”

Internet adora la palabra **solo**.

Un avión es solo metal empujando aire. Una sinfonía es solo aire vibrando. Una empresa es solo un grupo de chats donde todos preguntan si alguien puede ver su pantalla.

Y un modelo de lenguaje es solo multiplicación de matrices.

La frase no es falsa. Es incompleta de una manera bastante entretenida.

Las redes neuronales dependen enormemente de esas operaciones, pero también necesitan funciones no lineales, mecanismos de atención, normalización, tokenización, algoritmos de entrenamiento, datos, objetivos, evaluaciones, software distribuido y hardware especializado. Después hace falta convertir el modelo en un producto, darle herramientas, controlar permisos, medir errores y decidir qué ocurre cuando responde algo con absoluta seguridad y absoluta imaginación.

Decir que Claude es solo matrices es parecido a decir que una novela es solo tinta. La materia prima está ahí, pero todavía falta explicar cómo llegó a producir ese efecto.

La reducción funciona como meme precisamente porque comprime una pila enorme de ingeniería dentro de una operación visualmente inocente.

## Entonces, ¿por qué el terror es de Anthropic?

La leyenda podría mencionar a OpenAI, Google, Microsoft o casi cualquier empresa que esté incorporando IA. Anthropic funciona especialmente bien porque construye Claude y habla de forma pública sobre automatización, capacidades avanzadas y efectos laborales.

La propia empresa ha estudiado el impacto de la IA en el trabajo. Su [investigación publicada en marzo de 2026](https://www.anthropic.com/research/labor-market-impacts) no encontró entonces un aumento sistemático del desempleo en las profesiones más expuestas, aunque sí señales de una desaceleración en la contratación de trabajadores jóvenes.

Es decir: el meme exagera, pero no aparece en el vacío.

Las personas que construyen estos sistemas no están fuera del mundo que están transformando. Programadores, investigadores, analistas, diseñadores y equipos operativos también realizan trabajo digital que un modelo puede acelerar o automatizar parcialmente.

Hay algo muy humano en imaginar a un empleado de Anthropic mirando una multiplicación de matrices y pensando: “Capaz le dimos demasiado poder”.

También hay algo muy internet en atribuirle intenciones malévolas a una operación que no podría reconocer una renuncia aunque la multiplicaran por su transpuesta.

## La parte del chiste que sí deberíamos tomar en serio

El meme convierte una ansiedad enorme en una imagen que cabe en la pantalla del teléfono.

Nos recuerda que una tecnología no tiene que parecer humana por dentro para producir efectos humanos por fuera. Un sistema puede estar compuesto por operaciones matemáticas completamente mecánicas y aun así modificar cómo programamos, escribimos, buscamos información o formamos equipos.

Las hojas de cálculo tampoco tenían ambiciones, pero transformaron departamentos enteros. Los motores de búsqueda no “entendían” internet como una persona, pero cambiaron nuestra relación con la información. Las matrices no desean quedarse con ningún puesto; las organizaciones sí pueden decidir reorganizar el trabajo alrededor de ellas.

Por eso la pregunta importante no es si la multiplicación tiene conciencia laboral.

La pregunta es quién decide dónde se usa, qué tarea se automatiza, cómo se reparte la productividad y qué oportunidad queda para que una persona aprenda. El riesgo no nace de que una matriz despierte una mañana con ganas de ser product manager. Nace de decisiones económicas y organizacionales tomadas por seres humanos que sí saben qué día de la semana es. En general.

## La parte que el meme deja afuera

Existe otra ironía: esas matrices no se multiplican solas.

Detrás hay personas que diseñan arquitecturas, preparan datos, construyen centros de cómputo, fabrican chips, investigan algoritmos, corrigen fallos, prueban comportamientos y mantienen toda la infraestructura funcionando. Incluso cuando un agente realiza una tarea completa, alguien definió el entorno, los permisos, el objetivo y el criterio para aceptar el resultado.

La IA puede cambiar qué personas hacen falta y qué tareas realizan. Puede reducir algunos roles, crear otros y volver mucho más productivos ciertos equipos. Lo que no hace es convertir mágicamente una ecuación en una empresa autónoma.

Entre la matriz del meme y Claude hay una de las construcciones técnicas y humanas más complejas de nuestra época.

Que al final todo dependa de operaciones simples repetidas a gran escala no le quita mérito. En cierto sentido, lo vuelve más impresionante.

## Quizás el verdadero terror sea haber olvidado cómo se multiplicaban

El meme tiene dos públicos.

El primero ve la matriz y piensa en la automatización del trabajo.

El segundo ve la matriz y revive un examen que creía emocionalmente superado.

Yo creo que por eso funciona tan bien. Une dos miedos contemporáneos: que la inteligencia artificial pueda hacer demasiado y que alguien nos pida resolver a mano la operación que la hace posible.

La buena noticia es que no hace falta multiplicar matrices sobre papel para usar IA con criterio. Pero entender qué ocurre debajo ayuda a quitarle algo de magia. Estos modelos no son seres digitales escondidos en un servidor. Son sistemas matemáticos enormes, entrenados con datos y convertidos en productos mediante muchísimo trabajo humano.

La mala noticia para los trabajadores de Anthropic es que el meme ya está en internet. A partir de ahora, cada vez que vean una fila acercándose a una columna sabrán que alguien está a punto de generar otro token.

Y probablemente una reunión.
