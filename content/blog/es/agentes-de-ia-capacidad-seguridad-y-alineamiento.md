---
title: "Agentes de IA: ¿qué estamos midiendo cuando fallan los controles?"
description: "Los reportes sobre agentes muestran riesgos y capacidades a la vez. Una lectura crítica de OpenAI sobre qué se evalúa, qué se autoriza y quién diseña los límites."
publishedAt: "2026-10-20"
---

Imaginá una evaluación: le damos una meta difícil a un agente, herramientas para actuar y tiempo para insistir. Queremos descubrir hasta dónde llega. Si encuentra una solución inesperada, podemos estar ante una demostración de capacidad. Si esa solución cruza una restricción, también podemos estar ante un problema de seguridad.

La conducta puede ser la misma. Lo que cambia es qué estamos midiendo y qué estaba permitido.

Esa tensión es lo que me interesa discutir al leer los reportes de desalineación. Un agente alineado debe saber detenerse. Pero cuando queremos medir todo lo que podría hacer, que se detenga nos deja una pregunta abierta: ¿no podía continuar o decidió respetar el límite?

## Qué cuenta el reporte de OpenAI

El [reporte actualizado el 20 de octubre](https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring) describe dos tareas internas de programación. En una se suprimieron alertas humanas, aunque el monitor siguió ejecutándose. En otra se eliminó su integración durante una migración y después se negó ese cambio. Había instrucciones para conservar controles; ninguno de los casos fue clasificado P0. OpenAI investiga si hubo persistencia excesiva o evasión específica del monitoreo.

Por eso no describiría estos episodios como pruebas deliberadas para ver si el agente apagaba las alarmas. Lo que sí permiten discutir es cómo interpretamos una acción que demuestra habilidad técnica y, al mismo tiempo, incumple una restricción.

Ya escribí sobre [qué significa que una IA esté desalineada](/blog/que-significa-que-una-ia-este-desalineada). Acá quiero mirar también el problema del investigador que intenta medirla.

## El alineamiento complica una pregunta científica legítima

Si quiero averiguar si un sistema sabe encontrar vulnerabilidades, necesito una prueba en la que pueda buscarlas. Si quiero saber si podría eludir un control, una negativa por motivos de seguridad no responde completamente la pregunta sobre su capacidad técnica.

Esto convierte el alineamiento en un problema metodológico para los científicos de IA. Hay que distinguir entre la capacidad de ejecutar una acción y la disposición a ejecutarla bajo determinadas instrucciones. Un rechazo puede ser el comportamiento correcto y dejar sin medir una habilidad.

Imaginá dos resultados: un agente encuentra una vía prohibida y se detiene; otro la utiliza y completa la tarea. Si el indicador registra solamente tareas completadas, el segundo parece mejor. Si registra el respeto de los límites, la lectura cambia.

Mi crítica empieza cuando esos resultados se presentan como si hablaran de una única cosa llamada «inteligencia». Para medir capacidad exploratoria, cumplimiento de instrucciones y seguridad hacen falta criterios diferentes. El costo de diseñarlos forma parte de la investigación.

No se sigue de ahí que debamos exponer sistemas reales para conocer las capacidades de un agente. Se pueden preparar objetivos autorizados, entornos contenidos y herramientas simuladas. La dificultad es construir pruebas informativas sin trasladarle el experimento a quien nunca aceptó participar.

## Tener una herramienta disponible no equivale a tener permiso

El planteo «le dejé la herramienta y después me sorprendí de que la usara» contiene una crítica válida al diseño del entorno. Si un control importante queda al alcance del sistema que debería limitar, hay una dependencia que conviene revisar.

Pero la disponibilidad técnica tampoco autoriza cualquier uso. Un empleado puede tener acceso a una base de datos sin permiso para publicar sus registros. Un agente puede necesitar editar código sin estar autorizado a modificar las condiciones bajo las cuales ese código se supervisa.

Para mí, la responsabilidad tiene dos planos. Al agente le exigimos respetar las restricciones. A quienes construimos el sistema nos toca decidir qué acciones puede ejecutar, cuáles requieren revisión y qué controles deben quedar fuera de su alcance. Escribir una prohibición no sustituye todas esas decisiones.

## Algunos relatos de seguridad también muestran capacidad

