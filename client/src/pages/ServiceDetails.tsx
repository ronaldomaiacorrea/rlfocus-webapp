import { Section } from '@/types'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ServiceDetails = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { heading, content } = location.state

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="py-16 bg-sky-100 text-blue-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center md:mt-20 mt-14 mb-8 text-orange-400"
        >
          {heading}
        </motion.h2>
        <div className="space-y-12">
          {content.map((section: Section, sectionIndex: number) => (
            <motion.div
              key={sectionIndex}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-blue-800">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                  >
                    <CheckCircle className="w-6 h-6 text-orange-400 mt-1 mr-4 flex-shrink-0" />
                    <p className="md:text-xl text-lg leading-relaxed">
                      <span className="font-semibold">{item.boldText}</span>{' '}
                      {item.text}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="
              flex 
              items-center 
              gap-2
              bg-blue-800 
              text-white 
              px-6 
              py-3 
              rounded-lg 
              text-lg 
              font-medium 
              hover:bg-blue-700 
              transition-colors 
              duration-300
            "
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetails
