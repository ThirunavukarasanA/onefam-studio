"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen text-white pt-24 pb-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            className="flex items-center justify-center space-x-2"
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="h-0.5 w-8 bg-primary block"
              variants={{
                hidden: { width: 0 },
                visible: {
                  width: "2rem",
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
              <TypingText text="Get in Touch" />
            </motion.span>
            <motion.span
              className="h-0.5 w-8 bg-primary block"
              variants={{
                hidden: { width: 0 },
                visible: {
                  width: "2rem",
                  transition: { duration: 0.8, ease: "easeInOut" },
                },
              }}
            />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold font-sans flex flex-wrap justify-center gap-x-3 gap-y-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {["Let's Start a"].map((word, i) => (
              <motion.span key={i} variants={wordVariants}>
                {word}
              </motion.span>
            ))}
            <motion.span
              variants={wordVariants}
              className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
            >
              Conversation
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg font-light"
          >
            Whether you have a question, a project in mind, or just want to say
            hello, we'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Contact Info</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Reach out to us directly or fill out the form. We are ready to
                elevate your brand with our premium creative services.
              </p>
            </div>

            <div className="space-y-6">
              <ContactCard
                icon={<Mail size={24} />}
                title="Email Us"
                content="onefammediahub@gmail.com"
                href="mailto:onefammediahub@gmail.com"
              />
              <div className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Call Us</h4>
                    <div className="flex flex-col gap-1 text-gray-400 text-sm">
                      <a
                        href="tel:+919003340470"
                        className="hover:text-primary transition-colors"
                      >
                        +91 90033 40470
                      </a>
                      <a
                        href="tel:+918608558212"
                        className="hover:text-primary transition-colors"
                      >
                        +91 86085 58212
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <ContactCard
                icon={<MapPin size={24} />}
                title="Visit Us"
                content={
                  <>
                    172/5, Marudhachalapuram Main Road, <br />
                    60 Feet Rd, near Bishop School, <br />
                    Tiruppur- 641 602
                  </>
                }
              />
            </div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Name" placeholder="John Doe" type="text" />
                <InputGroup
                  label="Email"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <InputGroup
                label="Phone"
                placeholder="+91 98765 43210"
                type="tel"
              />
              <InputGroup
                label="Subject"
                placeholder="Project Inquiry"
                type="text"
              />
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:opacity-90 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/25"
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

function ContactCard({ icon, title, content, href }) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      className={`flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 ${
        href ? "cursor-pointer hover:bg-white/10" : ""
      }`}
    >
      <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-gray-400 text-sm leading-relaxed">{content}</p>
      </div>
    </Wrapper>
  );
}

function InputGroup({ label, placeholder, type }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">
        {label}
      </label>
      <input
        type={type}
        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
        placeholder={placeholder}
      />
    </div>
  );
}
