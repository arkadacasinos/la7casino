import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://la7casino.vercel.app/sitemap.xml',
    host: 'https://la7casino.vercel.app',
  }
}
