import Loom from '@/components/Loom'
import { SITE } from '@/data/site'
import { HERO, THREADS, LEVELS, PIECES, WAYS, LAB, RULES, CLOSING } from '@/data/telar'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: SITE.name,
  description: SITE.longDescription,
  url: SITE.url,
  areaServed: ['PE', 'Latin America'],
  provider: { '@type': 'Organization', name: SITE.owner, url: SITE.ownerUrl, email: SITE.email },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Formas de trabajar',
    itemListElement: WAYS.items.map((w) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: w.name, description: w.body } })),
  },
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="dark" style={{ padding: '72px 0 96px' }}>
        <div className="wrap" style={{ display: 'grid', gap: 56, alignItems: 'center' }}>
          <div className="hero-grid">
            <div style={{ display: 'grid', gap: 28, alignContent: 'start' }}>
              <p className="label rise" style={{ color: 'var(--accent)' }}>{HERO.label}</p>
              <h1 className="h-display rise" style={{ ['--i' as string]: 1 }}>{HERO.title}</h1>
              <p className="lead rise" style={{ ['--i' as string]: 2 }}>{HERO.lead}</p>
              <div className="actions rise" style={{ ['--i' as string]: 3 }}>
                <a className="btn btn-primary" href={SITE.contactUrl}>{HERO.cta}</a>
                <a className="btn btn-ghost" href="#piezas">{HERO.secondary}</a>
              </div>
            </div>
            <div className="rise" style={{ ['--i' as string]: 2 }}>
              <Loom threads={THREADS} pieces={PIECES.items.map((p) => p.name)} active={0} />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="como">
        <div className="wrap">
          <div className="section-head">
            <p className="label">{LEVELS.label}</p>
            <h2 className="h-section">{LEVELS.title}</h2>
            <p className="lead">{LEVELS.lead}</p>
          </div>
          <div className="grid grid-3">
            {LEVELS.items.map((l, i) => (
              <div key={l.n} className={`col ${i === 1 ? 'on' : ''}`}>
                <p className="label">{l.n}</p>
                <h3 className="h-block">{l.name}</h3>
                <p className="body-sm">{l.body}</p>
                <p className="label" style={{ alignSelf: 'end' }}>{l.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section neutral" id="piezas">
        <div className="wrap">
          <div className="section-head">
            <p className="label">{PIECES.label}</p>
            <h2 className="h-section">{PIECES.title}</h2>
            <p className="lead">{PIECES.lead}</p>
          </div>
          <ul className="grid grid-3" style={{ listStyle: 'none', padding: 0, margin: '0 0 56px' }}>
            {PIECES.rules.map((r) => (
              <li key={r} className="body-sm" style={{ borderTop: '1px solid var(--line)', paddingTop: 16, color: 'var(--fg)' }}>{r}</li>
            ))}
          </ul>
          <p className="label" style={{ marginBottom: 24 }}>{PIECES.vertical}</p>
          <div className="grid grid-3">
            {PIECES.items.map((p) => (
              <div key={p.name} className="col">
                <p className="label">{p.area}</p>
                <h3 className="h-block">{p.name}</h3>
                <p className="body-sm">{p.body}</p>
                <span />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="formas">
        <div className="wrap">
          <div className="section-head">
            <p className="label">{WAYS.label}</p>
            <h2 className="h-section">{WAYS.title}</h2>
            <p className="lead">{WAYS.lead}</p>
          </div>
          <div className="grid grid-4">
            {WAYS.items.map((w) => (
              <div key={w.n} className="col">
                <p className="label num">{w.n}</p>
                <h3 className="h-block">{w.name}</h3>
                <p className="body-sm">{w.body}</p>
                <p className="label" style={{ alignSelf: 'end' }}>{w.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="section-head">
            <p className="label">{LAB.label}</p>
            <h2 className="h-section">{LAB.title}</h2>
          </div>
          <div className="grid grid-4">
            {LAB.stats.map((s) => (
              <div key={s.fig} className="col">
                <p className="h-section num" style={{ fontFamily: 'var(--sans)' }}>{s.fig}</p>
                <p className="body-sm">{s.body}</p>
                <span />
                <span />
              </div>
            ))}
          </div>
          <p className="label" style={{ marginTop: 40, textTransform: 'none', letterSpacing: '0.02em' }}>{LAB.note}</p>
        </div>
      </section>

      <section className="section" id="reglas">
        <div className="wrap">
          <div className="section-head">
            <p className="label">{RULES.label}</p>
            <h2 className="h-section">{RULES.title}</h2>
          </div>
          <div className="grid grid-4">
            {RULES.items.map((r, i) => (
              <div key={r.name} className={`col ${i === 3 ? 'on' : ''}`}>
                <p className="label num">0{i + 1}</p>
                <h3 className="h-block">{r.name}</h3>
                <p className="body-sm">{r.body}</p>
                <span />
              </div>
            ))}
          </div>
          <p className="note" style={{ marginTop: 48, maxWidth: 820 }}>{RULES.limits}</p>
        </div>
      </section>

      <section className="section neutral">
        <div className="wrap" style={{ display: 'grid', gap: 24, justifyItems: 'start' }}>
          <h2 className="h-section">{CLOSING.title}</h2>
          <p className="lead">{CLOSING.body}</p>
          <a className="btn btn-primary" href={SITE.contactUrl}>{HERO.cta}</a>
        </div>
      </section>
    </>
  )
}
