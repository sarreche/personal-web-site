---
title: "¿Se acaba la ingeniería de software en seis meses?"
description: "La IA puede generar código, pruebas y documentación, pero construir productos confiables sigue exigiendo decisiones, contexto y gestión del riesgo."
publishedAt: "2026-08-28"
---

La pregunta aparece cada vez con más fuerza: si la inteligencia artificial empieza a escribir código, probarlo, documentarlo y ejecutar tareas de forma autónoma, ¿qué lugar le queda a la ingeniería de software?

En su versión más extrema, la predicción dice que la profesión podría acabarse en seis meses.

La velocidad del cambio hace que la inquietud sea razonable. Los agentes actuales ya pueden recorrer repositorios, implementar funcionalidades, migrar código y resolver tareas que hace poco requerían horas, días o incluso semanas de trabajo humano.

Pero escribir código nunca fue la totalidad de la ingeniería de software.

Si la IA abarata la implementación, no elimina la ingeniería. Desplaza su centro de gravedad hacia las decisiones que rodean al código.

## Por qué existe la ingeniería de software

Programar significa expresar instrucciones que una computadora pueda ejecutar. La ingeniería de software aparece cuando necesitamos construir y evolucionar sistemas bajo restricciones reales.

Existen presupuestos, fechas, riesgos, regulaciones, equipos, usuarios, sistemas heredados y consecuencias cuando algo falla. Los requisitos cambian. Las personas interpretan una misma necesidad de maneras diferentes. Un producto exitoso recibe más carga, acumula datos y debe convivir con decisiones tomadas años atrás.

La ingeniería intenta administrar esa complejidad para maximizar recursos sin perder de vista resultados y riesgos.

No promete que un sistema nunca fallará. Busca que las decisiones sean explícitas, que los riesgos sean entendidos y que el producto pueda cumplir su propósito de forma suficientemente confiable durante su vida útil.

## Qué parte ya tomó la IA

La IA avanzó primero sobre las actividades cuya entrada y salida pueden expresarse con claridad:

- Generar implementaciones a partir de una especificación.
- Completar, traducir y refactorizar código.
- Crear pruebas y datos de prueba.
- Explicar repositorios y producir documentación inicial.
- Detectar patrones, errores frecuentes y posibles vulnerabilidades.
- Ejecutar herramientas, revisar resultados e iterar sobre una tarea.

Los agentes amplían ese alcance porque pueden sostener secuencias largas de acciones, consultar archivos, ejecutar comandos y corregirse frente a ciertos errores.

Esto ya cambia el trabajo. Una persona con buenas herramientas puede recorrer más alternativas, producir prototipos más rápido y delegar una parte creciente de la ejecución.

Pero autonomía sobre una tarea no equivale a responsabilidad sobre un producto.

Los resultados recientes muestran justamente esa tensión. DORA describe a la IA como un amplificador: los equipos fuertes obtienen más capacidad, mientras que los sistemas débiles exponen con mayor velocidad sus problemas. La adopción se relaciona con más *throughput* y mejor desempeño de producto, pero todavía mantiene una relación negativa con la estabilidad de las entregas.

Más cambios no garantizan mejores sistemas.

## La parte difícil se mueve

Cuando producir una función cuesta menos, aparecen más funciones posibles. Cuando podemos generar cinco alternativas en minutos, el trabajo ya no consiste en escribir la primera: consiste en elegir cuál merece existir.

La pregunta central pasa de “¿podemos construirlo?” a otras más exigentes:

- ¿Qué problema queremos resolver?
- ¿Para quién?
- ¿Qué comportamiento sería realmente valioso?
- ¿Qué datos podemos utilizar legítimamente?
- ¿Qué nivel de error es aceptable?
- ¿Qué ocurre cuando falla?
- ¿Cómo sabremos si funcionó?
- ¿Quién responde por sus consecuencias?

