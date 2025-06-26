'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'

export default function LearningCurve() {
  const [compareWith, setCompareWith] = useState('Last Month')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const data = [
    { month: 'Jan', value: 20 }, { month: 'Feb', value: 45 }, { month: 'Mar', value: 30 },
    { month: 'Apr', value: 25 }, { month: 'May', value: 35 }, { month: 'Jun', value: 40 },
    { month: 'Jul', value: 65 }, { month: 'Aug', value: 80 }, { month: 'Sep', value: 55 },
    { month: 'Oct', value: 70 }, { month: 'Nov', value: 45 }, { month: 'Dec', value: 60 },
    { month: '2023', value: 0 }, { month: 'Jan', value: 50 }, { month: 'Feb', value: 65 }, { month: 'Mar', value: 80 }
  ]

  const compareOptions = ['Last Month', 'Last Quarter', 'Last Year']

  return (
    <div className="chart-container">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Learning Curve</h2>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors bg-white"
            >
              <span className="text-sm text-gray-600">Compare with</span>
              <span className="font-medium">{compareWith}</span>
              <ChevronDown size={16} className="text-gray-400" />
            </button>
            
            {dropdownOpen && (
              <div className="absolute top-full mt-1 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {compareOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => { setCompareWith(option); setDropdownOpen(false) }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="text-green-500 font-semibold">+12%</div>
          
          <div className="bg-violet-50 text-violet-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
            <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
            Test Mode
            <span className="bg-violet-200 text-violet-800 px-2 py-0.5 rounded text-xs">0</span>
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
            <YAxis hide />
            <Bar dataKey="value" fill="#06B6D4" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}