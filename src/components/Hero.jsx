import React, { Suspense, useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

// Lazy load Spline to avoid crashing the page if it fails to initialize
const LazySpline = React.lazy(() => import('@splinetool/react-spline'))

export default function Hero() {
  const [splineOk, setSplineOk] = useState(true)

  useEffect(() => {
    // In some environments, WebGL or cross-origin may fail — keep UI usable
    const onUnhandledRejection = (e) => {
      if (String(e?.reason || e).toLowerCase().includes('spline')) {
        setSplineOk(false)
      }
    }
    window.addEventListener('unhandledrejection', onUnhandledRejection)
    return () => window.removeEventListener('unhandledrejection', onUnhandledRejection)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="relative overflow-hidden min-h-[88vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        {splineOk ? (
          <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" /> }>
            <LazySpline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
              onError={() => setSplineOk(false)}
            />
          </Suspense>
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/80" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-white/90">KI Voice Agents für Ihr Unternehmen</span>
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          KI Voice Agents für Ihr Unternehmen
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          24/7 erreichbar, zuverlässig, integriert in Ihre Tools – für mehr qualifizierte Termine und zufriedene Kund:innen.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full bg-cyan-500/15 text-cyan-200 border border-cyan-400/30 px-3 py-1 text-sm">24/7 Verfügbarkeit</span>
          <span className="rounded-full bg-indigo-500/15 text-indigo-200 border border-indigo-400/30 px-3 py-1 text-sm">85% Zeitersparnis</span>
          <span className="rounded-full bg-emerald-500/15 text-emerald-200 border border-emerald-400/30 px-3 py-1 text-sm">Mehr qualifizierte Termine</span>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => scrollTo('solutions')} className="pointer-events-auto inline-flex items-center justify-center rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 transition">
            Lösungen entdecken
          </button>
          <button onClick={() => scrollTo('demo')} className="pointer-events-auto inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-3 transition">
            Demo buchen
          </button>
        </div>

        <div className="mt-16 flex justify-center">
          <button onClick={() => scrollTo('challenges')} className="pointer-events-auto group inline-flex flex-col items-center text-white/70 hover:text-white">
            <span className="text-sm">Mehr erfahren</span>
            <ChevronDown className="mt-1 h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
