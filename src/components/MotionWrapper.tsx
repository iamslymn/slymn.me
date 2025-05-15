'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionWrapperProps {
  children: ReactNode
  className?: string
  initial?: any
  animate?: any
  transition?: any
  variants?: any
}

export function MotionDiv({ children, ...props }: MotionWrapperProps) {
  return <motion.div {...props}>{children}</motion.div>
} 