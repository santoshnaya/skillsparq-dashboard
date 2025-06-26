'use client'

import { 
  BookOpen, 
  Heart, 
  Compass, 
  Bell, 
  AlertTriangle, 
  Lightbulb 
} from 'lucide-react'

export default function QuickLinks() {
  const quickLinks = [
    { id: 'courses', icon: BookOpen, label: 'Courses', color: 'text-blue-600' },
    { id: 'favorites', icon: Heart, label: 'Favorites', color: 'text-red-500' },
    { id: 'explore', icon: Compass, label: 'Explore', color: 'text-green-600' },
    { id: 'notifications', icon: Bell, label: 'Notifications', color: 'text-yellow-600' },
    { id: 'alerts', icon: AlertTriangle, label: 'Alerts', color: 'text-orange-600' },
    { id: 'tips', icon: Lightbulb, label: 'Tips', color: 'text-purple-600' }
  ]

  const handleClick = (linkId: string) => {
    console.log(`Clicked ${linkId}`)
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {quickLinks.map((link) => {
        const Icon = link.icon
        
        return (
          <div
            key={link.id}
            onClick={() => handleClick(link.id)}
            className="quick-link-card group"
          >
            <div className="flex flex-col items-center text-center space-y-3">
              <Icon size={32} className={`${link.color} group-hover:scale-110 transition-transform`} />
              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {link.label}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}