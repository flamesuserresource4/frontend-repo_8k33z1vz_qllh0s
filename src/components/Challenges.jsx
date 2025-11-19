import { AlertTriangle, CalendarX2, Headset, PhoneOff, Database, BarChart3 } from 'lucide-react'

const items = [
  { icon: AlertTriangle, title: 'Verpasste Geschäftszeiten', desc: 'Anrufer außerhalb der Öffnungszeiten verlieren.' },
  { icon: CalendarX2, title: 'Termin-Doppelbuchungen', desc: 'Unklare Prozesse führen zu Überschneidungen.' },
  { icon: Headset, title: 'Hoher Personalaufwand', desc: 'Wiederkehrende Anfragen binden Kapazitäten.' },
  { icon: PhoneOff, title: 'Verlorene Anrufe', desc: 'Lange Wartezeiten mindern die Zufriedenheit.' },
  { icon: Database, title: 'Inkonsistente Daten', desc: 'Fehlende Standards erschweren Auswertungen.' },
  { icon: BarChart3, title: 'Fehlende Insights', desc: 'Keine Transparenz über Peaks und Performance.' },
]

export default function Challenges() {
  return (
    <section id="challenges" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ihre Herausforderungen</h2>
        <p className="mt-2 text-slate-600">Typische Hürden für Handwerksbetriebe – wir nehmen sie Ihnen ab.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-xl border border-slate-200 p-6 hover:shadow-lg transition">
              <it.icon className="h-6 w-6 text-cyan-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
