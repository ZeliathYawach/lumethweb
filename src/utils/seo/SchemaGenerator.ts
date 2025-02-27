export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Lumeth',
    'alternateName': 'Lumeth AI Beauty Platform',
    'url': 'https://lumeth.com',
    'logo': 'https://lumeth.com/log.png',
    'description': 'AI-powered beauty platform using machine learning and computer vision for personalized beauty services',
    'sameAs': [
      'https://www.facebook.com/people/Lumeth/61560421378410',
      'https://www.instagram.com/lumethapp',
      'https://x.com/Lumeth_official',
      'https://www.youtube.com/@lumeth_Beauty',
      'https://www.linkedin.com/company/lumeth'
    ],
    'contactPoint': {
      '@type': 'ContactPoint',
      'contactType': 'customer service',
      'email': 'lumethpvrt@gmail.com',
      'availableLanguage': 'English'
    },
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Peroor House, Thonnackad P.O.',
      'addressLocality': 'Chengannur',
      'addressRegion': 'Kerala',
      'postalCode': '689511',
      'addressCountry': 'IN'
    },
    'founder': {
      '@type': 'Organization',
      'name': 'VANTEXID PRIVATE LIMITED'
    },
    'knowsAbout': [
      'Artificial Intelligence',
      'Machine Learning',
      'Computer Vision',
      'Beauty Services',
      'Salon Management',
      'Beauty Technology',
      'Personalized Beauty'
    ]
  };
}

export function generateVisualAISchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'Lumeth Visual AI',
    'applicationCategory': 'LifestyleApplication',
    'operatingSystem': ['Android', 'iOS'],
    'description': 'Revolutionary beauty platform using computer vision AI for instant visual analysis without questionnaires',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'ratingCount': '1000',
      'bestRating': '5',
      'worstRating': '1'
    },
    'featureList': [
      'Instant visual AI analysis',
      'No questionnaires needed',
      'Automatic skin type detection',
      'Child-friendly interface',
      'Real-time beauty recommendations',
      'Computer vision technology'
    ],
    'applicationSubCategory': 'Computer Vision AI',
    'releaseNotes': 'Features advanced computer vision AI for instant beauty analysis without questions',
    'downloadUrl': [
      'https://apps.apple.com/app/id6737151440',
      'https://play.google.com/store/apps/details?id=com.Lumeth.Customer'
    ],
    'screenshot': [
      'https://lumeth.com/screenshots/app-screen1.jpg',
      'https://lumeth.com/screenshots/app-screen2.jpg'
    ]
  };
}

export function generateAIServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Lumeth AI Beauty Platform',
    'serviceType': 'AI Beauty Analysis',
    'description': 'Revolutionary beauty platform using computer vision AI to analyze looks instantly without questionnaires',
    'provider': {
      '@type': 'Organization',
      'name': 'Lumeth',
      'url': 'https://lumeth.com'
    },
    'areaServed': 'Worldwide',
    'category': 'Beauty & AI Technology',
    'additionalType': 'http://www.productontology.org/id/Computer_vision',
    'potentialAction': {
      '@type': 'UseAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': 'https://lumeth.com/get-started',
        'actionPlatform': [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/IOSPlatform',
          'http://schema.org/AndroidPlatform'
        ]
      }
    },
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Lumeth Beauty Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'LUMIA AI',
            'description': 'Personal AI beauty consultant providing expert guidance'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'STYLL AI',
            'description': 'Virtual try-on technology for visualizing clothing'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'FACE ENHANCE',
            'description': 'Advanced image enhancement technology'
          }
        }
      ]
    }
  };
}

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is Lumeth?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Lumeth is a revolutionary AI-powered beauty platform that combines cutting-edge artificial intelligence with beauty expertise to provide personalized recommendations, virtual try-on experiences, and beauty service bookings—all in one seamless application.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How does Lumeth\'s AI technology work?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Lumeth uses advanced computer vision and machine learning algorithms to analyze your unique features and provide personalized beauty recommendations. Our AI technology can identify skin types, facial features, and style preferences without requiring questionnaires.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Is Lumeth available on both iOS and Android?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, Lumeth is available for download on both iOS and Android devices. You can find our app on the Apple App Store and Google Play Store.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What beauty services can I book through Lumeth?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Lumeth connects you with a wide range of beauty services including salon appointments, spa treatments, makeup services, hair styling, skincare consultations, and more. All service providers are verified for quality assurance.'
        }
      },
      {
        '@type': 'Question',
        'name': 'What does LUMETH stand for?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'LUMETH represents: L (look) - the way you look at life, U (useful) - always to others, M (mystery) - the part of you that cannot be explained, E (expert) - in your chosen career, T (tough) - for you are not easily broken, H (hero) - as you appear to many.'
        }
      }
    ]
  };
}

export function generateBreadcrumbSchema(items: Array<{name: string, item: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.item
    }))
  };
}

export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
  publisher: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.headline,
    'description': article.description,
    'image': article.image,
    'datePublished': article.datePublished,
    'dateModified': article.dateModified,
    'author': {
      '@type': 'Person',
      'name': article.author
    },
    'publisher': {
      '@type': 'Organization',
      'name': article.publisher,
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://lumeth.com/log.png'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': article.url
    }
  };
}

export function generateProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Lumeth AI Beauty Platform',
    'description': 'AI-powered beauty platform for personalized recommendations and service booking',
    'image': 'https://lumeth.com/log.png',
    'brand': {
      '@type': 'Brand',
      'name': 'Lumeth'
    },
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '1000',
      'bestRating': '5',
      'worstRating': '1'
    }
  };
}