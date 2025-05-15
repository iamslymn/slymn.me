'use client'

import Image from 'next/image'
import { useState } from 'react'
import PlaceholderImage from './PlaceholderImage'

interface ProjectImageProps {
  src: string
  alt: string
  priority?: boolean
}

export default function ProjectImage({ src, alt, priority = false }: ProjectImageProps) {
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  if (error) {
    return <PlaceholderImage />
  }

  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`
          object-cover
          duration-700 ease-in-out
          ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
        `}
        onLoadingComplete={() => setLoading(false)}
        onError={() => setError(true)}
      />
      {isLoading && (
        <div className="absolute inset-0">
          <PlaceholderImage />
        </div>
      )}
    </div>
  )
} 