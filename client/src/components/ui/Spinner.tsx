import React from 'react'

const Spinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-100 bg-opacity-75 z-50 min-h-screen">
      <div className="w-16 h-16 border-4 border-t-orange-500 border-gray-300 rounded-full animate-spin"></div>
    </div>
  )
}

export default Spinner
