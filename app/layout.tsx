import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tyresö Tältservice",
  description:
    "Tält, bord och stolar för bröllop, fest och event i Stockholm med omnejd.",
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