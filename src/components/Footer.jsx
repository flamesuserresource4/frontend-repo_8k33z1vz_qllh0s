export default function Footer(){
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold text-slate-900">Kontakt</h4>
          <p className="text-sm text-slate-600 mt-2">Mail: hallo@voiceforge.example<br/>Tel: +49 30 123456</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Rechtliches</h4>
          <ul className="mt-2 text-sm text-slate-600 space-y-1">
            <li><a href="#" className="hover:underline">Impressum</a></li>
            <li><a href="#" className="hover:underline">Datenschutz</a></li>
            <li><a href="#" className="hover:underline">AGB</a></li>
            <li className="text-xs text-slate-500">Hinweis: KI-gestützte Assistenz</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">VoiceForge</h4>
          <p className="text-sm text-slate-600 mt-2">Omnichannel KI-Voice & Chat-Agenten für Handwerk. 24/7 erreichbar, skalierbar und datenschutzkonform.</p>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-8">© {new Date().getFullYear()} VoiceForge</div>
    </footer>
  )
}
