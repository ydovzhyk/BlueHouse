import React from "react";
import { Helmet } from "react-helmet";

const SchemaOrg = () => {
  const schema = `
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Blue House B&B",
  "image": "https://bluehouse.is/bluehouse.png",
  "url": "https://bluehouse.is/",
  "sameAs": [
    "https://www.instagram.com/bluehousebb/",
    "https://www.facebook.com/bluehouseiceland",
    "https://api.whatsapp.com/send?phone=3547756480&text=&source=&data=",
    "https://www.tripadvisor.com/Hotel_Review-g189970-d1915669-Reviews-Blue_House_B_B-Reykjavik_Capital_Region.html"
  ],
  "telephone": "+354 775 6480",
  "email": "info@bluehouse.is",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IS",
    "addressRegion": "170",
    "addressLocality": "Seltjarnarnes",
    "streetAddress": "Valhúsabraut 19"
  },
  "priceRange": "€€€",
  "hasPart": [
    {
      "@type": "LodgingBusiness",
      "name": "Blue House B&B",
      "hasMap": "https://maps.google.com/?q=64.154115,-21.998533",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IS",
        "addressRegion": "170",
        "addressLocality": "Seltjarnarnes",
        "streetAddress": "Valhúsabraut 19"
      },
      "checkinTime": "16:00",
      "checkoutTime": "11:00",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.3",
        "reviewCount": "260",
        "bestRating": "5",
        "worstRating": "1"
      },
      "telephone": "+354 775 6480"
    },
    {
      "@type": "LodgingBusiness",
      "name": "Grótta Northern Lights Apartment",
      "hasMap": "https://maps.google.com/?q=64.15582726221461,-21.996956834337023",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IS",
        "addressRegion": "170",
        "addressLocality": "Seltjarnarnes",
        "streetAddress": "Valhúsabraut"
      },
      "checkinTime": "16:00",
      "checkoutTime": "11:00",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.0",
        "reviewCount": "31",
        "bestRating": "5",
        "worstRating": "1"
      },
      "telephone": "+354 775 6480"
    },
    {
      "@type": "LandmarksOrHistoricalBuildings",
      "name": "Grótta Lighthouse",
      "hasMap": "https://maps.google.com/?q=64.164522,-22.022136",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IS",
        "addressRegion": "170",
        "addressLocality": "Seltjarnarnes",
        "streetAddress": "Gróttuviti"
      },
      "checkinTime": "16:00",
      "checkoutTime": "11:00",
      "telephone": "+354 775 6480"
    }
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Two Bedroom Apartment",
      "description": "Our two-bedroom apartment is ideal for families and groups with a view of the northern lights in winter. Includes private facilities.",
      "priceCurrency": "EUR",
      "priceRange": "150-170 EUR",
      "itemOffered": {
        "@type": "Service",
        "serviceType": "Accommodation"
      },
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Economy Double Room",
      "description": "Queen-size bed and Netflix TV with shared bathroom and kitchen facilities. Breakfast included.",
      "priceCurrency": "EUR",
      "priceRange": "120-140 EUR",
      "itemOffered": {
        "@type": "Service",
        "serviceType": "Accommodation"
      },
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Double/Twin Room",
      "description": "King-size or twin bed and Netflix TV with shared bathroom and kitchen facilities. Breakfast included.",
      "priceCurrency": "EUR",
      "priceRange": "120-140 EUR",
      "itemOffered": {
        "@type": "Service",
        "serviceType": "Accommodation"
      },
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Triple Room",
      "description": "Equipped with a king-size/twin bed and Netflix TV, plus queen-sized sofa beds. Shared bathroom and kitchen facilities. Breakfast included.",
      "priceCurrency": "EUR",
      "priceRange": "108-130 EUR",
      "itemOffered": {
        "@type": "Service",
        "serviceType": "Accommodation"
      },
      "availability": "https://schema.org/InStock"
    },
    {
      "@type": "Offer",
      "name": "Quadruple Room",
      "description": "Includes king-size/twin bed, Netflix TV, and queen-sized sofa beds. Shared bathroom and kitchen facilities. Breakfast available at surcharge.",
      "priceCurrency": "EUR",
      "priceRange": "127-150 EUR",
      "itemOffered": {
        "@type": "Service",
        "serviceType": "Accommodation"
      },
      "availability": "https://schema.org/InStock"
    }
  ]
}
`;

  return (
    <Helmet>
      <script type="application/ld+json">{schema}</script>
    </Helmet>
  );
};

export default SchemaOrg;
