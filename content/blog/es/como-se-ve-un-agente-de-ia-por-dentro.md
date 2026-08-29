---
title: "Cómo se ve un agente de IA por dentro — explicado en serio"
description: "Modelo, herramientas, memoria, control, permisos y validación: las piezas que convierten un modelo de lenguaje en un sistema capaz de actuar."
publishedAt: "2026-08-17"
---

Hay quienes afirman que los agentes de inteligencia artificial van a transformar gran parte del trabajo de programación y muchas tareas administrativas en muy poco tiempo.

No sabemos si ocurrirá exactamente con la velocidad que prometen las predicciones más agresivas.

Lo que sí sabemos es que los agentes están ocupando el centro de la conversación sobre automatización. Cuando preparé el guion original de este contenido, en marzo de 2026, la tecnología empezaba a despegar con fuerza. Desde entonces, los sistemas capaces de sostener tareas largas, utilizar herramientas y operar sobre aplicaciones reales siguieron avanzando.

En medio de tanto *hype*, conviene hacer algo menos espectacular y más útil: abrir un agente por dentro para entender cómo funciona.

Porque un agente no es magia. Tampoco es simplemente un chatbot que “piensa más”.

Es un sistema diseñado para interpretar un objetivo, decidir pasos, ejecutar acciones, observar resultados y continuar hasta alcanzar una condición de salida.

## La diferencia entre responder y actuar

Un chatbot tradicional recibe un mensaje y produce una respuesta.

Un agente recibe un objetivo y controla parte del flujo necesario para cumplirlo. Puede decidir buscar información, leer un archivo, llamar una API, modificar un registro, ejecutar código o pedir confirmación antes de continuar.

Su ciclo básico se parece a esto:

```text
observar → decidir → actuar → observar el resultado → decidir otra vez
```

El agente repite el ciclo hasta que considera que terminó, encuentra un error, alcanza un límite o devuelve el control a una persona.

Esa capacidad de elegir y ejecutar pasos es lo que cambia la naturaleza del sistema.

## Un agente no es un modelo

El modelo de lenguaje es una pieza central, pero no es el agente completo.

Un modelo recibe contexto y genera una continuación: texto, una salida estructurada o la intención de llamar una herramienta. Por sí solo no tiene acceso automático al correo, al sistema de archivos, a una base de datos ni a internet. Tampoco conserva memoria permanente entre ejecuciones salvo que una aplicación se la proporcione.

El agente aparece cuando rodeamos al modelo con software que administra contexto, herramientas, estado, permisos, validaciones y condiciones de salida.

Podemos pensar al modelo como el motor. La arquitectura determina dónde puede ir el vehículo, qué controles tiene y qué ocurre cuando algo sale mal.

Estas son sus piezas principales.

## 1. Objetivo y condición de éxito

Todo agente necesita una tarea.

“Ayudame con clientes” es una intención demasiado abierta. “Clasificá los tickets nuevos, proponé una respuesta basada en la documentación aprobada y escalá los casos de facturación” define un trabajo observable.

Además del objetivo, hace falta una condición de finalización. El sistema debe saber cuándo produjo el resultado esperado, cuándo no puede continuar o cuándo agotó sus intentos.

Sin una salida explícita, un agente puede seguir iterando, repetir acciones o declarar éxito antes de tiempo.

## 2. El modelo

El modelo interpreta lenguaje, relaciona información y selecciona el próximo paso.

No ejecuta un plan fijo como un programa tradicional. Produce decisiones probabilísticas a partir del contexto disponible. Esa flexibilidad permite operar sobre solicitudes ambiguas y datos no estructurados, pero también introduce variabilidad y errores.

El modelo más grande no siempre es la mejor opción. Distintas etapas pueden utilizar modelos diferentes según costo, velocidad, capacidad de razonamiento o modalidad.

## 3. Instrucciones

Las instrucciones definen el rol, el proceso y los límites de comportamiento.

Pueden incluir:

