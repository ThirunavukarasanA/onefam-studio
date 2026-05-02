import LookbookPage from "@/components/LookbookComponents/LookbookPage";
export const metadata = {
  title: {
    default: `Lookbook | OneFam Media Hub`,
  },
  keywords: "Lookbook, OneFam Media Hub, Digital Solutions, Creative Services, Marketing, Web Development, events, content creation, social media management, branding, design, video production, photography, SEO, advertising",
  description: "Discover our latest lookbook featuring stunning visuals and creative designs.",
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
    title: "Lookbook",
    description: "Discover our latest lookbook featuring stunning visuals and creative designs.",
    url: "",
    siteName: "",
    // images: [
    //   {
    //     url: "https://makecomponents.com/Image/footer/footer002.webp", // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //     alt: "foote components",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  // metadataBase: new URL(``),
  alternates: {
    canonical: "",
  },
};
export default function page() {
  return (
    <div>
      <LookbookPage />
    </div>
  );
}
