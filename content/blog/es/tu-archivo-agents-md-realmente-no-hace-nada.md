---
title: "¿Tu archivo AGENTS.md realmente no hace nada?"
description: "La investigación no demuestra que AGENTS.md sea inútil: muestra que cargar más contexto no garantiza resolver más tareas y que su valor depende de qué instrucciones contiene."
publishedAt: "2026-08-30"
---

Hace unos días, Pivot to AI publicó una provocación difícil de ignorar: **“Your AGENTS.md file doesn’t actually do anything.”**

La frase toca un nervio real. Miles de proyectos están agregando archivos `AGENTS.md` para indicarles a los agentes de código cómo trabajar. Les contamos qué comandos ejecutar, qué arquitectura respetar, qué archivos no modificar y cómo preparar un pull request.

Pero ¿tenemos evidencia de que eso mejore el resultado? ¿O estamos escribiendo rituales para una herramienta que los ignora?

La respuesta corta es incómoda para ambos extremos:

**AGENTS.md sí hace algo, pero eso no significa que haga mejor al agente en todas las tareas.**

Para entender la diferencia, hay que separar cuatro preguntas que suelen mezclarse:

1. ¿El agente carga el archivo?
2. ¿Sigue sus instrucciones?
3. ¿Resuelve más tareas correctamente?
4. ¿Trabaja con menos tiempo y costo?

No son la misma pregunta y la evidencia ofrece respuestas distintas para cada una.

## Primero: qué es AGENTS.md

`AGENTS.md` es un archivo Markdown con instrucciones persistentes para agentes de programación. Funciona como una especie de README orientado a la máquina: puede describir comandos, convenciones, límites y expectativas específicas del repositorio.

No existe una estructura obligatoria. Su utilidad está en ofrecer un lugar predecible donde un agente compatible pueda encontrar contexto que no debería depender de que el usuario lo repita en cada conversación.

Según la documentación oficial de Codex, el agente lee estos archivos antes de comenzar el trabajo. Puede combinar instrucciones globales, las del repositorio y otras más específicas ubicadas en subdirectorios. Las reglas cercanas al archivo que se está modificando tienen mayor precedencia.

Por lo tanto, al menos en Codex, decir que el archivo “no hace nada” es literalmente incorrecto: entra en la cadena de instrucciones.

Pero cargar una instrucción no prueba que mejore una solución.

## El estudio que encendió la discusión

En 2026, investigadores publicaron *Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?* El trabajo comparó ejecuciones sin archivos de contexto, con archivos generados por modelos y con archivos escritos por desarrolladores.

El resultado central fue decepcionante para quienes esperaban una mejora automática: los archivos de contexto no aumentaron de forma significativa la tasa general de resolución de tareas.

Los archivos generados por IA tendieron a empeorar ligeramente el desempeño. Los escritos por desarrolladores fueron mejores que los generados y mostraron una mejora marginal frente a no incluir contexto, pero no una ventaja consistente que justificara la promesa de “instalar un archivo y volver más inteligente al agente”.

Además, los agentes exploraron más archivos, realizaron más pruebas y razonaron durante más tiempo. El costo aumentó más de un veinte por ciento en los experimentos analizados.

Sin embargo, el mismo estudio observó algo crucial: **los agentes sí tendían a respetar las instrucciones**.

El archivo no era invisible. Modificaba el comportamiento. Lo que no hacía era convertir de manera confiable ese cambio en más problemas resueltos.

## Obedecer no es resolver

Imaginemos que un `AGENTS.md` dice:

- Usá `npm run lint` antes de terminar.
- No agregues dependencias sin autorización.
- Los componentes compartidos viven en `/components`.
- No edites archivos generados.

Si el agente cumple esas reglas, el archivo funcionó como mecanismo de coordinación. Pero todavía puede implementar mal la funcionalidad.

