import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { MetaTags } from './types';

export function MetaTags({
  title,
  description,
  keywords,
  image = 'https://lumeth.com/og-image.jpg',
  type = 'website',
  url,
  appLinks
}: MetaTags) {
  const canonicalUrl = url || 'https://lumeth.com';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* AI-specific Meta Tags */}
      <meta name="ai-platform" content="true" />
      <meta name="ai-features" content="visual analysis, instant recommendations, no questionnaires, automatic detection" />
      <meta name="ai-technology" content="computer vision, deep learning, neural networks" />
      <meta name="ai-application" content="instant beauty analysis, automatic recommendations" />
      
      {/* Visual AI Specific Tags */}
      <meta name="visual-ai" content="true" />
      <meta name="analysis-method" content="computer-vision" />
      <meta name="user-input" content="none-required" />
      <meta name="accessibility" content="child-friendly" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Lumeth Visual AI" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Lumeth_official" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* App Links */}
      {appLinks?.ios && (
        <>
          <meta property="al:ios:url" content={appLinks.ios} />
          <meta property="al:ios:app_store_id" content="6737151440" />
          <meta property="al:ios:app_name" content="Lumeth Visual AI" />
        </>
      )}
      {appLinks?.android && (
        <>
          <meta property="al:android:url" content={appLinks.android} />
          <meta property="al:android:package" content="com.Lumeth.Customer" />
          <meta property="al:android:app_name" content="Lumeth Visual AI" />
        </>
      )}
      {appLinks?.web && (
        <meta property="al:web:url" content={appLinks.web} />
      )}
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 day" />
      <meta name="author" content="Lumeth Visual AI" />
      
      {/* Technology Differentiator Tags */}
      <meta name="technology" content="Computer Vision AI" />
      <meta name="unique-feature" content="No questionnaires needed" />
      <meta name="analysis-type" content="Instant visual analysis" />
      <meta name="user-experience" content="Zero questions asked" />
      <meta name="accessibility" content="Suitable for all ages" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}