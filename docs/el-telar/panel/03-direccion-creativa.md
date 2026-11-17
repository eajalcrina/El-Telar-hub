# Dirección creativa: la propuesta de diseño de El Telar

> 17-nov-2026 · Revisor de IA con rol de director creativo, no una persona real. Fuentes: capturas de satia.so, `analisis-satia.md` y síntesis de la ronda 2.

## 1. Qué hace que el diseño de Satia funcione y dónde está su techo

Satia construye todo con una sola primitiva, el punto. Sati está dibujado como una matriz de puntos, con ojos hexagonales y una pestaña lateral que repite el glifo del logo, y el fondo del hero lleva un grano de puntos sueltos. Las bandas negras cargan una retícula de líneas muy tenue. Por eso el sitio se lee como un sistema.

El color es casi nulo. El único acento es un punto turquesa que marca el paso activo en «You ask / Sati builds it / You approve it», mientras los otros pasos quedan en gris. Blanco y negro se alternan como capítulos.

El techo aparece en la interacción. La promesa es «Just ask Sati», pero el hero no tiene campo de texto: ofrece botones y «Listen to Sati». El visitante no pide nada ni ve un resultado. Además, el sistema se rompe en las páginas internas: precios usa un garabato de línea distinto del Sati de puntos, y partners abre con un video de Wistia y fotos de stock en blanco y negro. La captura del home muestra zonas en blanco bajo el hero y en «What is Satia?»; supongo que son animaciones de scroll que no se renderizaron [inferencia].

## 2. Tres direcciones

### A. Textus

**Idea:** lo que el visitante escribe se teje frente a él y queda como una tela que se puede llevar.

- **Retícula:** la página entera es urdimbre, hilos verticales de 1 px cada 8 px. Cada cruce es un píxel. La trama entra en filas horizontales.
- **Color:** urdimbre en oscuro #0D0D0D sobre crema #F5F3F0. La trama en rojo #F32769, usado solo en superficies grandes.
- **Tipografía:** Mluvka para titulares, JetBrains Mono para el código de cada fila.
- **Textura:** solo bordes de píxel duros, sin fibras ni sombras.
- **Movimiento:** una fila por pulsación de tecla, a velocidad de máquina.
- **Pieza central:** el visitante escribe qué se le escapa a su empresa y ve su frase convertida en tela.
- **Por qué es disruptiva:** en la categoría la respuesta de la IA es un chat o una mascota. Aquí la respuesta es un objeto visible que lleva el nombre del cliente. La apoya la etimología: *texto* viene de *textus*, «trama, tejido».

### B. Tarjeta

**Idea:** cada pieza de El Telar es una tarjeta perforada, y la empresa del visitante es la secuencia de tarjetas que la máquina lee.

- **Retícula:** filas de agujeros, con el ancho de una tarjeta como columna base.
- **Color:** fondo oscuro, tarjetas crema, perforaciones rojas (el rojo sobre oscuro da 4,9:1, válido para texto).
- **Tipografía:** JetBrains Mono domina y Mluvka queda para cifras grandes.
- **Movimiento:** la tarjeta avanza como en un lector.
- **Pieza central:** el visitante perfora su semana, marcando tareas que se repiten, y la máquina lee el patrón y nombra la pieza que corresponde.
- **Por qué es disruptiva:** convierte la lista de precios en un objeto físico y hace visible la regla de «una pieza a la vez». La lectura de las tarjetas de Jacquard como código binario es una analogía; su precisión técnica queda [por verificar].

### C. Lanzadera

**Idea:** un agente con forma de lanzadera cruza la urdimbre llevando el hilo de una persona a otra, porque recuerda lo que la empresa olvida.

- **Retícula:** la misma urdimbre de Textus.
- **Color:** la lanzadera en rojo y el resto en oscuro y crema.
- **Tipografía:** la lanzadera habla en JetBrains Mono y el sitio en Mluvka.
- **Movimiento:** cruza de lado a lado y deja una línea de texto como trama.
- **Pieza central:** la lanzadera pregunta «¿qué se le olvidó a tu empresa esta semana?» y responde con un recordatorio de ejemplo.
- **Por qué es disruptiva:** su personaje es un objeto con oficio y sin cara, y su papel es la memoria, que es la lectura del cerebro que pidió el panel.

