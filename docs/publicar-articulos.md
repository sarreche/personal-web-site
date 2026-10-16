# Cómo redactar y publicar un artículo

El blog no tiene CMS, base de datos, borradores ni programación de publicación. Un artículo entra en el sitio cuando sus dos archivos Markdown son válidos y el deploy que los incluye termina bien. La fuente de verdad del formato es `lib/blog.ts`. La versión corta en inglés está en [BLOG.md](BLOG.md); esta guía es el procedimiento completo.

## Checklist de archivos

Para agregar un artículo, crear o editar estos archivos:

- [ ] `content/blog/es/<slug>.md` — artículo en español.
- [ ] `content/blog/en/<slug>.md` — la misma nota, traducida, con el mismo nombre de archivo.
- [ ] `public/images/blog/<archivo>` — solo si hay portada. Si se declara `coverImage`, el archivo tiene que existir.

No hace falta tocar rutas, componentes, `app/sitemap.ts`, `app/llms.txt/route.ts` ni `data/`. El índice, la home, el sitemap y `/llms.txt` leen la carpeta en el build.

## Nombre, slug y fecha

El nombre del archivo, sin `.md`, es el slug. Tiene que cumplir `^[a-z0-9]+(?:-[a-z0-9]+)*$`: minúsculas, números y guiones. Sin acentos, guiones bajos ni mayúsculas. El slug se mantiene en español en los dos idiomas, por ejemplo `el-mismo-modelo-otro-agente.md` en `es/` y en `en/`.

La URL queda en `/blog/<slug>` y `/en/blog/<slug>`. El selector de idioma usa ese mismo slug.

`publishedAt` es una fecha `YYYY-MM-DD`, sin hora. Usar la misma fecha en los dos archivos. El listado ordena por esa fecha, de la más nueva a la más vieja. Si dos notas comparten día, el orden entre ellas no es estable: conviene una fecha distinta cuando el orden importa.

No hay estado `draft` ni publicación programada. Un archivo válido presente en el deploy está publicado, aunque `publishedAt` esté en el futuro: esa fecha ordena la lista y alimenta los metadatos, pero no oculta ni programa el artículo. Para retener una nota, no incluyas sus archivos en el merge.

## Metadatos

Obligatorios:

| Campo | Uso |
| --- | --- |
| `title` | Único `h1` de la página y título SEO. El sitio agrega ` \| Ing. Santiago Arreche`. No lo repitas en el campo. |
| `description` | Bajada visible bajo el título, texto de la tarjeta y meta description. |
| `publishedAt` | Fecha de publicación y `lastModified` del sitemap. |

Opcionales, y solo juntos:

| Campo | Uso |
| --- | --- |
| `coverImage` | Ruta que empiece por `/images/blog/` y apunte a un archivo real. Sin `..`. |
| `coverAlt` | Texto alternativo de esa portada. |

Si aparece uno y falta el otro, o la imagen no existe, el build falla. Sin los dos, la tarjeta usa una franja tipográfica.

Campos que el lector no ve: `tags`, `categories`, `draft`, `author`, `readingMinutes` u otra clave. El tiempo de lectura se calcula en el build: una palabra cada 200, redondeando hacia arriba, con un mínimo de 1 minuto. No lo escribas en el front matter.

El cuerpo no puede quedar vacío. El HTML crudo no se renderiza. El Markdown admitido es el de CommonMark: títulos, párrafos, listas, enlaces, citas, código en línea, bloques de código, reglas horizontales e imágenes. No hay `remark-gfm`: una tabla no se convierte en tabla. Los enlaces `http(s)` abren otra pestaña; los enlaces relativos permanecen en el sitio.

## Plantilla

Copiar este bloque a los dos archivos y traducir título, bajada y cuerpo. Borrar las líneas de portada si no hay imagen.

```md
---
title: "Título en oración, con pregunta o dos puntos si hace falta"
description: "Una o dos frases, cerca de 120–190 caracteres, que funcionen como bajada y como resumen en la tarjeta."
publishedAt: "2026-10-15"
coverImage: "/images/blog/slug-de-la-portada.jpg"
coverAlt: "Descripción concreta de lo que muestra la portada"
---

Escena, video anterior o pregunta reconocible. En dos o tres párrafos cortos, antes del primer subtítulo, queda claro de qué se trata y por qué importa ahora.

## Primera idea

Desarrollo en párrafos cortos. Un enlace a una nota previa o a la fuente primaria, solo cuando sostiene una afirmación.

## Segunda idea

Otro ángulo, un ejemplo o una consecuencia práctica.

## Cierre

Síntesis y un próximo paso para quien lee. Si hubo un video, enlazarlo aquí.

Sigo estas conversaciones en [mi canal de YouTube](https://www.youtube.com/@saarreche). Un abrazo.
```

Enlaces internos en relativo, para que funcionen en local y en el preview:

- español: `[texto](/blog/otro-slug)`
- inglés: `[text](/en/blog/otro-slug)`

Un enlace `http` se abre en otra pestaña. Un enlace relativo permanece en el sitio.

Una imagen dentro del cuerpo también tiene que vivir en `public/` y referenciarse con ruta absoluta del sitio, por ejemplo `![Texto alternativo](/images/blog/figura.jpg)`. No hay imágenes externas configuradas. Hoy ningún artículo usa imágenes dentro del texto; la portada es el único caso real.

