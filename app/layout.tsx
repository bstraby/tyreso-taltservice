import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl =
  "https://www.tyresotaltservice.se";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Hyra partytält i Tyresö & Stockholm | Tyresö Tältservice",
    template:
      "%s | Tyresö Tältservice",
  },

  description:
    "Hyr partytält, bord och stolar för bröllop, student, fest och event i Tyresö och Stockholm. Leverans, montering och personlig service.",

  keywords: [
    "hyra partytält Tyresö",
    "tältuthyrning Tyresö",
    "hyra tält Stockholm",
    "partytält Stockholm",
    "hyra bord och stolar Tyresö",
    "hyra bord Stockholm",
    "hyra stolar Stockholm",
    "tält bröllop Stockholm",
    "tält studentfest",
    "festtält Tyresö",
    "eventtält Stockholm",
    "Tyresö Tältservice",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title:
      "Tyresö Tältservice | Partytält, bord & stolar",
    description:
      "Hyr partytält, bord och stolar för bröllop, student, fest och event i Tyresö och Stockholm.",
    url: siteUrl,
    siteName:
      "Tyresö Tältservice",
    locale:
      "sv_SE",
    type:
      "website",
    images: [
      {
        url:
          "/images/hero-rendered.png",
        width: 1200,
        height: 630,
        alt:
          "Partytält från Tyresö Tältservice",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",
    title:
      "Tyresö Tältservice | Partytält, bord & stolar",
    description:
      "Hyr partytält, bord och stolar för bröllop, student, fest och event i Tyresö och Stockholm.",
    images: [
      "/images/hero-rendered.png",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview":
        "large",
      "max-snippet":
        -1,
      "max-video-preview":
        -1,
    },
  },
};

const localBusinessStructuredData = {
  "@context":
    "https://schema.org",
  "@type":
    "LocalBusiness",
  name:
    "Tyresö Tältservice",
  url:
    siteUrl,
  telephone:
    "+46733797391",
  description:
    "Uthyrning av partytält, bord och stolar för bröllop, student, fest och event i Tyresö och Stockholm. Leverans, montering och nedmontering.",
  image:
    `${siteUrl}/images/hero-rendered.png`,
  address: {
    "@type":
      "PostalAddress",
    streetAddress:
      "Almstigen 2",
    addressLocality:
      "Tyresö",
    addressCountry:
      "SE",
  },
  areaServed: [
    {
      "@type":
        "City",
      name:
        "Tyresö",
    },
    {
      "@type":
        "City",
      name:
        "Stockholm",
    },
  ],
  hasOfferCatalog: {
    "@type":
      "OfferCatalog",
    name:
      "Uthyrning",
    itemListElement: [
      {
        "@type":
          "Offer",
        itemOffered: {
          "@type":
            "Service",
          name:
            "Uthyrning av partytält",
        },
      },
      {
        "@type":
          "Offer",
        itemOffered: {
          "@type":
            "Service",
          name:
            "Uthyrning av bord och stolar",
        },
      },
      {
        "@type":
          "Offer",
        itemOffered: {
          "@type":
            "Service",
          name:
            "Leverans och montering",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children:
    React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body>
        {children}

        <Script
          id="local-business-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                localBusinessStructuredData,
              ),
          }}
        />
      </body>
    </html>
  );
}