La IA puede ayudarnos a explorar esas preguntas. No puede eliminar la necesidad de que alguien defina los objetivos, comprenda el contexto y asuma las decisiones.

## La ambigüedad no es un defecto del prompt

En proyectos reales, las personas rara vez saben describir desde el comienzo exactamente lo que necesitan.

Un usuario pide una solución, descubre algo al verla y cambia de opinión. Dos áreas tienen objetivos incompatibles. Una regulación admite interpretaciones. El mercado se mueve mientras construimos. Un incidente revela una dependencia que nadie había documentado.

La ambigüedad, la incertidumbre y la volatilidad no son solamente problemas de redacción que desaparecerán con un prompt más largo. Son propiedades del entorno en el que se desarrolla el producto.

Parte de la ingeniería consiste en reducir incertidumbre mediante conversaciones, prototipos, experimentos, observación y decisiones reversibles. No alcanza con ejecutar correctamente una instrucción cuando todavía no sabemos cuál debería ser la instrucción correcta.

## Fase por fase: qué cambia

La ingeniería de software no es una línea de montaje rígida, pero podemos recorrer sus actividades principales para entender el nuevo reparto del trabajo.

### Descubrimiento y definición del problema

La IA puede resumir investigación, analizar retroalimentación, proponer preguntas y organizar hipótesis.

Todavía necesitamos decidir qué señales representan necesidades reales, qué conflicto vale la pena resolver y qué resultado está alineado con la estrategia. Una respuesta bien escrita no reemplaza el contacto con quienes viven el problema.

### Requisitos y alcance

Un modelo puede convertir conversaciones en historias, criterios de aceptación y casos límite. También puede detectar contradicciones entre documentos.

Pero alguien debe negociar prioridades, resolver expectativas incompatibles y decidir qué queda afuera. El alcance no se descubre solamente: se acuerda.

### Arquitectura y diseño

La IA puede proponer componentes, comparar tecnologías, generar diagramas y reconocer patrones conocidos.

La arquitectura, sin embargo, es una colección de decisiones bajo restricciones específicas. El mismo diseño puede ser excelente para un prototipo y peligroso para un sistema financiero. Importan el costo del cambio, la capacidad del equipo, los datos existentes, las obligaciones regulatorias y el impacto de una falla.

### Implementación

Esta es la fase donde la automatización resulta más visible. Código, migraciones, pruebas y documentación pueden producirse a gran velocidad.

El trabajo humano se desplaza hacia especificar, revisar, integrar y decidir cuándo el resultado es suficientemente bueno. Generar deja de ser el cuello de botella; comprender y validar pueden convertirse en él.

### Verificación y calidad

La IA puede crear pruebas, explorar estados, analizar logs y buscar vulnerabilidades. También puede producir una implementación y sus pruebas con el mismo supuesto equivocado.

Una suite verde demuestra coherencia con los criterios escritos. No demuestra que elegimos los criterios correctos. La independencia de la validación y el juicio sobre riesgos continúan siendo esenciales.

### Despliegue y operación

Los agentes pueden automatizar entregas, observar métricas, clasificar incidentes y proponer correcciones.

En producción aparecen personas reales, dinero real y efectos irreversibles. Alguien necesita definir límites, permisos, mecanismos de recuperación y condiciones para detener la automatización.

### Evolución

Un sistema no termina cuando se publica. Cambian usuarios, dependencias, amenazas y objetivos.

La IA puede ayudar a mantenerlo, pero cada nueva generación de cambios interactúa con decisiones anteriores. La capacidad de comprender el sistema completo y administrar su evolución sigue determinando su vida útil.

## ¿Siguen importando los atributos de calidad?

Si el código puede generarse y explicarse automáticamente, podríamos pensar que mantenibilidad, confiabilidad o seguridad pierden importancia. Ocurre lo contrario.

El código es solo una representación del sistema. Los atributos de calidad describen cómo se comporta ese sistema bajo condiciones reales:

