import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SplashScreen } from "@/components/SplashScreen";
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
  title: "BASSMANUEL | The Groove Master | Gospel Bass Guitarist",
  description: "Professional Gospel Bass Guitarist from Minna, Niger State, Nigeria. 16 years of musical excellence, groove, pocket, power and praise. Playing to lift men to God.",
  keywords: ["Gospel bassist in Nigeria", "Gospel bass guitarist in Nigeria", "Bass guitarist in Minna", "Bass guitarist in Abuja", "Gospel musician in Minna", "Gospel musician in Abuja", "Bass lessons in Minna", "Bass guitar lessons Nigeria", "Professional bass guitarist Nigeria", "Studio bass guitarist Nigeria", "Live band bassist Nigeria", "BASSMANUEL", "Arise Emmanuel", "Gospel bass player Nigeria"],
  authors: [{ name: "Arise Emmanuel" }],
  creator: "BASSMANUEL",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://bassmanuel.com",
    title: "BASSMANUEL | The Groove Master",
    description: "Professional Gospel Bass Guitarist from Minna, Nigeria. 16 years of musical excellence.",
    siteName: "BASSMANUEL Portfolio",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "BASSMANUEL - Arise Emmanuel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BASSMANUEL | The Groove Master",
    description: "Professional Gospel Bass Guitarist from Minna, Nigeria. 16 years of musical excellence.",
    images: ["/logo.jpeg"],
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arise Emmanuel",
  alternateName: "BASSMANUEL",
  jobTitle: "Professional Gospel Bass Guitarist",
  description: "Professional Gospel Bass Guitarist from Minna, Niger State, Nigeria with 16 years of experience.",
  image: "https://bassmanuel.com/logo.jpeg",
  email: "ariseemmanuel23@gmail.com",
  telephone: "+2347037405371",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Minna / Abuja",
    addressRegion: "Niger State",
    addressCountry: "Nigeria",
  },
  url: "https://bassmanuel.com",
  sameAs: [
    "https://www.facebook.com/share/1FDZvEq1N6/",
    "https://www.youtube.com/@Bassmanuel23",
    "https://instagram.com/bazzmanuel",
    "https://tiktok.com/@bassmanuel23"
  ]
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
        />
      </body>
    </html>
  );
}
