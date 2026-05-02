"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  MessageCircle,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "Karthik R",
    role: "Brand Manager",
    company: "Kalki Online",
    service: "Digital Campaign",
    quote:
      "One Fam Media Hub understood the brand quickly and delivered visuals that felt premium, clean, and ready for every platform we needed.",
  },
  {
    name: "Priya S",
    role: "Founder",
    company: "Meraki",
    service: "Product Photography",
    quote:
      "The team brought a strong creative eye to our product shoot. The final images gave our campaign a polished and trustworthy look.",
  },
  {
    name: "Vignesh M",
    role: "Event Lead",
    company: "Gokulam",
    service: "Event Coverage",
    quote:
      "They captured the energy of the event beautifully. From candid moments to stage coverage, the output felt cinematic and complete.",
  },
  {
    name: "Nandhini P",
    role: "Marketing Head",
    company: "Day Clean",
    service: "Social Creatives",
    quote:
      "Their design and marketing support made our content look more consistent. The creatives were sharp, readable, and conversion-focused.",
  },
  {
    name: "Arun V",
    role: "Creative Director",
    company: "Pixel Creation",
    service: "Video Production",
    quote:
      "The editing rhythm, color, and storytelling were exactly what the brief needed. They know how to make footage feel alive.",
  },
  {
    name: "Meera K",
    role: "Operations Manager",
    company: "Elements",
    service: "Brand Promotion",
    quote:
      "Reliable planning, smooth coordination, and a very professional delivery. The team handled the visual side with real confidence.",
  },
];

const stats = [
  { value: "3+", label: "Core Service Verticals" },
  { value: "360", label: "Creative Coverage" },
  { value: "8", label: "Partner Brands Featured" },
  { value: "1", label: "Team From Shoot To Strategy" },
];

const clientLogos = [
  { name: "Day Clean", src: "/assets/images/clients/DAY_CLEAN.png" },
  { name: "Elements", src: "/assets/images/clients/ELEMENTS.png" },
  { name: "Kalki Online", src: "/assets/images/clients/KALKI_ONLINE.png" },
  { name: "Meraki", src: "/assets/images/clients/MERAKI.png" },
  { name: "Nutra", src: "/assets/images/clients/NUTRA.png" },
  { name: "Pixel Creation", src: "/assets/images/clients/PIXEL_CREATION.png" },
  { name: "Gokulam", src: "/assets/images/clients/GOKULAM.png" },
  { name: "Wings Mart", src: "/assets/images/clients/WINGS_MART.webp" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.12 },
  },
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative border-b border-white/10 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,68,14,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,184,140,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:76px_76px] opacity-25" />

        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.75fr] lg:items-end"
          >
            <div>
              <motion.div
                variants={fadeUp}
                className="mb-7 flex items-center gap-4"
              >
                <span className="h-0.5 w-12 bg-primary" />
                <span className="text-sm font-medium uppercase tracking-widest text-primary">
                  Testimonials
                </span>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="max-w-5xl text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
              >
                Trusted by brands that need{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  visuals with purpose.
                </span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-3xl text-base leading-relaxed text-gray-300 md:text-xl"
              >
                Client words from campaigns, events, launches, product shoots,
                and creative work shaped by One Fam Media Hub.
              </motion.p>
            </div>

            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden border border-white/10 bg-white/[0.045] p-7 backdrop-blur md:p-8"
            >
              <Quote className="mb-7 text-primary" size={36} />
              <p className="text-xl font-light leading-relaxed text-gray-100">
                The team brought together documentation, creative direction,
                and digital thinking in one smooth process. That made the
                project easier, faster, and stronger.
              </p>
              <div className="mt-8 flex items-center justify-between gap-5 border-t border-white/10 pt-6">
                <div>
                  <p className="font-bold text-white">Featured Client Note</p>
                  <p className="mt-1 text-sm text-gray-400">
                    Production + Marketing Support
                  </p>
                </div>
                <div className="flex text-secondary">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={17} fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-white/10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="border border-white/10 bg-white/[0.035] p-5 md:p-7"
              >
                <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary md:text-4xl">
                  {item.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 py-20 lg:py-28">
        <div className="absolute left-0 top-28 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-14 max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-0.5 w-10 bg-primary" />
              <span className="text-sm font-medium uppercase tracking-widest text-primary">
                Client Reviews
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              What clients value most: clarity, craft, and dependable delivery.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${testimonial.company}`}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-widest text-primary">
                Partner Brands
              </p>
              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                Built with brands across events, commerce, and digital media.
              </h2>
              <p className="mt-6 leading-relaxed text-gray-400">
                From one-day event coverage to ongoing campaign production, the
                work is shaped to feel polished, practical, and platform-ready.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {clientLogos.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="flex aspect-[4/3] items-center justify-center border border-white/10 bg-white/[0.04] p-5 grayscale transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.07] hover:grayscale-0"
                >
                  <Image
                    src={client.src}
                    alt={`${client.name} logo`}
                    width={150}
                    height={100}
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden border border-white/10 bg-white/[0.045] p-7 md:p-10 lg:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/10 blur-[90px]" />
            <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
              <div>
                <p className="mb-5 text-sm font-medium uppercase tracking-widest text-primary">
                  Your project next
                </p>
                <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                  Ready to create work your audience remembers?
                </h2>
                <p className="mt-5 max-w-2xl leading-relaxed text-gray-400">
                  Bring us the event, product, brand, or campaign. We will help
                  shape the visuals, story, and delivery plan.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-4 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
              >
                Start a Conversation
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: "easeOut" }}
      className="group relative overflow-hidden border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.055] md:p-7"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary opacity-70" />
      <div className="mb-7 flex items-start justify-between gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
          <MessageCircle size={23} />
        </div>
        <div className="flex text-secondary">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star key={starIndex} size={15} fill="currentColor" />
          ))}
        </div>
      </div>

      <Quote className="mb-5 text-white/15" size={34} />
      <p className="min-h-36 text-sm leading-relaxed text-gray-300">
        {testimonial.quote}
      </p>

      <div className="mt-8 border-t border-white/10 pt-5">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold text-secondary">
          <BadgeCheck size={14} />
          {testimonial.service}
        </div>
        <h3 className="font-bold text-white">{testimonial.name}</h3>
        <p className="mt-1 text-sm text-gray-400">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </motion.article>
  );
}
