---
title: "¿Cuánto cuesta de verdad poner IA en un proceso?"
description: "La factura del modelo muestra una parte del costo. Revisar resultados, integrar sistemas, resolver errores y acompañar a las personas también entra en la cuenta."
publishedAt: "2026-10-22"
---

Imaginá esta situación: una empresa prueba IA para preparar respuestas a consultas de clientes. La factura de la API es mínima. La demostración funciona y parece que la cuenta ya está hecha.

Después hay que conectar los datos, mantenerlos actualizados, revisar las respuestas y resolver qué pasa cuando el sistema promete algo que la empresa no puede cumplir. La persona que antes contestaba ahora verifica. El equipo técnico recibe una integración más para mantener.

Es un ejemplo hipotético, pero sirve para plantear la pregunta que me interesa: ¿cuánto cuesta que ese proceso funcione bien con IA adentro?

El precio del modelo importa. Para decidir una implementación, también necesitamos mirar el trabajo que queda alrededor.

## La parte visible del iceberg

El 19 de octubre, MiniMax presentó M3.1 Flash. Su [página de precios](https://platform.minimax.io/docs/pricing/overview) lista USD 0,15 por millón de tokens de entrada y USD 0,60 por millón de salida. En el [anuncio](https://www.minimax.io/blog/minimax-m31f), la empresa afirma una reducción del 70 % en costos de uso. Es una cifra del proveedor, no una estimación del ahorro que tendría cualquier negocio.

Esos precios amplían lo que vale la pena probar. Pero una tarifa por millón de tokens deja preguntas abiertas: cuántos consume cada tarea completa, cuántas veces se reintenta y cuánta revisión necesita el resultado.

Un agente puede hacer varias llamadas para completar una solicitud. Dos modelos también pueden usar cantidades diferentes de tokens para resolverla. Comparar la tarifa es un comienzo; después hay que medir el recorrido completo.

Elegiría una unidad más cercana al negocio: una consulta correctamente resuelta, una factura procesada o un caso terminado con la calidad acordada.

## Lo que queda debajo del agua

Para hacer esa cuenta, separaría al menos cinco costos:

- **Integración:** conectar sistemas, ordenar datos y definir permisos.
- **Supervisión:** comprobar resultados y atender los casos que necesitan una persona.
- **Errores:** corregir trabajo y reparar sus consecuencias.
- **Mantenimiento:** adaptar la solución cuando cambian modelos, interfaces, precios o requisitos.
- **Personas:** aprender una herramienta, cambiar responsabilidades y acordar cómo se trabaja.

El peso de cada uno depende del proceso. En algunos, el consumo de la API puede ser importante. En otros, unos minutos de revisión por caso pueden superar ampliamente la factura del modelo.

También hay que distinguir la inversión inicial del costo recurrente. Preparar una integración una vez y revisar cada respuesta todos los días afectan la cuenta de maneras distintas.

La forma anterior de trabajar tiene sus propios costos y errores. La comparación necesita incluirlos para saber si la nueva solución mejora algo.

Un cálculo hipotético: mil casos al mes, USD 10 de API y dos minutos de revisión por caso. Son 33 horas y 20 minutos de trabajo. Si valoramos esa hora en USD 30, la revisión suma USD 1.000. Ya tenemos USD 1,01 por caso entre API y revisión, antes de integrar, mantener o corregir errores. Es una valoración del tiempo usado, no necesariamente un gasto salarial adicional. Para saber si conviene, falta compararlo con el costo y la calidad del proceso anterior.

## Un benchmark no te presupuesta la revisión

El caso MiniMax invita a preguntar qué relación hay entre precio y confiabilidad. Una tarifa baja, por sí sola, no permite deducir cuánta supervisión va a requerir un modelo. Tampoco una posición en un ranking responde eso para tu proceso.

Hay que leer incluso las métricas con cuidado. En [AA-Omniscience, de Artificial Analysis](https://artificialanalysis.ai/evaluations/omniscience?LanguageId=1), la tasa de alucinación se calcula sobre las respuestas no correctas, incluyendo en ese conjunto las parciales y las preguntas no intentadas. No equivale al porcentaje de errores sobre todas las preguntas.

Y ese benchmark evalúa conocimiento y confiabilidad bajo sus propias condiciones. No reemplaza una prueba con tus documentos, tus consultas y tus consecuencias de error.

Para elegir, propondría usar los mismos casos con cada alternativa, definir qué cuenta como resultado aceptable y registrar tiempo de revisión, correcciones y reintentos. Si un modelo más barato exige más trabajo humano, ese trabajo entra en su costo. Si alcanza la calidad necesaria con menos gasto, el ahorro es valioso.

La prueba debe permitir descubrir cualquiera de los dos resultados.

## El proveedor también forma parte de la cuenta

El 21 de octubre, OpenAI [anunció la expansión de los anuncios en ChatGPT a 26 países adicionales](https://openai.com/es-ES/index/chatgpt-ads-expands-26-new-countries/). Según la empresa, la publicidad ayuda a financiar el acceso gratuito y de bajo costo, y los anuncios aparecen en Gratis y Go.

Eso habla de cómo se financia un producto. No es un cargo de API ni demuestra que una respuesta tenga peor calidad. Sí recuerda que conviene entender las condiciones del servicio que elegimos para trabajar.

Hay otro costo relacionado con esa dependencia. Una [encuesta encargada por Origina y realizada por Censuswide](https://www.origina.com/press-releases/software-tax-research-enterprise-spending?hs_amp=true) recoge un promedio del 28 % del presupuesto de software destinado a actualizaciones, migraciones y cambios de licencias que las organizaciones no habrían elegido activamente.

La muestra incluye 2.018 responsables de TI de grandes organizaciones de Estados Unidos y Reino Unido. Origina vende mantenimiento independiente. La cifra merece esa atribución: no representa a todas las empresas ni mide específicamente proyectos de IA.

La pregunta que trasladaría a una implementación es concreta: si el proveedor cambia algo, ¿cuánto trabajo nos cuesta adaptarnos o salir?

## Elegir qué pagar también se aprende

Vengo aprendiendo a usar estas herramientas sin gastar a lo loco. Parte de ese aprendizaje es entender qué modelo usar en cada caso y administrar las suscripciones.

En [Lo que aprendí trabajando con los modelos de OpenAI](/blog/lo-que-aprendi-trabajando-con-los-modelos-de-openai) conté cómo empecé a relacionar la elección del modelo con la dificultad, la ambigüedad y el costo de equivocarse. Esa idea me sigue pareciendo más útil que buscar uno para todo.

Para un proceso de empresa, la extendería: revisar qué capacidad necesita cada etapa, qué controles requiere y qué acceso conviene contratar. Pagar por capacidad que usamos puede tener sentido. Mantener suscripciones por inercia también merece una revisión.

Cambiar la herramienta afecta a quienes trabajan con ella. Hay que acordar quién revisa, quién resuelve una excepción y quién puede frenar el proceso. Si dejamos ese esfuerzo afuera, el presupuesto queda incompleto.

## Hacer la cuenta antes de escalar

Empezaría con un proceso acotado y una referencia de cómo funciona hoy: costo, tiempo y calidad. Después mediría la alternativa con IA, incluyendo integración, operación y excepciones.

El tiempo ahorrado también necesita una interpretación: liberar horas puede permitir atender más casos o trabajar mejor, aunque no reduzca automáticamente el gasto en sueldos.

Con eso sobre la mesa podemos decidir qué automatizar, qué mantener bajo revisión y qué todavía no conviene cambiar.

**La cuenta que quiero hacer es cuánto cuesta que el proceso funcione bien con el modelo adentro.**

Si estás por meter IA en un proceso y querés hacer la cuenta completa, contámelo. Sigo estas conversaciones en [mi canal de YouTube](https://www.youtube.com/@saarreche).

Un abrazo.

## Referencias

- [MiniMax: anuncio de M3.1 Flash](https://www.minimax.io/blog/minimax-m31f) y [precios de API](https://platform.minimax.io/docs/pricing/overview), consultados el 22/10/2026.
- [Artificial Analysis: metodología y métricas de AA-Omniscience](https://artificialanalysis.ai/evaluations/omniscience?LanguageId=1).
- [OpenAI: expansión de anuncios en ChatGPT, 21/10/2026](https://openai.com/es-ES/index/chatgpt-ads-expands-26-new-countries/).
- [Origina: resultados y metodología de la encuesta sobre costos de cambios de software, 20/10/2026](https://www.origina.com/press-releases/software-tax-research-enterprise-spending?hs_amp=true).
