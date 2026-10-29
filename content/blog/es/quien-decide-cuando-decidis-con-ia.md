---
title: "¿Quién decide cuando decidís con IA?"
description: "Un estudio con analistas profesionales muestra cómo los argumentos de un agente pueden orientar decisiones de criterio, incluso entre alternativas defendibles."
publishedAt: "2026-10-29"
---

Imaginá que terminás un análisis con ayuda de un agente. Revisás los cálculos, elegís una recomendación y escribís por qué te parece razonable. Al volver al chat, descubrís que varias de tus razones aparecieron primero ahí.

Eso no invalida la decisión. Aprendemos de argumentos ajenos todo el tiempo. Pero deja una pregunta: ¿adoptaste esas razones después de compararlas con otras, o la conversación fue definiendo qué opciones llegaste a considerar?

El estudio [How AI agents shape experts’ judgment calls](https://www.anthropic.com/research/agents-judgment-calls), publicado por Anthropic el 27 de octubre, permite mirar esa diferencia. Me interesa porque desplaza la discusión hacia decisiones que admiten más de una respuesta defendible.

Ahí, una cuenta correcta todavía puede dejar pendiente qué queremos medir, para quién y con qué criterio.

## Un experimento sobre decisiones de expertos

Los investigadores reclutaron a 61 analistas con experiencia en inferencia causal. Once eligieron trabajar sin el agente; el análisis principal se centró en los 50 que lo usaron. La tarea era asesorar a una cooperativa agrícola ficticia sobre la continuidad y expansión de un programa de asesoramiento.

Había cuatro decisiones analíticas abiertas: cómo medir productividad, qué método de comparación utilizar, a qué conjunto de productores referir la estimación y cómo ponderarlos. Después venía la recomendación final.

Para cada decisión, una asignación aleatoria determinaba hacia cuál opción se inclinaría el agente. Los participantes no conocían esa asignación. El agente recibía instrucciones de defender su postura con los argumentos honestos que permitieran los datos, sin engañar y revisándola si la evidencia lo exigía.

Ese diseño permite estudiar la influencia de una preferencia introducida experimentalmente. No presupone que una de las dos opciones sea la respuesta correcta.

## Qué significa ese 86 %

En las cuatro decisiones analíticas, las elecciones coincidieron con la inclinación del agente el 86 % de las veces. Sin influencia de esa inclinación sorteada, la coincidencia esperada sería del 50 %.

Ese 50 % viene del sorteo de la postura del agente. No supone que los expertos estuvieran respondiendo al azar. Y el 86 % mide coincidencia, no aciertos ni errores.

En 38 decisiones, el analista había expresado una postura antes de que el agente mostrara la suya. Cuando el agente discrepó, cambió de opción el 60 % de las veces; cuando coincidió, el 6 %. Es un subconjunto pequeño y seleccionado por la conducta de los participantes, así que esa comparación necesita más cautela que el resultado principal.

El efecto directo sobre la recomendación final fue menor y no alcanzó significación estadística bajo el estimador principal registrado. Conviene conservar esa diferencia: elegir cómo construir una estimación y decidir qué recomendar a partir de ella son momentos distintos.

## La elección empieza antes del resultado

Me parece especialmente interesante la pregunta por cómo medir productividad. Rendimiento por hectárea y rendimiento por unidad de costo operativo pueden responder preguntas diferentes. Elegir una medida exige explicar qué objetivo importa para esa decisión.

Pensá en un ejemplo hipotético fuera del estudio: una empresa compara dos maneras de atender clientes. Puede priorizar el tiempo promedio de respuesta o la proporción de consultas resueltas en el primer contacto. Las dos métricas aportan información, pero elegir una como objetivo principal orienta el trabajo.

Un agente puede hacer cálculos impecables con cualquiera. La decisión sobre qué queremos mejorar sigue necesitando una justificación ligada al problema y a las personas afectadas.

Por eso me interesa mirar las preguntas que preceden al cálculo. ¿Qué quedó definido como éxito? ¿Qué alternativa dejamos afuera? ¿Qué supuesto conecta el número con la recomendación?

Ahí puede entrar una influencia que una revisión dedicada solamente a buscar errores no llegue a examinar.

## Reconocer una decisión también tiene matices

En la encuesta posterior, 37 de 48 participantes, el 77 %, reutilizaron al menos un argumento de su agente. Solo el 15 % lo mencionó como fuente en alguna respuesta. El 52 % describió la recomendación como más propia que del agente; no fueron todos.

La confianza también fue parecida entre quienes habían seguido al agente en las cuatro decisiones y el resto. Eso no permite leer lo que pensaba cada participante ni concluir que nadie reconociera la influencia. Sí invita a distinguir la sensación de autoría de la historia de cómo se construyó una elección.

Puedo hacer mío un argumento que escuché de otra persona. Para mí, lo importante sería poder explicar qué lo vuelve convincente, bajo qué supuestos funciona y qué razones podrían llevarme a preferir otra opción.

La autoría de una decisión no exige inventar todos sus argumentos. Exige poder examinarlos y hacerse cargo de los criterios que terminamos adoptando.

## Qué podemos concluir hasta acá

El [paper completo](https://www-cdn.anthropic.com/519c17a5d23a794e8b6d50a854048d0b61e0d73a.pdf) estudia una tarea, un dominio y un agente, con una inclinación reforzada deliberadamente. Los participantes conocían inferencia causal, pero eran nuevos en el dominio agrícola. Las cifras no estiman cuánto influye cualquier IA en cualquier decisión cotidiana.

Tampoco permiten atribuir una cantidad precisa de influencia a cada persona. La asignación aleatoria identifica un efecto promedio; no se recogió sistemáticamente una postura inicial antes de la intervención. Algunos participantes la expresaron por iniciativa propia.

Cambiar de opinión frente a una buena razón puede mejorar una decisión. Mi lectura del resultado no sería que conviene resistir al agente por principio. Sería que necesitamos distinguir cuándo nos ayuda a explorar el problema y cuándo estamos aceptando una perspectiva sin haber formulado la nuestra.

El estudio tampoco prueba que las prácticas que propongo a continuación eliminen esa dificultad. Son maneras de hacer más visible la deliberación, cuyo valor habría que evaluar en cada contexto.

## Cuatro cosas que probaría antes de decidir

En [la nota sobre cuánto control tenemos al aprobar a un agente](/blog/cuanto-control-tenemos-cuando-aprobamos-a-un-agente) me concentré en las condiciones para supervisar. Acá agregaría atención al origen de los criterios:

1. **Anotar una postura provisional.** Antes de pedir una recomendación, escribiría qué objetivo importa, qué opción considero y qué todavía no sé. Si no tengo postura, también lo dejaría registrado.
2. **Pedir el mejor argumento para la alternativa.** Buscaría entender por qué una persona competente podría elegirla y qué supuestos está usando. Después comprobaría sus afirmaciones con evidencia externa.
3. **Preguntar qué quedó afuera.** Además de comparar las opciones ofrecidas, revisaría si falta una posibilidad o si necesitamos consultar a quienes sufrirán las consecuencias.
4. **Registrar por qué cambié de opinión.** Distinguiría un dato nuevo, un argumento del agente y un criterio propio o acordado con el equipo. Así podría reconstruir la decisión después.

No haría de cada elección pequeña una auditoría. Pondría ese esfuerzo donde distintas opciones defendibles cambian consecuencias importantes.

**Si voy a firmar la decisión, quiero poder explicar por qué elegí esa opción y qué me haría revisarla.** Esa explicación también es parte del trabajo que queda en nuestras manos cuando usamos IA.

Sigo estas conversaciones en [mi canal de YouTube](https://www.youtube.com/@saarreche). Un abrazo.

## Referencias

- [Anthropic: How AI agents shape experts’ judgment calls](https://www.anthropic.com/research/agents-judgment-calls), 27/10/2026.
- [Herdağdelen, Joren y Tamkin: Who’s Aligned to Whom? How AI Agents Shape Experts’ Research Judgment Calls](https://www-cdn.anthropic.com/519c17a5d23a794e8b6d50a854048d0b61e0d73a.pdf). Diseño, resultados y límites del experimento.
