'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import SkillsSection from '@/components/SkillsSection'
import LearningCurve from '@/components/LearningCurve'
import QuickLinks from '@/components/QuickLinks'
import TransferButton from '@/components/TransferButton'

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          <SkillsSection />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <LearningCurve />
            </div>
            <div className="space-y-6">
              <QuickLinks />
              <TransferButton />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}