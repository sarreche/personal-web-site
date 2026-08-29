---
title: "Tokenmaxxing: la obsesión por medir IA con consumo de tokens"
description: "Por qué el consumo de tokens puede indicar adopción y costo, pero se vuelve una métrica peligrosa cuando intenta representar productividad o valor."
publishedAt: "2026-08-13"
---

Se llama *tokenmaxxing*.

Si nunca habías escuchado la palabra, es comprensible: hace poco tiempo casi nadie hablaba así. Sin embargo, el término empezó a aparecer entre empresas tecnológicas, inversores y equipos que buscan demostrar qué tan profundamente incorporaron la inteligencia artificial a su trabajo.

La idea consiste en maximizar el uso de tokens. En sus versiones más extremas, transforma el consumo de IA en una competencia y trata la cantidad procesada como si fuera una medida de productividad humana.

Cuanto más observo el fenómeno, más siento que corremos el riesgo de medir la cosa equivocada.

Una cosa es utilizar inteligencia artificial de manera intensiva. Otra muy diferente es asumir que consumir más equivale a producir más valor.

## Primero: qué es un token

Un modelo de lenguaje no procesa el texto exactamente como lo leemos las personas. Antes de operar sobre él, un *tokenizer* lo divide en unidades y las representa mediante identificadores numéricos.

Un token puede corresponder a una palabra corta, una parte de una palabra, un signo de puntuación, espacios o una secuencia frecuente de caracteres. La división exacta depende del modelo y de su tokenizador.

Por eso no existe una equivalencia universal como “un token es una palabra”. La misma frase puede convertirse en cantidades diferentes de tokens según el idioma, el contenido y el sistema utilizado.

En una conversación de texto suelen contarse tanto los tokens enviados al modelo como los que este genera. Los sistemas multimodales también convierten imágenes, audio u otros datos en representaciones procesables, aunque su medición y facturación no siempre siguen una única regla comparable con el texto.

## Por qué los tokens importan

Muchas APIs de modelos cobran según la cantidad de tokens de entrada y salida. El contexto, las respuestas, las llamadas de herramientas y los documentos procesados contribuyen al costo total.

Los tokens sirven entonces para medir aspectos concretos:

- Volumen de uso.
- Costo de inferencia.
- Tamaño del contexto procesado.
- Capacidad necesaria para atender una carga de trabajo.

En términos generales, procesar más tokens requiere más cómputo. Pero la relación no es perfectamente uniforme: el modelo, la arquitectura, la longitud del contexto, el uso de caché, el procesamiento por lotes y la infraestructura cambian el costo real.

Un token es una unidad útil para contabilizar consumo. El problema empieza cuando intentamos convertirlo en una unidad de valor.

## Qué significa tokenmaxxing

El término mezcla *token* con el sufijo de internet *maxxing*, que sugiere optimizar algo obsesivamente hasta llevarlo al máximo.

En la práctica puede referirse a dos comportamientos distintos:

1. Usar agresivamente herramientas de IA para ampliar lo que una persona o equipo puede hacer.
2. Maximizar el consumo visible para demostrar adopción, estatus o cumplimiento de una expectativa interna.

El primer comportamiento puede ser razonable. Si una herramienta ofrece suficiente retorno, no tiene sentido limitar su uso por miedo a consumir tokens.

El segundo convierte el gasto en el objetivo. Y cuando eso ocurre, la métrica deja de describir el trabajo y empieza a deformarlo.

## La frase que encendió la conversación

El tema ganó visibilidad cuando Jensen Huang, CEO de NVIDIA, planteó en el *All-In Podcast* un experimento mental: si un ingeniero o investigador con una compensación anual de 500.000 dólares consumiera apenas 5.000 dólares en tokens, sería una señal alarmante. En su ejemplo, esperaba un presupuesto de tokens equivalente aproximadamente a la mitad de esa compensación.

La intuición detrás del argumento es comprensible. Si la IA multiplica la capacidad de una persona altamente calificada, asignarle un presupuesto pequeño puede resultar tan absurdo como negar herramientas de diseño a un ingeniero de hardware.

Pero una intuición sobre inversión se transforma con facilidad en una cuota de consumo. Y una cuota genera incentivos diferentes de los que buscábamos.

## Cuando el consumo se convierte en estatus

Algunas compañías llegaron a mostrar rankings internos de uso y reconocimientos con nombres como “Token Legend” o “Session Immortal”. En otros casos, trabajadores reportaron presión para elevar indicadores de adopción utilizando IA incluso cuando no era necesaria.

La tendencia también empezó a corregirse cuando llegaron las facturas y quedó claro que maximizar consumo no era una estrategia sostenible para todos los equipos.

La secuencia resulta conocida:

1. Elegimos una métrica porque es fácil de observar.
2. La utilizamos como aproximación de algo difícil de medir.
3. Convertimos esa aproximación en objetivo.
4. Las personas aprenden a optimizar el número en lugar del resultado original.

Si una organización recompensa tokens, obtendrá tokens. Prompts innecesariamente largos, contextos repetidos, agentes sin propósito, ciclos que nadie revisa y tareas que podrían resolverse de forma más simple.

La cifra mejora mientras el sistema empeora.

## Tokens no equivalen a productividad

Medir a una persona por tokens consumidos se parece a medir a un escritor por cantidad de palabras o a un programador por líneas de código.

La actividad es visible. El valor no.

