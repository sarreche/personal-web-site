---
title: "Dream-RSI: mejorar la exploración con mundos reutilizados"
description: "Qué propone Dream-RSI, cómo reutiliza búsquedas anteriores para mejorar la estrategia de un agente y cuáles son los límites de esa mejora recursiva."
publishedAt: "2026-09-24"
---

Cuando leí el título [*Dream-RSI: Recursive Self-Improvement through Evolving Worlds*](https://arxiv.org/abs/2609.14858), pensé en la imagen más ambiciosa de la mejora recursiva: una IA que modifica su propia inteligencia, se vuelve más capaz y repite el proceso sin parar.

El trabajo cuenta una historia más específica y, para mí, más útil. Un agente intenta descubrir mejores algoritmos o programas. En cada intento debe decidir por dónde seguir, qué idea abandonar, cuáles probar en paralelo y cuándo detenerse. Dream-RSI busca mejorar **esa estrategia de exploración** usando la historia de búsquedas anteriores.

El modelo que escribe el código permanece igual. Lo que cambia es el programa que organiza su trabajo.

## El costo de buscar una buena idea

Imaginemos que le pedimos a un agente diseñar una implementación más rápida de un algoritmo. Propone una versión, la ejecuta, recibe un resultado y decide qué probar después. Puede refinar la propuesta que ya tiene o abrir otra línea de investigación.

Una búsqueda larga se parece a un árbol. Cada nodo es un intento; de él pueden salir nuevas pruebas. Algunas ramas mejoran el resultado. Otras consumen tiempo y terminan en un callejón sin salida.

Una estrategia fija puede seguir gastando recursos en ramas poco prometedoras. Pero probar una estrategia nueva también cuesta: para saber si realmente es mejor, quizá haya que dejarla dirigir una búsqueda completa. Si cada búsqueda implica muchas llamadas al agente y ejecuciones de código, comparar cientos de estrategias se vuelve prohibitivo.

Ahí aparece la idea de Dream-RSI: **ya pagamos una vez por muchas de esas pruebas**. ¿Podemos aprovecharlas para evaluar decisiones distintas?

## Volver a recorrer lo que ya pasó

El sistema guarda la búsqueda como un árbol de intentos con sus resultados: qué se probó, desde qué versión se partió, cuánto costó y qué puntuación obtuvo. Ese registro se convierte en un entorno de *replay*, una especie de simulador construido con hechos observados.

Una nueva estrategia puede recorrer ese árbol de otra manera. Puede elegir primero una rama que antes se exploró más tarde, detener una línea que no estaba dando resultados o distribuir de otro modo los intentos paralelos. Como los resultados de esos nodos ya están guardados, comparar esas decisiones no requiere volver a ejecutar al agente y al evaluador.

Los autores llaman *dreaming* a esta evaluación fuera de línea. El nombre es atractivo, pero conviene tomarlo con precisión: el sistema no imagina libremente soluciones nuevas ni predice con exactitud qué habría pasado en un camino desconocido. Reproduce combinaciones distintas de **resultados que ya existen en el historial**.

La analogía que más me ayudó es la de explorar una ciudad. La primera vez caminás, doblás mal, encontrás calles cortadas y terminás dibujando un mapa. Con ese mapa podés comparar rutas antes de volver a salir. Pero el mapa no te dice qué hay en un barrio al que nunca entraste.

## Dónde está la mejora recursiva

El ciclo del paper tiene tres momentos:

1. Una estrategia dirige al agente durante una búsqueda real y deja un árbol de intentos.
2. Un segundo agente propone cambios en el código de esa estrategia y los prueba recorriendo los árboles ya guardados.
3. La versión mejor evaluada vuelve a dirigir una búsqueda real. Esa búsqueda agrega otro árbol al historial y permite repetir el proceso.

Cada vuelta puede ampliar los “mundos” disponibles para la siguiente. Por eso el subtítulo habla de *evolving worlds*: no son universos simulados desde cero, sino historiales de exploración que se acumulan y se reutilizan.

La palabra *recursiva* también necesita contexto. Aquí no se reentrenan los pesos del modelo ni se demuestra que la IA haya aprendido a diseñar autónomamente modelos cada vez más inteligentes. Se mejora un componente del sistema que influye en los próximos intentos de mejora: **cómo asignar el esfuerzo de búsqueda**.

Me parece una diferencia importante. En la práctica, un agente puede rendir más sin cambiar su modelo base si decide mejor dónde gastar tiempo, herramientas y cómputo.

## Qué encontraron en los experimentos

Los autores probaron Dream-RSI en ocho tareas de tres áreas: ingeniería de algoritmos, optimización matemática y programación de kernels para GPU. Su comparación controlada mantiene el mismo agente y evaluador, pero deja fija la estrategia de exploración en el sistema de referencia.

En la tarea de crear un algoritmo para la ruta de regularización Lasso, una configuración con Gemini 3.1 Pro obtuvo una solución con menor tiempo promedio de ejecución en seis conjuntos de evaluación reservados: **2931 ms frente a 3587 ms**, usando **317 llamadas al agente frente a 550**. Esos milisegundos miden la velocidad del algoritmo descubierto; las llamadas miden el costo de descubrirlo. Son dos resultados distintos.

En tareas de kernels, Dream-RSI alcanzó resultados comparables con **2,43 veces menos generaciones** en VGG16 y **1,79 veces menos** en LayerNorm. En ConvDiv, con presupuestos de búsqueda similares, reportó una medida de rendimiento **2,09 veces mayor**.

El resultado no fue una victoria en cada comparación. En las tres tareas matemáticas, la propuesta superó algunas referencias, igualó otras y quedó por detrás de una alternativa en autocorrelación. La lectura honesta es que el método mostró una mejora de eficiencia o calidad en varios escenarios estudiados, no una receta universal para cualquier problema.

## El límite del mapa

El *replay* es barato porque consulta resultados guardados. Esa ventaja también marca su frontera. No puede saber si una rama nunca explorada habría producido algo extraordinario. Una estrategia que parece excelente al recorrer árboles históricos puede no ser la mejor cuando sale otra vez al mundo real.

Acumular árboles diferentes ayuda a reducir la dependencia de una sola búsqueda, pero no elimina el problema. Además, el artículo es un [preprint de arXiv](https://arxiv.org/abs/2609.14858) publicado en septiembre de 2026: sus resultados todavía necesitan más contrastes en otros dominios y con otras condiciones de evaluación.

Aun con ese límite, la idea me parece potente por su sobriedad. Muchas veces hablamos de agentes que «se mejoran a sí mismos» como si solo contara cambiar el cerebro del modelo. Dream-RSI recuerda que también hay inteligencia en la organización de la búsqueda: elegir qué probar, cuándo insistir y cuándo dejar de gastar recursos.

No demuestra una explosión de inteligencia. Muestra una forma concreta de aprender de intentos anteriores para que el próximo intento esté mejor dirigido.

Podés leer el [paper completo](https://arxiv.org/abs/2609.14858) y explorar el [código publicado por los autores](https://github.com/zhengkid/Dream-RSI). Si te interesan estas ideas sobre agentes y aprendizaje, también las sigo conversando en [mi canal de YouTube](https://www.youtube.com/@saarreche).