- Qué objetivo debe perseguir.
- Qué pasos conviene seguir.
- Qué fuentes puede utilizar.
- Cómo tratar información incompleta.
- Qué acciones necesitan aprobación.
- En qué formato debe entregar el resultado.

Una instrucción vaga obliga al modelo a completar huecos. Una instrucción clara reduce decisiones accidentales, aunque nunca reemplaza controles reales en el software.

## 4. Contexto y percepción

El agente necesita observar su entorno.

El contexto puede contener el mensaje del usuario, historial reciente, archivos, resultados de búsquedas, estado de una aplicación o datos obtenidos mediante herramientas.

“Percibir” no significa experimentar el mundo como una persona. Significa convertir información externa en una representación que el modelo pueda procesar.

La ventana de contexto es limitada. Si incorporamos demasiado material irrelevante, aumentan el costo y la posibilidad de que el modelo pierda señales importantes.

## 5. Control de flujo y bucle de ejecución

Una capa de orquestación administra el ciclo del agente.

Envía el contexto al modelo, interpreta su salida, ejecuta la herramienta seleccionada, incorpora el resultado y vuelve a consultar al modelo.

También impone condiciones deterministas:

- Cantidad máxima de pasos.
- Tiempo máximo de ejecución.
- Presupuesto de tokens o dinero.
- Reglas de reintento.
- Tratamiento de errores.
- Condiciones para devolver una respuesta final.

El comportamiento adaptable vive dentro de un contenedor de software tradicional.

## 6. Planificación y razonamiento delimitado

Frente a una tarea compleja, el agente puede descomponerla en subtareas, elegir un orden y revisar el plan a medida que recibe nueva información.

No necesitamos asumir que el sistema “piensa” como una persona. Operativamente, genera representaciones intermedias que ayudan a seleccionar acciones coherentes.

La planificación debe estar delimitada. Un agente confiable no explora indefinidamente: trabaja dentro de un presupuesto y sabe cuándo necesita pedir ayuda.

## 7. Herramientas

Las herramientas permiten que el agente haga algo más que generar texto.

Pueden ofrecer capacidades de lectura:

- Buscar en la web.
- Consultar una base de datos.
- Leer documentos.
- Inspeccionar métricas.

O capacidades de acción:

- Enviar un mensaje.
- Crear una incidencia.
- Modificar un archivo.
- Ejecutar código.
- Actualizar un sistema comercial.

Cada herramienta necesita un contrato claro: nombre, propósito, parámetros, tipos de respuesta y errores posibles. Un modelo solo puede utilizar bien una capacidad que el sistema le describa de forma comprensible.

## 8. Recuperación de conocimiento

El modelo no debería responder todo desde sus parámetros.

Un mecanismo de recuperación encuentra información relevante en documentación, bases de conocimiento o fuentes externas y la incorpora al contexto justo cuando hace falta.

Esto reduce dependencia de conocimiento desactualizado y permite citar políticas o datos propios de la organización.

La recuperación también puede fallar: traer un documento irrelevante, omitir el correcto o incorporar contenido malicioso. Por eso recuperar información no equivale a validar que sea verdadera o segura.

## 9. Estado y memoria

El estado registra qué ocurrió durante la ejecución: pasos completados, resultados, errores, decisiones y datos pendientes.

La memoria puede conservar información más allá de una única ejecución, como preferencias del usuario, resúmenes de interacciones o hechos aprobados.

Conviene distinguir memoria de historial. Guardar todo para siempre no produce necesariamente un agente mejor. Puede aumentar costo, confusión y riesgo de privacidad.

Una memoria confiable necesita reglas sobre qué se guarda, durante cuánto tiempo, de dónde proviene y cómo puede corregirse o eliminarse.

## 10. Orquestación entre agentes

No toda solución necesita varios agentes.

Un único agente con buenas herramientas suele ser más fácil de entender, evaluar y mantener. Cuando las responsabilidades son realmente diferentes, puede utilizarse un agente coordinador que delega en especialistas o un sistema de transferencias entre agentes.

