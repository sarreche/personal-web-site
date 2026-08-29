---
title: "Mi experiencia hasta ahora con los agentes de IA"
description: "Lo que aprendí usando agentes para crear software: modelos, incertidumbre, costos, código, supervisión humana y la importancia de tener un proceso claro."
publishedAt: "2026-08-21"
---

Esta no es una guía definitiva sobre agentes de inteligencia artificial.

Es un resumen de mi experiencia hasta ahora, especialmente utilizándolos para generar software.

Empecé prestando mucha atención a cada línea de código, comparando modelos y tratando de controlar cada paso. Con el tiempo, mi foco se desplazó hacia otra parte: el producto, el proceso y la capacidad de reconocer si el resultado realmente resuelve el problema.

Ese cambio no significa confiar ciegamente en la IA. Significa aprender a supervisarla de otra manera.

## El modelo importa menos de lo que esperaba

Cuando empecé, parecía fundamental elegir el modelo correcto.

OpenAI, Anthropic, Google, Microsoft, editores con IA, chats y agentes autónomos: cada alternativa venía acompañada por benchmarks y promesas de ser la más inteligente.

En mi uso cotidiano, las diferencias entre las principales opciones empezaron a sentirse menos decisivas de lo que esperaba. No porque todos los modelos sean idénticos ni porque rindan igual en cualquier tarea. Algunos razonan mejor en ciertos problemas, otros son más rápidos, siguen mejor determinadas instrucciones o se integran de manera diferente.

Pero para muchos proyectos estándar, el resultado depende muchísimo del sistema completo:

- Cuánto contexto puede inspeccionar.
- Qué herramientas tiene disponibles.
- Cómo se integra con el repositorio.
- Qué tan rápido permite probar y corregir.
- Cómo presenta los cambios.
- Qué permisos y confirmaciones utiliza.

Muchas veces ya no siento que elijo solamente un modelo. Elijo una experiencia de trabajo.

La interfaz, la integración y la velocidad del ciclo de feedback pueden pesar más que una pequeña diferencia en una tabla de rendimiento.

## El hábito también forma parte de la herramienta

Cambiar de plataforma no consiste únicamente en pagar otra suscripción.

Implica migrar reglas, configuraciones y flujos. También exige acostumbrarse al estilo con el que otro sistema interpreta instrucciones, explica decisiones y modifica archivos.

Con el tiempo construimos una especie de coordinación con la herramienta. Sabemos qué información necesita, cuándo conviene dividir una tarea y cómo pedir una corrección.

Esa fricción de cambio explica por qué la marca y el ecosistema importan. También importan la estabilidad, la privacidad y las políticas sobre el uso del código y los datos.

No siempre gana el modelo que obtiene un punto más en un benchmark. Puede ganar el entorno en el que uno trabaja con mayor confianza y menor fricción.

## Hay que perderle el miedo al no determinismo

Una de las primeras incomodidades fue aceptar que un agente no responde como el software tradicional.

Puedo darle instrucciones claras y aun así obtener algo diferente de lo que imaginaba. Puedo repetir una tarea y recibir otro enfoque. A veces resuelve un problema complejo de forma brillante y después se equivoca en un detalle sencillo.

Al principio eso genera desconfianza. Queremos especificar todo para recuperar la sensación de control.

Pero trabajar con personas tampoco es determinista. En una oficina explicamos objetivos, compartimos contexto, revisamos resultados y corregimos interpretaciones. No esperamos que otra persona ejecute nuestras palabras como una función matemática.

La comparación no significa que un agente sea una persona. Significa que la forma de coordinar trabajo empieza a parecerse menos a escribir comandos exactos y más a dirigir un proceso con resultados variables.

Perderle el miedo no implica ignorar los errores. Implica diseñar una manera de detectarlos y corregirlos.

## La diferencia entre el acceso gratuito y el pago me preocupa

Otra impresión fuerte fue la distancia entre una experiencia limitada y el acceso sostenido a modelos y agentes más capaces.

Una suscripción no compra solamente respuestas mejores. Puede ofrecer más contexto, más iteraciones, tareas más largas, mayor velocidad y acceso a herramientas que permiten completar un flujo entero.

Cuando una persona puede delegar investigación, programación, documentación y revisión durante muchas horas, la ventaja empieza a acumularse.

Eso abre una pregunta incómoda: si estas herramientas se convierten en infraestructura básica para trabajar, aprender y competir, ¿qué ocurre con quienes no pueden pagarlas?

Los precios y planes cambian demasiado rápido como para convertir una cifra actual en una regla permanente. Pero la preocupación sigue vigente. El acceso desigual a capacidad intelectual artificial puede transformarse en una nueva fuente de desigualdad productiva.

## Dejé de mirar cada línea y empecé a mirar más el producto

Al principio quería seguir al agente paso a paso.

Leía cada cambio y trataba de mantener control detallado sobre cómo debía verse el código. Eso puede ser muy útil si el objetivo es aprender programación o si el cambio afecta una parte crítica.

Pero en mi experiencia, concentrarme demasiado pronto en la implementación podía alejarme del producto.

