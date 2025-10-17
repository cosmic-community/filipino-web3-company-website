'use client'

import { motion } from 'framer-motion'
import { TeamMember } from '@/types'

interface TeamSectionProps {
  team: TeamMember[]
}

export default function TeamSection({ team }: TeamSectionProps) {
  if (!team || team.length === 0) {
    return (
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-gray-600">Team information coming soon.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert Web3 developers passionate about blockchain technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const photoUrl = member.metadata?.photo?.imgix_url
            
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {photoUrl && (
                  <div className="h-64 overflow-hidden">
                    <img
                      src={`${photoUrl}?w=600&h=600&fit=crop&auto=format,compress`}
                      alt={member.metadata.full_name}
                      className="w-full h-full object-cover"
                      width="300"
                      height="300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.metadata.full_name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {member.metadata.role}
                  </p>
                  {member.metadata.bio && (
                    <p className="text-gray-600 mb-4">{member.metadata.bio}</p>
                  )}
                  {member.metadata.linkedin_url && (
                    <a
                      href={member.metadata.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                      LinkedIn Profile
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}