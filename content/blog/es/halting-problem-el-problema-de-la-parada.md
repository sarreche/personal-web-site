---
title: "Halting Problem: el problema de la parada"
description: "Por qué no puede existir un algoritmo capaz de decidir correctamente si cualquier programa terminará o continuará ejecutándose para siempre."
publishedAt: "2026-08-28"
---

Hay algo que me voló la cabeza cuando lo entendí. No es *hype*, marketing ni futurismo. Es una verdad incómoda: hay problemas que ninguna computadora puede resolver de forma general.

No es porque todavía nos falte potencia. No es porque necesitemos más datos, más GPUs o computadoras cuánticas más estables. Es porque existen límites lógicos para aquello que puede calcularse.

Uno de los ejemplos más importantes es el *Halting Problem*, conocido en español como el problema de la parada o de la detención.

## Antes de las computadoras modernas

En 1936, Alan Turing estudiaba una pregunta matemática conocida como el *Entscheidungsproblem*: ¿podía existir un procedimiento mecánico capaz de decidir si cualquier afirmación de un sistema lógico era demostrable?

Para abordar esa pregunta, primero necesitaba precisar qué significa ejecutar un procedimiento mecánico. Su respuesta fue un modelo abstracto que hoy conocemos como máquina de Turing.

No era una computadora física. Era una construcción matemática compuesta por elementos muy simples:

- Una cinta dividida en posiciones.
- Un cabezal capaz de leer y escribir símbolos.
- Un conjunto finito de estados.
- Reglas que determinan qué hacer en cada paso.

Con esa estructura mínima es posible representar cualquier algoritmo en el sentido clásico de computación efectiva. La tesis de Church–Turing sostiene que todo procedimiento efectivamente calculable puede expresarse mediante un modelo equivalente a una máquina de Turing.

Se llama *tesis*, no teorema, porque vincula una noción informal —aquello que puede calcularse mediante un procedimiento efectivo— con un modelo matemático formal. La enorme cantidad de modelos de computación equivalentes constituye evidencia a su favor, pero no es una afirmación que pueda demostrarse sin antes convertir esa noción informal en una definición formal.

## La pregunta peligrosa

Una vez que podemos representar programas formalmente, aparece una pregunta aparentemente razonable:

> ¿Existe un algoritmo general que reciba un programa y una entrada, y determine si ese programa terminará o continuará ejecutándose para siempre?

La palabra importante es **general**. Para algunos programas, la respuesta es evidente:

```text
while (true) {
  // continuar para siempre
}
```

También podemos ejecutar un programa y observar que termina. El desafío consiste en construir un único procedimiento que responda correctamente para **todos** los programas y todas sus entradas, sin tener que esperar para siempre.

## Un programa diseñado para contradecir al analizador

Supongamos que ese algoritmo universal existe. Lo llamaremos `H`.

`H` recibe un programa `P` y una entrada `x`, y siempre responde una de estas dos opciones:

- `P` se detiene cuando recibe `x`.
- `P` continúa para siempre cuando recibe `x`.

Ahora construimos otro programa, `D`, que usa la respuesta de `H` para hacer exactamente lo contrario:

```text
D(P):
  si H(P, P) dice "se detiene":
    continuar para siempre

  si H(P, P) dice "no se detiene":
    detenerse
```

`D` pregunta qué ocurrirá cuando `P` se ejecute usando su propio código como entrada. Si `H` predice que se detendrá, `D` entra en un ciclo infinito. Si `H` predice que continuará para siempre, `D` se detiene.

Entonces hacemos la pregunta que rompe la suposición inicial: ¿qué ocurre al ejecutar `D(D)`?

- Si `H` dice que `D(D)` se detiene, la definición de `D` hace que continúe para siempre.
- Si `H` dice que `D(D)` continúa para siempre, la definición de `D` hace que se detenga.

En ambos casos, `H` se equivoca. La contradicción no demuestra que nuestro supuesto analizador sea difícil de construir: demuestra que un analizador universal y siempre correcto no puede existir.

## Indecidible no significa inútil

El problema de la parada es **indecidible**. No existe un algoritmo que pueda resolver correctamente todos sus casos posibles y terminar siempre.

Eso no significa que nunca podamos saber si un programa se detendrá. Podemos resolver muchos casos concretos mediante pruebas, análisis estático, límites de tiempo o conocimiento sobre la estructura del programa.

Además, si un programa efectivamente termina, podemos descubrirlo ejecutándolo y esperando. Lo que no tenemos es un procedimiento general que también confirme todos los casos en los que la ejecución será infinita.

La diferencia es fundamental: podemos construir herramientas muy útiles sin que exista una herramienta perfecta para el caso universal.

## El límite alcanza también a la inteligencia artificial

Un modelo de inteligencia artificial puede encontrar patrones, proponer invariantes, ejecutar pruebas y analizar código de formas extraordinariamente útiles. Sin embargo, eso no lo convierte en una solución general al problema de la parada.

Puede acertar en muchísimos programas. Puede producir una predicción probable. Puede reconocer estructuras que una persona pasaría por alto. Lo que no puede ofrecer es un algoritmo computable que decida correctamente **todos** los programas posibles con una garantía universal.

Más capacidad de cómputo puede volver tratables problemas antes demasiado costosos. No convierte en decidible aquello que matemáticamente no lo es.

## Más allá de la parada: el teorema de Rice

El teorema de Rice amplía esta intuición. En términos informales, establece que toda propiedad semántica no trivial del comportamiento calculado por programas arbitrarios es indecidible en general.

“Semántica” es una palabra importante: hablamos de lo que hace el programa, no de propiedades puramente sintácticas como cuántas líneas tiene o si contiene determinada secuencia de texto. “No trivial” significa que la propiedad se cumple para algunos comportamientos posibles y no para todos.

Esto no vuelve imposible el análisis de software. Marca el límite de lo que una herramienta general puede garantizar frente a cualquier programa imaginable.

## Recordar los límites es lucidez

Vivimos en una época en la que es fácil imaginar que toda barrera tecnológica desaparecerá con más escala, más datos o más potencia.

El problema de la parada nos recuerda que la computación tiene límites formales que no dependen del hardware. La teoría de la computación no solo nos enseña qué podemos construir; también nos permite reconocer aquello que ningún algoritmo general podrá hacer.

Aceptar esos límites no es pesimismo. Es una forma de madurez intelectual. Nos ayuda a distinguir entre un problema que requiere mejor ingeniería y uno que, en su formulación universal, exige una garantía imposible.

## Referencias

- Alan M. Turing, [*On Computable Numbers, with an Application to the Entscheidungsproblem*](https://www.abelard.org/turpap2/tp2-ie.asp), 1936.
- Henry Gordon Rice, [*Classes of Recursively Enumerable Sets and Their Decision Problems*](https://www.ams.org/journals/tran/1953-074-02/S0002-9947-1953-0053041-6/S0002-9947-1953-0053041-6.pdf), 1953.

---

Este texto nació a partir de un guion que preparé para experimentar con contenido audiovisual asistido por inteligencia artificial. Podés [ver el video original en YouTube](https://youtu.be/LKMysVNDIcQ).
