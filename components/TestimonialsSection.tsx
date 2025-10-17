'use client'

import { motion } from 'framer-motion'
import { Testimonial } from '@/types'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-gray-600">Testimonials coming soon.</p>
        </div>
      </section>
    )
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const filled = index < rating
      return (
        <svg
          key={index}
          className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            clipRule="evenodd"
          />
        </svg>
      )
    })
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our clients say about working with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const photoUrl = testimonial.metadata?.client_photo?.imgix_url
            const rating = testimonial.metadata?.rating || 5
            
            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
              >
                <div className="flex items-center mb-4">
                  {photoUrl && (
                    <img
                      src={`${photoUrl}?w=200&h=200&fit=crop&auto=format,compress`}
                      alt={testimonial.metadata.client_name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      width="64"
                      height="64"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {testimonial.metadata.client_name}
                    </h3>
                    {testimonial.metadata.client_company && (
                      <p className="text-sm text-gray-600">
                        {testimonial.metadata.client_company}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex text-yellow-400 mb-4">
                  {renderStars(rating)}
                </div>

                <p className="text-gray-600 italic">
                  &ldquo;{testimonial.metadata.quote}&rdquo;
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}