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
    // images: [
    //   {
    //     url: '/images/cover.png'
    //     width: 800,
    //     height: 600,
    //   },
    // ],
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
