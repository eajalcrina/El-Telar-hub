# Personaje central de El Telar

> 17-nov-2026 · Revisor de IA con rol de director creativo, no una persona real. Responde al pedido del fundador: una pantalla centrada con un personaje que tenga movimiento y reacciones. Los nombres propuestos están pendientes de búsqueda de marca [por verificar].

Los tres conceptos comparten el mismo escenario: fondo crema #F5F3F0, el personaje al centro, un campo de texto debajo y una frase corta encima. Todos se construyen con SVG o Canvas, sin video, y con `prefers-reduced-motion` quedan en una pose quieta que cambia de expresión sin animarse.

## 1. Textus: un cuerpo tejido que teje mientras piensa

**Cómo se ve.** Un bloque de tela de bordes suaves, hecho de una retícula de cruces de 6 px. La urdimbre es oscura #0D0D0D y la trama roja #F32769. Los ojos son dos zonas donde la trama pasa por encima de cuatro hilos seguidos, así que la cara sale del mismo tejido y desaparece si el cuerpo se deshace. Arriba asoman dos hilos sueltos que hacen de antenas y delatan su humor.

**Reacciones.**
- **Reposo:** respira con una fila que entra y sale del borde inferior cada pocos segundos. Parpadea cuando la trama de los ojos pasa por debajo durante un instante.
- **Puntero:** los ojos se desplazan cruce a cruce hacia el puntero y los hilos sueltos se inclinan en esa dirección.
- **Escribir:** cada letra entra como una fila nueva por abajo, con los bits de su byte, y el cuerpo crece. Mientras tanto mira hacia el campo.
- **Enviar:** cierra los ojos, una pasada horizontal recorre el cuerpo de arriba abajo y se reordena en un motivo simétrico. Luego abre los ojos y aparece la pieza sugerida.
- **Error o sin pieza:** las últimas filas se destejen y caen como hilos sueltos. El personaje mira al usuario y el texto ofrece hablar con una persona.

**Diferencia con Sati.** Sati es un bloque fijo de puntos con la cara dibujada encima. Este cuerpo se construye frente al visitante con lo que escribe, y su cara pertenece al tejido.

**Nombres posibles:** Tela, Hila, Texa, Teje.

## 2. Tarjeta: una tarjeta perforada con carácter

**Cómo se ve.** Una tarjeta crema, vertical, con la esquina superior derecha cortada, sobre fondo oscuro. Sus columnas de perforaciones rojas forman la cara: dos agujeros grandes son los ojos y una hilera corta es la boca. Tiene sombra plana y un leve grosor, como cartulina.

**Reacciones.**
- **Reposo:** se balancea apenas sobre su base y parpadea tapando los dos agujeros de los ojos.
- **Puntero:** se inclina hacia el puntero, como una tarjeta que alguien gira para leerla.
- **Escribir:** con cada letra se abre una perforación nueva en la parte baja, con un pequeño salto de la tarjeta.
- **Enviar:** se desliza hacia arriba como en un lector, sale de cuadro y vuelve con la pieza escrita en JetBrains Mono.
- **Error o sin pieza:** las perforaciones nuevas se tapan una a una y la boca se vuelve una línea recta.

**Diferencia con Sati.** Es plana y rectangular, se lee como un documento y su cara está hecha de huecos en lugar de puntos dibujados.

**Nombres posibles:** Ficha, Perfo, Cartilla, Hoja.

## 3. Lanzadera: una silueta que cruza la pantalla

**Cómo se ve.** Una lanzadera de perfil, con forma de hoja alargada y puntas redondeadas, en rojo sólido. Lleva un hilo que sale de su costado y queda detrás de ella. No tiene boca. Un solo ojo, un rectángulo crema en la punta delantera, basta para darle dirección y humor.

**Reacciones.**
- **Reposo:** flota en el centro con un vaivén lento y el hilo ondula detrás.
- **Puntero:** gira su punta hacia el puntero y lo sigue a corta distancia, sin alcanzarlo.
- **Escribir:** cruza de lado a lado una vez por palabra y deja el hilo tendido como una línea de texto.
- **Enviar:** hace una pasada rápida que une todas las líneas y el conjunto forma la tarjeta de la pieza sugerida.
- **Error o sin pieza:** se detiene a mitad de camino, el hilo se afloja y cae, y el ojo se entrecierra.

**Diferencia con Sati.** Tiene una silueta alargada y en movimiento, con un solo ojo, y su función visible es llevar algo de un lado a otro.

**Nombres posibles:** Vaivén, Lanza, Pasada, Ida.

## Recomendación: Textus, con el nombre Tela como primera opción

El personaje de Textus es el único que convierte lo que escribe el visitante en su propio cuerpo, y eso cumple la promesa de texto como tejido a golpe de vista. Sus cinco reacciones salen de un solo mecanismo, filas que entran, se reordenan o se destejen, así que el desarrollo cabe en un Canvas 2D con un único bucle de animación.

Dos condiciones para construirlo:
- La cara debe leerse con 16 × 16 cruces o menos, para que funcione en un teléfono. Hay que probarlo con cinco personas antes de fijar la retícula.
- El rojo sobre crema da 3,57:1, así que queda solo en el cuerpo y nunca en texto de lectura. Lo que dice el personaje va en oscuro sobre crema.

Siguiente paso: un prototipo en Canvas con las cinco reacciones y la frase de ejemplo «Las facturas que nadie cobra a tiempo», para revisarlo con el fundador en pantalla de escritorio y de teléfono.
