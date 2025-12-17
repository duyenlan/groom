import "@/app/globals.css";

import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { baseURL, description, siteName, title } from "@/config";
import localFont from 'next/font/local';
import { Work_Sans } from 'next/font/google';

const halimun = localFont({
  src: '/fonts/NVN-Motherland-Signature.ttf',
  variable: '--font-halimun',
  display: 'swap',
});

const sf = localFont({
  src: '/fonts/1FTV-VIP-Signora-Wide.otf',
  weight: '400',
  variable: '--font-sf',
});

const workSans = Work_Sans({
  subsets: ['vietnamese'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: [
    { rel: "icon", sizes: "16x16", url: "/favicon-16x16.png" },
    { rel: "icon", sizes: "32x32", url: "/favicon-32x32.png" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
  alternates: {
    canonical: baseURL,
  },
  metadataBase: new URL(baseURL),
  openGraph: {
    title,
    description,
    siteName,
    url: baseURL,
    images: [
      {
        url: "/og.png",
        alt: `${siteName} Open Graph Image`,
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
    <html lang="en" className={`${halimun.variable} ${workSans.variable} ${sf.variable}`}>
      <head>
        <link
          rel="preload"
          href="/images/bg.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />

<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="max-w-[600px] mx-auto font-work-sans shadow-lg">
        {/* <Header /> */}

        {children}

        {/* <Analytics /> */}
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}
