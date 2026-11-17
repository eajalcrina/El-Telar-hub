// Propuesta para Happy Plaza (Chimbote). Fuentes: reunión del 16-nov-2026 (notas y transcripción),
// deck presentado ese día, página /inteligencia-artificial de redesignlab.org y asesoría estratégica interna.
// Precios en soles, sin IGV. Son la oferta de Redesign Lab: revisar antes de enviar (ver docs/propuesta-happy-plaza.md).

export const META = {
  client: 'Happy Plaza',
  city: 'Chimbote',
  date: '17 de noviembre de 2026',
  validUntil: '30 de noviembre de 2026',
  slug: 'happy-plaza',
}

export const INTRO = {
  label: 'Propuesta para Happy Plaza',
  title: 'Capacitación en IA para los mandos medios de Happy Plaza',
  lead: 'Respondemos al pedido de la reunión del 16 de noviembre: una primera etapa de capacitación para unas 24 personas, en versión virtual y presencial, antes de la campaña de fiestas.',
}

export const ASK = {
  label: 'Lo que nos pidieron',
  title: 'Su punto de partida',
  items: [
    'Hoy la IA ya es parte del día a día como asistente personal, sobre todo en marketing.',
    'Quieren que sea una herramienta de gestión en todas las áreas: marketing, contabilidad, atención al cliente, diseño y contenidos.',
    'Quieren actualizar sus reglas internas para un uso responsable de la IA con sus trabajadores.',
    'Unas 24 personas de mandos medios, de un equipo de cerca de 70, en dos edificios en Chimbote.',
    'Empezar cuanto antes, para tomar decisiones más rápido.',
  ],
  answer: 'Antes de un diagnóstico formal, el taller cumple esa función: cada área sale con sus procesos priorizados y la dirección con un mapa para decidir.',
}

export type Option = {
  id: string
  name: string
  format: string
  price: number
  perPerson: number
  extra?: string
  includes: string[]
  recommended?: boolean
}

export const OPTIONS: Option[] = [
  {
    id: 'A',
    name: 'Virtual',
    format: '4 sesiones en vivo de 2,5 horas en dos semanas (10 horas)',
    price: 9500,
    perPerson: 400,
    includes: [
      'Formulario previo por participante',
      'Salas de trabajo por área',
      'Un asistente configurado por área',
      'Mapa de piezas priorizado',
      'Borrador de política de uso de IA',
      'Sesión de cierre con la dirección',
    ],
  },
  {
    id: 'B',
    name: 'Presencial en Chimbote',
    format: '2 días de taller (12 horas) y medio día previo de recorrido por las áreas',
    price: 14500,
    perPerson: 600,
    extra: 'Viáticos de dos facilitadores al costo, con comprobantes y un tope de S/ 3.000',
    recommended: true,
    includes: [
      'Todo lo de la opción virtual',
      'Recorrido por los dos edificios con los jefes de área',
      'Dos facilitadores en sala con mesas por área',
      'Ejercicios con sus archivos reales, anonimizados',
    ],
  },
]

export const WORKSHOP = {
  label: 'El taller',
  title: 'IA en tu área: de asistente a herramienta de gestión',
  before: 'Antes del taller, cada participante llena un formulario de 10 minutos con tres tareas que repite y los archivos que usa. Con eso y el organigrama armamos los ejercicios.',
  modules: [
    { n: '01', name: 'Criterio', body: 'Qué hace bien la IA y qué hace mal, cómo verificar un resultado y qué información no entra.' },
    { n: '02', name: 'Tu asistente de área', body: 'Cada mesa configura un asistente con sus plantillas, su tono y sus reglas.' },
    { n: '03', name: 'De tarea a proceso', body: 'Cada área descompone un proceso: qué documento usa, quién lo toca y cuándo vence. Sale una ficha de pieza.' },
    { n: '04', name: 'Reglas y prioridades', body: 'Se discute la política de uso y se vota el mapa de piezas con la dirección presente.' },
  ],
  exercisesTitle: 'Ejercicios con sus procesos',
  exercises: [
    { area: 'Marketing y contenidos', body: 'Brief de la campaña de fiestas con la guía de marca, piezas por tienda y resumen de la campaña anterior.' },
    { area: 'Contabilidad y cobranza', body: 'Lista priorizada de locatarios atrasados desde un Excel exportado, con un recordatorio que una persona aprueba.' },
    { area: 'Atención al cliente', body: 'Banco de respuestas oficiales sobre horarios y eventos, y clasificación de reclamos por motivo.' },
    { area: 'Jefes de experiencia', body: 'Checklist de apertura y cierre de cada juego, parte de incidencias y expediente de mantenimiento.' },
    { area: 'Administración y contratos', body: 'Lectura de tres contratos de locatarios para armar una matriz de plazos, reajustes y penalidades con la cláusula citada.' },
  ],
}

