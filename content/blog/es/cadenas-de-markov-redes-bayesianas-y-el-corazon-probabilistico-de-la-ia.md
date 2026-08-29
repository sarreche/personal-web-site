---
title: "Cadenas de Markov, redes bayesianas y el corazón probabilístico de la IA"
description: "Estados, transiciones, independencia condicional e inferencia: dos estructuras fundamentales para entender cómo la IA representa y razona bajo incertidumbre."
publishedAt: "2026-08-27"
---

Hay algo que todavía resulta extraño cuando hablamos de inteligencia artificial.

Esperamos que una máquina “sepa” una respuesta, como si dentro hubiera una colección de hechos perfectamente ordenados. Pero gran parte de la IA trabaja de otra forma.

Representa incertidumbre. Estima distribuciones. Compara posibilidades. Actualiza probabilidades cuando aparece evidencia nueva.

En ese sentido, su corazón es profundamente probabilístico.

Dos ideas históricas ayudan a comprender este enfoque: las **cadenas de Markov** y las **redes bayesianas**.

No son la explicación completa de la IA moderna. Una red neuronal profunda o un modelo de lenguaje no es simplemente una cadena de Markov ni una red bayesiana clásica. Pero estas estructuras enseñan dos principios que atraviesan gran parte del campo:

1. Cómo modelar cambios a lo largo del tiempo sin conservar toda la historia explícitamente.
2. Cómo representar dependencias entre variables sin almacenar una distribución conjunta imposible de manejar.

## Probabilidad no significa azar sin estructura

Un modelo probabilístico no responde al azar de manera arbitraria.

Asigna probabilidades según una estructura y unos parámetros. Puede decir que un evento es más probable que otro, combinar evidencia y cuantificar incertidumbre.

La probabilidad condicional expresa cómo cambia nuestra evaluación de un evento cuando conocemos otro:

```text
P(A | B)
```

Se lee como “probabilidad de A dado B”.

La mayor parte de las ideas de este artículo consisten en decidir **de qué información conviene condicionar una predicción**.

## La propiedad de Markov

A principios del siglo XX, Andrei Markov estudió procesos donde el próximo estado depende del estado actual y no necesita consultar explícitamente toda la trayectoria anterior.

En un proceso de primer orden:

```text
P(Xₜ₊₁ | Xₜ, Xₜ₋₁, ..., X₀) = P(Xₜ₊₁ | Xₜ)
```

Esta es la **propiedad de Markov**.

Suele resumirse diciendo que “el futuro depende solamente del presente”. La frase necesita un matiz: eso ocurre **dado el estado que elegimos representar**.

El estado actual debe contener toda la información del pasado que resulta relevante para predecir el siguiente paso. Si omitimos una variable importante, la propiedad puede dejar de ser una buena descripción del sistema.

Un modelo Markoviano no afirma que la historia nunca importe. Afirma que la historia relevante quedó resumida en el estado presente.

## Un ejemplo con el clima

Supongamos tres estados:

```text
S = {soleado, nublado, lluvioso}
```

Podemos definir probabilidades de transición:

| Hoy | Mañana soleado | Mañana nublado | Mañana lluvioso |
| --- | ---: | ---: | ---: |
| Soleado | 0,70 | 0,20 | 0,10 |
| Nublado | 0,30 | 0,40 | 0,30 |
| Lluvioso | 0,20 | 0,30 | 0,50 |

Cada fila suma uno porque contiene todos los próximos estados posibles.

La matriz de transición es:

```text
P = [0,70  0,20  0,10]
    [0,30  0,40  0,30]
    [0,20  0,30  0,50]
```

Si hoy sabemos que está soleado, la primera fila describe la distribución de mañana.

No estamos prediciendo un único futuro inevitable. Estamos describiendo varios futuros posibles y su probabilidad bajo el modelo.

## Evolucionar una distribución

La cadena no necesita comenzar en un estado conocido con certeza.

