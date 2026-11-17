import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap" style={{ display: 'grid', gap: 24, justifyItems: 'start' }}>
        <p className="label">404</p>
        <h1 className="h-section">Esta página no existe</h1>
        <Link className="btn btn-ghost" href="/">Volver al inicio</Link>
      </div>
    </section>
  )
}
