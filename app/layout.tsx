import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Lowercase titulky ladí s tvým minimalistickým stylem
  title: "albert bastl | portfolio",
  description: "building high-performance web systems and peer-review platforms. minimalist by design, technical by nature. let the work speak.",
  
  // Tohle je "neprůstřelná" konfigurace ikon
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    // Zpětná kompatibilita
    other: [
      { rel: 'shortcut icon', url: '/favicon.ico' },
    ],
  },
  
  // Propojení s Android/Chrome manifestem
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth bg-[#030303]`}
    >
      <body className="min-h-full bg-[#030303] text-neutral-100 selection:bg-white/10 selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}