Con los días empecé a explicar mejor lo que quería conseguir, probar el comportamiento y evaluar el resultado. Mientras más claro era el problema, menos necesitaba dictar cómo escribir cada línea.

Eso no vuelve irrelevante al código.

El código sigue importando para la seguridad, mantenibilidad, rendimiento y evolución del sistema. La diferencia es que no siempre necesito revisarlo todo personalmente en el momento en que se genera. Puedo pedir pruebas, validaciones y revisiones específicas. También puedo usar otro agente como auditor para buscar problemas concretos.

La revisión debe ser proporcional al riesgo.

Un cambio visual reversible no merece el mismo control que autenticación, pagos, datos personales o una migración de base de datos.

## No saber programar no elimina la responsabilidad

Un agente puede permitir que alguien sin experiencia técnica produzca una aplicación funcional. Eso es extraordinario.

Pero poder generar software no significa que todo lo generado sea correcto, seguro o sostenible.

Si no sé leer código, puedo probar la interfaz, verificar flujos, describir errores y comparar el comportamiento con los requisitos. También puedo pedir explicaciones, pruebas automatizadas y auditorías.

Lo que no puedo hacer es asumir que una aplicación está terminada solamente porque se ve bien y compila.

La IA reduce la barrera para construir. No elimina la necesidad de validar ni la responsabilidad sobre lo que publicamos.

## El humano sigue dentro del bucle

La forma más útil que encontré para trabajar se parece a un ciclo de humano en el bucle:

```text
persona define el objetivo
        ↓
agente propone y ejecuta
        ↓
persona prueba y evalúa
        ↓
agente corrige
        ↺
```

En la práctica:

1. **Defino el resultado.** Explico qué problema quiero resolver, para quién y bajo qué restricciones.
2. **El agente propone.** Genera código, modifica archivos o diseña una solución.
3. **Pruebo el comportamiento.** Uso el producto, observo errores y verifico los criterios acordados.
4. **Doy feedback.** Describo la diferencia entre lo esperado y lo obtenido.
5. **Verificamos.** Ejecutamos pruebas, build, revisiones y controles proporcionales al riesgo.

No necesito intervenir en cada token ni aprobar cada línea. Necesito aparecer en los puntos donde una interpretación incorrecta puede cambiar el resultado o producir una consecuencia importante.

## El proceso vale más que el prompt brillante

Mi mayor aprendizaje hasta ahora no fue descubrir una frase mágica.

Fue comprobar que un proceso claro funciona.

Cuando el objetivo está mal definido, el agente puede avanzar muy rápido en la dirección equivocada. Cuando el contexto, los límites y los criterios de éxito están documentados, la calidad mejora mucho.

Un buen proceso puede incluir:

- Una descripción concreta del producto.
- Reglas del repositorio.
- Criterios de aceptación.
- Pasos de verificación.
- Acciones que necesitan confirmación.
- Límites sobre qué archivos o sistemas puede modificar.
- Una definición clara de cuándo terminó.

Si no sé cómo documentarlo, el propio agente puede ayudarme a formularlo. Puede hacer preguntas, proponer una estructura y convertir decisiones informales en instrucciones reutilizables.

La clave es no confundir esa ayuda con autoridad final. El agente puede diseñar el proceso conmigo; yo sigo decidiendo qué proceso quiero.

## Dar autonomía de forma gradual

Mi confianza en los agentes no apareció de una vez.

Al principio observaba casi cada movimiento. Después de ver resultados, aprender los patrones de fallo y construir controles, empecé a delegar tareas más largas.

Esa progresión me parece más sana que elegir entre dos extremos: controlar cada carácter o entregar todo y esperar magia.

La autonomía puede crecer con evidencia:

- Primero, tareas pequeñas y reversibles.
- Después, cambios completos con revisión.
- Luego, flujos más largos con controles automáticos.
- Siempre, confirmación para acciones sensibles o difíciles de revertir.

Confiar no significa creer que el agente no fallará. Significa saber qué puede hacer, cómo comprobarlo y qué ocurre cuando se equivoca.

## Mi relación con el código cambió

Antes pensaba el desarrollo principalmente como el acto de escribir código.

Los agentes me hicieron prestar más atención a definir problemas, comunicar intención, diseñar límites, probar resultados y organizar el trabajo.

El código no desapareció. Cambió mi posición frente a él.

Puedo utilizarlo como material de aprendizaje, inspeccionarlo cuando el riesgo lo exige o delegar parte de su revisión a herramientas especializadas. Pero mi contribución no consiste necesariamente en escribir personalmente cada línea.

Consiste en asegurar que el sistema construido tiene sentido.

Hasta ahora, esa es mi conclusión más importante: los agentes no eliminan el trabajo humano. Desplazan una parte del esfuerzo desde la ejecución hacia la dirección, la evaluación y la responsabilidad.

Y aprender a ocupar bien ese lugar probablemente sea más importante que encontrar el modelo perfecto.

---

Este artículo resume una etapa temprana de mi experiencia construyendo software con agentes. Seguramente mis conclusiones seguirán cambiando junto con las herramientas. Podés [ver el video original en YouTube](https://youtu.be/ox5kf_AkBQ8).