## 3. Recomendación: Textus

Textus traduce en forma el consenso de la ronda 2. La urdimbre fija es el núcleo único y la base de código común a todos los clientes. La trama, que cambia en cada empresa, son sus datos y su gente. La tela resultante es del cliente y se la lleva, como pide la regla de branding. Lanzadera repite el modelo de Sati. Tarjeta sirve como sistema de la página de precios dentro de Textus.

Sobre arquitectura de marca, El Telar hereda crema, oscuro y JetBrains Mono de Redesign Lab, y el rojo pasa a ser el color de la trama. En el producto instalado, la trama toma el color de marca del cliente. El respaldo de Redesign Lab queda en la estructura.

## 4. Especificación del hero (eltelarhub.com)

**Qué se ve.** Fondo crema cubierto de urdimbre en un SVG con `<pattern>`. A la izquierda, el titular en Mluvka: «Escribe lo que tu empresa olvida. Te lo devolvemos tejido.» Debajo, un campo de texto real con la etiqueta «¿Qué se le escapa a tu empresa cada semana?» y el ejemplo «Las facturas que nadie cobra a tiempo». A la derecha, un lienzo Canvas de la muestra de tela.

**Qué se mueve antes de escribir.** El lienzo teje en bucle lento la frase de la Nota A de Lovelace, «teje patrones algebraicos tal como el telar de Jacquard teje flores y hojas», con su crédito y año (1843) en mono.

**Qué escribe el visitante y qué pasa.** Cada carácter se pasa a sus bytes UTF-8. Cada byte es una fila de ocho cruces: un 1 pone la trama roja sobre la urdimbre, un 0 la deja debajo. Una tira en JetBrains Mono a la izquierda muestra los bits de cada letra, como una tarjeta. La tela crece hacia abajo, con tope de filas, y se repite en espejo.

**Qué pasa después.** Al pulsar Enter, una pasada horizontal cierra la muestra. Debajo aparecen la pieza que corresponde y dos acciones: «Ver cómo se instala esta pieza» y «Descargar tu muestra (SVG)». La correspondencia sale de un diccionario de palabras por pieza, sin llamada a un modelo, para que nadie lea esto como un agente abierto. Si no hay coincidencia, el sitio lo dice y ofrece una conversación con una persona. Los nombres de pieza (Cobra, Vence) siguen siendo ilustrativos.

**Accesibilidad y teléfono.** El lienzo lleva `aria-hidden` y una región `aria-live` anuncia la pieza sugerida en texto. Con `prefers-reduced-motion` la muestra aparece completa, sin animación. En teléfono el lienzo pasa debajo del campo y la urdimbre aumenta su paso para no saturar la pantalla.

## 5. Lo que no copiar de Satia

- Una mascota con cara hecha de puntos.
- La fórmula «Just ask X. It gets done.» y el «pides, construye, apruebas».
- Las bandas negras con frase-manifiesto centrada y una palabra en negrita.
- La enumeración «Satia is not an agent. Not an automation…».
- El acento turquesa como único color.
- «Instalar en un clic»: contradice las piezas con semanas de adopción.
- La calculadora de ingresos para partners.

## 6. Riesgos y preguntas para el fundador

**Accesibilidad.** El rojo sobre crema da 3,57:1. Sirve para superficies y texto grande, pero falla como texto normal (AA pide 4,5:1). Ningún texto de lectura va en rojo sobre crema.

**Rendimiento.** Canvas 2D con tope de filas y sin WebGL.

**«Artesanal».** El telar sugiere lentitud y oficio caro. Lo corrigen el píxel duro, la tipografía mono y la ausencia de fotos de telares, madera o tonos tierra.

**Cliché de hilos.** Evitar el hilo rojo del destino, ovillos y redes de nodos. Cualquier referencia a textiles andinos o quipus queda fuera hasta verificarla [por verificar], por el riesgo de apropiación cultural.

**Preguntas:**
1. ¿Aceptas que el sitio diga «no tenemos esa pieza» cuando la frase del visitante no coincide con el catálogo?
2. ¿El rojo de Redesign Lab se queda en El Telar o El Telar escinde su paleta para una posible separación?
3. ¿Quién decide el diccionario de palabras por pieza y con qué frecuencia lo revisa con frases reales de clientes del interior?
