// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Service object type
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name: string;
    description: string;
    icon_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Team Member object type
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name: string;
    role: string;
    bio?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
    linkedin_url?: string;
  };
}

// Testimonial object type
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name: string;
    client_company?: string;
    quote: string;
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    rating?: number;
  };
}

// Case Study object type
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_title: string;
    client_name: string;
    challenge: string;
    solution: string;
    results?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
  };
}

// API response type
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}