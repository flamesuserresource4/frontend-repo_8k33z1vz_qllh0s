import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import SuccessPage from './SuccessPage'
import './index.css'
import { applySEO, injectJSONLD } from './seo'

function SEOInit(){
  useEffect(()=>{
    applySEO({
      title: 'VoiceForge – KI Voice Agents für Handwerksbetriebe',
      description: '24/7 Erreichbarkeit, mehr qualifizierte Termine und automatisierter Support. Jetzt Demo anfragen.'
    })
    injectJSONLD('Organization', {
      name: 'VoiceForge',
      url: window.location.origin,
      logo: window.location.origin + '/favicon.svg'
    })
  }, [])
  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SEOInit />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
