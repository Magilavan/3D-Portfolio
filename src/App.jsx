import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import SignalStrip from './components/SignalStrip.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Log from './components/Log.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-base font-body text-ink">
      <Nav />
      <Hero />
      <SignalStrip />
      <About />
      <Skills />
      <Projects />
      <Log />
      <Contact />
      <Footer />
    </div>
  );
}
