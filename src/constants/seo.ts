// SEO-related constants and configurations
export const SEO = {
  DEFAULT_TITLE: 'Lumeth | AI-Powered Beauty Platform for Salons, Spas & Beauty Services',
  DEFAULT_DESCRIPTION: 'Transform your beauty experience with AI-powered recommendations, smart scheduling, and personalized beauty services. Our advanced AI technology matches you with perfect beauty professionals.',
  
  PAGES: {
    HOME: {
      title: 'AI Beauty Platform | Smart Salon Booking & Beauty Services | Lumeth',
      description: 'Experience AI-driven beauty recommendations, smart scheduling, and personalized beauty services. Connect with top-rated salons, spas, and beauty professionals. Download the Lumeth app today!',
      keywords: 'AI beauty platform, salon booking app, beauty services, spa appointments, AI recommendations, beauty professionals, salon management, beauty technology'
    },
    BUSINESS: {
      title: 'Beauty Business Management Software | AI-Powered Salon Solutions | Lumeth',
      description: 'Streamline your beauty business with Lumeth\'s AI-powered management platform. Smart scheduling, client management, and business analytics for salons, spas, and beauty professionals.',
      keywords: 'salon management software, spa booking system, beauty business platform, salon scheduling software, beauty salon management, AI beauty technology'
    },
    GET_STARTED: {
      title: 'Get Started with AI Beauty Services | Download Lumeth App',
      description: 'Join thousands of successful beauty professionals and customers using Lumeth\'s AI-powered platform. Smart booking, personalized recommendations, and seamless beauty experiences.',
      keywords: 'beauty app download, AI beauty platform, salon booking app, beauty services app, smart scheduling'
    },
    BLOG: {
      title: 'Beauty Industry Insights & AI Technology News | Lumeth Blog',
      description: 'Stay updated with the latest beauty industry trends, AI technology insights, and professional beauty tips. Expert advice for beauty professionals and enthusiasts.',
      keywords: 'beauty industry blog, salon business tips, beauty trends, AI beauty technology, beauty professional advice'
    }
  },
  
  KEYWORDS: {
    PRIMARY: [
      'AI beauty platform',
      'salon management software',
      'beauty business platform',
      'appointment booking system',
      'beauty professional app',
      'salon scheduling software',
      'beauty service management',
      'AI beauty recommendations',
      'smart salon booking',
      'beauty technology platform'
    ],
    SECONDARY: [
      'makeup artist booking',
      'salon business tools',
      'beauty salon software',
      'spa management system',
      'beauty professional platform',
      'salon booking app',
      'AI beauty analysis',
      'beauty service marketplace',
      'salon client management',
      'beauty business analytics'
    ]
  },

  SOCIAL_MEDIA: {
    FACEBOOK: 'https://www.facebook.com/people/Lumeth/61560421378410',
    INSTAGRAM: 'https://www.instagram.com/lumethapp',
    TWITTER: 'https://x.com/Lumeth_official',
    LINKEDIN: 'https://www.linkedin.com/company/lumeth'
  },

  SCHEMA_MARKUP: {
    ORGANIZATION: {
      name: 'Lumeth',
      legalName: 'Vantexid Private Limited',
      url: 'https://lumeth.com',
      logo: 'https://lumeth.com/log.png',
      foundingDate: '2024',
      founders: [
        {
          '@type': 'Person',
          name: 'Lumeth Team'
        }
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Peroor House, Thonnackad P.O.',
        addressLocality: 'Chengannur',
        addressRegion: 'Kerala',
        postalCode: '689511',
        addressCountry: 'IN'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'support@lumeth.com'
      }
    }
  }
} as const;