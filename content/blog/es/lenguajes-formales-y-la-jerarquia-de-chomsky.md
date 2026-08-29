---
title: "Lenguajes formales y la jerarquía de Chomsky"
description: "Alfabetos, gramáticas, autómatas y cuatro niveles de poder expresivo para entender qué estructuras puede reconocer cada modelo de computación."
publishedAt: "2026-08-25"
---

Cuando escribís código, parece que estás escribiendo texto.

Palabras. Símbolos. Llaves. Paréntesis.

Pero no es texto libre. Es una secuencia construida dentro de un sistema formal.

Esa diferencia es enorme.

Un lenguaje formal no depende de metáforas, intención o interpretación cotidiana para determinar si una expresión pertenece a él. Define un conjunto de cadenas sobre un alfabeto y reglas precisas que permiten generarlas o reconocerlas.

Algunas reglas describen patrones simples. Otras permiten estructuras anidadas, dependencias de contexto o cualquier cálculo que pueda realizar una máquina de Turing.

La **jerarquía de Chomsky** organiza esas gramáticas según su poder expresivo y las conecta con distintos modelos de computación.

No es solamente una clasificación lingüística. Es un mapa de qué memoria y qué capacidad necesita una máquina para reconocer diferentes clases de estructura.

## De símbolos a lenguajes

El punto de partida es un **alfabeto** finito, normalmente escrito como `Σ`.

Por ejemplo:

```text
Σ = {0, 1}
```

Una **cadena** es una secuencia finita de símbolos del alfabeto:

```text
0
101
001101
```

El conjunto de todas las cadenas finitas que pueden construirse sobre `Σ` se escribe `Σ*`. Incluye también la cadena vacía, representada habitualmente por `ε`.

Un **lenguaje formal** es simplemente un subconjunto de `Σ*`:

```text
L ⊆ Σ*
```

Podría contener todas las cadenas con una cantidad par de unos, todas las expresiones con paréntesis balanceados o todas las codificaciones de programas válidos bajo cierta sintaxis.

La palabra “lenguaje” no significa que esas cadenas carezcan necesariamente de significado. Podemos asignarles una semántica. Lo formal es el criterio de pertenencia: una cadena está dentro o fuera del conjunto según reglas definidas.

## Reconocer y generar

Podemos describir un lenguaje desde dos perspectivas complementarias.

Un **reconocedor** recibe una cadena y determina si pertenece al lenguaje.

Una **gramática** define cómo generar cadenas válidas a partir de un símbolo inicial mediante reglas de producción.

Una gramática formal suele incluir:

- Símbolos terminales, que aparecen en la cadena final.
- Símbolos no terminales, que representan estructuras intermedias.
- Un símbolo inicial.
- Reglas de producción.

Por ejemplo:

```text
S → aSb
S → ε
```

Esta gramática genera:

```text
ε
ab
aabb
aaabbb
```

Es decir, el lenguaje `{aⁿbⁿ | n ≥ 0}`.

Cada tipo de restricción sobre las reglas produce una familia distinta de lenguajes.

## La jerarquía y su dirección

La jerarquía clásica tiene cuatro niveles:

```text
Tipo 3 ⊂ Tipo 2 ⊂ Tipo 1 ⊂ Tipo 0
regular ⊂ libre de contexto ⊂ sensible al contexto ⊂ reconocible por Turing
```

La numeración puede resultar contraintuitiva: el Tipo 3 es el más restringido y el Tipo 0 el más general.

Cada nivel superior de poder puede describir todos los lenguajes del nivel anterior y algunos más. A cambio, suele requerir un modelo computacional con más memoria y vuelve más costosos —o incluso indecidibles— ciertos problemas de análisis.

Más expresividad no significa automáticamente mejor diseño.

La clase correcta es la menos poderosa que permite describir el problema cómodamente, porque las restricciones también nos entregan algoritmos más simples y garantías más fuertes.

## Tipo 3: lenguajes regulares

En la base están los **lenguajes regulares**.

Pueden describirse mediante gramáticas regulares y expresiones regulares en el sentido teórico. Los reconocen autómatas finitos deterministas o no deterministas.

Un autómata finito dispone de:

- Una cantidad finita de estados.
- Un estado inicial.
- Transiciones según el símbolo leído.
- Uno o más estados de aceptación.

Lee la entrada de izquierda a derecha y solo recuerda su estado actual.

Esta memoria finita alcanza para reconocer patrones como:

- Cadenas que terminan en `01`.
- Identificadores con un formato determinado.
- Números enteros o decimales bajo una sintaxis simple.
- Secuencias que contienen cierta palabra.
- Protocolos con una cantidad finita de fases.

