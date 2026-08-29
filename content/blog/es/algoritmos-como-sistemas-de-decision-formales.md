---
title: "Algoritmos como sistemas de decisión formales: árboles, estados y funciones objetivo"
description: "Una forma estructural de entender los algoritmos mediante estados, transiciones, decisiones, restricciones y objetivos, más allá de una simple lista de pasos."
publishedAt: "2026-08-24"
---

Cuando pensamos en un algoritmo, solemos imaginar una receta.

Paso uno. Paso dos. Paso tres.

Esa imagen es útil para empezar, pero es incompleta. Funciona bien para un procedimiento lineal donde todo ocurre en un orden fijo. Muchos algoritmos reales, en cambio, comparan alternativas, recuerdan información, vuelven sobre decisiones y modifican su comportamiento según el estado en el que se encuentran.

Un algoritmo no es solamente una secuencia.

Puede entenderse como un **sistema de decisión formal**: una arquitectura que transforma información en acciones y nuevos estados siguiendo reglas explícitas.

Cambiar la perspectiva —de líneas de código a estructuras de decisión— ayuda a entender algoritmos clásicos, sistemas de optimización y agentes inteligentes. También revela dónde existe posibilidad de rediseño.

## De la receta al sistema

Una receta enumera instrucciones:

```text
recibir entrada → procesar → devolver salida
```

Pero incluso un algoritmo sencillo puede contener bifurcaciones:

```text
si ocurre A → ejecutar X
si ocurre B → ejecutar Y
```

Y ciclos:

```text
mientras no se cumpla la condición → actualizar y repetir
```

En cuanto aparecen decisiones y repetición, el algoritmo deja de parecer una lista estática. Se convierte en un sistema que atraviesa configuraciones distintas según los datos y los resultados intermedios.

El código es una forma de expresar ese sistema. La estructura lógica existe a otro nivel.

## Las piezas de un sistema de decisión

Una descripción útil puede separar seis componentes:

1. **Entradas:** la información que recibe el sistema.
2. **Estado:** lo que necesita recordar en un momento determinado.
3. **Acciones u operaciones:** los cambios que puede realizar.
4. **Reglas de transición:** cómo una acción y una entrada producen un nuevo estado.
5. **Condiciones de salida:** cuándo debe detenerse y qué resultado entrega.
6. **Objetivo o criterio:** qué significa elegir bien cuando existen alternativas.

No todos los algoritmos necesitan cada componente de la misma forma. Un reconocedor de lenguaje puede aceptar o rechazar sin optimizar una función numérica. Un algoritmo de ordenamiento tiene una condición de corrección, pero varias implementaciones pueden perseguir objetivos distintos de tiempo o memoria.

El marco sirve para preguntar qué estructura está presente, no para obligar a todos los algoritmos a parecer iguales.

## El estado: una memoria comprimida del pasado

El **estado** representa toda la información del pasado que el algoritmo considera necesaria para decidir qué hacer después.

En una búsqueda binaria, el estado puede incluir los límites del intervalo que todavía podría contener el elemento. En Dijkstra, incluye las mejores distancias conocidas y qué nodos ya fueron procesados. En un protocolo de red, puede indicar si estamos esperando una conexión, una confirmación o un cierre.

Podemos expresarlo de manera abstracta:

```text
estado actual + nueva información → próximo estado
```

Una función de transición determinista puede escribirse como:

```text
δ(estado, entrada) = nuevo estado
```

En un sistema probabilístico, la misma acción puede conducir a varios estados con diferentes probabilidades.

Diseñar el estado es una decisión fundamental. Si guarda muy poca información, el sistema no puede distinguir situaciones importantes. Si guarda demasiado, aumenta el costo y la complejidad.

En cierto sentido, un buen estado es una compresión útil de la historia.

## Los árboles de decisión: cada comparación abre caminos

Un algoritmo que realiza comparaciones puede representarse como un árbol de decisión.

- Cada nodo interno representa una pregunta o comparación.
- Cada rama representa una respuesta posible.
- Cada hoja representa la terminación y un resultado.
- Cada camino desde la raíz hasta una hoja representa una ejecución sobre cierto tipo de entrada.

Por ejemplo, para encontrar el mayor de tres números, el algoritmo compara valores y toma caminos diferentes según los resultados. No existe una única secuencia ejecutada para todas las entradas; existe una estructura de caminos posibles.

El árbol permite estudiar más que el comportamiento. Permite estudiar el costo.

