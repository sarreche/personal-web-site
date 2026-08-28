---
title: "Teorema de Rice: por qué casi nada interesante es decidible"
description: "El límite que extiende el problema de la parada a toda propiedad semántica no trivial de los programas."
publishedAt: "2026-08-28"
---

Después de conocer el problema de la parada, podríamos pensar que se trata de una excepción. Tal vez no podamos decidir si cualquier programa terminará, pero sí podríamos construir analizadores universales para responder otras preguntas importantes sobre su comportamiento.

El teorema de Rice destruye esa esperanza.

En términos informales, dice lo siguiente:

> Toda propiedad no trivial de la función calculada por un programa es indecidible en general.

La frase es breve, pero cada palabra importa. Para entender el verdadero alcance del teorema necesitamos separar tres ideas: propiedades semánticas, propiedades no triviales y decisión universal.

## Sintaxis no es semántica

Una propiedad **sintáctica** describe cómo está escrito un programa. Podemos preguntar si su código contiene determinada palabra, cuántas líneas tiene o si utiliza una construcción concreta del lenguaje.

Muchas de esas preguntas pueden resolverse inspeccionando el texto del programa. El análisis termina porque la fuente es finita.

Una propiedad **semántica**, en cambio, habla de lo que el programa calcula o hace. Por ejemplo:

- ¿Devuelve siempre un número positivo?
- ¿Acepta alguna entrada?
- ¿Calcula la misma función que otro programa?
- ¿Produce alguna vez un resultado determinado?
- ¿Se detiene para todas sus entradas?

Dos programas completamente diferentes en su sintaxis pueden calcular exactamente la misma función. Para Rice, si una propiedad depende solo de esa función y no de cómo fue escrito el código, estamos frente a una propiedad semántica.

El teorema no dice que todo sobre un programa sea imposible de decidir. Habla de su comportamiento calculado, no de cualquier característica de su representación.

## Qué significa “no trivial”

Una propiedad es trivial si se cumple para todos los programas o no se cumple para ninguno.

“El programa calcula alguna función computable” es verdadera para todos los programas dentro del modelo. Un algoritmo puede responder siempre “sí” y acertar. Del mismo modo, una propiedad imposible para todos puede decidirse respondiendo siempre “no”.

Una propiedad es **no trivial** cuando divide el universo de comportamientos:

- Al menos un programa la cumple.
- Al menos un programa no la cumple.

Las propiedades interesantes suelen ser justamente de este tipo. Queremos distinguir programas seguros de inseguros, equivalentes de diferentes o capaces de producir cierto resultado de aquellos que nunca lo harán.

Rice demuestra que, cuando esa distinción depende de la función calculada, no existe un algoritmo general que siempre termine y responda correctamente para todos los programas posibles.

## El límite está en el caso universal

Supongamos que queremos decidir si un programa devuelve alguna vez el número `42`.

Para muchos programas la respuesta será sencilla. Podemos ejecutarlos, examinar su estructura o demostrar matemáticamente qué resultados producen. Incluso podemos construir herramientas que resuelvan una enorme cantidad de casos reales.

Lo que el teorema descarta es una garantía universal: un analizador que reciba cualquier programa arbitrario, siempre termine y determine correctamente si ese programa producirá `42` para alguna entrada.

Esta distinción evita una interpretación equivocada. Indecidible no significa que todos los casos sean misteriosos. Significa que ningún procedimiento algorítmico puede resolver **todos** los casos de la clase.

## La intuición detrás de la demostración

La idea central consiste en reducir el problema de la parada a la propiedad semántica que queremos decidir.

Imaginemos una propiedad no trivial `Q`. Como no es trivial, existe algún programa cuyo comportamiento cumple `Q` y otro que no la cumple.

Ahora construimos un programa nuevo que recibe una entrada, pero antes simula otra computación cuyo problema de parada queremos resolver:

```text
nuevo_programa(entrada):
  simular P(x)

  si P(x) se detiene:
    comportarse como un programa que cumple Q
```

Si `P(x)` nunca termina, el programa nuevo tampoco llega al comportamiento que cumple `Q`. Si `P(x)` termina, sí lo hace.

Por lo tanto, si tuviéramos un algoritmo universal capaz de decidir `Q`, podríamos usarlo para decidir si `P(x)` se detiene. Pero ya sabemos que el problema de la parada es indecidible.

La existencia del supuesto decisor para `Q` produciría una contradicción. El argumento técnico completo requiere cuidar qué función representa el caso en el que la simulación no termina, pero la intuición es esa: cualquier propiedad semántica no trivial puede utilizarse para esconder dentro de ella una instancia del problema de la parada.

## Lo que Rice no dice

El teorema es poderoso, pero no conviene exagerarlo.

No dice que el análisis estático sea inútil. No dice que sea imposible verificar software. Tampoco dice que nunca podamos demostrar que un programa cumple una propiedad.

Podemos obtener garantías cuando restringimos el lenguaje, limitamos la clase de programas, pedimos anotaciones, aceptamos respuestas conservadoras o permitimos que la herramienta diga “no lo sé”.

También podemos construir analizadores que detecten muchos casos, aunque produzcan falsos positivos, falsos negativos o no terminen frente a determinadas entradas.

Lo imposible es combinar simultáneamente estas tres condiciones para una propiedad semántica no trivial:

1. Aceptar cualquier programa posible.
2. Terminar siempre.
3. Responder siempre de forma correcta.

## Qué significa para la inteligencia artificial

Una IA puede analizar código, detectar vulnerabilidades, inferir intenciones y anticipar comportamientos con una efectividad creciente. Puede ser extraordinariamente útil sin convertirse en un decisor universal.

El teorema de Rice no impide que una IA acierte en los programas que encontramos en la práctica. Impide que cualquier sistema computable garantice una respuesta correcta para todos los programas arbitrarios respecto de toda propiedad semántica no trivial.

Una predicción con alta probabilidad no es una demostración universal. Una herramienta útil no necesita ser infalible. Y un sistema cada vez más poderoso continúa operando dentro de los límites lógicos de la computación.

## Una tecnología más madura

El teorema de Rice no reduce el valor de la tecnología. Lo vuelve más preciso.

Nos dice que podemos construir sistemas poderosos y automatizar muchísimo, pero no escapar de la lógica. Nos obliga a declarar nuestras restricciones, elegir qué garantías necesitamos y reconocer cuándo una herramienta puede responder “sí”, “no” o “no puedo determinarlo”.

El universo computable está lleno de fronteras. Recordarlas no es resignarse: es diseñar con lucidez.

## Referencias

- Henry Gordon Rice, [*Classes of Recursively Enumerable Sets and Their Decision Problems*](https://www.ams.org/journals/tran/1953-074-02/S0002-9947-1953-0053041-6/S0002-9947-1953-0053041-6.pdf), 1953.
- Alan M. Turing, [*On Computable Numbers, with an Application to the Entscheidungsproblem*](https://www.abelard.org/turpap2/tp2-ie.asp), 1936.

---

Este texto nació a partir de otro guion que preparé para experimentar con contenido audiovisual asistido por inteligencia artificial. Podés [ver el video original en YouTube](https://youtu.be/6Fxxn7hNvkY).
