import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Resume from './components/Resume'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 flex-grow">
        <About />
        <Skills />
        <Projects />
        <Resume/>
        <Contact />
      </main>
      <footer className="text-center py-4 mt-8">
        <p>&copy; 2025 Dewmina. All rights reserved.</p>
      </footer>
    </div>
  )
}

