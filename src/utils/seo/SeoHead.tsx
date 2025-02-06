import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../../constants/seo';

interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  path?: string;
  appLinks?: {
    ios?: string;
    android?: string;
    web?: string;
  };
  schema?: Record<string, any>[];
}

export function SeoHead({
  title = SEO.DEFAULT_TITLE,
  description = SEO.DEFAULT_DESCRIPTION,
  keywords,
  image = 'https://lumeth.com/og-image.jpg',
  type = 'website',
  path = '',
  appLinks,
  schema = [],
}: SeoHeadProps) {
  const url = `https://lumeth.com${path}`;
  
  // Add LUMETH meaning schema
  const lumethMeaningSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "The Meaning of LUMETH",
    "description": "LUMETH: L is for look (the way you look at life), U is for useful (always to others), M is for mystery (the part of you that cannot be explained), E is for expert (in your chosen career), T is for tough (for you are not easily broken), H is for hero (as you appear to many).",
    "keywords": "LUMETH meaning, beauty platform name meaning, LUMETH letters meaning, beauty brand meaning"
  };
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* LUMETH Meaning Meta Tags */}
      <meta name="lumeth-meaning" content="L (look) U (useful) M (mystery) E (expert) T (tough) H (hero)" />
      <meta name="lumeth-description" content="LUMETH represents: Look - the way you look at life, Useful - always to others, Mystery - the part of you that cannot be explained, Expert - in your chosen career, Tough - for you are not easily broken, Hero - as you appear to many" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Lumeth" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:creator" content="@Lumeth_official" />

      {/* App Links */}
      {appLinks?.ios && (
        <>
          <meta property="al:ios:url" content={appLinks.ios} />
          <meta property="al:ios:app_store_id" content="6737151440" />
          <meta property="al:ios:app_name" content="Lumeth" />
        </>
      )}
      {appLinks?.android && (
        <>
          <meta property="al:android:url" content={appLinks.android} />
          <meta property="al:android:package" content="com.Lumeth.Customer" />
          <meta property="al:android:app_name" content="Lumeth" />
        </>
      )}
      {appLinks?.web && (
        <meta property="al:web:url" content={appLinks.web} />
      )}

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Lumeth" />
      <meta name="theme-color" content="#000000" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="format-detection" content="telephone=no" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(lumethMeaningSchema)}
      </script>
      {schema.map((item, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}