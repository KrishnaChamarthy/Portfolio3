import About from './components/About'
import Achievements from './components/Achievements'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <main className="min-h-screen bg-paper font-mono text-ink">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Footer />
    </main>
  )
}

export default App
