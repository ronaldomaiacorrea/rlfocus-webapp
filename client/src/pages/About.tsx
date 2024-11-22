import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section id="about" className="py-20 bg-sky-100 text-blue-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-center m-8 text-orange-400"
        >
          Transformando desafios em soluções concretas para o sucesso do seu
          negócio.
        </motion.h2>
        <motion.div
          className="space-y-8 text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p>
            Na <span className="font-semibold">RLFOCUS</span>, somos apaixonados
            por contabilidade e pelo impacto que geramos ao apoiar nossos
            clientes na construção de um futuro seguro e estratégico. Mais que
            números e relatórios, entregamos inteligência, orientando empresas
            com soluções contábeis, fiscais e financeiras integradas que
            otimizam a tomada de decisão.
          </p>
          <p>
            Com uma equipe altamente capacitada, oferecemos suporte flexível e
            personalizado, ideal para negócios em expansão, reestruturação ou em
            busca de eficiência. Nossa atuação abrange auditoria, compliance e
            planejamento tributário, sempre simplificando processos e
            impulsionando a performance financeira do seu negócio com
            excelência, proximidade e inovação.
          </p>
        </motion.div>
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-6">Nossos Diferenciais</h3>
          <ul className="space-y-6">
            {[
              {
                title: 'Experiência e Confiabilidade:',
                text: 'Mais de 20 anos de expertise em auditoria e consultoria para empresas de todos os portes.',
              },
              {
                title: 'Relacionamento e Proximidade:',
                text: 'Cultivamos conexões duradouras com nossos clientes, com um atendimento que reflete comprometimento.',
              },
              {
                title: 'Soluções Integradas e Personalizadas:',
                text: 'Contabilidade, auditoria, gestão tributária e financeira sob medida para cada necessidade.',
              },
              {
                title: 'Compromisso com a Inovação:',
                text: 'Acompanhamos as mudanças do setor para oferecer sempre as melhores práticas e tecnologia.',
              },
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <CheckCircle className="w-6 h-6 text-orange-400 mt-1 mr-4 flex-shrink-0" />
                <p className="text-xl">
                  <strong>{item.title}</strong> {item.text}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="mt-16 text-xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p>
            A <span className="font-semibold">RLFOCUS</span> é a parceira
            estratégica que sua empresa precisa para crescer com confiança e
            eficiência, promovendo segurança, governança e crescimento.
          </p>
          <p className="mt-6 text-xl">
            <strong>Migre sua contabilidade:</strong> Assumimos todos os
            trâmites burocráticos para a transição contábil, em colaboração com
            o seu contador atual. Garantimos uma migração prática e sem
            complicações para você.
          </p>
          <p className="mt-6">
            <strong>Benefícios:</strong> Orientação segura e personalizada para
            atender às necessidades contábeis e fiscais da sua empresa. Com
            análises detalhadas e controle cuidadoso, minimizamos falhas e
            retrabalhos, proporcionando tranquilidade para que você opere de
            forma totalmente alinhada com as exigências legais e regulatórias.
          </p>
          <div className="flex justify-center m-8">
            <motion.button
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
              <Link to="/sobre">Seja nosso cliente!</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
