import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Card from '../ui/Card'

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-sky-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl font-bold text-center mb-8 text-indigo-900"
        >
          Sobre Nós
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-2xl font-semibold text-center mb-6 text-indigo-00"
        >
          Conheça a RLFOCUS Auditoria e Soluções Contábeis
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="text-xl text-center mb-12 text-gray-700 leading-relaxed max-w-3xl mx-auto"
        >
          Na <span className="font-bold text-orange-500">RLFOCUS</span>,
          transformamos números em inteligência estratégica para impulsionar o
          sucesso do seu negócio. Com soluções contábeis, fiscais e financeiras
          integradas, ajudamos empresas a tomar decisões mais assertivas,
          simplificando processos e maximizando resultados.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card
            title="Missão"
            message="Oferecer soluções contábeis e de auditoria com excelência,
              proporcionando segurança e transparência para a gestão financeira
              das empresas e impulsionando seu crescimento sustentável."
            centerContent
          />
          <Card
            title="Visão"
            message="Ser reconhecida como referência nacional em auditoria e soluções
              contábeis, elevando continuamente o padrão de qualidade e ética na
              prestação de serviços."
            centerContent
          />
          <Card
            title="Valores"
            spanColumns={2}
            message={
              <ul className="text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
                <li>
                  <span className="font-semibold">Comprometimento:</span> Nosso
                  foco é o sucesso e a tranquilidade dos nossos clientes.
                </li>
                <li>
                  <span className="font-semibold">Excelência:</span> Oferecer
                  serviços contábeis e de auditoria que não apenas atendem, mas
                  superam as expectativas dos clientes, garantindo segurança e
                  transparência na gestão financeira.
                </li>
                <li>
                  <span className="font-semibold">Inovação:</span> Investimento
                  em tecnologia e processos inovadores, assegurando que as
                  soluções contábeis sejam modernas e adaptadas às necessidades
                  específicas de cada cliente.
                </li>
                <li>
                  <span className="font-semibold">Integridade:</span> A
                  Confidencialidade, ética e a transparência nas interações com
                  clientes e parceiros são priorizadas, estabelecendo relações
                  de confiança duradouras.
                </li>
              </ul>
            }
          />
        </div>
        <div className="flex justify-center m-8">
          <Link to="/sobre">
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeIn' }}
              className="
              bg-orange-400 
              text-xl 
              text-center 
              text-white 
              font-semibold 
              px-8
              py-3                        
              md:inline-block            
              rounded-lg 
              hover:bg-orange-300 
              hover:text-indigo-900 
              items-center 
              transition-colors 
              duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Saiba mais
            </motion.a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