Los lenguajes regulares son fundamentales en análisis léxico, búsqueda de texto, validación de formatos y diseño de circuitos.

## El límite de la memoria finita

Un autómata finito no puede contar sin límite ni recordar una profundidad arbitraria.

Por eso no puede reconocer el lenguaje:

```text
L = { aⁿbⁿ | n ≥ 0 }
```

Para aceptar una cadena, tendría que recordar cuántas `a` aparecieron y comprobar que después llega exactamente la misma cantidad de `b`. Como `n` no tiene límite, una cantidad finita de estados no alcanza.

Tampoco puede reconocer paréntesis balanceados con profundidad arbitraria:

```text
()
(())
(()(()))
```

Necesitamos una memoria que pueda crecer con la entrada.

Una advertencia práctica: muchas bibliotecas llamadas “regex” agregan referencias hacia grupos capturados y otras extensiones. Esas herramientas pueden reconocer patrones que no son regulares en el sentido matemático.

El nombre del producto no determina la clase formal.

## Tipo 2: lenguajes libres de contexto

Las **gramáticas libres de contexto** permiten reglas cuya parte izquierda contiene un único no terminal:

```text
A → γ
```

El símbolo `A` puede reemplazarse por `γ` sin consultar qué símbolos lo rodean. De ahí viene “libre de contexto”.

Estos lenguajes son reconocidos por **autómatas de pila**.

La pila aporta memoria potencialmente ilimitada, pero con una disciplina particular: el último elemento agregado es el primero en salir.

Esa estructura permite manejar anidamiento:

- Paréntesis y bloques balanceados.
- Expresiones aritméticas.
- Árboles sintácticos.
- Llamadas recursivas.
- Buena parte de la sintaxis de lenguajes de programación.

Por ejemplo:

```text
Expr → Expr + Term
Expr → Term
Term → número
Term → ( Expr )
```

La gramática no enumera todas las expresiones posibles. Define recursivamente cómo construirlas.

## Ambigüedad y estructura

Una gramática puede permitir que la misma cadena tenga más de un árbol de derivación.

La expresión:

```text
1 + 2 * 3
```

podría agruparse como `(1 + 2) * 3` o como `1 + (2 * 3)` si la gramática no representa precedencia y asociatividad.

En un lenguaje de programación, esa ambigüedad debe eliminarse o resolverse mediante reglas adicionales. El parser no solo decide si el texto es válido: construye una estructura que influirá en su significado.

La gramática es, por lo tanto, parte del diseño del lenguaje.

## Tipo 1: lenguajes sensibles al contexto

Las **gramáticas sensibles al contexto** permiten que una sustitución dependa del entorno en el que aparece un símbolo.

De manera simplificada, sus producciones no reducen la longitud de la cadena durante una derivación, salvo convenciones específicas para la cadena vacía.

Estos lenguajes corresponden a **autómatas linealmente acotados**: máquinas parecidas a una máquina de Turing cuya memoria está limitada por una cantidad lineal respecto del tamaño de la entrada.

Un ejemplo clásico es:

```text
L = { aⁿbⁿcⁿ | n ≥ 1 }
```

Ahora debemos comprobar que tres bloques poseen exactamente la misma cantidad de símbolos. Una única pila no alcanza para la tarea general.

Las gramáticas sensibles al contexto son más expresivas, pero también más difíciles de analizar y utilizar. Por eso no suelen emplearse directamente para toda la sintaxis de un lenguaje de programación.

## Tipo 0: gramáticas sin restricciones

En el nivel más general están las **gramáticas irrestrictas** o Tipo 0.

Sus producciones poseen restricciones mínimas y tienen el mismo poder expresivo que una máquina de Turing.

Generan los lenguajes **recursivamente enumerables**, también llamados reconocibles por Turing.

Para una cadena que pertenece al lenguaje, existe una máquina que eventualmente la acepta. Para una cadena que no pertenece, la máquina puede rechazarla o continuar para siempre.

Este matiz conecta la jerarquía con la indecidibilidad.

El máximo poder expresivo no garantiza que siempre podamos decidir pertenencia. En el nivel general aparecen problemas para los que ningún algoritmo puede producir una respuesta sí o no en todos los casos.

El poder computacional también tiene límites.

## Cuatro modelos de memoria

Podemos resumir la correspondencia así:

| Tipo | Lenguaje | Modelo de reconocimiento | Intuición de memoria |
| --- | --- | --- | --- |
| 3 | Regular | Autómata finito | Cantidad finita de estados |
| 2 | Libre de contexto | Autómata de pila | Una pila sin límite fijo |
| 1 | Sensible al contexto | Autómata linealmente acotado | Memoria proporcional a la entrada |
| 0 | Reconocible por Turing | Máquina de Turing | Memoria no acotada en el modelo |

