// SEO-related constants and configurations
export const SEO = {
  DEFAULT_TITLE: 'Lumeth | AI-Powered Beauty Platform for Salons, Spas & Beauty Services',
  DEFAULT_DESCRIPTION: 'Transform your beauty experience with AI-powered recommendations, smart scheduling, and personalized beauty services. Our advanced AI technology matches you with perfect beauty professionals.',
  
  PAGES: {
    HOME: {
      title: 'AI Beauty Platform | Smart Salon Booking & Beauty Services | Lumeth',
      description: 'Experience AI-driven beauty recommendations, smart scheduling, and personalized beauty services. Connect with top-rated salons, spas, and beauty professionals. Download the Lumeth app today!',
      keywords: 'AI beauty platform, salon booking app, beauty services, spa appointments, AI recommendations, beauty professionals, salon management, beauty technology, beauty AI, smart beauty booking'
    },
    BUSINESS: {
      title: 'Beauty Business Management Software | AI-Powered Salon Solutions | Lumeth',
      description: 'Streamline your beauty business with Lumeth\'s AI-powered management platform. Smart scheduling, client management, and business analytics for salons, spas, and beauty professionals.',
      keywords: 'salon management software, spa booking system, beauty business platform, salon scheduling software, beauty salon management, AI beauty technology, beauty business software, salon business tools'
    },
    GET_STARTED: {
      title: 'Get Started with AI Beauty Services | Download Lumeth App',
      description: 'Join thousands of successful beauty professionals and customers using Lumeth\'s AI-powered platform. Smart booking, personalized recommendations, and seamless beauty experiences.',
      keywords: 'beauty app download, AI beauty platform, salon booking app, beauty services app, smart scheduling, beauty AI app, salon appointment app'
    },
    BLOG: {
      title: 'Beauty Industry Insights & AI Technology News | Lumeth Blog',
      description: 'Stay updated with the latest beauty industry trends, AI technology insights, and professional beauty tips. Expert advice for beauty professionals and enthusiasts.',
      keywords: 'beauty industry blog, salon business tips, beauty trends, AI beauty technology, beauty professional advice, beauty tech news, salon industry updates'
    },
    ABOUT: {
      title: 'About Lumeth | AI-Powered Beauty Platform | Our Story & Mission',
      description: 'Learn about Lumeth\'s mission to revolutionize the beauty industry with AI technology. Discover our story, values, and commitment to connecting beauty professionals with clients.',
      keywords: 'Lumeth company, beauty platform mission, AI beauty technology company, beauty industry innovation, beauty tech startup'
    },
    CONTACT: {
      title: 'Contact Lumeth | Get Support & Information | AI Beauty Platform',
      description: 'Reach out to the Lumeth team for support, partnership opportunities, or general inquiries about our AI-powered beauty platform.',
      keywords: 'contact beauty platform, Lumeth support, beauty app help, salon software support, beauty tech contact'
    },
    PRIVACY: {
      title: 'Privacy Policy | Data Protection | Lumeth Beauty Platform',
      description: 'Learn how Lumeth protects your personal information and privacy. Our comprehensive privacy policy details how we collect, use, and safeguard your data.',
      keywords: 'beauty app privacy, salon software data protection, beauty platform privacy policy, personal data protection, beauty app security'
    },
    TERMS: {
      title: 'Terms & Conditions | Lumeth Beauty Platform | User Agreement',
      description: 'Review Lumeth\'s terms and conditions for using our AI-powered beauty platform. Understand your rights and responsibilities as a user of our services.',
      keywords: 'beauty platform terms, salon app user agreement, beauty service terms, app usage policy, beauty platform conditions'
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
      'beauty technology platform',
      'beauty AI',
      'salon software',
      'beauty app'
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
      'beauty business analytics',
      'beauty tech',
      'salon appointment app',
      'beauty professional network'
    ],
    LONG_TAIL: [
      'AI-powered beauty recommendations for salons',
      'smart scheduling for beauty professionals',
      'personalized beauty service matching',
      'salon management software with AI features',
      'beauty business analytics and reporting tools',
      'find top-rated beauty professionals near me',
      'book salon appointments online instantly',
      'AI technology for beauty industry',
      'beauty service provider management system',
      'virtual beauty consultation platform'
    ]
  },

  SOCIAL_MEDIA: {
    FACEBOOK: 'https://www.facebook.com/people/Lumeth/61560421378410',
    INSTAGRAM: 'https://www.instagram.com/lumethapp',
    TWITTER: 'https://x.com/Lumeth_official',
    LINKEDIN: 'https://www.linkedin.com/company/lumeth',
    YOUTUBE: 'https://www.youtube.com/@lumeth_Beauty'
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
      },
      sameAs: [
        'https://www.facebook.com/people/Lumeth/61560421378410',
        'https://www.instagram.com/lumethapp',
        'https://x.com/Lumeth_official',
        'https://www.linkedin.com/company/lumeth',
        'https://www.youtube.com/@lumeth_Beauty'
      ]
    }
  },
  
  LOCAL_BUSINESS: {
    name: 'Lumeth Beauty Network',
    description: 'Network of verified beauty professionals, salons, and spas',
    priceRange: '₹₹-₹₹₹₹',
    openingHours: 'Mo-Su 00:00-23:59',
    telephone: '+91-000-000-0000',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 9.3156,
        longitude: 76.6178
      },
      geoRadius: '50000'
    }
  }
} as const;