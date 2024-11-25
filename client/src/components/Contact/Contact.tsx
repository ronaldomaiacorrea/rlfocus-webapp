import React from 'react'
import ContactForm from './ContactForm'
import { Mail, MapPin, Phone } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#142455] text-orange-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="md:text-4xl text-3xl font-bold text-center mb-12 text-orange-400">
          Entre em Contato
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:text-xl text-lg">
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="text-gray-50 mr-4" />
              <p>contato@rlfocus.com.br</p>
            </div>
            <div className="flex items-center">
              <Phone className="text-gray-50 mr-4" />
              <div className="flex flex-col gap-2">
                <div>(61) 99171-0638</div>
                <div className="">Rafael Cavalheri</div>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="text-gray-50 mr-4" />
              <div className="flex flex-col gap-2">
                <div>(12) 99187-6712</div>
                <div>Luis Fernando Cappi</div>
              </div>
            </div>
            <div className="flex items-center">
              <Phone className="text-gray-50 mr-4" />
              <div className="flex flex-col gap-2">
                <div>(11) 98140-0879</div>
                <div>Luiz Fernando de Paula</div>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-gray-50 mr-4" />
              <div className="flex flex-col gap-2">
                <p>Av. Carlos Drummond de Andrade, 153</p>
                <p>Jd. Santa Maria – Jacareí – SP</p>
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
