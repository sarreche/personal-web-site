---
title: "ETH: qué propone OpenAI sobre los límites de la computación"
description: "Una propuesta de algoritmo subexponencial para SAT abre preguntas fundamentales: qué hace difícil un problema y cuánto más rápido podríamos resolverlo."
publishedAt: "2026-10-27"
---

Hay problemas para los que encontrar una respuesta parece muchísimo más difícil que comprobarla. Si alguien te entrega una configuración válida, podés revisar sus condiciones. Encontrarla entre todas las combinaciones posibles puede exigir un trabajo enorme.

Esa distancia está en el centro de la complejidad computacional. El 26 de octubre, [OpenAI anunció un resultado que refutaría la Hipótesis del Tiempo Exponencial, o ETH](https://openai.com/index/building-scientific-understanding-with-academic-communities/), acompañado de un manuscrito y una formalización en Lean.

Me interesa explicar qué propone ese resultado. Su importancia está en la posibilidad de cambiar una frontera teórica que usamos para razonar sobre la dificultad de muchos problemas.

## Un problema de combinaciones llamado SAT

Imaginá un sistema con opciones que pueden estar activadas o desactivadas. Hay reglas: al menos una de estas tres opciones debe estar activa; esta otra puede estar desactivada si se activa una alternativa. Querés saber si existe una configuración que cumpla todas las reglas a la vez.

SAT, o satisfacibilidad booleana, expresa esa pregunta con variables que toman dos valores: verdadero o falso. En una fórmula de tipo CNF, las reglas se llaman cláusulas: dentro de cada una hay alternativas unidas por «o», y todas las cláusulas deben cumplirse.

Por ejemplo:

```text
(A o B o no C)
y
(no A o C o D)
```

La elección A verdadera, C verdadera y D verdadera satisface ambas cláusulas, cualquiera sea B. Eso comprueba una solución; todavía no cuenta cuántas existen.

En 3-SAT, cada cláusula tiene como máximo tres literales, donde un literal es una variable o su negación. En k-SAT, el límite es k.

Con n variables hay `2^n` configuraciones posibles. Probarlas todas funciona, pero cada variable adicional duplica la búsqueda. La pregunta de complejidad es qué puede conseguir el mejor algoritmo, aprovechando la estructura en lugar de recorrer todas las combinaciones.

## Qué sostiene ETH

ETH plantea que resolver 3-SAT en el peor caso necesita tiempo exponencial en el número de variables. En términos habituales, descarta un algoritmo general con tiempo `2^o(n)`, salvo factores polinómicos en el tamaño de entrada.

La notación puede sonar extraña. Su idea es que el exponente crezca más lentamente que n. Un ejemplo de tiempo subexponencial es `2^sqrt(n)`: sigue creciendo mucho, pero pertenece a una escala distinta de `2^(c·n)` para cualquier constante positiva c.

Bajar la base de una exponencial también es un avance, aunque deja intacta esa distinción. Un algoritmo que tarda aproximadamente `1,3^n` sigue teniendo un exponente proporcional a n. Para refutar ETH hace falta atravesar la frontera hacia el tiempo subexponencial.

Hablamos del peor caso y del crecimiento cuando aumenta el problema. Eso permite que un programa SAT resuelva muy bien muchas instancias prácticas y que, aun así, queden preguntas difíciles sobre su comportamiento general.

## La propuesta: contar soluciones con álgebra

El [manuscrito The Exponential Time Hypothesis is False](https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf) presenta un algoritmo determinista que cuenta exactamente las soluciones de k-SAT, para cada k fijo, en tiempo subexponencial y espacio polinómico.

Contar permite también decidir: si el resultado es cero, la fórmula no tiene solución; si es positivo, tiene al menos una. Por eso el caso k igual a tres alcanza para contradecir ETH.

La idea algebraica empieza representando cada cláusula mediante un polinomio que vale uno cuando se cumple y cero cuando falla. Al multiplicarlos, una configuración aporta uno solamente si cumple todas las cláusulas. Sumar ese producto sobre todas las configuraciones da el número exacto de soluciones.

Hasta ahí seguimos teniendo una suma enorme. El trabajo está en calcularla más rápido.

El método introduce transformaciones con un parámetro auxiliar. En ciertos valores, esas transformaciones permiten separar el cálculo en grupos pequeños, una vez fijadas unas pocas mediciones lineales compartidas. Después usa interpolación para reconstruir el conteo original a partir de evaluaciones y coeficientes de Taylor.

Una manera de imaginarlo: si varios grupos fueran independientes, podríamos resolverlos por separado y combinar los resultados. Las cláusulas reales conectan grupos. La construcción busca una forma algebraica de manejar esas conexiones sin enumerar todas las configuraciones globales. Esa explicación es un mapa de la técnica; los límites de grado, el costo de reconstrucción y la aritmética exacta son parte esencial de la demostración.

## Por qué cambia el mapa de la complejidad

Una hipótesis de dificultad permite demostrar resultados condicionales: si un problema de referencia exige cierto tiempo, entonces otro problema tampoco admite determinada aceleración. Las reducciones conectan ambos.

Es parecido a usar un punto de apoyo para medir otras distancias. Si ese apoyo cambia, tenemos que revisar qué conclusiones dependían de él.

Refutar ETH quitaría esa base a los límites que la necesitan. Las demostraciones condicionales pueden seguir siendo razonamientos correctos, pero su premisa ya no justificaría afirmar que una aceleración es imposible.

El manuscrito también deriva algoritmos subexponenciales para ciertos problemas de conteo en grafos, como contar conjuntos independientes y coloraciones con un número fijo de colores. Para trasladar el avance a otros problemas importa cuánto crece la entrada durante la reducción: una transformación polinómica puede aumentar demasiado el número de variables y perder la ventaja buscada.

Ahí hay un programa de investigación interesante: identificar qué algoritmos mejoran directamente, dónde aparecen técnicas reutilizables y qué fronteras necesitan una explicación nueva.

## Dónde queda P frente a NP

[P frente a NP](https://www.claymath.org/millennium/p-vs-np/) pregunta, en esencia, si los problemas cuyas soluciones podemos verificar eficientemente también se pueden resolver eficientemente. En este contexto, «eficientemente» se expresa mediante tiempo polinómico, como `n^c` para una constante c.

El tiempo subexponencial deja un espacio intermedio enorme. `2^sqrt(n)`, por ejemplo, crece más rápido que cualquier potencia fija de n. Es posible mejorar de manera fundamental la cota de SAT sin proporcionar un algoritmo polinómico.

El resultado presentado, por sí solo, no decide P frente a NP. Su importancia propia es suficientemente grande: cuestiona una afirmación más precisa sobre cuánto tiempo necesita SAT.

También conviene distinguir una mejora asintótica de una ventaja inmediata en una computadora. Las constantes, los factores polinómicos y los tamaños donde el método se vuelve competitivo requieren estudio e implementación. La contribución anunciada es un algoritmo con una garantía matemática de crecimiento.

## Qué aporta la formalización

La [documentación de Lean](https://github.com/openai/math/blob/main/lean/docs/378.md) especifica el conteo exacto para k fijo, tiempo subexponencial y espacio polinómico. El manuscrito del 25 de octubre incluye cotas más ajustadas que la descrita para la formalización.

Una prueba formal permite comprobar inferencias sobre definiciones explícitas. Comprender esas definiciones, explicar la técnica y desarrollar sus consecuencias sigue siendo trabajo matemático.

OpenAI anunció un grupo encabezado por Russell Impagliazzo, Ramamohan Paturi y Ryan Williams para examinar y explicar el resultado. La combinación de una construcción formal y una explicación compartida puede ayudar a convertirlo en una herramienta para nuevas investigaciones.

## Un anuncio que también incluye matemática y física

La misma publicación presenta una propuesta sobre suavizado local, relacionada con la concentración de ondas y con consecuencias para Kakeya y restricción de Stein. También anuncia una construcción rigurosa de teorías cuánticas de campos, incluida QCD, que describe la interacción fuerte de quarks y gluones. Son áreas distintas, unidas por preguntas matemáticas fundamentales.

En computación, la pregunta que queda abierta es especialmente estimulante: **¿cuántos problemas admiten algoritmos mucho mejores de lo que nuestras hipótesis nos llevaban a esperar?**

Para mí, ese es el valor científico de entender el resultado sobre ETH: ampliar el espacio de lo que podemos buscar y ofrecer una técnica concreta desde la cual empezar.

Sigo estas conversaciones en [mi canal de YouTube](https://www.youtube.com/@saarreche). Un abrazo.

## Referencias

- [OpenAI: Working with academic communities to build scientific understanding](https://openai.com/index/building-scientific-understanding-with-academic-communities/), 26/10/2026.
- [OpenAI: The Exponential Time Hypothesis is False](https://github.com/openai/math/blob/main/preprints/The-Exponential-Time-Hypothesis-is-False-October-25-2026/paper.pdf), manuscrito revisado el 25/10/2026; especialmente secciones 1 y 2.
- [Alcance de la formalización en Lean](https://github.com/openai/math/blob/main/lean/docs/378.md).
- [Clay Mathematics Institute: P vs NP](https://www.claymath.org/millennium/p-vs-np/).
