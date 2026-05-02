import ServicesPage from "@/components/ServicesComponents/ServicesPage";
export const metadata = {
  title: {
    default: `Services | OneFam Media Hub`,
  },
  keywords:
    "Services, OneFam Media Hub, Digital Solutions, Creative Services, Marketing, Web Development, events, content creation, social media management, branding, design, video production, photography, SEO, advertising",
  description: "Explore our range of services designed to meet your needs.",
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
    title: "Services",
    description: "Explore our range of services designed to meet your needs.",
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
      <ServicesPage />
    </div>
  );
}
