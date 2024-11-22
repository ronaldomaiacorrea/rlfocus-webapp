import React, { Suspense } from 'react'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Spinner from './components/ui/Spinner'

const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
