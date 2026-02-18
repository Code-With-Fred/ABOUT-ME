import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  // Keep homepage JSON-LD minimal to avoid duplicates with index.html
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Code-With-Fred - Portfolio",
    "url": "https://codewithfred.name.ng/",
    "description": "Portfolio of Eze Favour (Code-With-Fred) — full-stack web developer specializing in React, Node.js, and TypeScript.",
    "inLanguage": "en",
    "isPartOf": { "@id": "https://codewithfred.name.ng/#website" },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
    </Helmet>
  );
};

export default StructuredData;