Una sesión corta puede evitar un incidente crítico. Millones de tokens pueden producir código que nadie necesita, una investigación sin criterio o decenas de documentos que no cambian ninguna decisión.

Además, los roles consumen IA de maneras distintas. Una persona puede generar grandes volúmenes de código. Otra puede dedicar su experiencia a revisar riesgos, definir arquitectura o decidir que no hace falta construir nada. La segunda podría producir más valor usando menos tokens.

La métrica tampoco reconoce la eficiencia. Si dos equipos consiguen el mismo resultado y uno utiliza la mitad de recursos, el menor consumo debería ser una ventaja, no una señal de baja adopción.

## El riesgo del código generado sin control

Una preocupación frecuente es que la IA permita producir código más rápido de lo que un equipo puede comprender, probar y mantener.

Existen informes que relacionan el aumento del uso de asistentes con más duplicación y *code churn*: código incorporado que vuelve a modificarse o eliminarse poco tiempo después. Pero la evidencia todavía no es uniforme. Otros estudios sobre proyectos que reconocen uso de IA no encontraron un incremento general del *churn*.

La conclusión responsable no es que “el código de IA siempre es basura”. Es que volumen generado y calidad sostenible son variables diferentes.

Si premiamos únicamente la producción o el consumo, podemos llenar una base de código con cambios que parecen velocidad hoy y se convierten en costo mañana.

Lo relevante es cuánto código llega a producción con pruebas adecuadas, cuánto tiempo permanece útil, cuántos incidentes genera y qué tan fácil resulta modificarlo cuando cambian las necesidades.

## También existen incentivos comerciales

Quienes venden GPUs, inferencia, servicios cloud o acceso a modelos se benefician cuando aumenta el consumo.

Eso no invalida sus argumentos. Una compañía puede tener incentivos comerciales y, al mismo tiempo, ofrecer una tecnología transformadora. Pero esos incentivos forman parte del contexto y deben hacernos examinar con cuidado cualquier equivalencia entre “más uso” y “mejor trabajo”.

El mercado mide tokens porque puede cobrarlos. Una organización no debería confundir esa unidad de facturación con su propia unidad de éxito.

## El argumento razonable a favor

El consumo puede funcionar como una señal temprana de adopción.

Si un equipo tiene acceso a herramientas relevantes pero registra un uso mínimo, puede existir un problema de formación, integración, confianza, permisos o descubrimiento de casos de uso.

Como indicador diagnóstico, los tokens pueden abrir preguntas útiles:

- ¿Qué equipos experimentan y cuáles no?
- ¿Dónde se concentra el costo?
- ¿Qué flujos incorporaron IA de forma cotidiana?
- ¿Existen barreras que impiden probar la herramienta?

El error consiste en saltar desde “esta persona usa más IA” hasta “esta persona produce más valor”. El consumo puede medir exposición o intensidad. No demuestra calidad, impacto ni retorno.

## Qué conviene medir en su lugar

La pregunta correcta no es solamente “¿cuántos tokens consumimos?”. Es:

- ¿Resolvimos mejor el problema?
- ¿Reducimos el tiempo entre una idea y un resultado validado?
- ¿Mejoró la calidad?
- ¿Disminuyeron los errores y el retrabajo?
- ¿Aprendimos más rápido?
- ¿Hicimos algo que antes no era viable?
- ¿El valor obtenido justifica el costo total?

Los tokens pueden acompañar esas métricas como información operativa. No deberían reemplazarlas.

Una evaluación madura relaciona consumo con resultados: costo por tarea completada, tiempo ahorrado que realmente se aprovecha, calidad aceptada por revisión, estabilidad posterior y satisfacción de quien recibe el trabajo.

## Medir la herramienta sin perder el objetivo

El *tokenmaxxing* es interesante porque muestra cómo una tecnología nueva puede heredar un error muy antiguo: confundir una actividad fácil de contar con el resultado que de verdad importa.

La IA debería ampliar nuestra capacidad para pensar, crear y resolver problemas. No convertirse en una competencia de consumo.

Si transformamos su uso en rankings y cuotas vacías, las personas optimizarán para la métrica. Si medimos resultados, aprendizaje, calidad y costo, tendrán incentivos para utilizar la cantidad de IA que el trabajo realmente necesita.

No se trata de consumir menos por principio. Tampoco de consumir más para demostrar entusiasmo.

Se trata de producir más valor por cada decisión, cada hora y, también, cada token.

## Referencias

- *All-In Podcast*, [Jensen Huang sobre presupuesto y consumo de tokens](https://www.linkedin.com/videos/allinpod_jensen-huang-if-that-500000-engineer-activity-7440742599600230400-drTE).
- Associated Press, [*Workplaces look for cheaper AI as ‘tokenmaxxing’ fades as a corporate fad*](https://apnews.com/article/31bb80ac1cd7862d05f6397177d826b1).
- GitClear, [*AI Copilot Code Quality Research*](https://gitclear-public.s3.us-west-2.amazonaws.com/GitClear-AI-Copilot-Code-Quality-2025.pdf).
- Martin et al., [*Self-Admitted GenAI Usage in Open-Source Software*](https://arxiv.org/abs/2507.10422), 2025.

---

Este texto nació a partir de un guion que preparé para experimentar con contenido audiovisual asistido por inteligencia artificial. Podés [ver el video original en YouTube](https://youtu.be/KVYAcwUumkU).
