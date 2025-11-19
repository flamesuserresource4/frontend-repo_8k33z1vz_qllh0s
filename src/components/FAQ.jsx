import { useEffect, useState } from 'react'

function AccordionItem({ q, a, open, onToggle }) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <button onClick={onToggle} className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 font-medium">
        {q}
      </button>
      {open && (
        <div className="px-4 py-3 text-slate-700 text-sm bg-white">{a}</div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [faqs, setFaqs] = useState([])
  const [open, setOpen] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/faqs`)
        const data = await res.json()
        setFaqs(data.items || [])
      } catch {}
    }
    load()
  }, [])

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Häufige Fragen</h2>
        <p className="mt-2 text-slate-600 text-center">Transparenz über KI-Einsatz: jederzeit Weiterleitung zu Mitarbeitenden möglich.</p>
        <div className="mt-8 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.slug}
              q={f.question}
              a={f.answerMd}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
