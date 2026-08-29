---
title: "P vs NP: el problema que define los límites de la eficiencia"
description: "La pregunta abierta que intenta determinar si encontrar una solución puede ser tan eficiente como verificar que una solución es correcta."
publishedAt: "2026-08-11"
---

Hay una pregunta en matemática y ciencias de la computación que, cuando la entendés de verdad, cambia tu forma de pensar la dificultad.

Porque no todos los problemas difíciles son iguales.

Hay problemas que podemos resolver rápidamente. Y existen otros para los que no conocemos una forma rápida de encontrar la solución, aunque, si alguien nos entrega una respuesta candidata, podemos verificarla con rapidez.

Durante décadas nadie ha logrado demostrar si esas dos capacidades —encontrar y verificar— son, en el fondo, equivalentes.

La pregunta se escribe con apenas tres símbolos:

> ¿P = NP?

## Primero: qué significa resolver “rápido”

Para estudiar la eficiencia no alcanza con medir cuántos segundos tarda un programa en una computadora determinada. El hardware cambia, y una entrada pequeña puede ocultar un algoritmo que se vuelve impracticable al crecer.

Lo que analizamos es cómo aumenta la cantidad de trabajo cuando aumenta el tamaño de la entrada.

Un algoritmo se considera eficiente en este contexto teórico cuando su tiempo de ejecución está limitado por un polinomio del tamaño de la entrada: `n`, `n²`, `n³` o alguna otra potencia fija. Eso no garantiza que cualquier algoritmo polinómico sea rápido en la práctica, pero separa los crecimientos razonablemente escalables de aquellos que explotan de forma exponencial, como `2ⁿ`.

Si un problema de decisión puede resolverse en tiempo polinómico mediante un algoritmo determinista, pertenece a la clase **P**.

Ordenar datos, encontrar el camino más corto en muchos tipos de redes o determinar si existe una ruta entre dos puntos son ejemplos asociados a problemas con algoritmos polinómicos.

P representa, de manera aproximada, aquello que sabemos resolver eficientemente.

## NP no significa “no polinómico”

Este es uno de los malentendidos más comunes. **NP no significa “no polinómico”**.

La sigla proviene de *nondeterministic polynomial time*. Una forma más intuitiva de entender la clase es mediante la verificación.

Un problema pertenece a NP si, cuando la respuesta es “sí”, existe un certificado o solución candidata que puede verificarse en tiempo polinómico.

Imaginá que te entregan una grilla de Sudoku completa. Encontrar la solución desde cero puede resultar difícil. Sin embargo, comprobar que cada fila, columna y región contiene los números correctos es sencillo.

O pensá en una ruta que debe visitar una colección de ciudades sin repetir ninguna. Encontrarla puede exigir explorar una cantidad enorme de posibilidades. Pero, si alguien te entrega la ruta, verificar que visita cada ciudad exactamente una vez requiere poco trabajo.

NP reúne problemas cuyas soluciones positivas pueden comprobarse eficientemente, aunque no sepamos encontrarlas de la misma manera.

## Sabemos que P está dentro de NP

Todo problema que podemos resolver rápidamente también puede verificarse rápidamente: basta con volver a resolverlo y comparar la respuesta.

Por eso sabemos que:

```text
P ⊆ NP
```

La gran pregunta es si la inclusión es estricta.

- Si `P = NP`, todo problema cuya solución puede verificarse eficientemente también puede resolverse eficientemente.
- Si `P ≠ NP`, existen problemas para los que verificar es fundamentalmente más fácil que encontrar.

La mayoría de los especialistas sospecha que `P ≠ NP`, pero una sospecha, incluso ampliamente compartida, no es una demostración.

## Los problemas NP-completos

Dentro de NP existe un grupo especialmente importante: los problemas **NP-completos**.

Un problema es NP-completo cuando cumple dos condiciones:

1. Pertenece a NP.
2. Todo problema de NP puede transformarse en él mediante una reducción que tarda tiempo polinómico.

Una reducción es una forma de traducir un problema a otro sin que el costo de la traducción esconda la dificultad. Si aprendemos a resolver eficientemente el problema de destino, también podemos resolver eficientemente el problema original.

