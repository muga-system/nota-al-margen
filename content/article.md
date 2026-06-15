<!-- content/article.md -->

# Construir una interfaz pequeña sin delegar el criterio

Hoy muchas interfaces nacen desde una promesa de velocidad: generar, pegar, adaptar y publicar.

La velocidad puede servir, pero también puede tapar una parte importante del trabajo: entender qué hace cada pieza, por qué existe y qué responsabilidad tiene dentro del sistema.

Esta aplicación parte de una idea simple: leer un artículo y dejar notas locales al margen.

No hay backend.
No hay framework.
No hay automatización pesada.

Solo HTML, CSS y JavaScript vanilla.

## El objetivo

El objetivo no es construir algo grande.

El objetivo es construir algo legible:

- una estructura HTML clara;
- estilos controlados;
- lógica escrita a mano;
- contenido externo en Markdown;
- notas persistentes en el navegador.

Cada parte tiene una responsabilidad concreta.

## La decisión técnica

El artículo vive en un archivo Markdown.

La interfaz lo carga, lo transforma y lo muestra.

Las notas se guardan en `localStorage`, una capa simple de persistencia disponible en el navegador.

Esto permite trabajar una idea completa sin crear complejidad artificial.

## Lo importante

Una aplicación pequeña también puede mostrar criterio.

Puede mostrar orden.
Puede mostrar cuidado.
Puede mostrar decisiones.

La diferencia no está en la cantidad de tecnología usada, sino en la claridad con la que está organizada.

## Cierre

Nota al Margen es un ejercicio de construcción consciente:

leer,
anotar,
guardar,
revisar.

Una pieza mínima para practicar la web desde su base.