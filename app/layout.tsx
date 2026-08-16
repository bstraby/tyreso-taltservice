import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.tyresotaltservice.se",
  ),

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
    "tält bröllop Stockholm",
    "tält studentfest",
    "Tyresö Tältservice",
  ],

  alternates: {
    canonical:
      "https://www.tyresotaltservice.se",
  },

  openGraph: {
    title:
      "Tyresö Tältservice | Partytält, bord & stolar",
    description:
      "Tält, bord och stolar för bröllop, student, fest och event i Tyresö och Stockholm.",
    url:
      "https://www.tyresotaltservice.se",
    siteName:
      "Tyresö Tältservice",
    locale:
      "sv_SE",
    type:
      "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}