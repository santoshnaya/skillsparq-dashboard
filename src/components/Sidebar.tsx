'use client'

import { useState } from 'react'
import { 
  Home, 
  BarChart3, 
  Target, 
  FileText, 
  Rocket, 
  Settings,
  Menu,
  X
} from 'lucide-react'

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [activeItem, setActiveItem] = useState('home')

  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
    { id: 'tracks', icon: Target, label: 'Tracks' },
    { id: 'reports', icon: FileText, label: 'Reports' },
    { id: 'rocket', icon: Rocket, label: 'Milestones' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ]

  const users = [
    { id: 1, name: 'John D', avatar: '👨‍💼' },
    { id: 2, name: 'Sarah M', avatar: '👩‍💻' },
  ]

  return (
    <>
      {!collapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      <div className={`
        fixed lg:relative z-30 h-full bg-white border-r border-gray-200 transition-all duration-300
        ${collapsed ? '-translate-x-full lg:translate-x-0 lg:w-16' : 'translate-x-0 w-64'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-gray-900">SkillSparq</span>
            </div>
          )}
          
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
          >
            {collapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activeItem === item.id
            
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`sidebar-item group ${isActive ? 'active' : ''}`}
                title={collapsed ? item.label : ''}
              >
                <Icon size={20} className={isActive ? 'text-white' : 'text-gray-600 group-hover:text-primary-500'} />
                {!collapsed && (
                  <span className={`font-medium ${isActive ? 'text-white' : 'text-gray-700'}`}>
                    {item.label}
                  </span>
                )}
              </div>
            )
          })}
        </nav>

        {!collapsed && (
          <div className="absolute bottom-4 left-4 right-4 space-y-3">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                  {user.avatar}
                </div>
                <span className="text-sm text-gray-700">{user.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}