Podemos tener una distribución inicial:

```text
π₀ = [0,60, 0,30, 0,10]
```

Esto significa 60 % de probabilidad de sol, 30 % de nubes y 10 % de lluvia.

Al multiplicar esa distribución por la matriz de transición obtenemos la distribución del siguiente paso:

```text
π₁ = π₀P
```

Repetir la operación permite proyectar más pasos:

```text
πₙ = π₀Pⁿ
```

La matriz contiene una dinámica completa. A partir de transiciones locales podemos estudiar comportamiento a largo plazo.

## Distribuciones estacionarias

Algunas cadenas convergen hacia una distribución que ya no cambia al aplicar otra transición:

```text
π = πP
```

Esa es una **distribución estacionaria**.

No significa que el sistema deje de moverse. Los estados individuales continúan cambiando. Lo estable es la proporción probabilística de tiempo que el proceso pasa en cada estado.

Esta idea aparece en modelos de colas, biología, finanzas, confiabilidad y algoritmos como PageRank.

La existencia y unicidad de una distribución estacionaria dependen de propiedades de la cadena; no toda matriz converge de la misma manera.

## El supuesto de Markov es una decisión de modelado

El clima real depende de mucho más que la etiqueta “soleado” o “lluvioso” de hoy. Presión, humedad, estación, geografía y sistemas atmosféricos contienen información relevante.

Nuestro ejemplo no pretende describir meteorología con precisión. Muestra una abstracción.

Podemos mejorar el estado incluyendo más variables:

```text
estado = (clima, humedad, presión, estación)
```

La propiedad de Markov puede volverse más razonable, pero el espacio de estados también crece.

Existe un compromiso entre una representación compacta y una que conserve suficiente información.

## Cuando el estado no puede observarse

En muchas aplicaciones, el estado real está oculto.

Podemos observar síntomas, sonidos o mediciones, pero no directamente la causa que los genera.

Un **modelo oculto de Markov** distingue:

- Estados latentes que evolucionan con una dinámica Markoviana.
- Observaciones emitidas probabilísticamente desde esos estados.

Por ejemplo, el estado oculto puede ser una condición de una máquina y las observaciones sus vibraciones. También puede ser una categoría lingüística y las observaciones las palabras.

El problema pasa a ser inferir la secuencia de estados ocultos a partir de señales visibles.

## Del tiempo a las dependencias entre variables

Las cadenas de Markov modelan una secuencia particular de dependencias temporales.

Pero muchas preguntas involucran varias variables relacionadas de formas no lineales:

- Una enfermedad influye en síntomas y resultados de pruebas.
- La lluvia influye en el tránsito y en que una calle esté mojada.
- Una falla afecta sensores distintos.
- Las características de un correo influyen en la probabilidad de spam.

Una tabla conjunta con todas las combinaciones crece de forma exponencial.

Las **redes bayesianas** permiten representar esa distribución mediante dependencias locales.

## Qué es una red bayesiana

Una red bayesiana contiene:

1. Un **grafo dirigido acíclico**, o DAG.
2. Un nodo por variable aleatoria.
3. Aristas que representan dependencias directas en el modelo.
4. Una distribución condicional para cada nodo dados sus padres.

Si tenemos variables `A`, `B`, `C` y `D`, una red puede factorizar la distribución conjunta así:

```text
P(A, B, C, D)
= P(A) · P(B | A) · P(C | A, B) · P(D | C)
```

En general:

```text
P(X₁, ..., Xₙ) = ∏ᵢ P(Xᵢ | padres(Xᵢ))
```

La red reemplaza una tabla gigantesca por varias distribuciones locales cuando existen independencias condicionales útiles.

## Independencia condicional

Dos variables pueden estar relacionadas en general y volverse independientes cuando conocemos una tercera.

Supongamos:

```text
lluvia → calle mojada
lluvia → paraguas
```

