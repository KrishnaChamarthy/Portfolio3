import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main className="min-h-screen bg-paper font-mono text-ink">
              <Nav />
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Footer />
            </main>
          }
        />
        <Route
          path="/projects/:projectSlug"
          element={
            <main className="min-h-screen bg-paper font-mono text-ink">
              <ProjectDetail />
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
