# Filipino Web3 Company Website

![App Preview](https://imgix.cosmicjs.com/9ed4eef0-ab00-11f0-9e6b-39ca264de411-photo-1620321023374-d1a68fbc720d-1760667959646.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional company website showcasing Web3 development services with a retro-inspired design featuring cloud motifs and blue color schemes. Built with Next.js 15 and powered by Cosmic CMS.

## ✨ Features

- **Dynamic Service Showcase**: Interactive cards displaying Web3 services with icons and descriptions
- **Team Member Profiles**: Professional presentations with photos, roles, and LinkedIn integration
- **Case Study Gallery**: Detailed project showcases with challenge-solution-results format
- **Client Testimonials**: Star ratings and reviews with client photos
- **Retro-Inspired Design**: Vibrant blue gradients, cloud backgrounds, and pixel art elements
- **Smooth Animations**: Framer Motion powered transitions and scroll effects
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Server-side rendering with proper meta tags
- **Image Optimization**: Imgix integration for fast loading and retina display support

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68f1a8b48f05ea3922ecd17b&clone_repository=68f1aa438f05ea3922ecd19a)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a company website with services, team members, testimonials, and case studies for filipino with web3 with retro and blue background with clouds"

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **CMS**: Cosmic
- **Image Optimization**: imgix
- **Package Manager**: Bun
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun installed
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Create a `.env.local` file with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Run the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members
```typescript
const { objects: team } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Case Studies
```typescript
const { objects: caseStudies } = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## 🔗 Cosmic CMS Integration

This application uses Cosmic as a headless CMS to manage all content:

- **Services**: Web3 development offerings with descriptions and icons
- **Team Members**: Staff profiles with photos, roles, and bios
- **Case Studies**: Project showcases with challenges, solutions, and results
- **Testimonials**: Client reviews with ratings and photos

All content is fetched server-side for optimal SEO and performance.

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
4. Deploy!

### Environment Variables

Set these in your hosting platform:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Support

For questions about Cosmic CMS, visit [https://www.cosmicjs.com/docs](https://www.cosmicjs.com/docs)

<!-- README_END -->