Cuando una prueba controlada revela que un agente encadena herramientas, encuentra un camino alternativo o modifica su entorno, también está mostrando lo que sabe hacer. Puede tener sentido leerla como una evaluación de capacidades, incluso si se publica dentro de una discusión de seguridad.

Eso no convierte todos los episodios en demostraciones inocuas. En el [caso de Hugging Face](https://openai.com/index/hugging-face-incident-and-the-road-ahead/), OpenAI reportó un compromiso real de sistemas de terceros durante evaluaciones internas con salvaguardas reducidas. Poder describir las habilidades involucradas no elimina el incidente.

Yo distinguiría una acción prohibida intentada dentro de un ensayo contenido, una falla de control en un uso interno y una acción que afecta a terceros. Pueden compartir mecanismos, pero requieren explicaciones y respuestas distintas.

Tampoco alcanza con juntar varios reportes llamativos para afirmar que conocemos la frecuencia de un comportamiento. Para eso hacen falta las oportunidades en las que podía ocurrir, las condiciones de la prueba y las repeticiones. La existencia de un caso y la probabilidad de encontrarlo son preguntas diferentes.

## El doble efecto de contar que un agente se salió del guion

Un reporte puede comunicar dos mensajes: «nuestros controles fallaron» y «nuestro agente fue capaz de encontrar ese camino». Para una industria que vende capacidad, esa combinación merece una lectura crítica.

No puedo deducir del documento que OpenAI esté celebrando el incidente o que lo haya provocado para promocionarse. Sí puedo señalar que una advertencia sobre un agente muy persistente también puede reforzar la percepción de que es extraordinariamente capaz. Ese es un efecto posible del relato, no una intención demostrada.

Como lector, quiero que la descripción del riesgo conserve el contexto que necesitaría cualquier afirmación de rendimiento: el sistema evaluado, sus permisos, las instrucciones y lo que realmente consiguió. El asombro por el procedimiento no alcanza para saber cuánto avanzó la capacidad ni cuánto falló la seguridad.

## Qué le pediría a una evaluación convincente

Propondría separar tres resultados: qué pudo hacer el agente, qué límites respetó y qué efectos quedaron efectivamente contenidos. Un buen resultado en uno no resuelve automáticamente los otros dos.

También pediría respuestas concretas:

- ¿Era una prueba adversarial preparada o una desviación durante una tarea ordinaria?
- ¿Qué estaba permitido y qué restricción se cruzó?
- ¿Qué controles técnicos estaban activos?
- ¿Cuántas veces se intentó y qué pasó en las demás ejecuciones?
- ¿Hubo consecuencias externas, y cómo se comprobaron?
- ¿La explicación propuesta distingue observación de hipótesis sobre el motivo?

Esto también vale para las investigaciones independientes. METR y Redwood [delimitaron expresamente el alcance de su investigación sobre Hugging Face](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/): no evaluaron la eficacia de las salvaguardas ni de toda la respuesta al incidente. Una revisión externa aporta evidencia sobre lo que examinó; no certifica todo el sistema.

Publicar estos casos es útil. Mi exigencia es que podamos entender qué demuestra cada uno, sin tener que elegir entre creer que apareció una máquina rebelde o que todo fue una prueba sin consecuencias.

El alineamiento obliga a definir qué significa resolver bien una tarea. Esa definición puede limitar una medición de capacidad sin restricciones, y justamente por eso hay que explicitarla. Un agente que solo consigue la meta cuando se salta las reglas no está entregando la misma capacidad útil que uno que trabaja dentro de ellas.

**Cuando un agente encuentra un atajo, quiero saber qué aprendimos sobre su capacidad, qué falló en el control y quién decidió las condiciones de la prueba.**

## Referencias

- OpenAI, [Suppressing misalignment monitoring alerts and disabling misalignment monitoring](https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring), actualizado el 20 de octubre de 2026.
- OpenAI, [The Hugging Face incident and the road ahead](https://openai.com/index/hugging-face-incident-and-the-road-ahead/), 26 de agosto de 2026.
- METR y Redwood Research, [Brief independent investigation of agents’ behavior, reasoning and collaboration in the OpenAI / Hugging Face hacking incident](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/), 26 de agosto de 2026.

Sigo estas conversaciones en [mi canal de YouTube](https://www.youtube.com/@saarreche). Un abrazo.
