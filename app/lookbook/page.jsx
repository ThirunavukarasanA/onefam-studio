"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Clapperboard,
  Film,
  Layers,
  Megaphone,
  Play,
  Sparkles,
} from "lucide-react";

const featuredStories = [
  {
    title: "Event Films",
    label: "Documentation",
    description:
      "Cinematic edits, candid frames, live moments, stage highlights, and full-scale event storytelling.",
    stat: "Live + Edited",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Brand Launches",
    label: "Campaign",
    description:
      "Product visuals, social-first teasers, launch reels, and performance-ready campaign assets.",
    stat: "Photo + Video",
    className: "",
  },
  {
    title: "Social Creatives",
    label: "Digital",
    description:
      "Posters, thumbnails, ad creatives, short edits, and scroll-stopping design systems.",
    stat: "Design + Ads",
    className: "",
  },
  {
    title: "Wedding Stories",
    label: "Celebration",
    description:
      "Warm, premium coverage for receptions, rituals, portraits, entrances, and emotional highlights.",
    stat: "Photo + Film",
    className: "lg:col-span-2",
  },
];

const capabilities = [
  { title: "Photography", icon: Camera },
  { title: "Videography", icon: Film },
  { title: "Short Films", icon: Clapperboard },
  { title: "Ad Creatives", icon: Megaphone },
  { title: "Brand Systems", icon: Layers },
  { title: "Drone Coverage", icon: Sparkles },
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
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.12 },
  },
};

export default function LookbookPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative min-h-screen border-b border-white/10">
        {/*<video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/assets/images/poster.png"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/assets/videos/ONE_FAM_MEDIA_HUB.webm" type="video/webm" />
          <source src="/assets/videos/ONE_FAM_MEDIA_HUB.mp4" type="video/mp4" />
        </video>*/}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

        <div className="container relative z-10 mx-auto flex min-h-screen items-end px-6 pb-16 pt-32 lg:pb-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-7 flex items-center gap-4"
            >
              <span className="h-0.5 w-12 bg-primary" />
              <span className="text-sm font-medium uppercase tracking-widest text-primary">
                Lookbook
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl"
            >
              Visual stories shaped for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                attention, memory, and growth.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-3xl text-base leading-relaxed text-gray-300 md:text-xl"
            >
              A cinematic look at how One Fam Media Hub frames events, brands,
              products, people, and campaigns across photo, video, design, and
              digital media.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#featured-work"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-4 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
              >
                View Frames
                <Play size={18} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition-all hover:border-primary/60 hover:bg-white/5"
              >
                Book a Shoot
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="featured-work"
        className="border-b border-white/10 py-20 lg:py-28"
      >
        <div className="container mx-auto px-6">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-widest text-primary">
                Featured Directions
              </p>
              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                A lookbook built around real production needs.
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Each frame direction is designed to work beyond one post: hero
              videos, reels, posters, launch assets, thumbnails, campaign
              creatives, and long-term brand recall.
            </p>
          </div>

          <div className="grid auto-rows-[minmax(260px,auto)] grid-cols-1 gap-5 lg:grid-cols-4">
            {featuredStories.map((story, index) => (
              <LookbookTile key={story.title} story={story} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-widest text-primary">
                Production Range
              </p>
              <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
                One visual system, many campaign formats.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
            >
              Explore services
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.055]"
                >
                  <Icon className="mb-8 text-primary" size={26} />
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-5 text-sm font-medium uppercase tracking-widest text-primary">
                Brand Moments
              </p>
              <h2 className="text-3xl font-bold leading-tight md:text-5xl">
                Frames made to feel premium across every touchpoint.
              </h2>
              <p className="mt-6 text-gray-400 leading-relaxed">
                From event floors to social feeds, the lookbook language keeps
                the brand sharp, cinematic, and ready for conversion.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-4 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
              >
                Plan Your Visuals
                <ArrowRight size={18} />
              </Link>
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
    </main>
  );
}

function LookbookTile({ story, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
      className={`group relative min-h-72 overflow-hidden border border-white/10 bg-zinc-950 ${story.className}`}
    >
      <Image
        src="/assets/images/poster.png"
        alt={`${story.title} visual preview`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover opacity-55 transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
      <div className="absolute inset-0 border border-white/0 transition-colors duration-300 group-hover:border-primary/40" />

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="border border-white/15 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-secondary backdrop-blur">
            {story.label}
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">
            {story.stat}
          </span>
        </div>
        <h3 className="text-2xl font-bold md:text-3xl">{story.title}</h3>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-300">
          {story.description}
        </p>
      </div>
    </motion.article>
  );
}
