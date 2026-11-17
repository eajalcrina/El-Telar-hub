# El Telar: propuesta de diseño

> 17-nov-2026 · Borrador para decisión del fundador. Basado en `panel/03-direccion-creativa.md`, con los ajustes de `panel/05-adopcion-medianas.md`. Nada está publicado en la web; los prototipos son artefactos privados.

## Lo que hace Satia y dónde se detiene

Satia construye todo con una sola primitiva, el punto. Sati, su personaje, es una matriz de puntos con cara, y el fondo del hero lleva un grano de puntos. El color es casi nulo: un solo acento marca el paso activo. Bandas negras con frases-manifiesto separan los capítulos.

El techo está en la interacción. La promesa es «Just ask Sati», pero el hero no tiene un campo de texto: el visitante no pide nada ni ve un resultado. Las páginas internas rompen el sistema, con otro estilo de ilustración en precios y fotos de stock en partners.

## Tres direcciones

| | A. Textus (recomendada) | B. Tarjeta | C. Lanzadera |
|---|---|---|---|
| Idea | Lo que el visitante escribe se teje frente a él y queda como una tela que puede llevarse | Cada pieza es una tarjeta perforada; la empresa es la secuencia que la máquina lee | Un agente con forma de lanzadera cruza la urdimbre llevando la memoria de una persona a otra |
| Retícula | La página es urdimbre: hilos verticales de 1 px cada 8 px; cada cruce es un píxel | Filas de perforaciones con el ancho de una tarjeta | La urdimbre de Textus |
| Color | Oscuro sobre crema; la trama en rojo, solo en superficies grandes | Fondo oscuro, tarjetas crema, perforaciones rojas | Lanzadera roja, resto oscuro y crema |
| Interacción central | El visitante escribe qué se le escapa a su empresa y ve su frase convertida en tela | El visitante perfora su semana y la máquina nombra la pieza | La lanzadera pregunta qué se olvidó esta semana |
| Personaje (decisión del 17-nov) | Tela: un tejido colgado con flecos, ojos y boca | Tarja: una tarjeta perforada con ojos de perforación | Lanza: una lanzadera que arrastra su hilo |

**Por qué Textus.** Traduce en forma la propuesta de valor:
- La urdimbre fija es el núcleo común a todos los clientes.
- La trama que cambia son los datos y la gente de cada empresa.
- La tela resultante es del cliente y se la lleva.

En la categoría, la respuesta de la IA suele ser un chat o una mascota. Aquí es un objeto visible que lleva el nombre del cliente. Tarjeta queda como sistema para la página de precios dentro de Textus. Lanzadera repite el modelo de Sati.

## Especificación del hero (Textus)

**Primera pantalla, ajustada para el gerente de provincia.** El panel de adopción pidió que la primera pantalla diga qué hace El Telar sin metáfora. Por eso el titular es llano y la invitación a escribir va debajo.

| Elemento | Contenido |
|---|---|
| Titular | Capacitamos a tu equipo e instalamos procesos con IA, uno por uno |
| Invitación | Escribe lo que tu empresa olvida. Te lo devolvemos tejido |
| Campo | Etiqueta: «¿Qué se le escapa a tu empresa cada semana?» Ejemplo: «Las facturas que nadie cobra a tiempo» |
| Lienzo | Muestra de tela en Canvas a la derecha (debajo, en celular) |

**Antes de escribir.** El lienzo teje la frase de la Nota A de Lovelace, con su crédito y el año 1843.

**Mientras se escribe.** Cada carácter pasa a sus bytes UTF-8. Cada byte es una fila de ocho cruces: un 1 pone la trama roja sobre la urdimbre y un 0 la deja debajo. Una tira en mono muestra los bits de cada letra, como una tarjeta perforada.

**Al terminar.** Una pasada cierra la muestra. Aparece la pieza que corresponde, elegida con un diccionario de palabras y sin llamar a un modelo, para que nadie lo lea como un agente abierto. Si no hay coincidencia, el sitio lo dice y ofrece conversar con una persona.

**Accesibilidad y peso.** El lienzo es decorativo (`aria-hidden`); una región `aria-live` anuncia la pieza sugerida. Con movimiento reducido, la muestra aparece completa. Canvas 2D con tope de filas y sin WebGL, para que cargue bien con datos móviles.

## Sistema visual

