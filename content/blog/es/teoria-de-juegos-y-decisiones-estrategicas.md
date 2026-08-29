---
title: "Teoría de juegos y decisiones estratégicas"
description: "Jugadores, estrategias, pagos, dilema del prisionero y equilibrio de Nash para entender decisiones cuyo resultado depende también de lo que hacen otros."
publishedAt: "2026-08-26"
---

Hay una diferencia enorme entre decidir algo cuando el resultado depende solamente de vos y decidir cuando también depende de otra persona.

En el primer caso, el problema parece relativamente directo: identificás opciones, evaluás consecuencias y elegís la que preferís.

Cuando aparece otro participante, ya no optimizás en el vacío.

Anticipás qué hará. Imaginás qué cree que vas a hacer. Quizá también pensás qué cree que vos creés sobre su decisión.

La decisión deja de ser solamente técnica. Se vuelve **estratégica**.

Eso es lo que estudia la teoría de juegos.

No “juegos” únicamente como entretenimiento, sino modelos formales de situaciones donde el resultado de cada participante depende de las decisiones de varios.

## De una decisión individual a una interacción

Un problema de decisión individual puede representarse mediante:

- Un conjunto de alternativas.
- Consecuencias asociadas a cada alternativa.
- Preferencias sobre esas consecuencias.

En una decisión estratégica, las consecuencias de mi acción cambian según lo que hagan otros.

Reducir un precio puede atraer clientes si mi competidor mantiene el suyo. Si responde con otra reducción, ambos podemos terminar con menos margen. Compartir información puede beneficiar a todos si los demás también comparten; puede dejarme expuesto si soy el único.

La mejor acción ya no puede definirse sin una creencia sobre el comportamiento ajeno.

## Las piezas de un juego

Un juego en forma estratégica suele incluir:

1. **Jugadores:** quienes toman decisiones.
2. **Acciones:** las opciones disponibles en una situación concreta.
3. **Estrategias:** planes que indican qué hará un jugador; en juegos complejos pueden cubrir distintas contingencias.
4. **Pagos o utilidades:** una representación de cuánto valora cada jugador cada combinación de decisiones.
5. **Información:** qué conoce cada participante al decidir.
6. **Reglas y orden:** cuándo decide cada uno y qué acciones son posibles.

Para un juego simultáneo sencillo podemos escribir:

```text
jugador 1 elige a₁
jugador 2 elige a₂
resultado = (u₁(a₁, a₂), u₂(a₁, a₂))
```

Cada función `u` representa las preferencias de un jugador sobre el resultado conjunto.

Los números no tienen que ser dinero. Pueden representar años de cárcel, participación de mercado, riesgo, tiempo, reputación o simplemente un orden de preferencia.

## Racional no significa perfectamente lógico

En el modelo básico, un jugador racional elige para maximizar su utilidad dadas sus creencias y restricciones.

Eso no significa que las personas reales calculen matrices mentalmente ni que sean inmunes a emociones, errores o normas sociales.

“Racional” es una suposición formal: las preferencias están representadas de cierta forma y el agente elige en consecuencia.

Si la función de utilidad incluye confianza, justicia, culpa o reputación, una conducta cooperativa puede ser perfectamente racional.

El modelo no descubre automáticamente qué valora una persona. Lo representa. Si los pagos están mal definidos, el análisis también lo estará.

## El dilema del prisionero

Imaginemos dos personas arrestadas e interrogadas por separado. Cada una puede **cooperar** con la otra guardando silencio o **traicionarla** confesando.

Podemos representar las preferencias mediante una matriz simplificada:

|  | B coopera | B traiciona |
| --- | --- | --- |
| **A coopera** | 3, 3 | 0, 5 |
| **A traiciona** | 5, 0 | 1, 1 |

El primer número de cada celda corresponde a A y el segundo a B. Un número mayor representa un resultado preferido.

Si B coopera, A obtiene más traicionando: `5 > 3`.

Si B traiciona, A también obtiene más traicionando: `1 > 0`.

Traicionar es, por lo tanto, la mejor respuesta de A ante cualquiera de las acciones de B. La misma lógica se aplica a B.

Ambos terminan traicionando y reciben `(1, 1)`, aunque los dos habrían estado mejor con la cooperación mutua `(3, 3)`.

Ahí está el dilema: decisiones individualmente defendibles producen un resultado colectivo peor.

## Estrategias dominantes

Una estrategia es **estrictamente dominante** si produce un pago mayor que cualquier alternativa, sin importar qué hagan los otros jugadores.

En el dilema clásico, traicionar domina a cooperar.

Pero muchos juegos no poseen estrategias dominantes. La mejor acción puede depender de la decisión ajena.

