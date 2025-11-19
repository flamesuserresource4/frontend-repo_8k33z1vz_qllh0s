import { useState, useEffect } from 'react'

export default function CookieBanner(){
  const [visible, setVisible] = useState(false)
  useEffect(()=>{ if(!localStorage.getItem('cookie-consent')) setVisible(true) },[])
  if(!visible) return null
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-2xl w-[95%] bg-white border border-slate-200 rounded-xl shadow-xl p-4">
      <p className="text-sm text-slate-700">Wir verwenden Cookies zur Verbesserung der Nutzererfahrung. Details in unserer Datenschutzrichtlinie.</p>
      <div className="mt-3 flex gap-2">
        <button onClick={()=>{localStorage.setItem('cookie-consent','all');setVisible(false)}} className="rounded-lg bg-slate-900 text-white px-4 py-2 text-sm">Akzeptieren</button>
        <button onClick={()=>{localStorage.setItem('cookie-consent','necessary');setVisible(false)}} className="rounded-lg border border-slate-300 px-4 py-2 text-sm">Nur notwendige</button>
      </div>
    </div>
  )
}
