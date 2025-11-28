"use client";
import React, { useEffect, useState } from "react";

export default function HeroSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollPosition(true);
      } else {
        setScrollPosition(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("scrollPosition :", scrollPosition);

  return (
    <div className="relative top-0">
      <div className="w-screen h-screen overflow-hidden">
        <video
          src="/assets/videos/ONE_FAM_MEDIA_HUB.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
