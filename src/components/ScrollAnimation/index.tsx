import React, { useEffect, useRef, useState, ReactNode } from 'react'

type Props = {
  animateIn?: string
  delay?: number
  initiallyVisible?: boolean
  style?: React.CSSProperties
  children?: ReactNode
}

export default function ScrollAnimation({ animateIn = 'fadeIn', delay = 0, initiallyVisible = false, style, children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(initiallyVisible)

  useEffect(() => {
    if (initiallyVisible) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [initiallyVisible])

  const className = visible ? `animated ${animateIn}` : 'animated'
  const styleWithDelay = { ...style, animationDelay: `${delay}ms` }

  return (
    <div ref={ref} className={className} style={styleWithDelay}>
      {children}
    </div>
  )
}
