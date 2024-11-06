import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { services } from '@/data/content'

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ServiceCard key={index} service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
