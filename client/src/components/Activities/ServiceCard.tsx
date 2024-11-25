import React from 'react'
import { motion } from 'framer-motion'
import { Service } from '../../types'
import { useNavigate } from 'react-router-dom'

interface ServiceCardProps {
  service: Service
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate()
  const IconComponent = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 max-h-screen shadow-lg hover:shadow-xl  hover:cursor-pointer transition-shadow text-center flex flex-col h-full items-center border-b-2 border-transparent hover:border-orange-500"
      onClick={() =>
        navigate('/detalhes', {
          state: { heading: service.heading, content: service.content },
        })
      }
    >
      <IconComponent className="text-orange-400 w-12 h-12 mb-4" />
      <h3 className="md:text-2xl text-xl font-semibold mb-2 text-indigo-700">
        {service.title}
      </h3>
      <p className="md:text-xl text-lg text-gray-600">{service.description}</p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  )
}

export default ServiceCard
