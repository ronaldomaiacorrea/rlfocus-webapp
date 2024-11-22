import React, { useState } from 'react'

interface FormData {
  name: string
  email: string
  message: string
  phone: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2" noValidate>
      <label htmlFor="name" className="block text-orange-400">
        Nome <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nome"
        className="w-full p-2 border border-gray-300 rounded text-black"
        required
      />
      <label htmlFor="email" className="block text-orange-400">
        E-mail <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="E-mail"
        className="w-full p-2 border border-gray-300 rounded text-black"
        required
      />
      <label htmlFor="email" className="block text-orange-400">
        Telefone <span className="text-red-500">*</span>
      </label>
      <input
        type="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Telefone"
        className="w-full p-2 border border-gray-300 rounded text-black"
        required
      />
      <label htmlFor="email" className="block text-orange-400">
        Mensagem
      </label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Mensagem"
        rows={4}
        className="w-full p-2 border border-gray-300 rounded text-black"
        required
      />
      <p className="text-sm text-orange-500 italic">
        Os campos marcados com
        <span className="text-red-500 font-bold"> * </span> são obrigatórios.
      </p>
      <button
        type="submit"
        className="bg-blue-900 text-xl text-orange-400 px-8 py-3 rounded hover:bg-blue-800 transition-colors duration-300"
      >
        Enviar Mensagem
      </button>
    </form>
  )
}

export default ContactForm
