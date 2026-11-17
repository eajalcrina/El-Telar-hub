import Link from 'next/link'
import { NAV, SITE } from '@/data/site'

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="El Telar, inicio">
          <span className="brand-name">El Telar<span>.</span></span>
          <span className="brand-by">un sistema de Redesign Lab</span>
        </Link>
        <nav className="nav" aria-label="Principal">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <a className="btn btn-primary btn-sm" href={SITE.contactUrl}>Conversemos</a>
      </div>
    </header>
  )
}
