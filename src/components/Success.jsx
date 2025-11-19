export default function Success(){
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-slate-50 to-white px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Vielen Dank! Ihre Anfrage ist eingegangen.</h1>
        <p className="mt-3 text-slate-700">Wir melden uns in der Regel innerhalb von 24 Stunden. Prüfen Sie bitte auch Ihren SPAM-Ordner.</p>
        <a href="/" className="inline-flex mt-6 rounded-lg bg-slate-900 text-white px-5 py-2.5 font-semibold hover:bg-slate-800">Zurück zur Startseite</a>
      </div>
    </div>
  )
}
