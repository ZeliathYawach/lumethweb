export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://lumeth.com/#organization',
    name: 'Lumeth',
    alternateName': 'Lumeth Beauty Platform',
    url: 'https://lumeth.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://lumeth.com/log.png',
      width: '512',
      height: '512'
    },
    description: 'AI-powered beauty platform connecting customers with professional beauty services',
    sameAs: [
      'https://www.facebook.com/people/Lumeth/61560421378410',
      'https://www.instagram.com/lumethapp',
      'https://x.com/Lumeth_official',
      'https://www.linkedin.com/company/lumeth'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'support@lumeth.com',
      availableLanguage: ['English']
    }
  };
}

export function generateSoftwareSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Lumeth',
    applicationCategory: 'BusinessApplication',
    operatingSystem: ['Android', 'iOS'],
    description: 'AI-powered beauty services and salon management platform with smart booking and personalized recommendations',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Lumeth',
        url: 'https://lumeth.com'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1000',
      bestRating: '5',
      worstRating: '1'
    },
    featureList: [
      'AI-powered beauty recommendations',
      'Smart appointment scheduling',
      'Real-time availability',
      'Verified beauty professionals',
      'Secure payments',
      'Business analytics'
    ],
    downloadUrl: [
      'https://apps.apple.com/app/id6737151440',
      'https://play.google.com/store/apps/details?id=com.Lumeth.Customer'
    ],
    screenshot: [
      'https://lumeth.com/screenshots/booking.jpg',
      'https://lumeth.com/screenshots/recommendations.jpg'
    ]
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lumeth',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lumeth.com/log.png',
        width: '512',
        height: '512'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lumeth.com/blog'
    }
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Lumeth Partner Network',
    description: 'Network of verified beauty professionals and salons offering AI-powered beauty services',
    url: 'https://lumeth.com',
    image: 'https://lumeth.com/salon-network.jpg',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1000',
      bestRating: '5',
      worstRating: '1'
    },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    }
  };
}