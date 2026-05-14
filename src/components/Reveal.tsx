import type { CSSProperties, ReactNode } from 'react'

type RevealProps = {
  delayMs?: number
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export function Reveal({ delayMs = 0, className = '', style, children }: RevealProps) {
  return (
    <div
      className={`reveal ${className}`}
      style={{ animationDelay: `${delayMs}ms`, ...style }}
    >
      {children}
    </div>
  )
}
