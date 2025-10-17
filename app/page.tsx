import { cosmic, hasStatus } from '@/lib/cosmic'
import { Service, TeamMember, Testimonial, CaseStudy } from '@/types'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import Footer from '@/components/Footer'

async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Service[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch services')
  }
}

async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as TeamMember[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch team members')
  }
}

async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Testimonial[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch testimonials')
  }
}

async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as CaseStudy[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch case studies')
  }
}

export default async function Home() {
  const [services, team, testimonials, caseStudies] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
    getCaseStudies(),
  ])

  return (
    <main className="min-h-screen">
      <Hero />
      <ServicesSection services={services} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <TeamSection team={team} />
      <TestimonialsSection testimonials={testimonials} />
      <Footer />
    </main>
  )
}