En coordinación, por ejemplo, ambas personas pueden preferir coincidir aunque existan varios lugares posibles. No hay una acción universalmente mejor; importa anticipar dónde elegirá la otra.

Buscar estrategias dominantes es útil, pero no resuelve todos los juegos.

## Mejores respuestas

Una **mejor respuesta** es la acción que maximiza el pago de un jugador frente a una estrategia concreta de los demás.

Podemos preguntar:

```text
si el otro hace X, ¿qué me conviene hacer?
si el otro hace Y, ¿qué me conviene hacer?
```

Este concepto permite analizar estabilidad. Si cada jugador está eligiendo una mejor respuesta frente a lo que hacen los demás, ninguno tiene un incentivo individual para cambiar.

Ese punto se llama equilibrio de Nash.

## El equilibrio de Nash

Un conjunto de estrategias forma un **equilibrio de Nash** cuando ningún jugador puede mejorar su resultado cambiando unilateralmente mientras los otros mantienen sus estrategias.

No significa que el resultado sea justo, eficiente o deseable.

Significa que es estable frente a desviaciones individuales.

La traición mutua en el dilema del prisionero es un equilibrio: si el otro traiciona, cooperar empeora mi resultado. Ninguno quiere cambiar por sí solo, aunque ambos preferirían otro desenlace si pudieran coordinar y comprometerse.

John Nash demostró en 1950 que todo juego finito posee al menos un equilibrio cuando permitimos estrategias mixtas.

El equilibrio es una herramienta para predecir consistencia estratégica, no una recomendación moral.

## Estrategias puras y mixtas

Una **estrategia pura** elige una acción de manera determinada.

Una **estrategia mixta** asigna probabilidades a varias acciones.

En piedra, papel o tijera, elegir siempre la misma acción permite que el oponente nos explote. La estrategia de equilibrio consiste en aleatorizar entre las tres con probabilidades iguales.

La aleatoriedad no representa indecisión. Puede ser una defensa estratégica que evita volver predecible el comportamiento.

En seguridad, deportes, subastas y competencia, ocultar el próximo movimiento puede formar parte del valor de la estrategia.

## Equilibrio no significa resultado óptimo

Esta distinción es central.

Un equilibrio puede ser:

- Ineficiente para el grupo.
- Desigual.
- Malo para todos frente a otra alternativa.
- Uno entre varios equilibrios posibles.

La teoría de juegos no afirma que los mercados, negociaciones o instituciones produzcan siempre el mejor resultado. Ayuda a explicar por qué ciertas situaciones pueden mantenerse incluso cuando parecen claramente mejorables.

Cambiar el resultado puede exigir modificar incentivos, información, reglas o posibilidades de compromiso.

## Juegos de suma cero y de suma no cero

En un juego de **suma cero**, la ganancia de un jugador equivale exactamente a la pérdida de otro.

El ajedrez competitivo puede modelarse de esta forma: ganar, perder o empatar distribuye un resultado opuesto entre los jugadores.

Muchas interacciones reales no son de suma cero.

Empresas pueden competir por clientes y al mismo tiempo beneficiarse de un mercado creciente. Dos países pueden tener conflictos y todavía ganar mediante comercio. Un equipo puede distribuir reconocimiento de manera desigual pero producir más valor al cooperar.

En los juegos de suma no cero existen oportunidades de creación y destrucción conjunta de valor.

Tratar toda interacción como una guerra puede fabricar un conflicto que el modelo no exigía.

## Juegos simultáneos y secuenciales

En un juego simultáneo, los participantes deciden sin observar previamente la acción del otro.

En un juego secuencial, alguien actúa primero y los demás responden después de observar —o inferir— esa acción.

Los juegos secuenciales suelen representarse mediante árboles:

- Los nodos indican quién decide.
- Las ramas representan acciones.
- Las hojas contienen pagos.
- Los conjuntos de información muestran qué conoce un jugador.

Podemos analizarlos mediante **inducción hacia atrás**: comenzamos por las decisiones finales, calculamos las respuestas racionales y avanzamos hacia el inicio.

Pero una amenaza solo afecta decisiones anteriores si resulta creíble cuando llegue el momento de cumplirla.

## Información perfecta, imperfecta e incompleta

La información cambia completamente el juego.

- Con **información perfecta**, cada jugador observa todas las acciones anteriores relevantes.
- Con **información imperfecta**, algunas acciones o estados no son observables al decidir.
- Con **información incompleta**, un jugador no conoce características relevantes de otro, como sus costos, preferencias o capacidades.

Negociar con alguien sin conocer su alternativa externa no es el mismo juego que negociar con esa información pública.

Muchas estrategias consisten precisamente en revelar, ocultar o señalar información.