| Elemento | Decisión |
|---|---|
| Color | Crema #F5F3F0 de fondo, oscuro #0D0D0D en urdimbre y texto, rojo #F32769 solo como trama y botón. El rojo sobre crema no pasa contraste como texto normal (3,6:1), así que nunca se usa para texto de lectura |
| Tipografía | Mluvka para titulares y texto; JetBrains Mono para bits, rótulos y cifras |
| Textura | Píxel duro, sin fibras, sombras, madera ni tonos tierra |
| Movimiento | Una fila por tecla, a velocidad de máquina; nada en bucle junto al texto |
| Fotos | Personas del equipo con nombre y ciudad; ninguna foto de telares |

## Lo que pidió el comprador y entra en el diseño

- Personas con nombre, cara y ciudad, y si viajan a regiones.
- Precios o rangos publicados y lo que el cliente se lleva si se va.
- El control humano dibujado: quién aprueba y en qué paso.
- Las reglas de uso como documento descargable.
- Respaldo de Redesign Lab y sello Claude Network Partner en la sección de confianza.
- Agendar por WhatsApp además del calendario.

## Lo que no se copia de Satia

- Un bloque de puntos con cara, como Sati. Los personajes de El Telar están hechos de hilos cruzados y tienen siluetas del oficio.
- La fórmula «Just ask X. It gets done.» y el «pides, construye, apruebas».
- Bandas negras con frase-manifiesto centrada.
- La enumeración «no es un agente, no es una automatización…».
- «Instalar en un clic».

## Decisiones pendientes

1. Elegir dirección (Textus, Tarjeta o Lanzadera) con el prototipo a la vista.
2. ¿El rojo de Redesign Lab se queda en El Telar o El Telar tiene paleta propia?
3. ¿Quién define y revisa el diccionario de palabras por pieza con frases reales de clientes?

## Actualización del 17-nov-2026: decisiones del fundador

- **Personaje central.** El sitio es una sola pantalla centrada, como Satia, con un personaje al centro que reacciona. El resto de la información va en otras páginas. Esto reemplaza la recomendación «sin personaje» del panel.
- **Titular.** Arriba la frase disruptiva: «Escribe lo que tu empresa olvida. Te lo devolvemos tejido.» Debajo, una línea llana: «Capacitamos a tu equipo e instalamos procesos con IA, uno por uno.»
- **Motor del personaje.** El personaje está hecho de cruces de urdimbre y trama en Canvas, y el cursor lo deshilacha. Los cruces sueltos se ven como hilos y vuelven a su lugar. Al entrar, cada fila llega como una pasada de lanzadera, alternando el lado.
- **Reacciones.**
  - Sigue el puntero con la mirada.
  - Parpadea y respira.
  - Abre la boca cuando el cursor lo toca.
  - Se vuelve a tejer con los bits de lo que escribe el visitante.
  - Al enviar, salta y dice la pieza que corresponde, o pone cara de duda si no hay pieza.
- **Las tres direcciones con personaje:**
  - Textus, con «Tela», un tejido colgado con flecos;
  - Tarjeta, con «Tarja», una tarjeta perforada;
  - Lanzadera, con «Lanza», que arrastra su hilo.

  El director creativo recomienda Tela.
- **Prototipo comparativo:** artefacto privado «El Telar, personaje central». Fuente en `prototipo-personajes.html`.

## Camino D, «Lanzadera que ordena» (idea del fundador, 17-nov-2026)

El fundador descartó el personaje en forma de tela y propuso este camino.

- **Toda la pantalla** es un enredo de hilos de colores que se mueven solos y se apartan del cursor.
- **Una lanzadera** cruza la pantalla de lado a lado. En cada pasada deja una fila de trama: los hilos por donde pasa se enderezan y forman una banda tejida al centro.
- **El título** va al centro, en una etiqueta tejida con costura, siempre legible.
- **El motivo de la tela cambia:**
  - **Rombos:** lógica de Jacquard, donde cada cruce muestra la trama o la urdimbre.
  - **Rayas.**
  - **Tu frase:** la tela se teje con los bits de lo que escribe el visitante.
- **El ciclo:** cuando la banda se llena, la tela se suelta y la lanzadera vuelve a tejer con otros colores.
- **Fondo oscuro**, para que los colores resalten. Con movimiento reducido se ve la tela completa y quieta.

Fuente: `prototipo-lanzadera.html`. Pendiente: decidir qué dibuja la lanzadera, si un motivo, el logotipo o solo rayas de color.