Ver paraguas aumenta nuestra creencia de que la calle está mojada porque ambas observaciones pueden compartir la causa “lluvia”.

Pero si ya sabemos con certeza si llueve, observar un paraguas quizá no aporte información adicional sobre la calle bajo este modelo.

Escribimos:

```text
calle mojada ⟂ paraguas | lluvia
```

La independencia condicional permite ignorar relaciones que dejan de aportar información una vez conocida cierta evidencia.

Ese es el mecanismo que hace compactas y analizables a las redes bayesianas.

## Inferencia: actualizar creencias con evidencia

Una vez construida la red, podemos observar algunas variables y preguntar por otras.

Por ejemplo:

```text
P(enfermedad | fiebre, prueba positiva)
```

La inferencia combina:

- Probabilidades previas.
- Dependencias del grafo.
- Evidencia observada.

El teorema de Bayes aparece como una regla central:

```text
P(H | E) = P(E | H)P(H) / P(E)
```

La probabilidad posterior de una hipótesis depende de cuán compatible es la evidencia con ella y de qué tan plausible era antes de observarla.

Una prueba positiva no implica automáticamente una enfermedad. También importan la prevalencia y las tasas de falsos positivos y negativos.

## Una red bayesiana no es automáticamente causal

Las flechas describen una factorization y supuestos de independencia. No demuestran por sí solas que una variable cause otra.

Podemos construir una red a partir de conocimiento causal, pero también a partir de dependencias estadísticas útiles para predicción.

Observar `X` y forzar una intervención sobre `X` son operaciones diferentes.

Para hacer afirmaciones causales hacen falta supuestos adicionales, un diseño apropiado y, a menudo, datos experimentales o métodos de inferencia causal.

Una flecha convincente no reemplaza esa evidencia.

## Cómo se relacionan ambas estructuras

Una cadena de Markov puede representarse como una red bayesiana dinámica:

```text
X₀ → X₁ → X₂ → X₃ → ...
```

Cada variable temporal depende del estado anterior.

Un modelo oculto agrega observaciones:

```text
X₀ → X₁ → X₂
↓     ↓     ↓
O₀    O₁    O₂
```

Las cadenas resaltan transición temporal. Las redes bayesianas resaltan factorization e independencia condicional. Son ideas relacionadas, pero no intercambiables.

## Dónde aparecen en inteligencia artificial

Estas estructuras y sus extensiones aparecen en:

- Reconocimiento de voz.
- Diagnóstico y apoyo a decisiones.
- Seguimiento de objetos.
- Predicción de secuencias.
- Robótica y localización.
- Sistemas de recomendación.
- Procesamiento de lenguaje.
- Análisis de riesgo.
- Detección de fallas.

Durante décadas fueron herramientas centrales de la IA probabilística y siguen siendo útiles cuando necesitamos representar incertidumbre de forma explícita e interpretable.

## ¿Un modelo de lenguaje es una cadena de Markov?

No en el sentido simple de primer orden.

Un modelo autoregresivo factoriza la probabilidad de una secuencia mediante la regla de la cadena:

```text
P(x₁, ..., xₙ)
= ∏ₜ P(xₜ | x₁, ..., xₜ₋₁)
```

Genera un token según los anteriores y repite el proceso. Esa secuencialidad recuerda a una cadena, pero el próximo token puede depender de un contexto amplio, no solamente del token inmediatamente anterior.

Un transformer aprende representaciones del contexto y una distribución sobre el próximo token. Después, un procedimiento de decodificación elige o muestrea una continuación.

Por eso un modelo puede producir respuestas distintas ante la misma entrada sin estar eligiendo palabras al azar sin estructura.

La distribución fue aprendida a partir de datos y condicionada por el contexto.

## El estado puede ser una representación aprendida

En una cadena clásica, los estados están definidos por quien construye el modelo: soleado, nublado o lluvioso.

