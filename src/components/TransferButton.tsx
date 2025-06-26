'use client'

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function TransferButton() {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    console.log('Transfer button clicked')
    
    setTimeout(() => {
      setIsClicked(false)
    }, 200)
  }

  return (
    <button
      onClick={handleClick}
      className={`
        w-full bg-primary-500 text-white px-6 py-4 rounded-xl font-semibold text-lg
        hover:bg-primary-600 active:bg-primary-700
        transition-all duration-200 
        ${isClicked ? 'scale-95' : 'hover:scale-105'}
        flex items-center justify-center gap-3
        shadow-lg hover:shadow-xl
      `}
    >
      Transfer
      <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
    </button>
  )
}