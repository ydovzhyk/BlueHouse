import React from "react";
import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { translateMyText } from "../../helpers/translating/index";
import languagesAndCodes from "../../helpers/translating/languagesAndCodes.json";
import s from "./PageHeader.module.scss";

const pagesData = {
  "/": {
    title: "Blue House - Your Home Away from Home in Reykjavik",
    description:
      "Discover cozy accommodations in Reykjavik, Iceland, across three locations. Enjoy scenic views, Northern Lights, self-check-in, tours, and more.",
    keywords:
      "Blue House, Reykjavik accommodation, Northern Lights, self-check-in, Reykjavik tours, Iceland lodging, affordable stays in Reykjavik, drone footage locations, Reykjavik rooms, Iceland bed and breakfast, Grótta Northern Lights Apartment, Green House, Blue Lagoon, Glacier caves, Reykjavik travel recommendations, Reykjavik blog, Northern Lights tours, Reykjavik scenic views, Iceland holiday, Iceland travel tips, Reykjavik vacation spots",
  },
  "/house-rules": {
    title: "House Rules - Blue House",
    description:
      "Discover the essential house rules for a comfortable and pleasant stay at Blue House. Learn about our eco-friendly policies, quiet hours, and kitchen use guidelines.",
    keywords:
      "house rules, Blue House guidelines, Icelandic law, quiet hours, kitchen cleanliness, breakfast policies, eco-friendly accommodation, check-out rules, respectful stay, Blue House Reykjavik rules",
  },
  "/about-us": {
    title: "About Us - Blue House Bed and Breakfast",
    description:
      "Discover the story behind Blue House B&B in Reykjavik, Iceland. Learn about our scenic locations, charming Icelandic houses, and dedication to unforgettable travel experiences.",
    keywords:
      "about Blue House, Reykjavik accommodation, Iceland bed and breakfast, Seltjarnarnes peninsula, northern lights, Grótta Lighthouse, Reykjavik downtown, Iceland travel, Esja Mountain, Faxafloi Bay, Snaefellsjökull glacier, family-friendly lodging, charming Icelandic house",
  },
  "/privacy-and-policy": {
    title: "Privacy Policy & Terms of Service - Blue House",
    description:
      "Learn about our policies on data collection, usage, cookies, and terms of service. Understand your rights and how we protect your personal information.",
    keywords:
      "privacy policy, terms of service, data protection, cookies, Blue House policies, Iceland accommodation privacy, data security, user rights, personal data usage, cookies policy",
  },
  "/beds24": {
    title: "Book Apartments Directly - Best Price Guarantee | Blue House",
    description:
      "Book apartments directly from the owner for the best price. Check availability for your chosen dates, view apartment photos, read living conditions, and proceed to booking.",
    keywords:
      "direct booking, best price, Blue House apartments, Reykjavik apartments, Iceland lodging, book directly, apartment availability, Reykjavik accommodation photos, Reykjavik living conditions, Blue House booking",
  },
  default: {
    title: "Page Not Found",
    description: "This page does not exist.",
    keywords: "404, not found, error",
  },
};

const PageHeader = () => {
  const location = useLocation();
  const pageData = pagesData[location.pathname] || pagesData["default"];
  const languageIndex = localStorage.getItem("languageIndex");
  const languageCode = languagesAndCodes.languages[languageIndex]?.code || "en";

  const [title, setTitle] = useState(pageData.title);
  const [description, setDescription] = useState(pageData.description);
  const [keywords, setKeywords] = useState(pageData.keywords);

  useEffect(() => {
    async function fetchTranslations() {
      try {
        const [translatedTitle, translatedDescription, translatedKeywords] =
          await Promise.all([
            translateMyText(pageData.title),
            translateMyText(pageData.description),
            translateMyText(pageData.keywords),
          ]);

        setTitle(translatedTitle);
        setDescription(translatedDescription);
        setKeywords(translatedKeywords);
      } catch (error) {
        console.error("Translation error:", error);
      }
    }

    fetchTranslations();
  }, [location, pageData, languageCode]);

  const helmetContent = useMemo(() => {
    return (
      <Helmet>
        <html lang={languageCode} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link
          rel="canonical"
          href={`https://bluehouse.is${location.pathname}`}
        />
      </Helmet>
    );
  }, [title, description, keywords, languageCode, location.pathname]);

  return (
    <>
      {helmetContent}
      <h1 className={s.mainTitle}>{title}</h1>
    </>
  );
};

export default PageHeader;