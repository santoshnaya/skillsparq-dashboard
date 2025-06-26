'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Info, Plus } from 'lucide-react'

export default function SkillsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const skills = [
    { id: 1, title: 'PHP Developer', videoCount: 124, icon: '🐘', color: 'bg-purple-100' },
    { id: 2, title: 'Python Programming', videoCount: 236, icon: '🐍', color: 'bg-green-100' },
    { id: 3, title: 'Figma Design', videoCount: 87, icon: '🎨', color: 'bg-pink-100' },
    { id: 4, title: 'UI With Sketch', videoCount: 29, icon: '💎', color: 'bg-yellow-100' },
    { id: 5, title: 'JavaScript', videoCount: 18, icon: '⚡', color: 'bg-yellow-100' },
    { id: 6, title: 'Python', videoCount: 236, icon: '🔥', color: 'bg-orange-100' }
  ]

  const itemsPerView = 5
  const maxIndex = Math.max(0, skills.length - itemsPerView)

  const nextSlide = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
  const prevSlide = () => setCurrentIndex(prev => Math.max(prev - 1, 0))

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Learn New Skills</h1>
          <p className="text-gray-600">One Simple Price. Unlimited Skills</p>
        </div>
        <button className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors flex items-center gap-2">
          <Plus size={20} />
          Explore More
        </button>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {skills.map((skill) => (
              <div key={skill.id} className="skill-card group flex-shrink-0" style={{ width: `calc(${100 / itemsPerView}% - 1.2rem)` }}>
                <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{skill.videoCount} Videos</p>
                <div className="flex items-center justify-between">
                  <button className="text-primary-500 hover:text-primary-600 font-medium text-sm transition-colors">
                    Learn More
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Info size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {currentIndex > 0 && (
          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
        )}
        
        {currentIndex < maxIndex && (
          <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        )}
      </div>
    </div>
  )
}