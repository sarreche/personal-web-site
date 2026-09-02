---
title: "El ciclo de vida de un coding agent, explicado en 6 etapas"
description: "Corregir un error es solo una parte del trabajo. Un ejemplo de inicio de sesión recorre permisos, contexto, ejecución, revisión, producción y retiro de un agente."
publishedAt: "2026-09-02"
---

Le pedimos a un agente que corrija un error. Abre el repositorio, encuentra algunos archivos, modifica código y ejecuta pruebas. Un rato después vuelve con un cambio preparado y un mensaje que dice que todo funciona.

Hasta ahí, la demostración es excelente.

Pero imaginemos que ese cambio va a entrar en una aplicación de la que depende gente de verdad. De pronto aparecen preguntas bastante menos vistosas: ¿qué credenciales utilizó? ¿Podía tocar producción? ¿Las pruebas cubrían el error original? ¿Quién revisa el resultado? ¿Y qué pasa con todos esos accesos cuando termina?

Esa parte casi nunca aparece en la demo. A mí me parece que ahí empieza buena parte del trabajo que nos toca aprender.

Nos entusiasmamos con la capacidad de los agentes para escribir software, y con razón. Pero producir un cambio y disponer de una forma confiable de producir cambios todos los días son problemas distintos.

## El prompt es una entrada, no el sistema completo

Un buen prompt ayuda muchísimo. Dar contexto, explicar restricciones y definir el resultado esperado puede cambiar por completo una ejecución. Lo que no puede hacer es compensar un entorno mal preparado.

Podés escribir una instrucción impecable y darle al agente permisos excesivos. Elegir un modelo extraordinario y alimentarlo con documentación vieja. Recibir código correcto y desplegarlo sin posibilidad de revertirlo. O terminar una tarea sin guardar ninguna evidencia útil para entender qué ocurrió.

La gestión del ciclo de vida consiste en ocuparse de ese recorrido completo: antes, durante y después de que el agente escriba código.

