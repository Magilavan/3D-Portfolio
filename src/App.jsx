import './index.css'
import Navbar from './components/Navbar.jsx'
import Starfield from './canvas/Starfield.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Achievements from './sections/Achievements.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  return (
    <div className="relative min-h-screen text-slate-100 bg-transparent">
      <Starfield />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  )
}

export default App
