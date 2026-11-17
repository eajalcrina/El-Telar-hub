// Contenido del hub. Fuentes: página /inteligencia-artificial de redesignlab.org (niveles, formas de trabajar,
// laboratorio, reglas), tesis v0.2 y ronda 2 del panel (modelo por piezas), análisis de mercado (catálogo, gobernanza, portabilidad).

export const HERO = {
  label: 'IA para empresas',
  title: 'Implementación de IA para empresas, pieza por pieza',
  lead: 'Lo que tu empresa sabe vive en contratos, planillas, correos y chats. El Telar ordena esos hilos en procesos que funcionan con control humano y quedan a tu nombre.',
  cta: 'Agenda una conversación previa',
  secondary: 'Mira las piezas',
}

export const THREADS = ['Contratos', 'Cobranzas', 'Reportes', 'Planillas', 'Fotos', 'Correos']

export const LEVELS = {
  label: 'Cómo funciona',
  title: 'Tres niveles de IA en una empresa',
  lead: 'Cada empresa avanza a su ritmo. El nivel siguiente se activa cuando el anterior ya funciona.',
  items: [
    {
      n: 'Nivel 1',
      name: 'Las personas trabajan con IA',
      body: 'Cada persona usa asistentes configurados con las reglas de la empresa y parte de un buen borrador en cada documento, correo o análisis.',
      time: 'Semanas',
    },
    {
      n: 'Nivel 2',
      name: 'Los procesos se automatizan',
      body: 'La IA ejecuta un proceso completo, como los vencimientos de contratos o el reporte del mes, y una persona valida el resultado.',
      time: 'Uno a dos meses por pieza',
    },
    {
      n: 'Nivel 3',
      name: 'Las piezas se conectan',
      body: 'Las piezas comparten un mismo núcleo de datos y un registro de eventos. Ese tejido es la memoria operativa de la empresa.',
      time: 'Por etapas, después del nivel 2',
    },
  ],
}

export const PIECES = {
  label: 'Piezas',
  title: 'Cada pieza resuelve un proceso',
  lead: 'Una pieza tiene un nombre, un dueño en tu equipo, una fuente de datos y una métrica que se mide el primer día y el día 30.',
  rules: [
    'Precio fijo de instalación y mensualidad, sin cobro por usuario.',
    'La siguiente pieza se decide con el resultado de la anterior.',
    'Cada pieza se puede apagar por separado.',
  ],
  vertical: 'Ejemplos de piezas',
  items: [
    { name: 'Vencimientos', area: 'Contratos y documentos', body: 'Plazos, renovaciones y garantías en una matriz con avisos antes de cada fecha y la cláusula citada.' },
    { name: 'Cobranza', area: 'Finanzas', body: 'Clientes atrasados priorizados desde una exportación semanal, con recordatorios que una persona aprueba.' },
    { name: 'Reporte gerencial', area: 'Dirección', body: 'Un tablero que se arma solo y muestra el origen de cada cifra.' },
    { name: 'Atención', area: 'Clientes', body: 'Respuestas oficiales y reclamos clasificados por motivo y derivados a quien corresponde.' },
    { name: 'Contenidos', area: 'Marketing', body: 'Piezas con la guía de marca y un resumen de qué funcionó en la campaña anterior.' },
    { name: 'Expedientes', area: 'Operaciones', body: 'Certificados, mantenimientos e inspecciones al día, con avisos antes de cada vencimiento.' },
  ],
}

export const WAYS = {
  label: 'Formas de trabajar',
  title: 'Cómo empezamos contigo',
  lead: 'Se pueden tomar por separado o en secuencia, según dónde esté tu empresa.',
  items: [
    { n: '01', name: 'Capacitación', time: 'Una a dos semanas', body: 'Para dirección, mandos medios y todo el personal, con ejercicios sobre los procesos reales de cada área.' },
    { n: '02', name: 'Diagnóstico', time: 'Dos semanas a un mes', body: 'Entrevistas con la dirección y las áreas para ordenar dónde conviene aplicar IA y en qué orden.' },
    { n: '03', name: 'Inmersión', time: 'Uno a dos meses', body: 'Una pieza instalada y en uso, con su responsable, su línea base y su guía.' },
    { n: '04', name: 'Acompañamiento', time: 'Mensual', body: 'Expertos junto a la dirección para revisar métricas y decidir qué se escala y qué sigue.' },
  ],
}

export const LAB = {
  label: 'Laboratorio',
  title: 'Usamos la IA todos los días en nuestra empresa',
  stats: [
    { fig: '27', body: 'rutinas programadas con reglas aprobadas por el equipo, con más de 70 ejecuciones al mes' },
    { fig: '99', body: 'agentes especializados, organizados en equipos con un agente director' },
    { fig: '197', body: 'organizaciones de un sector mapeadas en cuatro días, cada una con su fuente' },
    { fig: '21.563', body: 'datos de financiamiento regional con fuente y fecha de verificación' },
  ],
  note: 'Cifras de Redesign Lab, verificadas en su inventario interno, noviembre de 2026.',
}

export const RULES = {
  label: 'Reglas de uso',
  title: 'Cómo cuidamos tu información',
  items: [
    { name: 'Privacidad', body: 'Antes de empezar acordamos qué información entra, dónde se procesa y quién la ve, con confidencialidad firmada.' },
    { name: 'Rigor con fuente', body: 'Todo lo que entregamos lleva su fuente o queda marcado como pendiente de verificar, y un experto lo revisa.' },
    { name: 'Control humano', body: 'Una persona de tu equipo aprueba el resultado en los puntos que la empresa define.' },
    { name: 'Tu telar es tuyo', body: 'Datos y configuración quedan a nombre de tu empresa. Si te vas, te llevas una exportación completa y legible.' },
  ],
  limits: 'El Telar no crea ni corrige registros contables, tributarios ni de inventario. Lee exportaciones fechadas y propone; tu sistema de gestión sigue siendo el registro oficial.',
}

export const CLOSING = {
  title: 'Elegimos juntos la primera pieza',
  body: 'En una conversación previa de 30 minutos vemos si conviene empezar por la capacitación, el diagnóstico o una pieza.',
}
