import React from 'react';
import { Helmet } from 'react-helmet-async';

// Définir les types des éléments JSX
declare namespace JSX {
  interface IntrinsicElements {
    meta: React.DetailedHTMLProps<React.MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>;
    title: React.DetailedHTMLProps<React.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>;
    link: React.DetailedHTMLProps<React.LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>;
    script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
  }
}

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  url?: string;
  schema?: Record<string, unknown>;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  type = 'website',
  url,
  schema,
}) => {
  const siteUrl = 'https://driveselect.fr';
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const pageTitle = `${title} | DriveSelect`;

  // Base schema for AutoDealer
  const baseSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "DriveSelect",
    "image": "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
    "logo": "https://driveselect.fr/logo.png",
    "description": "Concessionnaire automobile premium à Paris, spécialisé dans la vente de véhicules neufs et d'occasion haut de gamme.",
    "url": "https://driveselect.fr",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14 Avenue de la Grande Armée",
      "addressLocality": "Paris",
      "postalCode": "75017",
      "addressCountry": "FR",
      "addressRegion": "Île-de-France"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.875023",
      "longitude": "2.287176"
    },
    "openingHours": "Mo,Tu,We,Th,Fr,Sa 09:00-19:00",
    "telephone": "+33123456789",
    "email": "contact@driveselect.fr",
    "priceRange": "€€€€",
    "sameAs": [
      "https://www.facebook.com/driveselect",
      "https://www.instagram.com/driveselect",
      "https://www.linkedin.com/company/driveselect"
    ]
  };

  return (
    <Helmet>
      {/* Basic */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="DriveSelect" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:image:alt" content={`DriveSelect - ${title}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@driveselect" />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />

      {/* Additional */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="fr" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="DriveSelect" />
      <meta name="geo.region" content="FR-75" />
      <meta name="geo.placename" content="Paris" />
      <meta name="geo.position" content="48.875023;2.287176" />
      <meta name="ICBM" content="48.875023, 2.287176" />

      {/* Mobile Specific */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="theme-color" content="#1a1a1a" />
      <meta name="apple-mobile-web-app-title" content="DriveSelect" />
      <meta name="application-name" content="DriveSelect" />
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema || baseSchema)}
      </script>
    </Helmet>
  );
};

export default SEOHead;