"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Day Clean", src: "/assets/images/clients/DAY_CLEAN.png" },
  { name: "Elements", src: "/assets/images/clients/ELEMENTS.jpg" },
  { name: "Kalki Online", src: "/assets/images/clients/KALKI_ONLINE.png" },
  { name: "Meraki", src: "/assets/images/clients/MERAKI.jpg" },
  { name: "Nutra", src: "/assets/images/clients/NUTRA.jpg" },
  { name: "Pixel Creation", src: "/assets/images/clients/PIXEL_CREATION.png" },
  { name: "Wings Mart", src: "/assets/images/clients/WINGS_MART.webp" },
];

export default function ClientsSection() {
  return (
    <section className="bg-black py-20 relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 mb-12 relative z-10">
        <motion.div
          className="flex items-center space-x-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="h-0.5 w-12 bg-primary"></span>
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Our Partners
          </span>
        </motion.div>
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trusted by Innovative <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Brands & Businesses
          </span>
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
