export function generateVisualAISchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Lumeth Visual AI',
    applicationCategory: 'LifestyleApplication',
    operatingSystem: ['Android', 'iOS'],
    description: 'Revolutionary beauty platform using computer vision AI for instant visual analysis without questionnaires',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1000'
    },
    featureList: [
      'Instant visual AI analysis',
      'No questionnaires needed',
      'Automatic skin type detection',
      'Child-friendly interface',
      'Real-time beauty recommendations',
      'Computer vision technology'
    ],
    applicationSubCategory: 'Computer Vision AI',
    releaseNotes: 'Features advanced computer vision AI for instant beauty analysis without questions'
  };
}

export function generateAIServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Lumeth Visual AI Beauty Platform',
    serviceType: 'AI Beauty Analysis',
    description: 'Revolutionary beauty platform using computer vision AI to analyze looks instantly without questionnaires',
    provider: {
      '@type': 'Organization',
      name: 'Lumeth',
      url: 'https://lumeth.com'
    },
    areaServed: 'Worldwide',
    category: 'Beauty & AI Technology',
    additionalType: 'http://www.productontology.org/id/Computer_vision',
    potentialAction: {
      '@type': 'UseAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://lumeth.com/get-started',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/IOSPlatform',
          'http://schema.org/AndroidPlatform'
        ]
      }
    }
  };
}