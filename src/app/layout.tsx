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
    default: "BASSMANUEL | The Groove Master | Gospel Bass Guitarist",
    template: "%s | BASSMANUEL",
  },
  description:
    "Professional Gospel Bass Guitarist from Minna, Niger State, Nigeria. 16 years of musical excellence, groove, pocket, power and praise. Available for church services, concerts, studio sessions, and music direction. Playing to lift men to God.",
  keywords: [
    "Gospel bassist in Nigeria",
    "Gospel bass guitarist in Nigeria",
    "Bass guitarist in Minna",
    "Bass guitarist in Abuja",
    "Gospel musician in Minna",
    "Gospel musician in Abuja",
    "Bass lessons in Minna",
    "Bass guitar lessons Nigeria",
    "Professional bass guitarist Nigeria",
    "Studio bass guitarist Nigeria",
    "Live band bassist Nigeria",
    "BASSMANUEL",
    "Arise Emmanuel",
    "Gospel bass player Nigeria",
    "Bass ministry",
    "Worship bassist",
    "Church bass player",
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
    title: "BASSMANUEL | The Groove Master | Gospel Bass Guitarist",
    description:
      "Professional Gospel Bass Guitarist from Minna, Nigeria. 16 years of musical excellence, groove, pocket, power and praise. Available for church services, concerts, studio sessions, and music direction.",
    siteName: "BASSMANUEL Portfolio",
    images: [
      {
        url: "/bassmanuel.jpeg",
        width: 1200,
        height: 630,
        alt: "BASSMANUEL - Arise Emmanuel performing on bass guitar",
        type: "image/jpeg",
      },
      {
        url: "/logo-transparent.png",
        width: 512,
        height: 512,
        alt: "BASSMANUEL Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BASSMANUEL | The Groove Master | Gospel Bass Guitarist",
    description:
      "Professional Gospel Bass Guitarist from Minna, Nigeria. 16 years of musical excellence, groove, pocket, power and praise.",
    images: ["/bassmanuel.jpeg"],
    creator: "@bassmanuel23",
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

  manifest: "/manifest.json",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arise Emmanuel",
  alternateName: "BASSMANUEL",
  jobTitle: "Professional Gospel Bass Guitarist",
  description:
    "Professional Gospel Bass Guitarist from Minna, Niger State, Nigeria with 16 years of experience. Specializing in worship and praise leadership, live band ministration, studio sessions, and bass lessons.",
  image: "https://bassmanuel.com/bassmanuel.jpeg",
  email: "ariseemmanuel23@gmail.com",
  telephone: "+2347037405371",
  url: "https://bassmanuel.com",
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
