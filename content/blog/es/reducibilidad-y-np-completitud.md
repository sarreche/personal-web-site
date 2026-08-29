---
title: "Reducibilidad y NP-completitud: cómo se clasifican los problemas"
description: "Cómo las reducciones permiten comparar dificultades, qué significan NP-hard y NP-completo, y por qué reconocer la estructura de un problema cambia la estrategia."
publishedAt: "2026-08-23"
---

Cuando empezamos a estudiar teoría de la computación, la primera pregunta suele ser binaria:

**¿Este problema puede resolverse o no?**

La computabilidad responde qué tareas puede realizar un algoritmo en principio. Pero saber que algo es computable no nos dice si podemos resolverlo con recursos razonables.

Por eso aparece una segunda pregunta:

**¿Qué tan difícil es resolverlo?**

Para comparar problemas necesitamos una manera de conectarlos. Esa herramienta es la **reducibilidad**.

Reducir un problema a otro permite demostrar que comparten una estructura de dificultad. A partir de esa idea podemos construir clases, identificar problemas NP-completos y evitar invertir años buscando un algoritmo eficiente sin comprender primero contra qué tipo de barrera estamos trabajando.

## Resolver y verificar

Antes de hablar de reducciones, recordemos dos clases importantes de problemas de decisión.

**P** contiene los problemas que pueden resolverse en tiempo polinómico con un algoritmo determinista. De manera informal, son problemas para los que conocemos procedimientos que escalan razonablemente con el tamaño de la entrada.

**NP** contiene los problemas cuyas respuestas afirmativas poseen certificados que pueden verificarse en tiempo polinómico.

Por ejemplo, encontrar una ruta que visite determinadas ciudades bajo un límite puede ser difícil. Pero si alguien entrega una ruta concreta, podemos comprobar rápidamente si visita las ciudades requeridas y si cumple el límite.

Todo problema en P pertenece también a NP: si podemos encontrar la respuesta eficientemente, podemos verificarla eficientemente.

Lo que todavía no sabemos es si todo problema en NP también pertenece a P. Esa es la pregunta **P vs. NP**.

## Qué significa reducir un problema

Supongamos que tenemos dos problemas de decisión, A y B.

Decimos que **A se reduce a B en tiempo polinómico** si existe una transformación eficiente que convierte cualquier instancia de A en una instancia de B, preservando la respuesta:

```text
x es una instancia afirmativa de A
        si y solo si
f(x) es una instancia afirmativa de B
```

La transformación `f` también debe ejecutarse en tiempo polinómico. Si la conversión fuera más difícil que el problema original, no serviría para comparar eficiencia.

La notación habitual es:

```text
A ≤p B
```

Si conocemos un algoritmo eficiente para B, podemos resolver A de esta forma:

1. Transformamos la instancia de A mediante `f`.
2. Resolvemos la instancia resultante de B.
3. Interpretamos esa respuesta como la respuesta para A.

Por eso la reducción nos permite afirmar que **B es al menos tan difícil como A**.

## La dirección importa

Este es el error más común.

Si queremos demostrar que un problema nuevo B es difícil, debemos tomar un problema A cuya dificultad ya conocemos y reducirlo **hacia B**:

```text
problema conocido y difícil → problema nuevo
```

Demostrar que B se reduce a A no prueba que B sea difícil. Solo prueba que B no es más difícil que A, porque podríamos resolverlo utilizando una solución para A.

Una analogía útil es la traducción.

Si puedo traducir cualquier texto en idioma A al idioma B, entonces un traductor perfecto de B también me permitiría comprender A. Esto muestra que B tiene capacidad suficiente para representar todos los casos de A.

La flecha señala dónde estamos enviando la dificultad.

## Las reducciones transmiten algoritmos y barreras

Las reducciones permiten razonar en dos direcciones.

Si `A ≤p B` y B pertenece a P, entonces A también pertenece a P. Transformamos A y utilizamos el algoritmo eficiente de B.

Pero si `A ≤p B` y sabemos que A es difícil para toda la clase NP, entonces B hereda al menos esa dificultad.

