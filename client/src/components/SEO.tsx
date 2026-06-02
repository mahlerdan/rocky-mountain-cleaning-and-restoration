import React, { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

export default function SEO({ title, description, path }: SEOProps) {
  useEffect(() => {
    // Update Title
    document.title = `${title} | Rocky Mountain Cleaning & Restoration Pocatello Idaho`;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Update Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", `${title} | Rocky Mountain Cleaning & Restoration`);

    // Update Open Graph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement("meta");
      ogDesc.setAttribute("property", "og:description");
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute("content", description);

    // Update Open Graph URL
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", `https://yourrockymountain.com${path}`);

    // Inject/Update JSON-LD LocalBusiness Schema
    let schemaScript = document.getElementById("local-business-jsonld");
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.setAttribute("id", "local-business-jsonld");
      schemaScript.setAttribute("type", "application/ld+json");
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Contractor",
      "name": "Rocky Mountain Cleaning & Restoration",
      "image": "https://yourrockymountain.com/og-image.jpg",
      "@id": "https://yourrockymountain.com/#organization",
      "url": "https://yourrockymountain.com",
      "telephone": "(208) 237-1938",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "206 E Chubbuck Rd",
        "addressLocality": "Pocatello",
        "addressRegion": "ID",
        "postalCode": "83202",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 42.912642,
        "longitude": -112.441113
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      },
      "sameAs": [
        "https://www.facebook.com/yourrockymountain"
      ],
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Pocatello"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Chubbuck"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Blackfoot"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Idaho Falls"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "445"
      }
    };

    schemaScript.innerHTML = JSON.stringify(schemaData, null, 2);
  }, [title, description, path]);

  return null;
}
