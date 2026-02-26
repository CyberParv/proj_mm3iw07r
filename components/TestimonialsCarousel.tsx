'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import TestimonialCard from '@/components/TestimonialCard'

interface Testimonial {
  rating?: number
  quote?: string
  name?: string
  location?: string
  treatment?: string
  imageSrc?: string
}

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[]
  autoPlayMs?: number
}

export default function TestimonialsCarousel({
  testimonials = [
    {
      rating: 5,
      quote: 'The hygienist was so gentle, and the office felt like a spa.',
      name: 'Megan R.',
      location: 'Venice, CA',
      treatment: 'Cleanings & Exams',
    },
    {
      rating: 5,
      quote: 'Implant process was smooth and the team explained every step.',
      name: 'Daniel S.',
      location: 'Marina del Rey, CA',
      treatment: 'Dental Implants',
    },
    {
      rating: 4.8,
      quote: 'My smile looks amazing after whitening. Highly recommend!',
      name: 'Olivia T.',
      location: 'Santa Monica, CA',
      treatment: 'Teeth Whitening',
    },
  ],
  autoPlayMs = 5000,
}: Partial<TestimonialsCarouselProps>) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, autoPlayMs)
    return () => clearInterval(timer)
  }, [autoPlayMs, paused, testimonials.length])

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section
      className="mx-auto max-w-4xl px-4 py-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: 'translateX(' + -index * 100 + '%)' }}
          >
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="min-w-full px-2">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white"
          onClick={handlePrev}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, dot) => (
          <button
            key={dot}
            className={cn(
              'h-2.5 w-2.5 rounded-full',
              dot === index ? 'bg-[var(--primary)]' : 'bg-muted'
            )}
            onClick={() => setIndex(dot)}
            aria-label={'Go to testimonial ' + (dot + 1)}
          />
        ))}
      </div>
    </section>
  )
}
