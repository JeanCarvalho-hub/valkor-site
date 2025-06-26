'use client'
import { useEffect, useState } from 'react'

export default function Contator() {
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const percent = Math.round((scrollTop / scrollHeight) * 100)
      setScrollPercent(percent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      backgroundColor: '#000',
      color: '#fff',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 'bold',
      fontSize: '14px',
      zIndex: 1000,
      boxShadow: '0 0 10px rgba(0,0,0,0.3)',
      border: '1px solid purple'
    }}>
      {scrollPercent}%
    </div>
  )
}
