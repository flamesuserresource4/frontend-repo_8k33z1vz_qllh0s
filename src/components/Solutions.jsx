import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/Tabs'
import { CalendarDays, ShieldHalf, BellRing, PhoneCall } from 'lucide-react'

const solutions = [
  { key: 'termin', title: 'Termin-Lead-Agent', icon: CalendarDays, bullets: ['Kalender-Integration', 'Lead-Scoring', 'Erinnerungen', 'Doppelbuchungs-Schutz'] },
  { key: 'service', title: 'Service L1/L2', icon: ShieldHalf, bullets: ['Ticket & Wissensbasis', 'Eskalation', 'Multi-Channel', 'SLA-Handling'] },
  { key: 'reminder', title: 'Outbound-Reminder', icon: BellRing, bullets: ['Termin-/Zahlungs-Erinnerungen', 'Follow-ups', 'Personalisierung', 'Automatisierung'] },
  { key: 'after', title: 'After-Hours-Hotline', icon: PhoneCall, bullets: ['24/7 Erreichbarkeit', 'Notfall-Erkennung', 'Rückruf-Koordination', 'Eskalation'] },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Unsere Lösungen</h2>
            <p className="mt-2 text-slate-600">Von Terminbuchung bis Support – modular, sicher, skalierbar.</p>
          </div>
        </div>

        <Tabs defaultValue="termin" className="mt-8">
          <TabsList>
            {solutions.map((s) => (
              <TabsTrigger key={s.key} value={s.key}>{s.title}</TabsTrigger>
            ))}
          </TabsList>

          {solutions.map((s) => (
            <TabsContent key={s.key} value={s.key}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {s.bullets.map((b) => (
                  <div key={b} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition">
                    <s.icon className="h-6 w-6 text-cyan-600" />
                    <h3 className="mt-4 font-semibold text-slate-900">{b}</h3>
                    <p className="mt-1 text-sm text-slate-600">Mehr Effizienz durch Automatisierung und klare Prozesse.</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
