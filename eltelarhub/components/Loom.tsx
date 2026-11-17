// Dibujo propio: la urdimbre (hilos verticales) son las fuentes de información de la empresa;
// la trama (hilos horizontales) son las piezas que las cruzan. La pieza activa va en el acento.
type Props = { threads: string[]; pieces: string[]; active?: number; dark?: boolean }

export default function Loom({ threads, pieces, active = 0, dark = true }: Props) {
  const W = 560
  const top = 70
  const rowH = 54
  const H = top + pieces.length * rowH + 40
  const left = 132
  const step = (W - left - 52) / (threads.length - 1)
  const warpColor = dark ? '#5A5855' : '#B9B5AF'
  const weftColor = dark ? '#8F8D89' : '#6B6966'
  const text = dark ? '#A8A6A2' : '#4D4A46'

  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Telar: ${threads.join(', ')} cruzados por las piezas ${pieces.join(', ')}`}>
      {threads.map((t, i) => {
        const x = left + i * step
        return (
          <g key={t}>
            <text x={x} y={top - 30} textAnchor="middle" fontFamily="var(--mono)" fontSize="11" letterSpacing="1.2" fill={text}>
              {t.toUpperCase()}
            </text>
            <line className="draw" style={{ ['--i' as string]: i, ['--len' as string]: H }} x1={x} y1={top - 14} x2={x} y2={H - 16} stroke={warpColor} strokeWidth="1.5" />
          </g>
        )
      })}
      {pieces.map((p, r) => {
        const y = top + r * rowH + rowH / 2
        const on = r === active
        // Trama que pasa por encima y por debajo de la urdimbre.
        let d = `M ${left - 20} ${y}`
        threads.forEach((_, i) => {
          const x = left + i * step
          const dy = (i + r) % 2 === 0 ? -6 : 6
          d += ` Q ${x - step / 2} ${y} ${x} ${y + dy}`
        })
        d += ` L ${W - 8} ${y}`
        return (
          <g key={p}>
            <text x={0} y={y + 5} fontFamily="var(--font-mluvka), sans-serif" fontSize="17" fill={on ? '#F32769' : text}>{p}</text>
            <path className="draw" style={{ ['--i' as string]: r + threads.length, ['--len' as string]: W }} d={d} fill="none" stroke={on ? '#F32769' : weftColor} strokeWidth={on ? 3 : 1.5} />
          </g>
        )
      })}
    </svg>
  )
}
