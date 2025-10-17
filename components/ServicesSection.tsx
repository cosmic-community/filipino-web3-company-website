'use client'

import { motion } from 'framer-motion'
import { Service } from '@/types'

interface ServicesSectionProps {
  services: Service[]
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  if (!services || services.length === 0) {
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600">No services available at the moment.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert Web3 development services tailored for the Philippine market
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const iconUrl = service.metadata?.icon_image?.imgix_url
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {iconUrl && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={`${iconUrl}?w=600&h=400&fit=crop&auto=format,compress`}
                      alt={service.metadata.service_name}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                      width="300"
                      height="200"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.metadata.service_name}
                  </h3>
                  <div
                    className="text-gray-600 prose prose-sm"
                    dangerouslySetInnerHTML={{ __html: service.metadata.description }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}