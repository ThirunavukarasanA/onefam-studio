"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Day Clean", src: "/assets/images/clients/DAY_CLEAN.png" },
  { name: "Elements", src: "/assets/images/clients/ELEMENTS.png" },
  { name: "Kalki Online", src: "/assets/images/clients/KALKI_ONLINE.png" },
  { name: "Meraki", src: "/assets/images/clients/MERAKI.png" },
  { name: "Nutra", src: "/assets/images/clients/NUTRA.png" },
  { name: "Pixel Creation", src: "/assets/images/clients/PIXEL_CREATION.png" },
  { name: "Gokulam", src: "/assets/images/clients/GOKULAM.png" },
  { name: "Wings Mart", src: "/assets/images/clients/WINGS_MART.webp" },
];

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function TypingText({ text, className = "" }) {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </span>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const wordVariants = {
  hidden: { y: 40, filter: "blur(10px)", opacity: 0 },
  visible: {
    y: 0,
    filter: "blur(0px)",
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ClientsSection() {
  return (
    <section className="bg-black py-20 relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 mb-12 relative z-10">
        <motion.div
          className="flex items-center space-x-4 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span
            className="h-0.5 bg-primary block"
            variants={{
              hidden: { width: 0 },
              visible: {
                width: "3rem",
                transition: { duration: 0.8, ease: "easeInOut" },
              },
            }}
          />
          <motion.span
            className="text-primary font-medium tracking-widest uppercase text-sm"
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.05, delayChildren: 0.8 },
              },
            }}
          >
            <TypingText text="Our Partners" />
          </motion.span>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white max-w-2xl flex flex-wrap gap-x-2 gap-y-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {["Trusted by"].map((word, i) => (
            <motion.span key={i} variants={wordVariants}>
              {word}
            </motion.span>
          ))}
          {["Innovative"].map((word, i) => (
            <motion.span key={i} variants={wordVariants}>
              {word}
            </motion.span>
          ))}
          <br className="w-full h-0 block" />
          {["Brands & Businesses"].map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        {/* Gradient Masks for smooth fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-20" />

        <div className="flex">
          <MarqueeGroup />
          <MarqueeGroup />
          <MarqueeGroup />
        </div>
      </div>
    </section>
  );
}

function MarqueeGroup() {
  return (
    <motion.div
      className="flex items-center space-x-12 shrink-0 px-6"
      animate={{ x: "-100%" }}
      transition={{
        ease: "linear",
        duration: 30, // Adjust speed here
        repeat: Infinity,
      }}
    >
      {clients.map((client, index) => (
        <div
          key={index}
          className="relative w-32 h-24 md:w-40 md:h-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer"
        >
          <Image
            src={client.src}
            alt={client.name}
            width={160}
            height={112}
            className="object-contain w-full h-full"
          />
        </div>
      ))}
    </motion.div>
  );
}