La profundidad de un camino indica cuántas decisiones fueron necesarias para esa entrada. La profundidad máxima representa el peor caso. La profundidad esperada puede representar el costo promedio si conocemos una distribución de entradas.

Este modelo también ayuda a demostrar límites inferiores: si necesitamos distinguir entre muchas respuestas posibles, el árbol debe tener suficientes hojas y, por lo tanto, cierta profundidad mínima.

## Un árbol no siempre es el algoritmo ejecutado

Conviene hacer una distinción.

El árbol de decisión puede ser una **representación analítica** de todas las ejecuciones posibles, aunque el programa no construya materialmente ese árbol en memoria.

Un algoritmo de búsqueda puede explorar explícitamente un árbol de estados. Un algoritmo de comparación puede solamente recorrer un camino implícito determinado por la entrada.

La representación nos permite ver la estructura de decisiones sin confundirla con la implementación concreta.

## Estados y grafos: cuando los caminos vuelven a encontrarse

Un árbol duplica una rama cada vez que aparece una alternativa. Pero ejecuciones distintas pueden llegar al mismo estado.

En ese caso, un **grafo de estados** resulta más preciso.

Los nodos representan configuraciones y las aristas representan transiciones. Varios caminos pueden conducir al mismo nodo, y puede haber ciclos que permitan volver a estados anteriores.

Esta representación aparece en:

- Autómatas finitos.
- Protocolos de comunicación.
- Planificación de rutas.
- Juegos.
- Verificación de sistemas.
- Planificación de agentes.

Pensar en grafos revela oportunidades de reutilización. Si varios caminos llegan al mismo estado, podemos recordar el resultado y evitar calcularlo de nuevo. De esa idea nacen técnicas como memoización y programación dinámica.

## La función objetivo: decidir qué significa mejor

Cuando existen varias soluciones válidas, necesitamos un criterio para compararlas.

Una **función objetivo** asigna un valor a una solución, estado o trayectoria. El algoritmo intenta minimizar o maximizar ese valor.

Ejemplos:

- Minimizar distancia o tiempo de viaje.
- Minimizar costo de producción.
- Maximizar cobertura.
- Maximizar beneficio esperado.
- Reducir errores de clasificación.
- Equilibrar velocidad, memoria y calidad.

Una formulación de optimización suele tener tres elementos:

```text
variables de decisión
restricciones que delimitan soluciones válidas
función objetivo que ordena esas soluciones
```

La función objetivo no descubre qué debería importarnos. Formaliza lo que decidimos valorar.

Por eso diseñarla mal puede producir un algoritmo eficiente que optimiza exactamente la conducta equivocada.

## Restricciones: el espacio donde se puede actuar

Los objetivos no operan solos.

Podemos querer la ruta más corta, pero ciertas calles están cerradas. Podemos querer maximizar ganancias, pero existe un presupuesto. Podemos querer responder rápido, pero hay reglas de seguridad y privacidad.

Las restricciones definen el conjunto de estados y acciones aceptables.

Esto permite separar dos preguntas:

1. **Factibilidad:** ¿la solución cumple las reglas?
2. **Optimalidad:** entre las soluciones factibles, ¿cuál puntúa mejor?

En sistemas reales, confundirlas es peligroso. Una decisión puede maximizar un indicador y aun así ser inadmisible porque viola una restricción dura.

## Política: qué acción elegir en cada estado

En un sistema secuencial, podemos representar la estrategia mediante una **política**:

```text
π(estado) = acción
```

La política indica qué hacer según la situación actual. Puede estar escrita manualmente, calculada mediante planificación o aprendida a partir de datos y experiencia.

En un entorno determinista, una acción conduce a un próximo estado conocido. En un entorno incierto, conduce a una distribución de estados posibles.

Los procesos de decisión de Markov formalizan este segundo caso mediante:

- Un conjunto de estados.
- Un conjunto de acciones.
- Probabilidades de transición.
- Recompensas o costos.
- Un criterio de valor acumulado.

El objetivo ya no es elegir la mejor acción inmediata, sino una política que produzca buenos resultados a lo largo del tiempo.

## La decisión local puede empeorar el resultado global

Supongamos que una acción ofrece una recompensa inmediata alta, pero conduce a un estado desde el cual todas las opciones futuras son malas.

Otra acción parece menos atractiva ahora, pero abre mejores caminos.

Un algoritmo puramente voraz elige lo mejor en el momento. Un algoritmo de planificación considera consecuencias futuras.

Esta diferencia aparece en rutas, asignación de recursos, juegos y control automático. También explica por qué una función objetivo debe especificar el horizonte temporal.

