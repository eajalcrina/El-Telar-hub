import type { Metadata } from 'next'
import Loom from '@/components/Loom'
import { SITE } from '@/data/site'
import { THREADS } from '@/data/telar'
import {
  META, INTRO, ASK, OPTIONS, WORKSHOP, DELIVERABLES, CALENDAR, NEXT_PIECE, TERMS, TEAM, CLOSE,
} from '@/data/propuesta-happy-plaza'

export const metadata: Metadata = {
  title: 'Propuesta para Happy Plaza',
  description: 'Capacitación en IA para los mandos medios de Happy Plaza, en versión virtual y presencial en Chimbote, y el primer paso de su telar.',
  robots: { index: false, follow: false },
  alternates: { canonical: `/propuestas/${META.slug}` },
}

const soles = (n: number) => `S/ ${n.toLocaleString('es-PE').replace(/,/g, '.')}`

function Head({ label, title, lead }: { label: string; title: string; lead?: string }) {
  return (
    <div className="section-head">
      <p className="label">{label}</p>
      <h2 className="h-section">{title}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  )
}

export default function HappyPlaza() {
  const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent('Propuesta Happy Plaza: elegimos opción')}`
  return (
    <>
      <section className="dark" style={{ padding: '72px 0 88px' }}>
        <div className="wrap hero-grid">
          <div style={{ display: 'grid', gap: 28 }}>
            <p className="label rise" style={{ color: 'var(--accent)' }}>{INTRO.label}</p>
            <h1 className="h-display rise" style={{ ['--i' as string]: 1, fontSize: 'clamp(38px, 5.4vw, 68px)' }}>{INTRO.title}</h1>
            <p className="lead rise" style={{ ['--i' as string]: 2 }}>{INTRO.lead}</p>
            <div className="rise" style={{ ['--i' as string]: 3, display: 'flex', flexWrap: 'wrap', gap: 24 }}>
              <p className="label">{META.city}, {META.date}</p>
              <p className="label">Válida hasta el {META.validUntil}</p>
            </div>
          </div>
          <div className="rise no-print" style={{ ['--i' as string]: 2 }}>
            <Loom threads={THREADS} pieces={['Taller', 'Vence', 'Cobra', 'Atiende', 'Campaña', 'Pulso']} active={0} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Head label={ASK.label} title={ASK.title} />
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 0, maxWidth: 880 }}>
            {ASK.items.map((item, i) => (
              <li key={item} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 16, padding: '18px 0', borderTop: `1px solid ${i === 0 ? 'var(--fg)' : 'var(--line)'}` }}>
                <span className="label num">0{i + 1}</span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p className="note" style={{ marginTop: 40, maxWidth: 880 }}>{ASK.answer}</p>
        </div>
      </section>

      <section className="section neutral" id="opciones">
        <div className="wrap">
          <Head label="Opciones" title="Dos formatos para el mismo taller" lead="El contenido y los entregables son los mismos. Cambia la forma de trabajar con el equipo." />
          <div className="grid grid-2" style={{ alignItems: 'stretch' }}>
            {OPTIONS.map((o) => (
              <article key={o.id} className={o.recommended ? 'dark' : ''} style={{ padding: 32, display: 'grid', gap: 18, alignContent: 'start', background: o.recommended ? 'var(--dark)' : 'var(--white)', border: o.recommended ? '1px solid var(--dark)' : '1px solid var(--line)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
                  <p className="label">Opción {o.id}</p>
                  {o.recommended ? <p className="label" style={{ color: 'var(--accent)' }}>Recomendada</p> : null}
                </div>
                <h3 className="h-block">{o.name}</h3>
                <p className="body-sm">{o.format}</p>
                <p style={{ fontSize: 44, lineHeight: 1, letterSpacing: '-0.03em' }}>{soles(o.price)}</p>
                <p className="label" style={{ textTransform: 'none', letterSpacing: '0.02em' }}>Unos {soles(o.perPerson)} por participante, sin IGV</p>
                {o.extra ? <p className="body-sm">{o.extra}</p> : null}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
                  {o.includes.map((inc) => (
                    <li key={inc} className="body-sm" style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 8 }}>
                      <span aria-hidden="true" style={{ color: 'var(--accent)' }}>✓</span>
                      <span style={{ color: o.recommended ? 'var(--on-dark)' : 'var(--fg)' }}>{inc}</span>
                    </li>
                  ))}
                </ul>
                <a className={`btn ${o.recommended ? 'btn-primary' : 'btn-ghost'} no-print`} style={{ marginTop: 8, justifySelf: 'start' }} href={`${mailto}${encodeURIComponent(` ${o.id}`)}`}>Elegir opción {o.id}</a>
              </article>
            ))}
          </div>
          <p className="body-sm" style={{ marginTop: 24, maxWidth: 760 }}>Recomendamos la opción presencial: el recorrido por las áreas alimenta el mapa de piezas y permite trabajar con sus archivos en la sala.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Head label={WORKSHOP.label} title={WORKSHOP.title} lead={WORKSHOP.before} />
          <div className="grid grid-4">
            {WORKSHOP.modules.map((m) => (
              <div key={m.n} className="col">
                <p className="label num">{m.n}</p>
                <h3 className="h-block">{m.name}</h3>
                <p className="body-sm">{m.body}</p>
                <span />
              </div>
            ))}
          </div>
          <h3 className="h-block" style={{ margin: '72px 0 24px' }}>{WORKSHOP.exercisesTitle}</h3>
          <div className="table-wrap">
            <table>
              <thead><tr><th scope="col">Área</th><th scope="col">Ejercicio</th></tr></thead>
              <tbody>
                {WORKSHOP.exercises.map((e) => (
                  <tr key={e.area}><td style={{ whiteSpace: 'nowrap' }}>{e.area}</td><td>{e.body}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section neutral">
        <div className="wrap">
          <Head label={DELIVERABLES.label} title={DELIVERABLES.title} />
          <div className="grid grid-4">
            {DELIVERABLES.items.map((d, i) => (
              <div key={d.name} className={`col ${i === 0 ? 'on' : ''}`}>
                <p className="label num">0{i + 1}</p>
                <h3 className="h-block">{d.name}</h3>
                <p className="body-sm">{d.body}</p>
                <span />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Head label={CALENDAR.label} title={CALENDAR.title} lead={CALENDAR.note} />
          <div className="table-wrap">
            <table>
              <thead><tr><th scope="col">Cuándo</th><th scope="col">Qué</th></tr></thead>
              <tbody>
                {CALENDAR.rows.map((r) => (<tr key={r.when}><td>{r.when}</td><td>{r.what}</td></tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <Head label={NEXT_PIECE.label} title={NEXT_PIECE.title} lead={NEXT_PIECE.lead} />
          <div className="hero-grid" style={{ alignItems: 'start' }}>
            <div style={{ display: 'grid', gap: 20, borderTop: '1px solid var(--accent)', paddingTop: 24 }}>
              <p className="label" style={{ color: 'var(--accent)' }}>Primera pieza sugerida</p>
              <h3 className="h-section">{NEXT_PIECE.piece.name}</h3>
              <p className="lead">{NEXT_PIECE.piece.body}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40 }}>
                <div><p className="label">Instalación</p><p style={{ fontSize: 32 }}>{soles(NEXT_PIECE.piece.install)}</p></div>
                <div><p className="label">Mensualidad</p><p style={{ fontSize: 32 }}>{soles(NEXT_PIECE.piece.monthly)}</p></div>
              </div>
              <p className="body-sm">{NEXT_PIECE.piece.founder}</p>
              <p className="body-sm">{NEXT_PIECE.piece.creditRule}</p>
            </div>
            <div style={{ display: 'grid', gap: 20 }}>
              <p className="body-sm" style={{ color: 'var(--on-dark)' }}>{NEXT_PIECE.rule}</p>
              <p className="label">Otras piezas posibles</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {NEXT_PIECE.others.map((p) => (
                  <li key={p} style={{ padding: '12px 0', borderTop: '1px solid var(--line-dark)' }}>{p}</li>
                ))}
              </ul>
              <a className="link body-sm no-print" style={{ color: 'var(--on-dark)' }} href="/#piezas">Qué hace cada pieza</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="inversion">
        <div className="wrap">
          <Head label={TERMS.label} title={TERMS.title} />
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div className="table-wrap">
              <table>
                <tbody>
                  {TERMS.rows.map((r) => (<tr key={r.item}><td>{r.item}</td><td className="r num" style={{ whiteSpace: 'nowrap' }}>{r.amount}</td></tr>))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'grid', gap: 32 }}>
              <div style={{ display: 'grid', gap: 10 }}>
                <p className="label">Condiciones</p>
                {TERMS.conditions.map((c) => <p key={c} className="body-sm">{c}</p>)}
              </div>
              <div style={{ display: 'grid', gap: 10 }}>
                <p className="label">Lo que necesitamos de ustedes</p>
                {TERMS.needs.map((c) => <p key={c} className="body-sm">{c}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section neutral">
        <div className="wrap">
          <Head label={TEAM.label} title={TEAM.title} />
          <div className="grid grid-3">
            {TEAM.people.map((p) => (
              <div key={p.name} className="col">
                <p className="label">{p.role}</p>
                <h3 className="h-block">{p.name}</h3>
                <p className="body-sm">{p.body}</p>
                <span />
              </div>
            ))}
          </div>
          <p className="body-sm" style={{ marginTop: 40 }}>
            El Telar es el sistema de IA para empresas de <a className="link" href={SITE.ownerUrl}>Redesign Lab</a>.
          </p>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap" style={{ display: 'grid', gap: 24, justifyItems: 'start' }}>
          <h2 className="h-section">{CLOSE.title}</h2>
          <p className="lead">{CLOSE.body}</p>
          <div className="actions no-print">
            <a className="btn btn-primary" href={mailto}>Responder a la propuesta</a>
            <a className="btn btn-ghost" href="#opciones">Ver opciones</a>
          </div>
        </div>
      </section>
    </>
  )
}