## Patrones editoriales observados

Estos son patrones de referencia, no validaciones automáticas ni reglas rígidas. Se observaron los cinco artículos más recientes al 14 de octubre de 2026: *Qué tiene que mirar un líder cuando escribir código ya no es el cuello de botella*, *El mismo modelo, otro agente*, *Lo que me dejan Los 7 hábitos de la gente altamente efectiva*, *El camino del héroe* y *Recuperar la creatividad*.

- Voz en primera persona, rioplatense (`imaginá`, `podés`, `querés`). El inglés es una traducción paralela, no un resumen.
- Título en estilo oración. Pregunta o formulación del tipo «Lo que…» / «por qué…». Sin mayúsculas de titular de prensa.
- Bajada de unos 120–190 caracteres. Dice la promesa del texto y no repite el título. En el corpus completo van de 103 a 194.
- Apertura concreta: una reunión, un video viejo o una pregunta habitual. La tesis aparece antes del primer `##`.
- Esos cinco textos tienen entre 800 y 1100 palabras y de 4 a 8 secciones `##`. Es un rango orientativo, no un límite. El corpus llega de unas 400 a 2500 palabras; la mediana ronda las 1500.
- Los subtítulos del cuerpo empiezan en `##`. La página ya imprime el `h1`. Reservar `###` para un desglose dentro de una sección, como en las notas técnicas más largas.
- Párrafos cortos. Listas cuando hay preguntas o pasos. Pocos enlaces, y cada uno con un trabajo: nota anterior, paper, libro o video.
- Verificar cada dato y cada cita en la fuente que lo sostiene. Distinguir anuncios, cifras reportadas por una empresa o su CEO, estimaciones y comprobaciones independientes; enlazar una fuente no convierte automáticamente una afirmación en verificada.
- Las notas técnicas cierran con `## Referencias`. Las reflexiones recientes cierran con el video de YouTube, si existe, y la frase «Un abrazo.»
- No hace falta un llamado a agendar dentro del Markdown. Después del texto, la página agrega sola el CTA de Calendly, y debajo muestra otras dos notas recientes. La home muestra las tres últimas.

Mantener en inglés los mismos subtítulos, el mismo orden, los mismos enlaces y la misma fecha. Traducir también los textos de los enlaces internos. Revisar que la traducción preserve los matices, las atribuciones y las salvedades de las fuentes; debe ser paralela, no literal ni resumida.

## Imágenes y portada

La portada es opcional. La única publicada está en `public/images/blog/el-terror-de-anthropic-multiplicacion-de-matrices.png` (757×421). El nombre puede acortar el slug; lo que importa es que `coverImage` coincida con el archivo.

La tarjeta recorta a 260px de alto y el artículo a `min(54vw, 560px)`, con `object-fit: cover`. Conviene una imagen apaisada que siga leyéndose al recortar. El alt describe la imagen, no repite el título.

Open Graph y X no usan esa portada. Todos los artículos comparten `public/images/blog-social-card.png` (1200×630). No crees una tarjeta social por nota.

## Qué recoge un artículo nuevo

Al construir, `lib/blog.ts` lee `content/blog/es/*.md` y `content/blog/en/*.md`. Con eso se arman, sin otro registro:

- `/blog` y `/en/blog`, ordenados por fecha;
- la sección «Últimos artículos» de la home (3);
- cada `/blog/<slug>` y `/en/blog/<slug>`, con metadatos, alternates de idioma y dos notas recientes;
- `sitemap.xml`, con `lastModified` igual a `publishedAt`;
- `/llms.txt`.

No hay RSS, categorías, búsqueda ni comentarios. `robots.ts` solo apunta al sitemap.

El build falla, con un mensaje `[blog]`, si falta un campo obligatorio, la fecha no es `YYYY-MM-DD`, el cuerpo está vacío, el slug es inválido o está duplicado, la portada no coincide con su alt o su archivo, o falta la pareja en el otro idioma.

## Validar en local

```bash
npm install
npx tsc --noEmit
npm run build
```

`tsc` no revisa el Markdown. La validación de artículos ocurre en `npm run build`, porque las páginas leen el blog durante la generación estática. `npm run lint` revisa TypeScript y React; no sustituye al build. No hay tests automáticos del blog.

Para leer la nota: `npm run dev` y abrir `http://localhost:3000/blog/<slug>` y `http://localhost:3000/en/blog/<slug>`.

## Rama, pull request y publicación

1. Crear una rama descriptiva desde `main`. `main` se mantiene desplegable.
2. Agregar los dos Markdown y, si corresponde, la portada. Nada más.
3. Correr `npx tsc --noEmit` y `npm run build`.
4. Abrir un pull request con objetivo, alcance, comandos corridos y lo que quede pendiente. No incluir `node_modules`, `.next` ni secretos.
5. Mergear a `main` cuando el PR esté aceptado.

Vercel está conectado al repo `sarreche/personal-web-site` (proyecto `sarreche`). Cada push de la rama del PR genera un deploy de preview. El merge a `main` genera el deploy de producción en [https://sarreche.vercel.app](https://sarreche.vercel.app). No hay GitHub Actions ni `vercel.json`: si el build de Vercel falla, la nota no se publica. Los previews pueden pedir login de Vercel.