[Warp lo organiza en seis etapas](https://www.warp.dev/articles/ai-coding-agent-lifecycle-management): aprovisionamiento y alcance, entrada del trabajo, ejecución, revisión y verificación, entrega y monitoreo, e iteración o retiro. No es una ley universal ni hace falta adoptar su producto para usar la idea. Es una manera práctica de recordar que generar código ocupa solo una parte del proceso.

Para bajarlo a tierra, usemos un mismo caso: algunos usuarios no pueden iniciar sesión después de cambiar su contraseña. Queremos que un agente investigue el problema y prepare una corrección. No le estamos entregando permiso para rediseñar toda la autenticación.

## 1. Aprovisionamiento y alcance: darle un lugar y un límite

Antes de pedirle que trabaje, hay que decidir dónde lo hará y qué podrá tocar.

Para este caso podríamos preparar una copia aislada del repositorio, una rama de trabajo y datos de prueba. Si necesita registros para investigar, podemos proporcionarle los relevantes, sin secretos ni datos personales innecesarios. Nada de eso exige entregarle credenciales para modificar la base de producción.

La comodidad de dejar que el agente herede todo el entorno del desarrollador tiene un costo: termina teniendo acceso a sistemas que no necesita para la tarea. Y una instrucción que dice “no toques producción” no reemplaza un permiso que realmente se lo impida.

Prefiero pensar el acceso como algo que se concede para una tarea concreta, durante un tiempo concreto. También hay que prever cómo revocarlo si cancelamos la ejecución o si algo falla. No alcanza con confiar en que el agente recuerde limpiar cuando termine.

El resultado de esta etapa no es código. Es un entorno donde el margen de acción está definido y alguien sabe quién autorizó ese margen.

## 2. Entrada del trabajo: convertir un pedido en una tarea verificable

“Arreglá el login” parece una instrucción, pero deja casi todo sin resolver.

¿Falla siempre o solo después del cambio de contraseña? ¿Qué debería ocurrir con las sesiones anteriores? ¿En qué entorno podemos reproducirlo? ¿Hay una decisión de seguridad que no podemos alterar?

La tarea necesita una descripción del fallo, una forma de reproducirlo, el comportamiento esperado y límites claros. En nuestro ejemplo, el agente debería demostrar que el usuario puede entrar con la nueva contraseña y que la anterior ya no permite acceder. Si el producto tiene una política sobre sesiones existentes, esa política debe quedar explícita: no le corresponde al agente inventarla.

El pedido puede llegar por un ticket, un mensaje o una alerta. Lo importante es que esos canales no produzcan versiones incompatibles de la misma clase de trabajo. Una plantilla corta puede evitar que cada persona tenga que recordar desde cero qué información hace falta.

Y si falta un dato decisivo, la respuesta correcta puede ser una pregunta. Todavía no hay nada que ganar escribiendo más rápido una solución al problema equivocado.

## 3. Ejecución: trabajar, observar y saber detenerse

Ahora sí llega la parte que solemos mirar: el agente investiga, formula una hipótesis, modifica archivos y ejecuta pruebas. Observa lo que pasó y vuelve a intentar cuando hace falta.

En nuestro caso podría encontrar un problema de caché o de invalidación de sesiones. Es una hipótesis, no un diagnóstico que debamos dar por cierto porque suena razonable. Tiene que contrastarla con el error reproducible.

Durante esa búsqueda conviene poner límites de tiempo, costo y reintentos. Si el agente repite la misma acción sin avanzar, alguien necesita enterarse. Si descubre que resolver el fallo exige una migración o cambiar la política de autenticación, debe detenerse y pedir una decisión: el alcance inicial ya no alcanza.

También necesitamos saber con qué versión del repositorio, instrucciones, modelo y herramientas trabajó. Eso ayuda a comparar ejecuciones, aunque no garantiza que repetirlas produzca exactamente el mismo resultado.

No estoy hablando de almacenar un supuesto monólogo interno del modelo. Hablo de evidencia observable: herramientas utilizadas, archivos modificados, pruebas ejecutadas, fallos, duración y consumo. Los registros también deben cuidarse; guardar todo indiscriminadamente puede terminar copiando secretos donde antes no estaban.

Al terminar o cancelar la ejecución, se cierran sus recursos temporales y se revocan los accesos que ya no necesita. Esa limpieza no debería esperar a una futura revisión de la automatización.

## 4. Revisión y verificación: “terminé” no es una prueba

El agente dice que corrigió el error. Bien. Ahora hay que demostrarlo con algo más que su propio resumen.

Una verificación útil vuelve al problema de entrada: reproduce el fallo sobre la versión anterior y comprueba que el cambio lo resuelve sin debilitar las restricciones acordadas. También revisa los flujos cercanos que podrían haberse roto.

No basta con que una prueba nueva aparezca en verde. Hay que mirar qué está comprobando. Una corrección que permite entrar porque desactivó una validación puede parecer exitosa si el test solo pregunta si el acceso fue permitido.

Otro agente puede hacer una primera revisión, y una persona puede concentrarse en las decisiones sensibles. Pero poner un segundo modelo a mirar el cambio no garantiza independencia: puede compartir los mismos supuestos equivocados. Por eso importan los criterios fijados antes de implementar y las comprobaciones externas al relato del autor.

También miraría la mantenibilidad. Quizá el cambio funcione, pero agregue una excepción difícil de entender o duplique lógica que mañana tendremos que corregir en dos lugares. El costo no termina cuando el código compila.

## 5. Entrega y monitoreo: ver qué pasa cuando alguien lo usa

Superar la revisión permite considerar el despliegue. No demuestra que ya sepamos todo lo que ocurrirá en producción.

El cambio necesita pasar por el proceso de entrega del equipo, con una persona responsable y una forma definida de volver atrás. Según el sistema, revertir puede ser sencillo o requerir bastante preparación; no conviene descubrirlo durante un incidente.

Después toca observar. ¿Disminuyeron los fallos de acceso tras el cambio de contraseña? ¿Aumentó la latencia? ¿Aparecieron errores en otros flujos? ¿Los usuarios afectados realmente recuperaron la posibilidad de entrar?

Sin esa conexión entre el cambio y sus efectos, solo sabemos que el agente produjo un PR y que alguien lo integró. No sabemos si mejoró el producto.

Y si aparece un problema, el incidente debe volver al proceso como información para corregirlo. Ni el despliegue tiene que depender de la sesión del agente original ni la responsabilidad puede quedar suspendida porque esa sesión ya terminó.

## 6. Iteración o retiro: decidir si seguimos trabajando así

Una vez resuelto el caso, queda otra pregunta: ¿esta forma de trabajar merece repetirse?

Tal vez sí, pero con mejores instrucciones. Tal vez el modelo elegido fue demasiado costoso para una tarea rutinaria. O quizá la automatización generó tanto retrabajo que no tiene sentido mantenerla.

La evaluación necesita algo más que contar tickets cerrados. Importan los cambios aceptados, los defectos posteriores, el costo por resultado útil y el tiempo humano dedicado a revisar. Una ejecución barata puede volverse cara si obliga a otra persona a reconstruir lo que hizo durante toda la tarde.

Las mejoras deberían quedar versionadas y probarse antes de extenderlas. Y cuando una automatización deja de aportar valor, retirarla también es trabajo: desactivar sus disparadores, quitar permisos persistentes y dejar claro qué parte del historial se conserva y quién queda a cargo.

La limpieza al cerrar una ejecución y el retiro de una automatización son cosas distintas. Necesitamos ambas. Si no, terminamos acumulando agentes que nadie recuerda haber creado, pero que todavía pueden actuar.

La deuda técnica no desaparece porque la produzca una IA. Podemos sumarle, además, deuda de agentes.

## Esto se parece bastante a ingeniería

Si todo esto te suena conocido, es porque muchas piezas ya existían. Permisos mínimos, pruebas, auditoría, observabilidad, control de versiones y respuesta ante incidentes no nacieron con los modelos de lenguaje.

[IBM presenta esta gestión](https://www.ibm.com/think/topics/agent-lifecycle-management) como una extensión de prácticas de desarrollo, seguridad y operaciones de IA. La diferencia está en aplicarlas a sistemas que pueden elegir herramientas y caminos distintos durante una misma clase de tarea.

También aparecen plataformas para coordinar ese trabajo. [UiPath presentó Maestro Flow](https://www.uipath.com/newsroom/uipath-launches-maestro-flow) para construir y operar procesos con agentes, personas y otros sistemas. Al momento de escribir, su [documentación de Maestro Flows](https://docs.uipath.com/coding-agents/standalone/latest/user-guide/build-maestro-flows) todavía lo identifica como *preview*. Lo tomo como una señal del problema que la industria intenta resolver, no como una garantía de que comprar una plataforma lo resuelva por nosotros.

A esta capa de operación suele llamársela **AgentOps**. El nombre importa menos que la práctica. No necesitamos montar una estructura enorme para empezar, ni pedirle a un comité que apruebe una corrección ortográfica. Los controles deberían acompañar el riesgo: nuestro ejemplo de autenticación merece más atención que un cambio de documentación.

Con varios agentes aparece, además, la coordinación entre ellos. Quién asigna tareas, quién puede cambiar prioridades, qué pasa cuando discrepan y cuándo debe intervenir una persona. Un conjunto de agentes trabajando rápido no se convierte automáticamente en un equipo funcionando bien.

## El resultado que vale la pena medir

Lo que me interesa de este enfoque es que cambia la pregunta. En lugar de mirar solamente cuánto código produjo el agente, nos obliga a mirar qué mejoró gracias a ese código y cuánto trabajo nos costó conseguirlo.

En el ejemplo, el resultado no es un diff prolijo ni una ejecución exitosa. Es que las personas vuelvan a iniciar sesión, sin introducir una vulnerabilidad, sin dejar accesos abiertos y sin convertir un arreglo pequeño en una carga permanente de mantenimiento.

Por eso creo que una parte importante del futuro de la programación estará acá. Seguiremos construyendo software, pero también tendremos que operar los sistemas que lo construyen.

El modelo y el prompt importan. Lo que los vuelve utilizables en el trabajo cotidiano es todo ese recorrido menos vistoso: preparar, acotar, verificar, observar y saber cuándo dejar de ejecutar.

Un agente que escribe código impresiona en una demostración. Un proceso que nos permite confiar razonablemente en sus resultados es lo que necesitamos al día siguiente.

## Referencias

- Warp, [*AI Coding Agent Lifecycle Management*](https://www.warp.dev/articles/ai-coding-agent-lifecycle-management).
- IBM, [*What Is Agent Lifecycle Management?*](https://www.ibm.com/think/topics/agent-lifecycle-management).
- UiPath, [*UiPath Introduces UiPath Maestro Flow*](https://www.uipath.com/newsroom/uipath-launches-maestro-flow).
- UiPath Docs, [*Maestro Flows (Preview)*](https://docs.uipath.com/coding-agents/standalone/latest/user-guide/build-maestro-flows).

---

Este artículo adapta un guion que preparé para **El Rincón de Sarreche**, donde conversamos sobre inteligencia artificial, software y cómo está cambiando el trabajo. Podés [ver el video original en YouTube](https://youtu.be/qpJzAHKA7UY).