La multiplicación de agentes agrega costos de comunicación, pérdida de contexto y nuevas formas de fallo. Una arquitectura más teatral no es necesariamente más inteligente.

La complejidad debe aparecer porque el problema la exige, no porque la palabra “multiagente” suena avanzada.

## 11. Políticas, permisos y confirmación humana

Un agente capaz de actuar necesita límites que no dependan solamente de que el modelo recuerde una instrucción.

Las políticas determinan qué herramientas puede usar, sobre qué recursos, con qué credenciales y bajo qué condiciones.

Una acción de lectura no tiene el mismo riesgo que enviar un correo, eliminar datos o realizar un pago. Los permisos deben aplicar el principio de mínimo privilegio y diferenciar acciones reversibles de irreversibles.

Las operaciones sensibles pueden exigir confirmación humana. Ese punto de control no es una falla de autonomía: es el mecanismo que evita que una interpretación probable se convierta directamente en una consecuencia real.

## 12. Validación, observabilidad y monitoreo

La validación verifica que las entradas, llamadas de herramientas y resultados cumplan condiciones explícitas.

Puede incluir:

- Validación de esquemas y tipos.
- Reglas deterministas de negocio.
- Comprobación de consistencia.
- Revisión por otro modelo o proceso.
- Pruebas antes de aplicar un cambio.
- Registro de llamadas, permisos y resultados.

La observabilidad permite reconstruir qué hizo el agente y por qué llegó a determinado estado. Sin trazas, métricas y logs, un fallo complejo se convierte en una anécdota imposible de reproducir.

El monitoreo continúa después del despliegue. Los modelos cambian, las herramientas evolucionan y los usuarios descubren entradas que el diseño original nunca anticipó.

## Qué puede salir mal

La inteligencia aparente surge de la coordinación de todos estos componentes. Sus fallos también.

Un agente puede:

- Interpretar mal el objetivo.
- Elegir una herramienta incorrecta.
- Utilizar datos desactualizados.
- Entrar en un ciclo de reintentos.
- Confiar en contenido externo manipulado.
- Ejecutar una acción válida en el contexto equivocado.
- Producir una respuesta convincente pero falsa.

Mejorar únicamente el modelo no elimina estas fallas. Muchas pertenecen a la arquitectura, los permisos, los datos o el proceso de validación.

## Cómo se construye confiabilidad

Un agente confiable no es el que nunca se equivoca. Es el que opera dentro de límites conocidos y falla de manera controlada.

Para eso necesita tareas acotadas, herramientas bien diseñadas, permisos mínimos, criterios verificables, presupuestos, trazabilidad y puntos de intervención humana.

También necesita evaluaciones realistas. No alcanza con probar el caso feliz. Hay que observar qué hace frente a información faltante, instrucciones contradictorias, herramientas caídas y solicitudes fuera de alcance.

La autonomía debe ganarse gradualmente a partir de evidencia.

## El modelo es el motor; la arquitectura crea el comportamiento

Un agente no es un modelo grande.

Es un sistema compuesto por:

- Objetivos y condiciones de salida.
- Un modelo que selecciona pasos.
- Instrucciones y contexto.
- Un bucle de control.
- Herramientas y recuperación de información.
- Estado y memoria.
- Políticas y permisos.
- Validación y monitoreo continuo.

El modelo aporta capacidad. La arquitectura convierte esa capacidad en un comportamiento útil, observable y suficientemente seguro.

Cuando entendemos estas piezas, los agentes dejan de parecer magia. Y recién entonces podemos discutir con seriedad qué tareas deberían ejecutar, cuánta autonomía conviene darles y qué responsabilidad sigue siendo nuestra.

## Referencias

- OpenAI, [*A practical guide to building agents*](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/).
- Anthropic, [*Building Effective AI Agents*](https://www.anthropic.com/engineering/building-effective-agents).

---

Este texto nació a partir de un guion que preparé para explicar la arquitectura de agentes sin esconderla detrás de palabras mágicas. Podés [ver el video original en YouTube](https://youtu.be/7BFPEKN7FwQ).
