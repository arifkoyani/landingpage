// TabButtons.jsx
'use client'

import { useState } from 'react'

export default function TabButtons() {
  const [activeTab, setActiveTab] = useState('general')

  return (
    <div className="flex flex-wrap items-center gap-2  py-10">
      <button
        onClick={() => setActiveTab('general')}
        className={`px-6 py-2 text-sm font-medium rounded-full transition-colors ${
          activeTab === 'general'
            ? 'bg-gray-900 text-white'
            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
        }`}
        aria-current={activeTab === 'general' ? 'page' : undefined}
      >
        General
      </button>

      <button
        onClick={() => setActiveTab('subscriptions')}

        className={`px-6 py-2 text-sm font-medium border-1 border-black rounded-full transition-colors ${
          activeTab === 'subscriptions'
            ? 'bg-gray-900 text-white'
            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
        }`}
        aria-current={activeTab === 'subscriptions' ? 'page' : undefined}
      >
        Subscriptions
      </button>

      <button
        onClick={() => setActiveTab('services')}
        className={`px-6 py-2 text-sm font-medium border-1 border-black  rounded-full transition-colors ${
          activeTab === 'services'
            ? 'bg-gray-900 text-white'
            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
        }`}
        aria-current={activeTab === 'services' ? 'page' : undefined}
      >
        Services
      </button>
    </div>
  )
}
