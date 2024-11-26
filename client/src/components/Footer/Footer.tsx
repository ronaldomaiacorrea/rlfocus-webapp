import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer: React.FC = () => {
  const navigate = useNavigate()

  const navItems = [
    { href: '/#home', label: 'Página Inicial' },
    { href: '/#about', label: 'Sobre Nós' },
    { href: '/#services', label: 'Serviços' },
    { href: '/#team', label: 'Equipe' },
    { href: '/#contact', label: 'Contato' },
  ]

  const handleNavigation = (href: string) => {
    const [path, hash] = href.split('#')
    if (path) {
      navigate(path, { replace: false })
    }
    setTimeout(() => {
      const section = document.getElementById(hash)
      const offset = 100
      if (section) {
        const top =
          section.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              RLFOCUS AUDITORIA E SOLUÇÕES CONTÁBEIS LTDA
            </h3>
            <p>CNPJ: 38.244.866/0001-10</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => handleNavigation(href)}
                    className="hover:text-blue-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p>contato@rlfocus.com.br</p>
            <p>(11) 9814-0879</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} RLFOCUS LTDA. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