En aprendizaje profundo, el sistema puede aprender vectores internos que condensan información relevante.

Esos vectores no siempre tienen una interpretación humana directa. Aun así cumplen una función parecida: representar el contexto necesario para producir una predicción o acción.

La idea de resumir la historia en un estado no desapareció. Se volvió de alta dimensión y aprendida desde datos.

Esto no convierte automáticamente a una red neuronal en una cadena de Markov clásica. Muestra una continuidad conceptual entre representación de estado, condicionamiento y predicción.

## Aprender parámetros y hacer inferencia

Conviene separar dos tareas.

**Aprendizaje** significa estimar parámetros —y a veces estructura— a partir de datos.

**Inferencia** significa utilizar el modelo ya definido para calcular probabilidades sobre variables desconocidas dada cierta evidencia.

Una cadena puede aprender sus probabilidades contando transiciones observadas. Una red bayesiana puede aprender tablas condicionales o parámetros continuos. Una red neuronal aprende millones o miles de millones de parámetros mediante optimización.

Después, cada sistema utiliza esos parámetros para responder consultas o producir predicciones.

Probabilidad y aprendizaje no son la misma operación, aunque trabajen juntas.

## El costo de la inferencia

Representar una distribución de manera compacta no garantiza que toda consulta sea sencilla.

La inferencia exacta en una red bayesiana general puede resultar computacionalmente costosa. La estructura del grafo determina qué cálculos pueden simplificarse.

Cuando la inferencia exacta no es práctica, utilizamos aproximaciones:

- Muestreo.
- Métodos variacionales.
- Propagación aproximada de creencias.
- Filtros de partículas.

La IA probabilística no elimina la complejidad. La organiza y permite decidir qué aproximaciones son razonables.

## Lo que estas ideas enseñan sobre la IA

Las cadenas de Markov enseñan que un estado bien elegido puede resumir la historia relevante.

Las redes bayesianas enseñan que las independencias condicionales permiten representar un mundo complejo mediante relaciones locales.

Juntas muestran que razonar bajo incertidumbre no requiere enumerar todos los futuros ni almacenar todas las combinaciones.

Podemos factorizar, condicionar y actualizar.

Pero el corazón probabilístico de la IA es más amplio. Incluye estadística, teoría de la información, optimización, modelos latentes, redes neuronales y métodos de decisión.

Estas dos estructuras no explican todo. Ofrecen un lenguaje fundamental para comprenderlo.

## De respuestas absolutas a distribuciones

Un sistema probabilístico no siempre pregunta “¿cuál es la única respuesta correcta?”.

Puede preguntar:

- ¿Qué estados son posibles?
- ¿Cuál es la probabilidad de cada uno?
- ¿Cómo cambia esa probabilidad con nueva evidencia?
- ¿Qué información puede ignorarse condicionada a lo que ya sabemos?
- ¿Qué decisión produce el mejor resultado esperado?

Esa forma de pensar atraviesa la IA contemporánea.

No porque las máquinas hayan reproducido una mente humana clásica, sino porque aprendimos a construir sistemas capaces de actuar sin certeza total.

La inteligencia artificial no elimina la incertidumbre.

La convierte en una estructura sobre la que podemos calcular.

## Referencias

- Stanford University, [notas sobre cadenas de Markov y matrices de transición](https://web.stanford.edu/class/stats366/exs/Markov1.html).
- Carnegie Mellon University, [notas sobre redes bayesianas e independencia condicional](https://www.cs.cmu.edu/~epxing/Class/10708-19/notes/lecture-02/).
- UC Berkeley, [estructura y factorización de redes bayesianas](https://inst.eecs.berkeley.edu/~cs188/textbook/bayes-nets/structure.html).

---

Este artículo desarrolla dos estructuras clásicas que permiten pasar de respuestas absolutas a modelos de transición, dependencia y evidencia. Podés [ver el video original en YouTube](https://youtu.be/DGXMx_odK78).
