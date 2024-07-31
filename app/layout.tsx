import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "./shared-components/header";
import Footer from "./shared-components/footer";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPACE BRAINS",
  description: "SPACE BRAINS",
  metadataBase: new URL("https://spacebrains.com"),
  keywords: ['SpaceBrains', 'Vision',],
  authors: [{ name: 'SpaceBrains' }, { name: 'SpaceBrains', url: 'spacebrains.com' }],
  openGraph: {
    siteName: 'Space Brains',
    title: "THE DAWN OF SPACEBRAINS",
    description: "EXPANDING HUMAN POTENTIAL",
    url: 'https://spacebrains.com',
    type: "website",
    images: 'https://spacebrains.com/img/space-thumbnail.png',
  },
  twitter: {
    site: "spacebrains.com",
    card: "summary_large_image",
    title: "THE DAWN OF SPACEBRAINS",
    description: "EXPANDING HUMAN POTENTIAL",
    images: "https://spacebrains.com/img/space-thumbnail.png"
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: 'fav-light.svg',
        href: 'fav-light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: 'fav-dark.svg',
        href: 'fav-dark.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
