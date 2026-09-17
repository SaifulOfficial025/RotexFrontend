import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://rotexbd.com'),
  title: {
    default: "Rotex Lab | Premium Laboratory & Scientific Equipment",
    template: "%s | Rotex Lab"
  },
  description: "Rotex Lab is a trusted supplier of premium laboratory, medical, and industrial equipment — delivering quality solutions across Bangladesh since 2006.",
  keywords: ["Laboratory Equipment Bangladesh", "Scientific Instruments Dhaka", "Medical Devices Bangladesh", "Industrial Machinery", "Weighing Systems"],
  openGraph: {
    title: "Rotex Lab | Premium Scientific Equipment",
    description: "Trusted supplier of premium laboratory, medical, and industrial equipment in Bangladesh.",
    url: 'https://rotexbd.com',
    siteName: 'Rotex Lab',
    locale: 'en_BD',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Rotex Lab | Premium Scientific Equipment",
    description: "Trusted supplier of premium laboratory, medical, and industrial equipment in Bangladesh.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Rotex Lab",
  "image": "https://rotexbd.com/logo.png",
  "description": "Trusted supplier of premium laboratory, medical, and industrial equipment in Bangladesh.",
  "url": "https://rotexbd.com",
  "telephone": "+880 1700-000000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "26, Delwar Complex, Hatkhola Road",
    "addressLocality": "Dhaka",
    "postalCode": "1203",
    "addressCountry": "BD"
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
