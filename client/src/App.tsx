import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import Services from './components/Activities/Services'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import AboutUs from './components/About/AboutUs'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Router basename="/rlfocus-webapp">
        <Navigation />
        <Hero />
        <AboutUs />
        <Services />
        <Team />
        <Contact />
        <Footer />
      </Router>
    </div>
  )
}

export default App
