import React from 'react'
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
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
