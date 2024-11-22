import React from 'react'
import ContactForm from './ContactForm'
import { Mail, MapPin, Phone } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#142455] text-orange-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-400">
          Entre em Contato
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="text-gray-50 mr-4" />
              <p className="text-xl">contato@rlfocus.com.br</p>
            </div>
            <div className="flex items-center">
              <Phone className="text-gray-50 mr-4 text-xl" />
              <p className="text-xl">(61) 99171-0638 - Rafael Cavalheri</p>
            </div>
            <div className="flex items-center">
              <Phone className="text-gray-50 mr-4 text-xl" />
              <p className="text-xl">(12) 99187-6712 - Luis Fernando Cappi</p>
            </div>
            <div className="flex items-center">
              <Phone className="text-gray-50 mr-4 text-xl" />
              <p className="text-xl">
                (11) 98140-0879 - Luiz Fernando de Paula
              </p>
            </div>
            <div className="flex items-center">
              <MapPin className="text-gray-50 mr-4" />
              <div className="flex flex-col">
                <p className="text-xl">Av. Carlos Drummond de Andrade, 153</p>
                <p className="text-xl">Jd. Santa Maria – Jacareí – SP</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
