---
title: "¿Puedo pasar de cero a un sitio web publicado solo con ChatGPT y Codex?"
description: "Un experimento real para descubrir cuánto puede construir la IA, dónde falla y cuándo el usuario se convierte en director técnico del producto."
publishedAt: "2026-08-16"
---

Hay una idea que viene creciendo silenciosamente: quizás ya no necesitás saber programar para construir cosas en internet.

Con inteligencia artificial, buenos prompts y suficiente paciencia, cualquiera podría pasar de una idea a un producto funcionando.

Honestamente, no sabía si eso era verdad. Así que decidí ponerlo a prueba.

El objetivo era simple: crear y publicar mi sitio web personal usando ChatGPT y Codex.

No quería hacer un tutorial ni seguir una receta preparada. Quería realizar un experimento real y observar qué ocurría al tratar a la IA como si fuera mi equipo técnico.

La pregunta era:

> ¿Puede una persona pasar de una idea a un sitio funcional y publicado utilizando herramientas de IA conversacional?

La respuesta corta es **sí**.

La respuesta importante es que “sin programar” no significa “sin decidir, comprender ni hacerse responsable”.

## Las reglas del experimento

Para que la prueba tuviera sentido, definí algunas reglas.

### Todo lo técnico pasaría por la IA

Si necesitaba código, lo produciría Codex. Si algo se rompía, intentaría diagnosticarlo con la IA. Si no conocía un concepto o debía elegir un camino, usaría la conversación para entender las opciones.

No se trataba de apretar un botón dentro de un constructor de plantillas. La IA tendría que trabajar sobre un proyecto real: archivos, dependencias, configuración, pruebas, Git y despliegue.

### No seguiría tutoriales paso a paso

No abriría veinte pestañas para copiar fragmentos sin contexto. Las dudas se resolverían dentro del proceso y a partir del estado real del proyecto.

### El resultado visual no sería la única medida

Lo más interesante no era solamente si la página quedaba linda. Quería descubrir:

- Dónde la IA acelera de verdad.
- Dónde interpreta mal o inventa.
- Qué decisiones continúan siendo humanas.
- En qué momento dejás de “no programar” y empezás a dirigir software.

## El punto de partida no fue código

El primer trabajo consistió en explicar qué quería comunicar.

Un sitio personal no es una colección de componentes. Tiene una audiencia, una propuesta y un próximo paso. En mi caso debía presentar experiencia en arquitectura de software, inteligencia artificial y liderazgo técnico, mostrar servicios y permitir que una persona interesada iniciara una conversación.

ChatGPT resultó útil para convertir ideas dispersas en una estructura: propuesta principal, experiencia, servicios, proyectos, canal de YouTube, redes y contacto.

Esa etapa ya mostró la primera condición del experimento: la IA puede ayudarte a ordenar una intención, pero necesita que alguien reconozca si el resultado representa realmente quién es y qué quiere ofrecer.

Una respuesta coherente no siempre es una respuesta correcta para vos.

## De una conversación a una especificación

El siguiente paso fue transformar el deseo de “tener una web” en decisiones verificables.

El sitio debía ser:

- Bilingüe en español e inglés.
- Responsive y usable en dispositivos móviles.
- Accesible en sus interacciones básicas.
- Visualmente minimalista, moderno y humano.
- Fácil de mantener sin infraestructura innecesaria.
- Capaz de mostrar proyectos públicos de GitHub.
- Capaz de recibir consultas mediante un formulario.
- Publicable como una aplicación web real.

Definir estas condiciones cambió la calidad de la ejecución. La IA dejó de adivinar qué significaba “una buena web” y empezó a trabajar contra criterios concretos.

Este fue uno de los aprendizajes más importantes: un buen prompt ayuda, pero una especificación viva ayuda mucho más.

## El rol de ChatGPT y el rol de Codex

En el experimento, las herramientas cumplieron funciones diferentes.

ChatGPT fue el espacio para explorar ideas, aclarar objetivos, revisar mensajes y convertir intuiciones en requisitos.

Codex trabajó directamente sobre el proyecto. Pudo leer los archivos, comprender la estructura, crear componentes, editar contenido, instalar dependencias, ejecutar TypeScript y builds, revisar cambios, utilizar Git y preparar pull requests.

La diferencia es similar a conversar con alguien sobre una casa y trabajar con alguien dentro de la obra.

Según su documentación oficial, Codex es un agente de programación orientado a construir y entregar software. Pero tener acceso al repositorio no resuelve automáticamente qué producto conviene construir. El agente ejecuta con mucha más eficacia cuando el contexto, los límites y los criterios están claros.

## Qué terminó construyéndose

El resultado fue un sitio real basado en Next.js, React y TypeScript, con una arquitectura relativamente pequeña y sin una gran biblioteca visual.

La primera versión evolucionó mediante iteraciones revisables. El proyecto terminó incorporando:

- Página profesional bilingüe.
- Navegación adaptable a dispositivos móviles.
- Secciones de experiencia, servicios y forma de trabajo.
- Proyectos recientes cargados desde GitHub.
- Integración con YouTube y redes sociales.
- Formulario bilingüe con entrega de mensajes.
- Blog estático en Markdown con versiones en español e inglés.
- Metadatos SEO y sitemap.
- Validaciones de TypeScript, lint y build de producción.

