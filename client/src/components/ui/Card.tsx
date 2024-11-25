import { motion } from 'framer-motion'
import React from 'react'

interface CardProps {
  title: string
  message: React.ReactNode
  centerContent?: boolean
  spanColumns?: number
}

const Card = ({ title, message, centerContent, spanColumns }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
      className={`bg-white p-6 rounded-lg shadow-lg ${spanColumns ? `md:col-span-${spanColumns}` : ''}`}
    >
      <h4 className="md:text-2xl text-xl font-semibold text-indigo-700 mb-4 text-center">
        {title}
      </h4>
      <div
        className={`md:text-xl text-lg text-gray-600 leading-relaxed ${centerContent ? 'text-center' : ''}`}
      >
        {message}
      </div>
    </motion.div>
  )
}

export default Card