Una guía de repositorio puede evitar que use el gestor de paquetes equivocado. No puede entregarle una capacidad de razonamiento que el modelo no tiene. Puede señalar dónde está una abstracción importante. No garantiza que el agente comprenda cómo extenderla. Puede exigir pruebas. No garantiza que esas pruebas cubran el error real.

Esa diferencia explica buena parte de la controversia. Medir únicamente si la solución pasó todos los tests finales puede ocultar beneficios operativos y de conformidad. Medir solamente si el agente obedeció una regla puede ocultar que el producto sigue estando mal.

Necesitamos ambas métricas.

## Otra investigación encontró menos tiempo y menos tokens

La evidencia tampoco apunta en una sola dirección.

Otro estudio, *On the Impact of AGENTS.md Files on the Efficiency of AI Coding Agents*, analizó diez repositorios y 124 pull requests mediante ejecuciones emparejadas con y sin `AGENTS.md`.

Encontró una reducción de 28,64 % en la mediana del tiempo de ejecución y de 16,58 % en los tokens de salida, manteniendo un comportamiento de finalización comparable.

Eso no demuestra que cualquier `AGENTS.md` vuelva eficiente a cualquier agente. El alcance del estudio es limitado y su variable principal era la eficiencia, no una mejora general de la corrección.

Pero sí contradice la idea de que estos archivos solamente consumen tokens. Dependiendo del contenido y de la tarea, una instrucción precisa puede evitar exploración inútil, comandos incorrectos y ciclos de prueba innecesarios.

## Un tercer resultado: la corrección sigue sin moverse

Un estudio posterior probó tres estrategias —sin contexto, contexto completo siempre cargado y recuperación selectiva— con Codex y Claude Code sobre tareas reales.

En 288 ejecuciones, la estrategia de contexto no produjo un cambio medible en la corrección. El análisis de fallos sugirió que los agentes fallaban principalmente por problemas de implementación: diseño de la funcionalidad, elección del patrón o conexión exacta de las piezas. El contexto adicional no aportaba la habilidad que faltaba.

El trabajo también encontró señales de proceso más pequeñas, como menos ejecuciones innecesarias de suites completas en ciertas condiciones.

De nuevo aparece la misma distinción: el archivo puede cambiar **cómo** trabaja el agente sin cambiar **si** logra resolver una tarea difícil.

## Entonces, ¿cuándo sirve?

AGENTS.md tiene más posibilidades de aportar valor cuando contiene información que cumple tres condiciones:

- Es específica del repositorio.
- No puede inferirse con facilidad leyendo el código.
- Cambia una decisión concreta durante la ejecución.

Por ejemplo:

- El comando exacto para probar solo el paquete afectado.
- Una carpeta generada que nunca debe editarse manualmente.
- Una restricción de seguridad que no aparece en los tipos.
- El límite entre dos módulos que parecen similares.
- La verificación obligatoria antes de abrir un pull request.
- Una decisión arquitectónica vigente que contradice el patrón más popular.

En esos casos el archivo funciona como una baranda. No conduce el automóvil ni mejora el motor, pero reduce la probabilidad de salir del camino conocido.

## Cuándo puede empeorar las cosas

Un `AGENTS.md` también puede convertirse en deuda de contexto.

Ocurre cuando incluye:

- Una descripción exhaustiva de archivos que el agente puede descubrir por sí mismo.
- Consejos genéricos como “escribí código limpio”.
- Reglas antiguas que ya no coinciden con el repositorio.
- Instrucciones contradictorias o sin prioridad clara.
- Decenas de comandos irrelevantes para la tarea actual.
- Texto generado automáticamente que nadie revisó.
- Exigencias que obligan a realizar trabajo sin mejorar la entrega.

Cada línea compite por atención dentro de un contexto finito. Más instrucciones no equivalen a más control. Pueden aumentar la exploración, crear objetivos secundarios y dificultar que el agente identifique lo importante.

