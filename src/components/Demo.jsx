import LeadForm from './LeadForm'

export default function Demo(){
  return (
    <section id="demo" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Live-Demo buchen</h2>
          <p className="mt-2 text-slate-600">30–60 Min Live-Demo, individuelle Analyse, erster Prototyp, Angebot mit Zeit/Kosten.</p>
          <div className="mt-6 rounded-xl border border-slate-200 p-6">
            <LeadForm />
            <button className="mt-4 w-full rounded-lg border border-slate-300 py-2.5 text-slate-700 hover:bg-slate-50">Teste jetzt</button>
          </div>
        </div>
        <div>
          <div className="sticky top-6">
            <div className="aspect-video w-full rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
              <iframe loading="lazy" title="Scheduler" className="w-full h-full" srcdoc="<html><body style='margin:0;display:flex;align-items:center;justify-content:center;font-family:sans-serif;color:#334;'>Scheduler Placeholder</body></html>"></iframe>
            </div>
            <p className="mt-3 text-xs text-slate-500">Kalender-Embed folgt. Sie können uns direkt kontaktieren – wir bestätigen binnen 24h.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
