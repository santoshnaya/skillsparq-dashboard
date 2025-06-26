'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>
    </header>
  )
}