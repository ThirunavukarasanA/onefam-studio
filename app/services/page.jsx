"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Camera,
  Clapperboard,
  Megaphone,
  Sparkles,
  Video,
} from "lucide-react";

const serviceGroups = [
  {
    title: "Event Coverage",
    eyebrow: "Capture every defining moment",
    description:
      "Premium photography, cinematic videography, and live coverage for events that need to look as powerful as they feel.",
    icon: Camera,
    services: [
      "Corporate Events",
      "Weddings & Receptions",
      "Product Launches",
      "Brand Promotions",
      "Conferences & Seminars",
      "Cultural & Social Events",
      "Live Event Photography & Videography",
    ],
  },
  {
    title: "Digital Marketing Services",
    eyebrow: "Turn attention into growth",
    description:
      "Data-led campaigns, creative assets, and digital systems built to increase reach, visibility, and qualified enquiries.",
    icon: BarChart3,
    services: [
      "Social Media Marketing (SMM)",
      "Performance Ads (Meta & Google)",
      "Graphic Designing",
      "Product Photography",
      "Website Development",
      "Influencer Marketing",
      "Search Engine Optimization (SEO)",
    ],
  },
  {
    title: "Creative Services",
    eyebrow: "Produce content that travels",
    description:
      "Story-first creative production for campaigns, social media, brands, products, and digital launches.",
    icon: Clapperboard,
    services: [
      "Short Film Making",
      "Videography",
      "Photography",
      "Video Editing",
      "Graphic Design",
      "Poster & Banner Design",
      "Thumbnails & Ad Creatives",
    ],
  },
];

const highlights = [
  { label: "Photography", icon: Camera },
  { label: "Cinematic Video", icon: Video },
  { label: "Drone Coverage", icon: Sparkles },
  { label: "Performance Marketing", icon: Megaphone },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-hidden">
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(193,68,14,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(217,184,140,0.12),transparent_30%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 mb-7"
            >
              <span className="h-0.5 w-12 bg-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                Our Services
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl"
            >
              Creative production and marketing that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                moves your brand forward.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-3xl text-gray-300 text-base md:text-xl leading-relaxed font-light"
            >
              One Fam Media Hub is a professional creative agency specializing
              in event documentation, digital marketing, and multimedia
              production. We provide high-end photography, cinematic
              videography, drone coverage, and data-driven marketing to elevate
              your brand&apos;s visibility.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-4 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-primary/30"
              >
                Start a Project
                <ArrowRight size={18} />
              </Link>
              <a
                href="#service-list"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-bold text-white transition-all hover:border-primary/50 hover:bg-white/5"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
                >
                  <Icon className="text-primary mb-5" size={26} />
                  <p className="text-sm md:text-base font-semibold">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section
        id="service-list"
        className="relative py-20 lg:py-28 border-t border-white/10"
      >
        <div className="absolute top-24 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px] translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-4 mb-6">
              <span className="h-0.5 w-10 bg-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                What We Do
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Complete creative support from first frame to final conversion.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {serviceGroups.map((group, index) => (
              <ServiceCard key={group.title} group={group} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-10 items-center">
            <div>
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-5">
                Built for visibility
              </p>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                One team for documentation, content, design, and digital
                performance.
              </h2>
            </div>
            <div className="border border-white/10 bg-white/[0.04] p-7 md:p-8">
              <p className="text-gray-300 leading-relaxed">
                Whether you are planning an event, launching a product, growing
                your social presence, or building a campaign, One Fam Media Hub
                brings the production eye and marketing mindset together.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
              >
                Talk to our team
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ group, index }) {
  const Icon = group.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
      className="group relative overflow-hidden border border-white/10 bg-white/[0.035] p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.055]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-70" />
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
          <Icon size={28} />
        </div>
        <p className="text-primary text-xs font-semibold uppercase tracking-[0.22em] mb-3">
          {group.eyebrow}
        </p>
        <h3 className="text-2xl font-bold text-white mb-4">{group.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-7">
          {group.description}
        </p>

        <ul className="space-y-3">
          {group.services.map((service) => (
            <li key={service} className="flex items-start gap-3 text-sm">
              <BadgeCheck
                size={17}
                className="mt-0.5 shrink-0 text-secondary"
              />
              <span className="text-gray-200">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
