"use client";
import React from "react";
import Logo from "@/public/assets/images/logos/onefam_media_hub_logo.svg";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-midwhite pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="block">
              {/* <h2 className="text-2xl font-bold tracking-tight text-white">
                ONE FAM <br />
                <span className="text-primary text-sm tracking-widest uppercase">
                  Media Hub
                </span>
              </h2> */}
              <Image
                src="/assets/images/logos/onefam_media_hub_logo.svg"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevating brands through strategic visual content and high-level
              digital solutions. Your Vision. Our Lens. One Family.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Facebook size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <FooterLink href="#">Event Documentation</FooterLink>
              <FooterLink href="#">Digital Marketing</FooterLink>
              <FooterLink href="#">Multimedia Production</FooterLink>
              <FooterLink href="#">Brand Identity</FooterLink>
              <FooterLink href="#">Content Strategy</FooterLink>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Our Process</FooterLink>
              <FooterLink href="#">Portfolio</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start space-x-3 group cursor-pointer hover:text-white transition-colors">
                <Mail
                  size={18}
                  className="text-primary mt-0.5 group-hover:scale-110 transition-transform"
                />
                <a href="mailto:onefammediahub@gmail.com">
                  onefammediahub@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3 group cursor-pointer hover:text-white transition-colors">
                <Phone
                  size={18}
                  className="text-primary mt-0.5 group-hover:scale-110 transition-transform"
                />
                <a href="tel:+919003340470">+91 90033 40470</a>
                <span>||</span>
                <a href="tel:+918608558212">+91 86085 58212</a>
              </li>
              <li className="flex items-start space-x-3 group cursor-pointer hover:text-white transition-colors">
                <MapPin
                  size={18}
                  className="text-primary mt-0.5 group-hover:scale-110 transition-transform"
                />
                <span>
                  172/5, Marudhachalapuram Main Road, <br />
                  60 Feet Rd, near Bishop School, <br />
                  Tiruppur- 641 602
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} One Fam Media Hub. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center group hover:text-white transition-colors duration-300"
      >
        <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 text-primary">
          <ArrowRight size={12} className="mr-1" />
        </span>
        <span className="group-hover:translate-x-1 transition-transform duration-300">
          {children}
        </span>
      </Link>
    </li>
  );
}