Optimizar la siguiente decisión no equivale necesariamente a optimizar la trayectoria.

## Determinismo, incertidumbre y observación parcial

No todos los sistemas conocen completamente su estado ni controlan el resultado de sus acciones.

Podemos distinguir:

- **Determinista:** la misma entrada y el mismo estado producen la misma transición.
- **Probabilístico:** una acción puede producir varios resultados con probabilidades conocidas o estimadas.
- **Parcialmente observable:** el sistema no conoce directamente el estado real y debe inferirlo desde señales incompletas.
- **Adversarial:** otras entidades toman decisiones que afectan el resultado.

La estructura apropiada cambia según el caso. Un conjunto rígido de reglas puede ser suficiente para un protocolo. Un planificador puede necesitar explorar alternativas. Un agente puede necesitar actualizar creencias y actuar bajo incertidumbre.

Llamar a todo “algoritmo inteligente” oculta esas diferencias.

## Corrección y objetivo no son lo mismo

Un algoritmo necesita condiciones de corrección: propiedades que debe cumplir para considerar válida su salida.

Una función objetivo, en cambio, compara alternativas válidas.

Un algoritmo de ordenamiento es correcto si devuelve los elementos ordenados y conserva los mismos elementos de la entrada. Entre algoritmos correctos, podemos preferir uno por velocidad, memoria, estabilidad o facilidad de paralelización.

Primero debemos asegurar que el sistema hace algo permitido. Después podemos optimizar cómo lo hace.

Una puntuación alta nunca reemplaza una especificación de corrección.

## Dónde aparece la posibilidad de rediseño

Si vemos un algoritmo como una lista de pasos, mejorar significa acelerar cada paso.

Si lo vemos como un sistema de decisión, aparecen más posibilidades:

- Cambiar la representación del estado.
- Eliminar decisiones redundantes.
- Combinar caminos equivalentes.
- Reordenar comparaciones.
- Incorporar memoria para evitar recomputación.
- Modificar la función objetivo.
- Separar restricciones duras de preferencias.
- Cambiar el horizonte de planificación.
- Introducir aproximación o aleatoriedad.
- Añadir observación y retroalimentación.

Muchas mejoras importantes no provienen de ejecutar más rápido la misma estructura. Provienen de formular el problema de otra manera.

## La conexión con los sistemas inteligentes

Los sistemas inteligentes también reciben información, mantienen algún estado, eligen acciones y producen cambios en un entorno.

La diferencia no es que hayan abandonado los algoritmos. Es que combinan múltiples mecanismos de decisión, aprendizaje, búsqueda y control en entornos con incertidumbre.

Un agente puede incluir:

- Un modelo que interpreta el estado.
- Herramientas que ejecutan acciones.
- Memoria que conserva información.
- Una política que selecciona el siguiente paso.
- Restricciones de seguridad.
- Criterios para decidir cuándo terminó.
- Evaluaciones que revisan el resultado.

La conducta aparente emerge de la interacción entre esas piezas.

Pensar estructuralmente permite analizar el sistema sin recurrir a la idea vaga de que “la IA decide”. Podemos preguntar qué información observó, qué alternativas tenía, qué objetivo perseguía y cuáles límites restringieron su acción.

## Un algoritmo es una arquitectura de transformación

Una lista de pasos describe una ejecución posible.

Un sistema de decisión describe el espacio completo: estados, alternativas, transiciones, restricciones y criterios de salida.

Esa visión es más poderosa porque permite entender no solo qué hace el algoritmo, sino por qué toma cierto camino, cuánto cuesta, qué supone y dónde puede modificarse.

En el fondo, un algoritmo es una arquitectura formal que transforma información en acción.

Y cuando comprendemos su arquitectura, dejamos de limitarnos a optimizar pasos.

Empezamos a rediseñar decisiones.

## Referencias

- MIT OpenCourseWare, [modelo de árbol de decisión para algoritmos de comparación](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/ce9e94705b914598ce78a00a70a1f734_MIT6_006S20_lec4.pdf).
- Stanford University, [máquinas de estados finitos](https://web.stanford.edu/class/archive/cs/cs103/cs103.1222/lectures/27/Slides.pdf).
- UC Berkeley, [introducción a procesos de decisión de Markov](https://inst.eecs.berkeley.edu/~cs188/textbook/mdp/markov-decision-processes.html).

---

Este artículo amplía la idea de algoritmo como algo más profundo que una receta: una estructura formal de estados y decisiones que también podemos rediseñar. Podés [ver el video original en YouTube](https://youtu.be/CmQbBfkIbxU).
