import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SplashScreen } from "@/components/SplashScreen";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bassmanuel.com"),
  title: {
    default:
      "BASSMANUEL | Professional Gospel Bass Guitarist Nigeria | The Groove Master",
    template: "%s | BASSMANUEL",
  },
  description:
    "Professional Gospel Bass Guitarist Arise Emmanuel (BASSMANUEL) from Minna, Niger State, Nigeria. 16+ years of experience in worship leadership, live band ministration, studio sessions, and bass guitar lessons. Available for church services, concerts, music direction, and international travel. Book now for your event!",
  keywords: [
    "Gospel bassist Nigeria",
    "Gospel bass guitarist Nigeria",
    "Bass guitarist Minna",
    "Bass guitarist Abuja",
    "Gospel musician Minna",
    "Gospel musician Abuja",
    "Bass lessons Minna",
    "Bass guitar lessons Nigeria",
    "Professional bass guitarist Nigeria",
    "Studio bass guitarist Nigeria",
    "Live band bassist Nigeria",
    "Worship bassist Nigeria",
    "Church bass player",
    "Music director Nigeria",
    "Gospel music bass",
    "Christian bass guitarist",
    "Bass ministry",
    "Praise and worship bass",
    "Nigerian gospel musician",
    "Bass guitar instructor",
    "Arise Emmanuel",
    "BASSMANUEL",
    "Gospel bass player Abuja",
    "Worship band bassist",
    "Church music bass",
    "Bass guitar sessions",
    "Studio session musician",
    "Gospel music production",
  ],
  authors: [{ name: "Arise Emmanuel", url: "https://bassmanuel.com" }],
  creator: "BASSMANUEL",
  publisher: "BASSMANUEL",
  alternates: {
    canonical: "https://bassmanuel.com",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    alternateLocale: ["en_US"],
    url: "https://bassmanuel.com",
    title: "BASSMANUEL | Professional Gospel Bass Guitarist Nigeria",
    description:
      "Book Arise Emmanuel (BASSMANUEL) - Professional Gospel Bass Guitarist with 16+ years of experience. Available for church services, concerts, studio sessions, and music direction across Nigeria and internationally.",
    siteName: "BASSMANUEL",
    images: [
      {
        url: "/bassmanuel.jpeg",
        width: 1200,
        height: 630,
        alt: "BASSMANUEL - Arise Emmanuel performing on bass guitar at a worship service",
        type: "image/jpeg",
      },
      {
        url: "/logo-transparent.png",
        width: 512,
        height: 512,
        alt: "BASSMANUEL Logo - Professional Gospel Bass Guitarist",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bassmanuel23",
    creator: "@bassmanuel23",
    title: "BASSMANUEL | Professional Gospel Bass Guitarist Nigeria",
    description:
      "Book Arise Emmanuel - Professional Gospel Bass Guitarist with 16+ years of experience. Available for church services, concerts, studio sessions across Nigeria.",
    images: ["/bassmanuel.jpeg"],
  },
  icons: {
    icon: [
      { url: "/logo-transparent.png", sizes: "any", type: "image/png" },
      {
        url: "/black-logo-transparent.png",
        sizes: "any",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
    ],
    apple: [
      { url: "/logo-transparent.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Music",
  other: {
    "google-site-verification": "google0d8f324eb0cd94c9",
  },
  manifest: "/manifest.json",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arise Emmanuel",
  alternateName: "BASSMANUEL",
  givenName: "Arise",
  familyName: "Emmanuel",
  jobTitle: "Professional Gospel Bass Guitarist",
  description:
    "Professional Gospel Bass Guitarist from Minna, Niger State, Nigeria with 16+ years of experience. Specializing in worship and praise leadership, live band ministration, studio sessions, and bass guitar lessons.",
  image: "https://bassmanuel.com/bassmanuel.jpeg",
  url: "https://bassmanuel.com",
  email: "ariseemmanuel23@gmail.com",
  telephone: "+2347037405371",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Minna",
    addressRegion: "Niger State",
    addressCountry: "Nigeria",
  },
  knowsAbout: [
    "Gospel Bass Guitar",
    "Worship Music",
    "Live Performance",
    "Studio Recording",
    "Music Direction",
    "Bass Guitar Lessons",
    "Christian Music",
    "Praise and Worship",
  ],
  sameAs: [
    "https://www.facebook.com/share/1FDZvEq1N6/",
    "https://www.youtube.com/@Bassmanuel23",
    "https://instagram.com/bazzmanuel",
    "https://tiktok.com/@bassmanuel23",
    "https://wa.me/2347037405371",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Kingdom of God Embassy International",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abuja",
      addressCountry: "Nigeria",
    },
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Musician",
    description: "Professional Gospel Bass Guitarist and Music Director",
    skills: [
      "Bass Guitar",
      "Music Direction",
      "Worship Leadership",
      "Studio Recording",
      "Live Performance",
      "Music Education",
    ],
  },
  offers: {
    "@type": "Offer",
    name: "Professional Music Services",
    description:
      "Available for church services, concerts, studio sessions, music direction, and bass guitar lessons",
    areaServed: {
      "@type": "Place",
      name: "Nigeria",
    },
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col selection:bg-[#8FBC8B]/30 selection:text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SplashScreen />
          <SmoothScroll />
          <Navbar />
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          nonce=""
        />
      </body>
    </html>
  );
}
