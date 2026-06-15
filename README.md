<!-- README.md -->

# Nota al Margen

Aplicación web desarrollada con HTML, CSS y JavaScript vanilla para leer un artículo en Markdown y guardar notas locales en el navegador.

Este proyecto forma parte de MUGA.dev y funciona como una pieza pequeña, clara y documentada para practicar desarrollo web tradicional sin frameworks ni automatizaciones innecesarias.

## Objetivo

Construir una interfaz simple donde una persona pueda:

* leer un artículo escrito en Markdown;
* agregar notas vinculadas a la lectura;
* conservar esas notas usando `localStorage`;
* eliminar una nota individual;
* borrar todas las notas cuando ya no sean necesarias.

## Enfoque técnico

El proyecto se construye desde cero con tecnologías base de la web:

* HTML semántico;
* CSS moderno;
* JavaScript vanilla;
* Markdown como fuente de contenido;
* `fetch()` para cargar el artículo;
* `localStorage` como persistencia local;
* renderizado dinámico del contenido y de las notas.

## Funcionalidades actuales

* Carga de artículo desde `content/article.md`.
* Renderizado básico de Markdown:

  * título principal;
  * subtítulos;
  * párrafos;
  * listas;
  * código inline.
* Creación de notas locales.
* Persistencia de notas en el navegador.
* Contador de notas guardadas.
* Eliminación individual de notas.
* Borrado completo de notas.
* Interfaz responsive.
* Sistema visual oscuro con variables CSS.

## Principios del proyecto

* Una responsabilidad por archivo.
* Código legible antes que código complejo.
* Documentación desde el inicio.
* Commits pequeños y conscientes.
* Sin frameworks en la primera versión.
* Sin backend en la primera versión.
* Sin dependencias externas.

## Estructura

```text
nota-al-margen/
├─ .vscode/
│  └─ settings.json
├─ index.html
├─ README.md
├─ CHANGELOG.md
├─ content/
│  └─ article.md
├─ css/
│  └─ style.css
└─ js/
   └─ main.js
```

## Cómo ejecutar el proyecto

Este proyecto necesita servirse desde un servidor local para que `fetch()` pueda cargar el archivo Markdown correctamente.

Desde la raíz del proyecto:

```bash
python -m http.server 5500
```

Después abrir en el navegador:

```text
http://localhost:5500
```

## Estado actual

El proyecto ya cuenta con una primera versión funcional:

* estructura HTML;
* sistema visual base;
* carga de contenido Markdown;
* creación y persistencia de notas;
* eliminación individual y total de notas.

## Próximos pasos posibles

* Mejorar el parser Markdown.
* Agregar estado visual para errores.
* Agregar confirmación antes de borrar todas las notas.
* Preparar deploy público.
* Escribir una publicación técnica para LinkedIn.
