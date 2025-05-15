'use client'

import { MotionDiv } from './MotionWrapper'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export function PortfolioHeader() {
  return (
    <MotionDiv
      initial="initial"
      animate="animate"
      variants={fadeInUp}
      className="max-w-3xl mx-auto text-center"
    >
      <h1 className="heading">Portfolio</h1>
      <p className="subheading">
        Explore my selected projects and creative work
      </p>
    </MotionDiv>
  )
} 