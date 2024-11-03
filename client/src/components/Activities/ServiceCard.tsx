import React from 'react'
import { motion } from 'framer-motion'
import { Service } from '../../types'

interface ServiceCardProps {
  service: Service
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 shadow-lg hover:shadow-xl  hover:cursor-pointer transition-shadow text-center flex flex-col items-center border-b-2 border-transparent hover:border-orange-500"
    >
      <IconComponent className="text-[#ff9738] w-12 h-12 mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-[#142455]">
        {service.title}
      </h3>
      <p className="text-gray-600">{service.description}</p>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ff9738] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  )
}

export default ServiceCard
