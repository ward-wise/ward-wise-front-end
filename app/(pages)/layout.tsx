import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Ward Wise',
    default: 'Ward Wise',
  },
  description: 'Explore neighborhood infrastructure spending in Chicago.',
  metadataBase: new URL('https://www.wardwisechicago.org'),
  openGraph: {
    title: 'Ward Wise',
    description: 'Explore neighborhood infrastructure spending in Chicago.',
    url: 'https://www.wardwisechicago.org',
    siteName: 'Ward Wise',
    images: [
      {
        url: '/images/og/ward-wise-logo-1200x630.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body className={`${inter.className} w-full h-full flex flex-col`}>
          {children}
        </body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ""} />
      </html>
    </>
  );
}
