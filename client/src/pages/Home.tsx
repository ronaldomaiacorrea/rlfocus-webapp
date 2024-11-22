import AboutUs from '@/components/About/AboutUs'
import Services from '@/components/Activities/Services'
import Hero from '@/components/Hero/Hero'
import Team from '@/components/Team/Team'
import Contact from '@/components/Contact/Contact'

const Home = () => {
  console.log('it works')
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Team />
      <Contact />
    </>
  )
}

export default Home
