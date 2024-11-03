import React from 'react'
import { motion } from 'framer-motion'
import background from '@/assets/backgroudPic.jpg'

const Hero: React.FC = () => {
  const listItems = [
    'Contabilidade Empresarial',
    'Auditoria Financeira',
    'Consultoria Tributária',
  ]

  const checkIcon = (
    <svg
      className="w-6 h-6 mr-2 text-[#ff9738]"
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
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#142455] opacity-70"></div>

      <div className="relative max-w-[1200px] mx-auto px-[20px] z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="md:w-[55%] mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#ffb26b] mb-6">
              Excelência que Impulsiona Negócios
            </h1>
            <p className="text-2xl text-[#ffffff] mb-8">
              Na RLFOCUS, unimos expertise, tecnologia e visão estratégica para
              oferecer soluções contábeis e de auditoria sob medida.
            </p>
            <motion.a
              href="https://wa.me/SEUNUMERO"
              className="bg-[#ff9738] text-lg text-[#ffffff] px-8 py-3 rounded-lg hover:bg-[#ffcd9e] inline-flex items-center transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
              Fale Conosco pelo WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            className="md:w-[45%] md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-[#1e357e] p-6 rounded-xl shadow-lg">
              <ul className="text-lg text-[#ffffff] space-y-3">
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
        </div>
      </div>
    </section>
  )
}

export default Hero