En 1971, Stephen Cook mostró que un problema lógico relacionado con la satisfacibilidad booleana ocupa este lugar central. De allí nació la teoría de NP-completitud, desarrollada también de forma independiente por Leonid Levin.

SAT pregunta si existe una asignación de valores verdaderos y falsos que haga verdadera una fórmula booleana. Parece una pregunta específica, pero cualquier problema de NP puede codificarse como una instancia equivalente.

Esto produce una consecuencia extraordinaria:

> Si encontramos un algoritmo polinómico para un solo problema NP-completo, entonces P = NP.

No resolveríamos solamente ese problema. Obtendríamos, mediante reducciones, algoritmos polinómicos para todos los problemas de NP.

## Por qué importa fuera de la teoría

Muchos problemas de planificación, logística, diseño, verificación, descubrimiento y optimización tienen versiones relacionadas con NP o con problemas NP-completos.

Si `P = NP` y la demostración produjera algoritmos realmente utilizables, algunas tareas hoy inabordables podrían volverse tratables: encontrar ciertas pruebas matemáticas, optimizar redes complejas, diseñar moléculas o resolver enormes espacios de combinaciones.

También habría consecuencias profundas para la seguridad. Algunos sistemas criptográficos dependen de problemas que se consideran difíciles de resolver. Sin embargo, conviene ser preciso: no toda la criptografía descansa sobre problemas NP-completos, y demostrar `P = NP` no garantiza por sí solo un algoritmo práctico contra cada sistema existente.

La palabra “polinómico” permite algoritmos con constantes enormes o exponentes tan altos que seguirían siendo inútiles en la realidad. Una igualdad entre clases de complejidad es una afirmación teórica; su impacto concreto dependería de la demostración y de los algoritmos que surgieran de ella.

## Si P fuera distinto de NP

Una demostración de `P ≠ NP` confirmaría que algunas búsquedas requieren, de manera inherente, más recursos que la verificación de sus resultados.

No nos diría automáticamente cuál es el mejor algoritmo para cada problema ni haría desaparecer las aproximaciones, heurísticas o soluciones especializadas. Pero establecería una frontera fundamental: existirían tareas cuya dificultad no se debe a que todavía no encontramos el truco correcto.

Esa es la dimensión filosófica de la pregunta. No sabemos si la aparente distancia entre descubrir una solución y reconocerla refleja un límite estructural o solamente nuestra falta actual de ingenio.

## Difícil no significa imposible

P vs NP pertenece a la teoría de la complejidad, no a la teoría de la computabilidad.

El problema de la parada pregunta si una tarea puede resolverse algorítmicamente para todos los casos. P vs NP estudia cuántos recursos hacen falta para resolver tareas que sí son computables.

Un problema NP-completo no es indecidible. Podemos resolverlo mediante búsqueda exhaustiva y, para entradas finitas, eventualmente obtener una respuesta. El problema es que el tiempo necesario puede crecer tan rápido que la solución resulte inútil a escala real.

Esta diferencia separa dos límites:

- **Computabilidad:** qué puede resolverse mediante un algoritmo.
- **Complejidad:** qué puede resolverse con una cantidad razonable de recursos.

## Una frontera que sigue abierta

P vs NP continúa sin resolverse. El Clay Mathematics Institute lo incluye entre los Problemas del Milenio y ofrece un premio de un millón de dólares por una solución que cumpla sus requisitos.

Pero el valor del problema no está en el premio. Está en la pregunta que nos obliga a sostener:

Si una solución correcta puede reconocerse rápidamente, ¿también puede descubrirse rápidamente?

Todavía no sabemos si la eficiencia es un límite estructural o una frontera temporal. Y mientras esa pregunta permanezca abierta, tampoco sabemos cuánto de lo que hoy consideramos intratable es realmente inevitable.

## Referencias

- Clay Mathematics Institute, [*P vs NP*](https://www.claymath.org/millennium/p-vs-np/).
- Stephen A. Cook, [*The Complexity of Theorem-Proving Procedures*](https://doi.org/10.1145/800157.805047), 1971.

---

Este texto nació a partir de un guion que preparé para experimentar con contenido audiovisual asistido por inteligencia artificial. Podés [ver el video original en YouTube](https://youtu.be/VktmfVGSVzc).