- **Confiabilidad:** ¿continúa funcionando cuando algo falla?
- **Seguridad:** ¿protege datos y capacidades frente a usos indebidos?
- **Rendimiento:** ¿responde dentro del tiempo y costo necesarios?
- **Escalabilidad:** ¿mantiene su comportamiento al crecer?
- **Mantenibilidad:** ¿podemos cambiarlo sin introducir riesgos desproporcionados?
- **Observabilidad:** ¿podemos entender qué ocurre en producción?
- **Usabilidad y accesibilidad:** ¿las personas pueden utilizarlo de forma efectiva?

Una IA puede documentar código. No puede convertir automáticamente un sistema inseguro en seguro ni compensar una arquitectura cuyo costo operativo hace inviable el producto.

Cuando generar más código se vuelve fácil, controlar la calidad del sistema se vuelve más importante.

## Qué tipo de producto querés construir

No toda construcción necesita el mismo nivel de ingeniería.

Un prototipo personal, descartable y sin datos sensibles puede aceptar errores, deuda técnica y decisiones rápidas. Un sistema que controla dinero, salud, infraestructura o información privada necesita evidencia, trazabilidad, controles y responsabilidades mucho más fuertes.

La pregunta no es si usamos ingeniería o IA. La pregunta es qué nivel de rigor exige el riesgo del producto.

Si explicás claramente qué querés construir, la IA puede hacer que la ejecución sea la parte más fácil. Pero definir “claramente” implica conocer el dominio, descubrir necesidades, elegir compromisos y anticipar consecuencias. Esa capacidad también forma parte de la ingeniería.

## ¿Volvemos al principio?

En los primeros años del software, una persona podía comprender una gran parte del sistema y construirlo directamente. La IA vuelve a darle a individuos y equipos pequeños una capacidad extraordinaria.

En ese sentido, algo del espíritu inicial regresa: menos distancia entre una idea y una implementación.

Pero los sistemas actuales viven conectados, manejan más datos, enfrentan ataques, regulaciones y expectativas globales. La capacidad de producir como un equipo grande no elimina esas responsabilidades. Puede concentrarlas en menos personas.

Una *company of one* con agentes puede escribir como una organización. También puede generar el riesgo de una organización sin sus controles.

## La profesión no desaparece: cambia de nivel

No sabemos con precisión qué capacidades tendrán los agentes dentro de seis meses. Los horizontes de tareas que pueden completar continúan creciendo y algunas evaluaciones ya muestran ejecuciones de software de varios días o semanas en entornos controlados.

Eso justifica revisar cualquier supuesto sobre qué tareas permanecerán exclusivamente humanas. No justifica concluir que desaparecen el contexto, la responsabilidad o el riesgo.

La ingeniería de software puede necesitar menos esfuerzo para transformar una decisión en código. Necesitará más criterio para formular decisiones, diseñar sistemas de control y validar resultados producidos a una velocidad mucho mayor.

La IA no acaba con la ingeniería. Acaba con la idea de que escribir cada línea manualmente era lo que definía a un ingeniero.

Y tal vez eso sea saludable. Nos obliga a recordar que el verdadero trabajo nunca fue producir código.

Fue construir sistemas que valiera la pena tener y en los que pudiéramos confiar.

## Referencias

- DORA, [*State of AI-assisted Software Development 2025*](https://dora.dev/research/2025/dora-report/).
- METR, [investigación sobre capacidades autónomas y horizontes de tareas](https://metr.org/research/).
- Anthropic, [*Economic Index: New building blocks for understanding AI use*](https://www.anthropic.com/news/economic-index-primitives), 2026.

---

Este texto nació a partir de un guion que preparé para experimentar con contenido audiovisual asistido por inteligencia artificial. Podés [ver el video original en YouTube](https://youtu.be/MgD4DMorALY).