La ironía es evidente: un archivo diseñado para orientar puede desorientar si intenta documentarlo todo.

## AGENTS.md no reemplaza controles reales

Hay otro error peligroso: tratar el archivo como una política ejecutable.

Una frase como “nunca publiques secretos” es útil, pero no sustituye un escáner de credenciales. “Ejecutá los tests” no reemplaza el CI. “No modifiques producción” no reemplaza permisos mínimos, aislamiento y aprobaciones.

Las instrucciones operan en el nivel probabilístico del modelo. Los controles técnicos operan en el nivel del sistema.

Si una regla es crítica, debe existir fuera del prompt:

- En permisos y sandboxes.
- En validaciones automáticas.
- En revisiones obligatorias.
- En límites de las herramientas.
- En políticas de despliegue.

AGENTS.md puede explicar el camino correcto. La infraestructura debe impedir los caminos inaceptables.

## Cómo saber si el tuyo funciona

No hace falta aceptar la promesa del proveedor ni la crítica del titular. Podemos probarlo.

Primero, hay que verificar que la herramienta realmente cargue el archivo. Codex permite pedir un resumen de las instrucciones activas y revisar su cadena de precedencia.

Después conviene elegir tareas representativas y compararlas con y sin el archivo:

- ¿Respeta mejor las convenciones?
- ¿Encuentra antes los comandos correctos?
- ¿Toca menos archivos innecesarios?
- ¿Ejecuta las verificaciones adecuadas?
- ¿Reduce correcciones durante la revisión?
- ¿Cambia el tiempo o los tokens?
- ¿Mejora el resultado final?

No todas las organizaciones necesitan un benchmark académico. Incluso una pequeña evaluación repetida puede revelar qué reglas aportan valor y cuáles solo añaden ruido.

La práctica más sensata es mantener el archivo corto, humano y vivo: agregar una instrucción porque corrige un fallo observado, y eliminarla cuando deja de ser necesaria.

## Mi conclusión

La frase “tu archivo AGENTS.md no hace nada” confunde ausencia de una mejora general en corrección con ausencia de efecto.

La investigación disponible muestra algo más matizado:

- Los agentes suelen cargar y seguir estas instrucciones.
- Eso no mejora consistentemente la resolución de tareas.
- Los archivos generados y extensos pueden aumentar costo y empeorar resultados.
- Las instrucciones humanas, breves y específicas pueden orientar el proceso.
- En algunos experimentos, el archivo redujo tiempo y tokens.
- Ningún archivo compensa una capacidad de implementación que el modelo no posee.

AGENTS.md no es un multiplicador mágico de inteligencia. Tampoco es un placebo sin efecto.

Es una interfaz de coordinación probabilística. Su valor no depende de que exista, sino de que contenga pocas decisiones realmente útiles y de que podamos comprobar su impacto.

Quizás la pregunta correcta no sea “¿AGENTS.md funciona?”.

La pregunta es:

**¿Qué información de tu repositorio cambia de verdad una decisión del agente, y cómo sabés que la está cambiando para mejor?**

## Referencias

- Pivot to AI, [*Your AGENTS.md file doesn’t actually do anything*](https://pivot-to-ai.com/2026/08/27/your-agents-md-file-doesnt-actually-do-anything/).
- OpenAI Docs, [*Custom instructions with AGENTS.md*](https://developers.openai.com/codex/guides/agents-md).
- Gloaguen et al., [*Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?*](https://arxiv.org/abs/2602.11988), 2026.
- Lulla et al., [*On the Impact of AGENTS.md Files on the Efficiency of AI Coding Agents*](https://arxiv.org/abs/2601.20404), 2026.
- Khatri, [*Do Context Files Help Coding Agents? A Two-Agent Ablation Study on Real Repositories*](https://arxiv.org/abs/2607.27250), 2026.
- Agentic AI Foundation, [sitio del formato abierto AGENTS.md](https://agents.md/).
