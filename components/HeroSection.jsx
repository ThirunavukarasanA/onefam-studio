"use client";
import React, { useEffect, useState } from "react";
import Poster from "@/public/assets/images/poster.png";

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
  const webm = "/assets/videos/ONE_FAM_MEDIA_HUB.webm";
  return (
    <div className="relative top-0">
      <div className="w-screen h-screen overflow-hidden">
        {/* <video
          src="/assets/videos/ONE_FAM_MEDIA_HUB.mp4"
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster={Poster}
          className="w-full h-full object-cover"
        /> */}
        <video
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster={Poster}
          className="w-full h-full object-cover"
        >
          {webm && <source src={webm} type="video/webm" />}
          <source src="/assets/videos/ONE_FAM_MEDIA_HUB.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
