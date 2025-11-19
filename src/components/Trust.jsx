import { ShieldCheck, Fingerprint, BadgeCheck } from 'lucide-react'

const badges = [
  { slug: 'gdpr', title: 'DSGVO-konform', Icon: ShieldCheck, desc: 'Datenverarbeitung in der EU' },
  { slug: 'iso', title: 'ISO-zertifiziert', Icon: BadgeCheck, desc: 'Geprüfte Prozesse & Audits' },
  { slug: 'made-de', title: 'Made in Germany', Icon: Fingerprint, desc: 'Entwickelt & betrieben in DE' },
]

export default function Trust() {
  return (
    <section id="trust" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-medium text-slate-600">150+ Unternehmen vertrauen uns</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {badges.map(({ slug, title, Icon, desc }) => (
            <div key={slug} className="rounded-xl border border-slate-200 p-6 flex items-start gap-4">
              <Icon className="h-6 w-6 text-emerald-600" />
              <div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
