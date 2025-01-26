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
}

export function SeoHead({
  title = SEO.DEFAULT_TITLE,
  description = SEO.DEFAULT_DESCRIPTION,
  keywords,
  image = 'https://lumeth.com/og-image.jpg',
  type = 'website',
  path = '',
  appLinks,
}: SeoHeadProps) {
  const url = `https://lumeth.com${path}`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

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

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
}