## Señales, compromisos y credibilidad

Una **señal** es una acción que comunica información sobre un tipo o intención. Para resultar informativa, suele necesitar un costo o una dificultad diferente según quién la emita.

Un **compromiso** limita acciones futuras para volver creíble una conducta.

Por ejemplo, una política de devolución, una garantía contractual o una inversión irreversible pueden cambiar lo que otros esperan que hagamos.

En estrategia no alcanza con anunciar una intención. Los demás preguntarán si tendremos incentivos para cumplirla cuando llegue el momento.

La credibilidad forma parte de la decisión.

## Cuando el juego se repite

Una interacción única puede favorecer la traición. Una relación repetida cambia los incentivos.

Si nos encontraremos nuevamente, la acción actual afecta reputación, confianza y respuestas futuras. Cooperar puede sostenerse porque una ganancia inmediata al traicionar provoca pérdidas posteriores.

La repetición introduce:

- Reputación.
- Reciprocidad.
- Castigos y recompensas futuras.
- Aprendizaje sobre el otro.
- Posibilidad de reparar una relación.

Esto explica por qué la estructura temporal importa tanto como la matriz de pagos de una única ronda.

## Diseñar las reglas también es estrategia

La teoría de juegos no sirve solamente para elegir dentro de reglas existentes.

También permite diseñarlas.

La **teoría de mecanismos** parte de objetivos sociales o institucionales e intenta crear incentivos para que las decisiones individuales conduzcan a resultados deseables.

Subastas, sistemas de asignación, mercados, contratos y políticas internas pueden entenderse como juegos diseñados.

Cuando un sistema produce conductas indeseadas de forma consistente, quizá el problema no sean exclusivamente los jugadores. Pueden ser los incentivos.

En lugar de pedir heroísmo permanente, podemos cambiar el juego.

## Aplicaciones más allá de la economía

La estructura estratégica aparece en:

- Negociaciones y contratos.
- Precios y competencia empresarial.
- Ciberseguridad.
- Redes y distribución de recursos.
- Política internacional.
- Biología evolutiva.
- Sistemas multiagente.
- Diseño de plataformas.
- Cooperación dentro de equipos.

En inteligencia artificial, varios agentes pueden competir por recursos, cooperar en una tarea o actuar con información distinta. Diseñar sus incentivos y protocolos también es un problema de teoría de juegos.

## Los límites del modelo

Los modelos formales simplifican.

Los jugadores reales tienen racionalidad limitada, preferencias inestables, emociones, errores y normas sociales. Puede resultar imposible conocer los pagos verdaderos. También puede haber poder desigual, comunicación ambigua o reglas que cambian durante la interacción.

Un equilibrio puede predecir mal si las suposiciones no representan la situación.

La utilidad de la teoría no consiste en reducir toda conducta humana a una matriz. Consiste en obligarnos a explicitar:

- Quién decide.
- Qué sabe.
- Qué puede hacer.
- Qué valora.
- Qué espera de los demás.
- Qué incentivos produce cada regla.

La simplificación es valiosa cuando sabemos qué dejó afuera.

## Pensar estratégicamente

Una decisión estratégica no pregunta solamente “¿cuál opción parece mejor?”.

Pregunta:

- ¿Qué hará el otro ante mi acción?
- ¿Cuál será su mejor respuesta?
- ¿Mi amenaza o promesa es creíble?
- ¿Existe un resultado estable pero ineficiente?
- ¿La interacción se repetirá?
- ¿Podemos cambiar los incentivos o las reglas?

La teoría de juegos convierte esas preguntas en modelos que pueden analizarse.

No elimina la incertidumbre ni reemplaza el juicio. Nos permite ver que, cuando varias decisiones se afectan mutuamente, optimizar de forma aislada puede llevar exactamente al resultado que nadie quería.

Decidir bien no siempre significa elegir la mejor acción disponible.

A veces significa comprender el juego que estamos jugando.

## Referencias

- John F. Nash Jr., [*Equilibrium Points in N-Person Games*](https://doi.org/10.1073/pnas.36.1.48), 1950.
- MIT OpenCourseWare, [juegos en forma estratégica y equilibrio de Nash](https://ocw.mit.edu/courses/17-810-game-theory-spring-2021/mit17_810s21_lec2.pdf).
- Stanford University, [notas sobre juegos, estrategias dominantes y equilibrios](https://web.stanford.edu/~ashishg/msande235/spr08_09/Lecture02.pdf).

---

Este artículo desarrolla la diferencia entre decidir solo y decidir dentro de una interacción, donde cada acción cambia lo que conviene hacer a los demás. Podés [ver el video original en YouTube](https://youtu.be/6cK_tFhogD8).
