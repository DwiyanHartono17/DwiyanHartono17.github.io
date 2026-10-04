import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import FeaturedProjects from './components/FeaturedProjects'
import OtherProjects from './components/OtherProjects'
import Expertise from './components/Expertise'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="min-h-screen">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar theme={theme} onToggle={toggle} />
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <FeaturedProjects />
        <OtherProjects />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
