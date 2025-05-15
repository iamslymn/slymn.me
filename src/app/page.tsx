'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Creative Designer Crafting
              <span className="text-primary"> Digital Experiences</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400">
              Specializing in branding, motion design, UX/UI, and logo design.
              Turning ideas into memorable digital experiences.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                View My Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-neutral-200 dark:border-neutral-800 text-base font-medium rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30 dark:opacity-20">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-purple-500/30 blur-3xl" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="heading text-center">Featured Work</h2>
          <p className="subheading text-center max-w-2xl mx-auto">
            A selection of my recent projects in branding, motion design, and digital experiences.
          </p>
          
          {/* Featured work grid will go here */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project cards will be added here */}
          </div>
        </div>
      </section>
    </>
  )
} 