import { motion } from 'framer-motion'
import React from 'react'

interface CardProps {
  title: string
  message: React.ReactNode
  centerContent?: boolean
  spanColums?: number
}

const Card = ({ title, message, centerContent, spanColums }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
      className={`bg-white p-6 rounded-lg shadow-lg md:col-span-${spanColums}`}
    >
      <h4 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">
        {title}
      </h4>
      <p
        className={`text-xl text-gray-600 leading-relaxed ${centerContent ? 'text-center' : ''}`}
      >
        {message}
      </p>
    </motion.div>
  )
}

export default Card