export const DELIVERABLES = {
  label: 'Entregables',
  title: 'Lo que queda en Happy Plaza',
  items: [
    { name: 'Mapa de piezas', body: 'Procesos priorizados por área, cada uno con su dueño, su fuente de datos y un semáforo de viabilidad.' },
    { name: 'Política de uso de IA', body: 'Borrador de dos páginas y un modelo de cláusula para trabajadores, para que lo revise su asesor laboral.' },
    { name: 'Asistentes por área', body: 'Un asistente configurado por área, con su guía de uso de una página.' },
    { name: 'Cierre con la dirección', body: 'Sesión de 60 minutos para revisar el mapa y decidir el siguiente paso.' },
  ],
}

export const CALENDAR = {
  label: 'Calendario',
  title: 'Fechas propuestas',
  note: 'Fechas por confirmar con la gerencia. Si se cumplen, el taller termina antes de la campaña fuerte de diciembre.',
  rows: [
    { when: 'Hasta el 21 de noviembre', what: 'Aprobación, organigrama y formulario a los participantes' },
    { when: 'Virtual: 24 y 26 de noviembre, 1 y 3 de diciembre', what: 'Cuatro sesiones de 2,5 horas' },
    { when: 'Presencial: 25 de noviembre por la tarde', what: 'Recorrido por las áreas' },
    { when: 'Presencial: 26 y 27 de noviembre', what: 'Dos días de taller' },
    { when: 'Semana siguiente al taller', what: 'Entrega del mapa y la política, y cierre con la dirección' },
  ],
}

export const NEXT_PIECE = {
  label: 'Después del taller',
  title: 'El telar de Happy Plaza',
  lead: 'El mapa del taller define qué proceso conviene ordenar primero. Si la dirección quiere avanzar, proponemos empezar por los contratos, porque el dato ya está en sus archivos y no depende del sistema contable.',
  piece: {
    name: 'Vence',
    body: 'Una matriz de plazos, reajustes y garantías de cada local, con avisos en el celular antes de cada fecha y la cláusula citada en cada alerta.',
    install: 9500,
    monthly: 1500,
    credit: 2000,
    creditRule: 'Si contratan una pieza dentro de los 60 días siguientes al taller, descontamos S/ 2.000 de su instalación.',
    founder: 'Precio de cliente fundador de la plantilla para centros comerciales.',
  },
  rule: 'La siguiente pieza se decide con el resultado de la anterior, medido contra su línea base.',
  others: ['Cobra', 'Atiende', 'Campaña', 'Al día', 'Pulso'],
}

export const TERMS = {
  label: 'Inversión',
  title: 'Resumen de la inversión',
  rows: [
    { item: 'Opción A. Taller virtual', amount: 'S/ 9.500' },
    { item: 'Opción B. Taller presencial en Chimbote', amount: 'S/ 14.500' },
    { item: 'Viáticos de la opción B, al costo', amount: 'Hasta S/ 3.000' },
    { item: 'Opcional. Pieza Vence, instalación', amount: 'S/ 9.500' },
    { item: 'Opcional. Pieza Vence, mensualidad', amount: 'S/ 1.500' },
  ],
  conditions: [
    'Montos en soles, sin IGV.',
    'Taller: 50 % a la aprobación y 50 % a la entrega del mapa y la política.',
    'Happy Plaza pone la sala y la logística del taller presencial.',
    'Firmamos un acuerdo de confidencialidad antes de recibir cualquier archivo.',
    `Propuesta válida hasta el 30 de noviembre de 2026.`,
  ],
  needs: [
    'Organigrama con nombres y cargos de los participantes.',
    'Elección de la opción y de las fechas.',
    'Una persona de contacto para la logística.',
  ],
}

export const TEAM = {
  label: 'Equipo',
  title: 'Quiénes facilitan',
  people: [
    { name: 'Eddie Ajalcriña', role: 'Socio, CEO de Redesign Lab', body: 'Más de 15 años liderando negocios sostenibles. Docente en MIT Professional Education desde 2022.' },
    { name: 'Lorenzo Ortiz', role: 'Socio, CIO de Redesign Lab', body: 'Más de 13 años en inversión e innovación en el Grupo Breca y el Grupo Gloria.' },
    { name: 'Roy Pérez', role: 'Advisor en tecnología', body: 'Gerente Corporativo de TI en UNACEM, con 52 sociedades en 5 países. Antes, Qroma y Scharff-FedEx.' },
  ],
}

export const CLOSE = {
  title: 'Próximo paso',
  body: 'Con su elección de opción y el organigrama, enviamos el formulario a los participantes y confirmamos fechas el mismo día.',
}
