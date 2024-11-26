import React from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from '@/lib/constants'
interface FormData {
  name: string
  email: string
  message: string
  phone: string
}

emailjs.init({
  limitRate: {
    id: 'app',
    throttle: 10000,
  },
})

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        PUBLIC_KEY,
      )
      console.log('Email sent successfully:', response)
      alert('Mensagem enviada com sucesso!')
      reset()
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Erro ao enviar a mensagem. Por favor, tente novamente.')
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2" noValidate>
      <label htmlFor="name" className="block text-orange-400">
        Nome <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        placeholder="Nome"
        className={`w-full p-2 border ${
          errors.name ? 'border-red-500' : 'border-gray-300'
        } rounded text-black`}
        {...register('name', { required: 'Nome é obrigatório' })}
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      <label htmlFor="email" className="block text-orange-400">
        E-mail <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        placeholder="E-mail"
        className={`w-full p-2 border ${
          errors.email ? 'border-red-500' : 'border-gray-300'
        } rounded text-black`}
        {...register('email', {
          required: 'E-mail é obrigatório',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'E-mail inválido',
          },
        })}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <label htmlFor="email" className="block text-orange-400">
        Telefone <span className="text-red-500">*</span>
      </label>
      <input
        type="phone"
        placeholder="Telefone"
        className={`w-full p-2 border ${
          errors.phone ? 'border-red-500' : 'border-gray-300'
        } rounded text-black`}
        {...register('phone', {
          required: 'Telefone é obrigatório',
        })}
      />
      {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      <label htmlFor="email" className="block text-orange-400">
        Mensagem
      </label>
      <textarea
        placeholder="Mensagem"
        rows={4}
        className="w-full p-2 border border-gray-300 rounded text-black"
        {...register('message')}
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
