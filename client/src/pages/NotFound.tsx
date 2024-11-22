import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Página não encontrada</h2>
      <p className="text-lg text-center mb-6">
        Desculpe, a página que você está tentando acessar não existe. Isso pode
        ter ocorrido porque:
      </p>
      <ul className="text-lg list-disc list-inside mb-6">
        <li>O endereço digitado está incorreto.</li>
        <li>A página foi movida ou removida.</li>
      </ul>
      <p className="text-lg text-center mb-6">
        Clique no botão abaixo para voltar à página inicial.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
      >
        Voltar para a página inicial
      </Link>
    </div>
  )
}

export default NotFound
