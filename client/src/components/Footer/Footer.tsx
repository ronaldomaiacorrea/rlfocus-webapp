import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RLFOCUS</h3>
            <p>Excelência em Auditoria e Soluções Contábeis</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-200">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-200">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-200">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p>contato@rlfocus.com.br</p>
            <p>(XX) XXXX-XXXX</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} RLFOCUS. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
