import React from 'react'
import { motion } from 'framer-motion'
import background from '@/assets/backgroudPic.jpg'
import { useWhatsAppLink } from '@/hooks/useWhatsAppLink'

const Hero: React.FC = () => {
  const phoneNumber = '5511998765432'
  const message = 'Olá, gostaria de mais informações sobre os seus serviços!'
  const whatsappLink = useWhatsAppLink(phoneNumber, message)

  const listItems = [
    'Auditoria Contábil, Auditoria de TI e Compliance',
    'Contabilidade e Gestão Financeira',
    'Consultoria Estratégica e Empresarial',
    'Tributos e Planejamento Fiscal',
    'Gestão de Folha de Pagamento e Departamento Pessoal',
  ]

  const checkIcon = (
    <svg
      className="w-6 h-6 mr-2 text-orange-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    </svg>
  )

  return (
    <section
      id="home"
      className="relative bg-cover bg-center pt-24 pb-20 min-h-[800px] flex items-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="absolute inset-0 bg-[#142455] opacity-70"></div>
      <div className="relative max-w-[1200px] mx-auto px-[20px] z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-[55%] md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-orange-400 mb-10 text-center md:text-left pt-4">
              Excelência que Impulsiona Negócios
            </h1>
            <div className="text-2xl text-white md:mb-10 md:text-2xl">
              Na RLFOCUS, unimos expertise, tecnologia e visão estratégica para
              oferecer soluções contábeis e de auditoria sob medida.
            </div>
            <motion.a
              href={whatsappLink}
              className="
              bg-orange-500 
              text-xl 
              text-center 
              text-white 
              font-semibold 
              px-8
              py-3           
              hidden
              md:inline-block            
              rounded-lg 
              hover:bg-orange-400 
              hover:text-indigo-900 
              items-center 
              transition-colors 
              duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Abra sua empresa agora!
            </motion.a>
          </motion.div>

          <motion.div
            className="md:w-[45%] md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#1e357e] p-6 rounded-xl shadow-lg">
              <ul className="md:text-xl text-white space-y-3">
                {listItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    {checkIcon}
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.a
            href={whatsappLink}
            className="
              md:hidden
              bg-orange-500 
              text-xl 
              text-center 
              text-white
              font-semibold 
              px-8
              py-3              
              rounded-lg 
              hover:bg-orange-400
              hover:text-indigo-900 
              items-center 
              transition-colors 
              duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Abra sua empresa agora!
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Hero
