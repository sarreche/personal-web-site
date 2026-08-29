---
title: "La IA puede escribir código, pero no asumir la ingeniería"
description: "Generar software es cada vez más fácil; decidir qué construir, controlar sus riesgos y responder por sus consecuencias sigue siendo ingeniería."
publishedAt: "2026-08-28"
---

Cuando un sistema falla en producción, alguien tiene que responder.

Si un sistema bancario pierde dinero, una plataforma crítica se cae o un sistema médico produce un error grave, la pregunta no es qué herramienta generó el código. La pregunta es quién tomó las decisiones que llevaron a ese resultado.

La inteligencia artificial puede acelerar de forma extraordinaria la implementación. Puede escribir funciones, crear pruebas, proponer arquitecturas, revisar cambios y documentar un repositorio. Pero ninguna de esas capacidades elimina el propósito de la ingeniería de software.

La ingeniería existe para transformar necesidades ambiguas en sistemas que funcionen bajo restricciones reales. También existe para reducir riesgos, hacer explícitos los compromisos y asumir responsabilidad sobre lo que se pone en el mundo.

Por eso, cuanto más fácil sea producir código, más importante será distinguir entre **generar una implementación** y **construir un sistema confiable**.

## El código nunca fue toda la ingeniería

Una función puede estar bien escrita y aun así pertenecer al producto equivocado. Puede cumplir una especificación y violar la intención de quien la pidió. Puede pasar todas sus pruebas y fallar frente a una condición que nadie imaginó.

El código responde al problema que le expresamos. La ingeniería también pregunta si expresamos el problema correcto.

Antes de implementar, alguien debe decidir:

- Qué comportamiento necesita realmente el usuario.
- Qué errores son aceptables y cuáles serían catastróficos.
- Qué datos se pueden utilizar y cómo deben protegerse.
- Qué dependencias merece la pena incorporar.
- Qué costo, rendimiento y disponibilidad necesita el producto.
- Qué ocurrirá cuando una parte del sistema deje de responder.

Una IA puede ayudarnos a explorar cada una de estas preguntas. La decisión final sigue afectando a personas y organizaciones concretas.

## Una respuesta plausible no es una decisión correcta

Los modelos generativos son especialmente buenos produciendo resultados plausibles. En programación, eso es extremadamente útil: gran parte del trabajo cotidiano se apoya en patrones conocidos.

Pero los sistemas importantes se definen muchas veces por sus excepciones.

Imaginemos que una IA genera el código para procesar una transferencia bancaria. Que compile y complete el flujo principal no responde si la operación es idempotente, qué sucede ante dos solicitudes simultáneas, cómo se reconcilia un fallo parcial o qué evidencia queda para una auditoría.

Esas no son sutilezas posteriores. Son parte del significado de “transferir dinero correctamente”.

La dificultad está en convertir una necesidad humana en propiedades verificables y en descubrir aquello que la primera descripción dejó afuera. Mejorar el prompt ayuda, pero no elimina la incertidumbre del dominio.

## La calidad es una colección de decisiones

Decir que un sistema “funciona” suele significar únicamente que produce el resultado esperado en el caso observado. En producción necesitamos mucho más.

Necesitamos saber cómo se comporta con carga, ante un ataque, durante una caída de red, con datos incompletos o después de años de cambios. Confiabilidad, seguridad, rendimiento, mantenibilidad, accesibilidad y observabilidad no aparecen automáticamente porque el código haya sido autogenerado.

Además, estos atributos compiten entre sí. Más seguridad puede añadir fricción. Más disponibilidad puede aumentar el costo. Optimizar el rendimiento puede volver más difícil modificar el sistema.

No existe una respuesta universalmente perfecta. Existe una decisión adecuada para un contexto, unos riesgos y unas prioridades determinadas. Hacer visibles y justificables esos compromisos es trabajo de ingeniería.

## Generar más rápido también puede generar más riesgo

Cuando escribir código era lento, la capacidad de implementación limitaba cuántos cambios podían llegar al sistema. Con IA podemos producir muchas más alternativas, integraciones y funcionalidades en el mismo tiempo.

Eso es una ventaja enorme, pero también multiplica la superficie que debemos comprender y verificar.

Una herramienta puede generar una implementación y sus pruebas compartiendo el mismo supuesto equivocado. Puede reutilizar una dependencia vulnerable, interpretar mal una regla de negocio o introducir un comportamiento que solo aparece en producción.

