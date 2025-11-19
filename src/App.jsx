import Hero from './components/Hero'
import Challenges from './components/Challenges'
import Solutions from './components/Solutions'
import Demo from './components/Demo'
import FAQ from './components/FAQ'
import Trust from './components/Trust'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Challenges />
      <Solutions />
      <Demo />
      <Trust />
      <FAQ />
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App