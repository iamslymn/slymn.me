'use client'

import { motion } from 'framer-motion'
import { 
  PaintBrushIcon, 
  FilmIcon, 
  ComputerDesktopIcon, 
  SwatchIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Branding',
    description: 'Creating unique and memorable brand identities that resonate with your target audience.',
    icon: PaintBrushIcon,
  },
  {
    name: 'Motion Design',
    description: 'Bringing stories to life through engaging animations and motion graphics.',
    icon: FilmIcon,
  },
  {
    name: 'Website UX/UI',
    description: 'Designing intuitive and beautiful digital experiences that users love.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Logo Design',
    description: 'Crafting distinctive logos that capture the essence of your brand.',
    icon: SwatchIcon,
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function About() {
  return (
    <div className="pt-16">
      <section className="section">
        <div className="container">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading">About Me</h1>
            <p className="subheading">
              I'm a passionate designer focused on creating meaningful digital experiences
              through thoughtful design and creative solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-16 prose prose-neutral dark:prose-invert max-w-3xl mx-auto"
          >
            <p>
              With over 5 years of experience in digital design, I've had the privilege of working
              with clients across various industries, helping them build strong brand identities
              and create impactful digital presence.
            </p>
            <p>
              My approach combines creativity with strategic thinking, ensuring that every design
              decision serves a purpose and contributes to achieving your business goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section bg-neutral-50 dark:bg-neutral-900">
        <div className="container">
          <h2 className="heading text-center">Services</h2>
          <p className="subheading text-center max-w-2xl mx-auto">
            Comprehensive design solutions tailored to your needs
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 