Por eso la verificación no debería crecer según la cantidad de código, sino según el riesgo del cambio. Un sitio experimental y un sistema clínico no requieren el mismo nivel de evidencia.

El marco de desarrollo seguro del NIST refleja esta lógica: la seguridad no es una revisión aislada al final, sino un conjunto de prácticas integrado durante todo el ciclo de vida. Automatizar una fase no elimina las demás.

## La operación también es parte del diseño

Un sistema no termina cuando se despliega.

En producción cambian el tráfico, los usuarios, las amenazas y las dependencias. Aparecen combinaciones que ningún entorno de prueba reprodujo. La ingeniería necesita preparar al sistema para ser observado, degradarse con control y recuperarse.

Eso implica decidir:

- Qué métricas y eventos debemos registrar.
- Qué condiciones activan una alerta.
- Qué acciones puede ejecutar automáticamente un agente.
- Cuándo hace falta confirmación humana.
- Cómo revertir un cambio o aislar un componente.
- Quién coordina la respuesta ante un incidente.

La IA también puede analizar registros, detectar anomalías y proponer correcciones. Pero alguien debe definir sus permisos, comprobar sus acciones y decidir qué nivel de autonomía es aceptable.

## Responsabilidad no significa revisar cada línea a mano

Asumir responsabilidad no exige que una persona escriba o inspeccione manualmente cada carácter. La ingeniería siempre utilizó abstracciones, bibliotecas, compiladores, servicios externos y automatización.

Significa que existe una cadena de decisiones trazable. Sabemos qué se intentaba conseguir, qué riesgos se aceptaron, qué evidencia respaldó la entrega y quién tiene autoridad para cambiar o detener el sistema.

El código puede venir de un modelo. La evidencia puede producirse con herramientas automáticas. Incluso algunas decisiones operativas pueden delegarse a agentes dentro de límites definidos.

Lo que no podemos delegar a una herramienta es la obligación profesional de proteger a las personas afectadas. El código de ética de ACM e IEEE para ingeniería de software sitúa el interés público y la calidad del producto por encima de la conveniencia individual. La herramienta no ocupa ese rol: lo ocupan quienes diseñan, aprueban y operan el sistema.

## El ingeniero se aleja del teclado, no del problema

Si la IA continúa mejorando, escribir sintaxis dejará de ocupar una parte importante del trabajo. Eso no vuelve irrelevante al ingeniero. Cambia dónde aporta mayor valor.

El trabajo se desplaza hacia:

- Formular problemas y convertirlos en criterios claros.
- Diseñar límites, interfaces y mecanismos de control.
- Evaluar alternativas bajo incertidumbre.
- Validar resultados de acuerdo con su impacto.
- Integrar sistemas que fueron creados por actores distintos.
- Operar, aprender de incidentes y evolucionar el producto.
- Explicar y asumir las decisiones importantes.

Tal vez una sola persona pueda producir lo que antes requería un equipo. Pero esa concentración de capacidad también concentra responsabilidad.

## La pregunta que queda

La inteligencia artificial está cambiando profundamente la forma en la que programamos. Hoy escribir código es mucho más rápido que hace unos años, y probablemente continúe acelerándose.

Pero la ingeniería de software nunca fue simplemente escribir código.

Siempre fue entender problemas ambiguos, tomar decisiones bajo incertidumbre, diseñar sistemas que sobrevivan al paso del tiempo y asumir responsabilidad sobre sistemas que impactan la vida real.

Por eso la verdadera pregunta no es si la inteligencia artificial va a reemplazar a los ingenieros.

La pregunta es otra:

**¿Qué significa ser ingeniero cuando escribir código deja de ser el principal desafío?**

## Referencias

- ACM e IEEE Computer Society, [*Software Engineering Code of Ethics and Professional Practice*](https://www.acm.org/code-of-ethics/software-engineering-code).
- NIST, [*Secure Software Development Framework (SSDF), SP 800-218*](https://csrc.nist.gov/pubs/sp/800/218/final).

---

Este texto nació a partir de un guion que preparé para experimentar con contenido audiovisual asistido por inteligencia artificial. Podés [ver el video original en YouTube](https://youtu.be/Dm1pm3ipcDI).
