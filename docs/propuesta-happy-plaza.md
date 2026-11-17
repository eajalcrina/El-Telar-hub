# El Telar y la propuesta para Happy Plaza

> 17-nov-2026 · Documento interno. Acompaña al sitio `eltelarhub/` (Next.js), que se publica en eltelarhub.com.

## Qué se construyó

| Ruta | Qué es | Indexación |
|---|---|---|
| `/` | Hub de El Telar: niveles, piezas, formas de trabajar, laboratorio y reglas de uso | Sí |
| `/propuestas/happy-plaza` | Propuesta de capacitación para Happy Plaza, con dos opciones de precio y la primera pieza sugerida | No (`noindex` y bloqueada en `robots.txt`) |

El contenido vive en `eltelarhub/data/`: `telar.ts` (hub) y `propuesta-happy-plaza.ts` (propuesta). Para cambiar un precio o una fecha se edita solo ese archivo.

## Cómo se combinaron las fuentes

| Fuente | Qué aporta |
|---|---|
| Página `/inteligencia-artificial` de redesignlab.org | Niveles, formas de trabajar, cifras del laboratorio, reglas de uso |
| Deck y reunión con Happy Plaza (16-nov) | Pedido concreto (24 mandos medios, virtual y presencial, urgencia), áreas, casos de mall |
| Análisis de Satia y ronda 2 del panel | Modelo por piezas con nombre, precio fijo sin cobro por usuario, gobernanza, portabilidad («tu telar es tuyo»), plantilla por vertical, límite «el Telar no escribe en el ERP» |
| Asesoría estratégica (modelo Fable) | Orden de la propuesta, diseño del taller, precios, nombres de piezas y riesgos |

Satia no se nombra en el sitio.

## Precios propuestos (sin IGV)

| Concepto | Monto | Lógica |
|---|---|---|
| Opción A, taller virtual (10 h) | S/ 9.500 | Unos S/ 400 por persona; 10 h en vivo y ~25 h de preparación y entregables |
| Opción B, presencial en Chimbote (12 h + recorrido) | S/ 14.500 | Unos S/ 600 por persona; dos facilitadores, tres días fuera de Lima |
| Viáticos de B | Al costo, tope S/ 3.000 | Línea aparte, con comprobantes |
| Pieza Vence, instalación | S/ 9.500 | Precio de cliente fundador de la plantilla de malls |
| Pieza Vence, mensualidad | S/ 1.500 | Queda bajo el piso de USD 450 que puso el panel |
| Crédito | S/ 2.000 | Si contratan una pieza dentro de 60 días del taller |

Todas son cifras de oferta propuestas por el asesor. Ninguna fuente trae tarifas de capacitación.

## Decisiones antes de enviar

1. **Precios.** Aprobar o ajustar los montos de `data/propuesta-happy-plaza.ts`.
2. **Precio de Vence.** Decidir si va con monto en esta propuesta (hoy sí) o solo como «desde».
3. **Fechas y facilitadores.** El calendario propone virtual 24 y 26-nov y 1 y 3-dic; presencial 25 (recorrido), 26 y 27-nov. Confirmar disponibilidad de Eddie y Lorenzo.
4. **El Telar frente a redesignlab.org.** La web actual dice que todo se arma a la medida y vende la inmersión. Definir si la pieza es una inmersión empaquetada y si el sello Claude Network Partner pasa a El Telar.
5. **Registro de marca.** Buscar «El Telar» en INDECOPI antes de invertir en la marca.

## Lo que se dejó fuera a propósito

- El «cerca de 90 % menos tiempo»: sale de proyectos propios de web y documentos, no de procesos de un mall.
- La conciliación bancaria: el panel la dejó fuera del catálogo. Se reemplazó por «Cobra», cobranza priorizada desde una exportación.
- Un bot de WhatsApp al público como primera pieza.
- Afirmaciones de experiencia previa en centros comerciales. Happy Plaza sería el primer caso.
- Citas de normas laborales: la política de uso es un borrador para su asesor laboral.

## Por verificar

- Dirección de Happy Plaza: el deck dice Av. Elías Aguirre 424; en la reunión se mencionó un edificio en jirón Pardo.
- Nombres y cargos de los interlocutores (Bertony y Caroline) y el organigrama, pendiente de envío.

## Publicación del dominio

eltelarhub.com usa DNS de GoDaddy (ns21/ns22.domaincontrol.com) y hoy muestra una página aparcada. Para apuntarlo a Vercel, en GoDaddy:

- Registro `A` de `@` → `76.76.21.21` (borrar los A actuales 15.197.148.33 y 3.33.130.190).
- Registro `CNAME` de `www` → `cname.vercel-dns.com`.