El propio artículo que estás leyendo vive dentro de ese sistema. Eso convierte al sitio en evidencia del experimento y también en su siguiente iteración.

## Dónde la IA aceleró todo

La mayor ventaja no fue escribir una línea puntual con mayor velocidad. Fue reducir el costo de cambiar de nivel constantemente.

Podía pasar de una decisión de contenido a una modificación de interfaz, de ahí a un error de tipos y después a documentación o Git sin coordinar especialistas diferentes.

La IA fue especialmente útil para:

- Crear una primera versión completa sobre la cual reaccionar.
- Aplicar cambios repetitivos en varios idiomas o componentes.
- Encontrar archivos y comprender código existente.
- Detectar errores mediante herramientas reales.
- Mantener documentación y comportamiento alineados.
- Preparar cambios pequeños en ramas y pull requests.
- Recordar restricciones del proyecto mientras iterábamos.

El ciclo entre idea, ejecución y revisión se volvió mucho más corto.

## Dónde empezó a inventar o equivocarse

La IA puede completar vacíos con decisiones plausibles que nadie pidió.

Puede elegir una arquitectura demasiado compleja, asumir que existe una variable de entorno, inventar contenido, usar una API de manera desactualizada o producir una interfaz correcta técnicamente pero equivocada para la identidad del sitio.

También puede resolver el problema que describiste y no el problema que querías resolver.

Por eso el proceso no podía depender solamente de leer la respuesta y confiar. Necesitaba observar el código, ejecutar verificaciones, revisar el resultado y comparar cada cambio con el objetivo.

Las pruebas automáticas ayudan a detectar incoherencias técnicas. No pueden decidir si el mensaje te representa, si una sección sobra o si la experiencia transmite confianza.

## El momento en que te convertís en director técnico

Aunque la IA genere todo el código, alguien tiene que tomar decisiones:

- Qué problema se está resolviendo.
- Qué información puede utilizarse.
- Cuánto alcance es suficiente.
- Qué riesgos son aceptables.
- Cuándo una propuesta debe simplificarse.
- Qué resultado está listo para publicarse.

Ese rol se parece menos al de una persona que escribe cada línea y más al de un director técnico o responsable de producto.

No necesitás conocer de memoria la sintaxis para empezar. Pero cuanto más entendés sobre sistemas, seguridad, datos y calidad, mejor podés evaluar lo que la IA propone.

La barrera de entrada baja. La necesidad de criterio no desaparece.

## “Solo con IA” necesita una aclaración

El sitio no apareció en el vacío.

ChatGPT y Codex ayudaron a diseñar, implementar, verificar y gestionar el proyecto. Pero publicar también requirió infraestructura y decisiones externas:

- Una cuenta y un repositorio en GitHub.
- Un servicio de hosting y despliegue.
- Credenciales para servicios como el envío de correo.
- Un dominio o URL pública.
- Autorizaciones para subir código y fusionar cambios.

La IA pudo guiar y ejecutar gran parte del flujo. No creó por sí sola la identidad, las cuentas, los permisos ni la responsabilidad sobre lo publicado.

Por eso la formulación más honesta no es “la IA hizo todo”. Es “una persona pudo dirigir un equipo técnico de IA y llegar a producción sin escribir manualmente el código”.

## ¿Puede hacerlo alguien que no sabe programar?

Para un sitio de alcance acotado y bajo riesgo, cada vez es más posible.

Una persona puede describir lo que necesita, generar una implementación, verla, pedir cambios y publicar algo funcional sin dominar previamente un lenguaje de programación.

La dificultad aumenta cuando aparecen pagos, datos sensibles, permisos, integraciones complejas, regulación o consecuencias graves frente a un error.

La IA puede escribir esas partes también. El problema es que una persona sin conocimiento técnico puede no reconocer cuándo la solución parece funcionar pero es insegura, frágil o costosa de operar.

No saber programar ya no impide necesariamente construir. No saber evaluar riesgo continúa siendo un límite.

## El verdadero aprendizaje

El experimento confirmó que la distancia entre una idea y un producto publicado se redujo de forma extraordinaria.

Pero también mostró que construir no es solamente producir archivos. Es convertir una intención en decisiones, verificar que esas decisiones sobrevivan a la realidad y asumir las consecuencias del resultado.

ChatGPT y Codex pueden funcionar como un equipo técnico sorprendentemente capaz. Para aprovecharlo, la persona no necesita fingir que sabe todo. Necesita preguntar, observar, decidir y sostener una dirección.

Entonces, ¿puedo pasar de cero a un sitio publicado solo con ChatGPT y Codex?

Sí. Este sitio es la prueba.

Pero el resultado no aparece porque la IA elimina tu rol. Aparece porque cambia tu rol: de escribir cada instrucción a dirigir el sistema que las convierte en producto.

## Referencias

- [Repositorio del sitio en GitHub](https://github.com/sarreche/personal-web-site).
- OpenAI, [documentación oficial para desarrolladores y Codex](https://developers.openai.com/).

---

Este texto documenta el experimento desarrollado en el video. Podés [ver el proceso completo en YouTube](https://youtu.be/sLgPF18inas).
