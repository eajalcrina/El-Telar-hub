import Link from 'next/link'
import { SITE } from '@/data/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div style={{ display: 'grid', gap: 16, maxWidth: 440 }}>
          <p className="brand-name" style={{ fontSize: 28 }}>El Telar<span style={{ color: 'var(--accent)' }}>.</span></p>
          <p className="body-sm" style={{ color: 'var(--on-dark-2)' }}>
            El sistema de IA para empresas de Redesign Lab, impact venture studio con sede en Lima que trabaja en América Latina.
          </p>
        </div>
        <div style={{ display: 'grid', gap: 10, alignContent: 'start' }}>
          <p className="label">El Telar</p>
          <Link href="/#como">Cómo funciona</Link>
          <Link href="/#piezas">Piezas</Link>
          <Link href="/#formas">Formas de trabajar</Link>
          <Link href="/#reglas">Reglas de uso</Link>
        </div>
        <div style={{ display: 'grid', gap: 10, alignContent: 'start' }}>
          <p className="label">Contacto</p>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={SITE.ownerUrl}>redesignlab.org</a>
        </div>
        <div className="footer-base">
          <p className="label">© 2026 Redesign Lab</p>
          <p className="label">eltelarhub.com</p>
        </div>
      </div>
    </footer>
  )
}