La misma conexión puede transportar una buena noticia —un algoritmo— o una mala noticia —una barrera de complejidad—.

Además, las reducciones son transitivas. Si A se reduce a B y B se reduce a C, entonces A se reduce a C. Podemos encadenar transformaciones y construir una red de relaciones entre problemas aparentemente diferentes.

## Qué significa NP-hard

Un problema es **NP-hard** si todo problema de NP puede reducirse a él en tiempo polinómico.

Eso significa que posee al menos la dificultad de los problemas más difíciles de NP.

Un problema NP-hard no tiene por qué pertenecer a NP. Incluso puede no ser un problema de decisión o no tener certificados verificables eficientemente.

La etiqueta describe dureza, no pertenencia.

Si encontráramos un algoritmo polinómico para cualquier problema NP-hard y ese algoritmo permitiera resolver las reducciones correspondientes, podríamos resolver eficientemente todos los problemas de NP.

## Qué significa NP-completo

Un problema es **NP-completo** cuando cumple dos condiciones:

1. **Pertenece a NP:** una solución afirmativa puede verificarse en tiempo polinómico.
2. **Es NP-hard:** todo problema en NP puede reducirse a él en tiempo polinómico.

Podemos resumirlo así:

```text
NP-completo = pertenece a NP + es NP-hard
```

Los problemas NP-completos son los más difíciles dentro de NP. Si uno de ellos tuviera un algoritmo determinista polinómico, entonces todos los problemas de NP lo tendrían y se demostraría que `P = NP`.

Por eso forman una especie de núcleo conectado: una mejora fundamental para uno puede propagarse a todos mediante reducciones.

## SAT: el primer problema NP-completo

El problema de satisfacibilidad booleana, **SAT**, pregunta si existe alguna asignación de valores verdadero y falso que haga verdadera una fórmula lógica.

En 1971, Stephen Cook demostró que todo cálculo realizado por una máquina no determinista en tiempo polinómico podía representarse mediante una fórmula lógica de tamaño polinómico. De forma independiente, Leonid Levin obtuvo un resultado equivalente.

El teorema de Cook–Levin estableció así que SAT es NP-completo.

El resultado fue decisivo porque proporcionó un primer punto de partida. Ya no era necesario reducir cada nuevo problema desde toda la definición de NP. Bastaba reducir desde SAT o desde cualquier otro problema previamente demostrado NP-completo.

En 1972, Richard Karp utilizó esta estrategia para conectar SAT con 21 problemas combinatorios. La dificultad empezó a propagarse mediante una cadena de reducciones.

## Cómo se demuestra que un problema es NP-completo

Para demostrar que un problema nuevo B es NP-completo, normalmente seguimos dos pasos.

### 1. Demostrar que B pertenece a NP

Debemos describir un certificado para una respuesta afirmativa y un verificador que lo compruebe en tiempo polinómico.

No alcanza con decir que “parece fácil verificarlo”. Hay que identificar qué información se entrega y cuánto cuesta comprobarla.

### 2. Demostrar que B es NP-hard

Elegimos un problema A que ya sabemos NP-completo y construimos una reducción polinómica:

```text
A ≤p B
```

Después probamos:

- Que la transformación se ejecuta en tiempo polinómico.
- Que las instancias afirmativas de A se convierten en instancias afirmativas de B.
- Que las instancias negativas de A se convierten en instancias negativas de B.

La equivalencia lógica es tan importante como la eficiencia de la transformación.

## Un ejemplo intuitivo: de Clique a Independent Set

En un grafo, una **clique** de tamaño `k` es un conjunto de `k` vértices conectados todos entre sí.

Un **conjunto independiente** de tamaño `k` es un conjunto de vértices entre los cuales no existe ninguna arista.

Podemos transformar una instancia de Clique en una de Independent Set tomando el grafo complemento: conectamos exactamente los pares que no estaban conectados en el original.

Entonces:

```text
G contiene una clique de tamaño k
        si y solo si
el complemento de G contiene un conjunto independiente de tamaño k
```

