import ContactPage from "@/components/ContactComponents/ContactPage";
export const metadata = {
  title: {
    default: `Contact | OneFam Media Hub`,
  },
  keywords: "Contact, OneFam Media Hub, Digital Solutions, Creative Services, Marketing, Web Development, events, content creation, social media management, branding, design, video production, photography, SEO, advertising",
  description: "Get in touch with us today!",
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
    title: "Contact | OneFam Media Hub",
    description: "Get in touch with us today!",
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
      <ContactPage />
    </div>
  );
}
