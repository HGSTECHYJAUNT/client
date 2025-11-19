'use client'

import React from 'react'
import Header from '@/components/shared/Header'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
    </div>
  )
}