La jerarquía clasifica lenguajes mediante las máquinas necesarias para reconocerlos.

Cada salto incorpora una forma de memoria o manipulación más poderosa.

## Qué ocurre cuando escribimos código

Un compilador no trata un archivo como un bloque indivisible.

Normalmente trabaja en capas:

1. **Análisis léxico:** convierte caracteres en tokens como identificadores, números y operadores. Muchos patrones son regulares.
2. **Análisis sintáctico:** organiza los tokens en un árbol según una gramática, normalmente libre de contexto o una variante diseñada para parsing eficiente.
3. **Análisis semántico:** comprueba nombres, tipos, ámbitos y otras relaciones que la gramática por sí sola no expresa cómodamente.
4. **Ejecución o traducción:** asigna comportamiento a la estructura válida.

Por eso decir que “un lenguaje de programación es libre de contexto” es una simplificación.

Buena parte de su sintaxis puede describirse con una gramática libre de contexto. Pero condiciones como que una variable haya sido declarada, que los tipos sean compatibles o que un nombre pertenezca al ámbito correcto requieren información adicional.

La gramática define forma. La semántica define significado y comportamiento.

## Sintaxis válida no significa programa correcto

Esta cadena puede cumplir perfectamente una gramática y aun así ser rechazada por el compilador:

```text
resultado = usuario + 42
```

Si `usuario` no existe o representa un tipo incompatible, el problema no está necesariamente en la estructura sintáctica. Está en las reglas semánticas del lenguaje.

Incluso un programa sintáctica y semánticamente aceptado puede contener un error lógico.

Hay, por lo tanto, varios niveles de validez:

- Cadena bien formada.
- Programa sintácticamente válido.
- Programa semánticamente válido.
- Programa que realiza lo que queríamos.

No conviene confundirlos.

## Más poder tiene un costo

Podríamos intentar describir todo con el formalismo más expresivo disponible. Pero perderíamos propiedades valiosas.

Cuanto más restringida es una clase, más fácil suele ser:

- Reconocer cadenas eficientemente.
- Analizar una gramática.
- Construir herramientas.
- Probar propiedades.
- Predecir comportamiento.

Las restricciones no son solamente limitaciones. Son fuentes de estructura.

Elegir lenguajes regulares para el léxico y gramáticas cuidadosamente diseñadas para la sintaxis permite construir compiladores prácticos precisamente porque no utilizamos todo el poder de una máquina de Turing en cada etapa.

## Lo formalizable también tiene límites

La jerarquía de Chomsky muestra una expansión progresiva del poder descriptivo.

Pero llegar al Tipo 0 no significa que podamos responder cualquier pregunta. Significa que alcanzamos el poder de las máquinas de Turing, y con él aparecen también sus límites: problemas indecidibles como la parada y propiedades semánticas que no pueden decidirse universalmente.

Formalizar algo permite especificar reglas con precisión. No garantiza que todas las preguntas sobre ese sistema tengan un algoritmo.

Esa es una de las ideas más profundas de la teoría de la computación.

## Una clasificación del poder computacional

La jerarquía conecta tres preguntas:

1. ¿Qué cadenas pertenecen al lenguaje?
2. ¿Qué clase de reglas puede describirlas?
3. ¿Qué clase de máquina hace falta para reconocerlas?

Los lenguajes regulares capturan patrones con memoria finita. Los libres de contexto agregan anidamiento mediante una pila. Los sensibles al contexto incorporan relaciones más amplias. Los de Tipo 0 alcanzan el poder general de la computación.

Cuando escribimos código, no colocamos símbolos arbitrarios en un archivo. Trabajamos dentro de varias capas formales que convierten caracteres en tokens, estructuras y finalmente comportamiento.

Entender esas capas cambia la manera de mirar un programa.

Ya no vemos solamente texto.

Vemos una máquina intentando reconocer estructura.

## Referencias

- Noam Chomsky, [*Three Models for the Description of Language*](https://chomsky.info/wp-content/uploads/195609-.pdf), 1956.
- Carnegie Mellon University, [notas sobre gramáticas libres de contexto y la jerarquía de Chomsky](https://www.cs.cmu.edu/~411/lectures/08-parsing.pdf).
- Carnegie Mellon University, [introducción a gramáticas y parsing](https://www.cs.cmu.edu/~fp/courses/15411-f14/lectures/08-cfg.pdf).

---

Este artículo desarrolla la idea de que programar no es escribir texto libre, sino construir expresiones dentro de sistemas formales con distintos niveles de poder. Podés [ver el video original en YouTube](https://youtu.be/v4YxwGpldvY).
