<!-- README.md -->

# Nota al Margen

Aplicación web desarrollada con HTML, CSS y JavaScript vanilla para leer un artículo en Markdown y guardar notas locales en el navegador.

Este proyecto forma parte de MUGA.dev y funciona como una pieza pequeña, clara y documentada para practicar desarrollo web tradicional sin frameworks ni automatizaciones innecesarias.

## Objetivo

Construir una interfaz simple donde una persona pueda:

- leer un artículo escrito en Markdown;
- agregar comentarios o notas vinculadas a la lectura;
- conservar esas notas usando `localStorage`;
- borrar notas cuando ya no sean necesarias.

## Enfoque técnico

El proyecto se construye desde cero con tecnologías base de la web:

- HTML semántico;
- CSS moderno;
- JavaScript vanilla;
- Markdown como fuente de contenido;
- `localStorage` como persistencia local.

## Principios del proyecto

- Una responsabilidad por archivo.
- Código legible antes que código complejo.
- Documentación desde el inicio.
- Commits pequeños y conscientes.
- Sin frameworks en la primera versión.
- Sin backend en la primera versión.

## Estructura inicial

```text
nota-al-margen/
├─ index.html
├─ README.md
├─ CHANGELOG.md
├─ content/
│  └─ article.md
├─ css/
│  └─ style.css
└─ js/
   └─ main.js