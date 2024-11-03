import React from 'react'
import { motion } from 'framer-motion'

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-20 bg-[#f5f8fc] text-[#142455]">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl font-bold text-center mb-8 text-[#142455]"
        >
          Sobre Nós
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-2xl font-semibold text-center mb-6 text-[#ff9738]"
        >
          Conheça a RLFOCUS
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          className="text-center mb-12 text-gray-700 leading-relaxed max-w-3xl mx-auto"
        >
          Nossa equipe é composta por profissionais com mais de 20 anos de
          experiência em serviços contábeis e de auditoria, com foco em
          excelência e inovação. Nosso objetivo é apoiar empresas de diferentes
          setores na construção de uma base financeira sólida e sustentável,
          promovendo transparência, controle e conformidade.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h4 className="text-xl font-semibold text-[#ffb26b] mb-4">
              Missão
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Oferecer soluções contábeis e de auditoria com excelência,
              proporcionando segurança e transparência para a gestão financeira
              das empresas e impulsionando seu crescimento sustentável.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h4 className="text-xl font-semibold text-[#ffb26b] mb-4">Visão</h4>
            <p className="text-gray-600 leading-relaxed">
              Ser reconhecida como referência nacional em auditoria e soluções
              contábeis, elevando continuamente o padrão de qualidade e ética na
              prestação de serviços.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
            className="bg-white p-6 rounded-lg shadow-lg col-span-1 md:col-span-2"
          >
            <h4 className="text-xl font-semibold text-[#ffb26b] mb-4">
              Valores
            </h4>
            <ul className="text-gray-600 leading-relaxed space-y-2 list-disc list-inside">
              <li>
                <span className="font-semibold">Comprometimento:</span> Nosso
                foco é o sucesso e a tranquilidade dos nossos clientes.
              </li>
              <li>
                <span className="font-semibold">Inovação:</span> Utilizamos
                tecnologia de ponta para trazer soluções eficientes e modernas.
              </li>
              <li>
                <span className="font-semibold">Ética:</span> Integridade e
                confidencialidade em cada interação e processo.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
