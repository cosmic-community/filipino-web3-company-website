'use client'

import { motion } from 'framer-motion'
import { CaseStudy } from '@/types'

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudiesSection({ caseStudies }: CaseStudiesSectionProps) {
  if (!caseStudies || caseStudies.length === 0) {
    return (
      <section id="case-studies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
          <p className="text-gray-600">Case studies coming soon.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we&apos;ve helped clients achieve their Web3 goals
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => {
            const featuredImageUrl = study.metadata?.featured_image?.imgix_url
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {featuredImageUrl && (
                  <div className="lg:w-1/2">
                    <img
                      src={`${featuredImageUrl}?w=1200&h=800&fit=crop&auto=format,compress`}
                      alt={study.metadata.project_title}
                      className="rounded-lg shadow-lg w-full h-auto"
                      width="600"
                      height="400"
                    />
                  </div>
                )}
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {study.metadata.project_title}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    Client: {study.metadata.client_name}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Challenge</h4>
                      <div
                        className="text-gray-600 prose prose-sm"
                        dangerouslySetInnerHTML={{ __html: study.metadata.challenge }}
                      />
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Solution</h4>
                      <div
                        className="text-gray-600 prose prose-sm"
                        dangerouslySetInnerHTML={{ __html: study.metadata.solution }}
                      />
                    </div>
                    
                    {study.metadata.results && (
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Results</h4>
                        <div
                          className="text-gray-600 prose prose-sm"
                          dangerouslySetInnerHTML={{ __html: study.metadata.results }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}