Construir el complemento es eficiente. La reducción revela que dos preguntas que parecen opuestas comparten esencialmente la misma estructura.

Eso es lo poderoso de reducir: no resolvimos ninguna de las dos por fuerza bruta. Descubrimos que una solución general para una resolvería también la otra.

## Decisión y optimización

La teoría de NP-completitud se formula normalmente sobre problemas de decisión, con respuestas sí o no.

En la práctica solemos querer optimizar: encontrar la ruta más corta, usar el menor número de colores o seleccionar el conjunto más grande.

Ambas versiones están relacionadas. Si puedo resolver eficientemente la optimización, normalmente puedo responder la decisión. Si conozco una forma de decidir para distintos límites, muchas veces puedo reconstruir el valor óptimo mediante varias consultas.

Pero conviene mantener clara la distinción: cuando afirmamos formalmente que un problema es NP-completo, solemos referirnos a su versión de decisión. La versión de optimización suele clasificarse como NP-hard.

## Qué no demuestra la NP-completitud

Que un problema sea NP-completo no significa que todas sus instancias sean imposibles de resolver.

Tampoco demuestra, mientras `P ≠ NP` siga abierto, que no exista un algoritmo polinómico.

La clasificación dice algo más preciso:

- El problema concentra la dificultad de toda NP.
- Un algoritmo polinómico general tendría consecuencias extraordinarias.
- No deberíamos asumir que una solución exacta y escalable aparecerá con una optimización rutinaria.

Una instancia pequeña puede resolverse por búsqueda exhaustiva. Casos reales pueden tener estructura especial. Un algoritmo exponencial bien diseñado puede ser útil para tamaños moderados.

La complejidad estudia el comportamiento general en el peor caso, no sentencia cada ejemplo concreto.

## Qué hacer cuando reconocemos un problema difícil

La clasificación no es una invitación a rendirse. Es información para elegir estrategia.

Según el problema, podemos:

- Buscar algoritmos de aproximación.
- Diseñar heurísticas útiles en los datos reales.
- Utilizar algoritmos aleatorizados.
- Relajar restricciones.
- Explotar parámetros pequeños.
- Resolver exactamente solo instancias acotadas.
- Separar casos especiales tratables.
- Aceptar una solución suficientemente buena.

También podemos revisar si realmente necesitamos la formulación más general. Muchas aplicaciones se vuelven manejables cuando incorporamos restricciones propias del dominio.

## Una brújula para invertir esfuerzo

La teoría de la complejidad no es solamente un ejercicio abstracto.

Nos ayuda a distinguir entre tres situaciones muy diferentes:

1. Todavía no encontramos un buen algoritmo.
2. El problema pertenece a una familia para la que existen soluciones eficientes.
3. El problema está conectado con una barrera que atraviesa miles de problemas conocidos.

La reducibilidad permite construir esas conexiones. La NP-completitud identifica problemas que concentran la dificultad de NP.

Comprenderlas cambia la pregunta. En lugar de insistir ciegamente con la solución exacta, podemos decidir cuándo aproximar, relajar, parametrizar o rediseñar.

A veces la respuesta correcta no es resolver mejor.

Es reconocer qué clase de problema tenemos delante.

La teoría no solo clasifica problemas. Enseña humildad frente a la dificultad y nos muestra dónde vale la pena invertir esfuerzo.

## Referencias

- MIT OpenCourseWare, [notas sobre P, NP, SAT y reducciones polinómicas](https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/resources/mit18_404f20_lec14-1/).
- Stephen A. Cook, [*The Complexity of Theorem-Proving Procedures*](https://www.cs.cmu.edu/~15455/resources/Cook1971-complx-thm-proof.pdf), 1971.
- Richard M. Karp, [*Reducibility Among Combinatorial Problems*](https://doi.org/10.1007/978-1-4684-2001-2_9), 1972.

---

Este artículo desarrolla una idea central de la teoría de la complejidad: antes de intentar optimizar un problema, conviene comprender con qué otros problemas está conectado. Podés [ver el video original en YouTube](https://youtu.be/SxAjmddc9L8).
