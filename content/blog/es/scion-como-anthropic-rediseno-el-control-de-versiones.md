---
title: "Scion: cómo Anthropic rediseñó el control de versiones para trabajar con agentes"
description: "Cuando miles de agentes producen código, conseguir los archivos también cuesta. El diseño de Scion permite entender cómo cambia la infraestructura de desarrollo."
publishedAt: "2026-10-28"
---

Imaginá una tarea automática que necesita revisar unos pocos archivos. Antes de empezar, tiene que preparar su copia del código. Ahora multiplicá ese paso por millones de ejecuciones: el costo de conseguir el material puede convertirse en un problema propio.

Esa es una entrada útil a [Redesigning source control at Anthropic](https://www.anthropic.com/research/redesigning-source-control), publicado el 13 de octubre y actualizado el 15. Anthropic describe Scion, el sistema con el que reemplazó Git en su monorepo, y reporta unos 25 millones de checkouts diarios para integración continua.

Me interesa recorrer el razonamiento de ingeniería: qué conviene tener cerca del cliente, qué puede resolver un servicio y cómo cambia la cuenta cuando gran parte del trabajo lo hacen procesos automáticos.

## Qué administra el control de versiones

Un SCM, en este contexto, es un sistema de control del código fuente. Conserva versiones y relaciones entre cambios. Permite comparar estados, encontrar el origen de una modificación y combinar trabajos.

Para entender la diferencia de diseños, sirve mirar [cómo guarda objetos Git](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects). Un commit referencia un árbol de archivos y sus padres; el contenido vive en objetos identificados por su hash. Los objetos se reutilizan: guardar una versión no significa duplicar todos los archivos.

También existe el [clonado parcial](https://git-scm.com/docs/partial-clone): permite omitir objetos y pedirlos después. Por eso, explicar este caso exige mirar el patrón de operaciones completo, además del tamaño del repositorio.

Un cliente de larga vida puede aprovechar muchas veces los datos que descargó. En un entorno efímero, hay que decidir dónde conservarlos para que la próxima tarea pueda reutilizarlos.

## El problema es cuánto trabajo repetimos

Imaginá un ejemplo hipotético: una comprobación tarda cinco segundos y preparar sus archivos lleva veinte. Mejorar el análisis hasta un segundo reduce el total de veinticinco a veintiuno. Si reducimos la preparación a dos segundos, el mismo análisis original termina en siete.

Esas cifras son inventadas para mostrar la cuenta. La medida importante es el recorrido completo: descarga, preparación, ejecución y limpieza.

Yo separaría tres preguntas al estudiarlo: cuántos datos necesita realmente cada tarea, cuántos vuelve a solicitar la siguiente y cuánto cálculo requiere el servidor para atender ambas. Reducir bytes puede ayudar, pero también importa evitar trabajo repetido de CPU o consultas innecesarias.

Ese enfoque permite entender por qué el acceso al repositorio merece diseñarse como parte de la infraestructura de ejecución.

## La propuesta de Scion

Scion asume clientes conectados, traslada operaciones al servidor, registra changesets con los archivos modificados y utiliza datos derivados para consultas históricas. Combina acceso por API, copias parciales o virtualizadas y una jerarquía de cachés.

Podemos pensar esas decisiones en tres capas:

- **La consulta:** una tarea puede necesitar una diferencia entre versiones, sin necesitar archivos en disco.
- **La representación:** registrar cambios y mantener índices permite separar la escritura de las distintas formas de leer.
- **La distribución:** varios consumidores pueden compartir datos ya disponibles cerca de donde ejecutan.

Ese es mi mapa para leer la arquitectura. Ayuda a distinguir guardar la historia, contestar preguntas y materializar una carpeta de trabajo: son necesidades relacionadas, pero pueden tener costos muy distintos.

## Guardar cambios y preparar vistas

Hay antecedentes públicos para ese tipo de representación. [Mononoke](https://github.com/facebook/sapling/blob/main/eden/mononoke/README.md), el servidor de Sapling, se diseñó para grandes repositorios. Su formato [Bonsai](https://github.com/facebook/sapling/blob/79071c2a3ea20c36ed71332608535e5801101bba/eden/mononoke/mononoke_types/serialization/bonsai.thrift) incluye padres, metadatos y un mapa de cambios de archivos. Anthropic reconoce ese antecedente.

Para entender la lógica de separar registro e índices, imaginá un cuaderno de movimientos y varias fichas de consulta. El cuaderno conserva qué pasó. Una ficha permite encontrar rápidamente los cambios de una ruta; otra, recorrer relaciones entre versiones.

Las fichas tienen un costo de construcción. Podemos prepararlas cuando entra un cambio o esperar hasta que alguien las necesite. La elección depende de la frecuencia de consulta y de cuánto trabajo estamos dispuestos a anticipar.

Esta analogía explica una decisión de sistemas habitual: organizar los datos para la pregunta que queremos responder. Una representación apropiada para escribir no tiene por qué ser la única que usamos para leer.

## Acercar datos a las tareas

La caché busca que solicitudes repetidas reutilicen una respuesta. Imaginá dos trabajos en una misma máquina que necesitan exactamente la misma versión de un archivo. Si el dato ya está disponible localmente, descargarlo otra vez aporta poco.

Identificar contenidos inmutables facilita esa reutilización: una versión concreta puede conservar la misma identidad mientras distintas tareas la consultan. Eso simplifica razonar sobre qué puede compartirse, aunque permisos y disponibilidad sigan necesitando su propio diseño.

La materialización bajo demanda agrega otra posibilidad: preparar solamente los archivos que se llegan a usar. Su beneficio depende del acceso real. Si una tarea lee todo, tendrá que obtenerlo todo; si examina una pequeña parte, puede ahorrar mucha preparación.

Me parece una buena forma de evaluar estas arquitecturas: observar las lecturas, el tráfico entre capas y el comportamiento cuando un dato todavía no está en caché. Así podemos explicar de dónde viene una mejora, además de medirla.

## Qué resultados tienen hasta ahora

Anthropic reporta una infraestructura de CPU y memoria 200 veces menor que sus antiguos espejos de Git, checkouts de segundos en lugar de minutos y un 25 % de capacidad de CPU liberada en CI. Son resultados internos de ese entorno.

Las cifras permiten distinguir magnitudes. La primera compara infraestructura de distribución; la tercera corresponde a capacidad de CI. No las interpretaría como una reducción equivalente del costo total de desarrollar software.

La publicación también describe pruebas posteriores al merge y previas al despliegue. La distinción importa: integrar cambios, comprobarlos y publicar una versión son etapas que se pueden organizar de maneras diferentes.

Para comparar otro sistema, mediría preparación de entornos, consumo de recursos, latencias y recuperación ante fallos con una carga representativa. Esa sería una evaluación propia, no una extrapolación de los números publicados.

## La conclusión de ingeniería

El caso muestra una pregunta de diseño que vale la pena conservar: **¿qué necesita realmente cada consumidor del repositorio?**

Una persona que explora la historia, un agente que modifica un módulo y una comprobación automática pueden necesitar accesos diferentes. Entenderlos permite decidir qué datos mover y qué operaciones ofrecer como servicio.

Mi lectura de Scion es esa: cuando aumenta la capacidad para producir cambios, también merece atención la infraestructura que permite examinarlos, probarlos y distribuirlos. Ahí puede aparecer el siguiente margen de mejora del proceso.

Sigo estas conversaciones en [mi canal de YouTube](https://www.youtube.com/@saarreche). Un abrazo.

## Referencias

- [Anthropic: Redesigning source control at Anthropic](https://www.anthropic.com/research/redesigning-source-control), publicado el 13/10/2026 y actualizado el 15/10. Caso de ingeniería y resultados reportados por la empresa.
- [Git: clonado parcial](https://git-scm.com/docs/partial-clone) y [modelo de objetos](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects).
- [Mononoke](https://github.com/facebook/sapling/blob/main/eden/mononoke/README.md) y [formato Bonsai](https://github.com/facebook/sapling/blob/79071c2a3ea20c36ed71332608535e5801101bba/eden/mononoke/mononoke_types/serialization/bonsai.thrift), antecedentes públicos del diseño.
