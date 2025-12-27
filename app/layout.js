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

export const metadata = {
  title: "One Fam Media Hub",
  description:
    "One Fam Media Hub is a professional creative agency specializing in Event Documentation, Digital Marketing, and Multimedia Production. We provide high-end photography, cinematic videography, drone coverage, and data-driven marketing to elevate your brand’s visibility.",
  keywords:
    "event documentation, digital marketing, multimedia production, photography, cinematic videography, drone coverage, data-driven marketing, brand visibility",
  icons: {
    icon: "../favicon.ico",
    shortcut: "../favicon.ico",
    apple: "../favicon.ico",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "../favicon.ico",
    },
  },
  openGraph: {
    title:
      "Explore Insights from One Fam Media Hub | Event Documentation, Digital Marketing, and Multimedia Production",
    description:
      "One Fam Media Hub is a professional creative agency specializing in Event Documentation, Digital Marketing, and Multimedia Production. We provide high-end photography, cinematic videography, drone coverage, and data-driven marketing to elevate your brand’s visibility.",
    // url: "",
    // siteName: "",
    // images: [
    //   {
    //     url: "", // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //     alt: "foote components",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  // metadataBase: new URL(``),
  // alternates: {
  //   canonical: "",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
