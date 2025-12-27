"use client";
import { motion } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const transition = {
  duration: 0.8,
  delay: 1,
  ease: [0, 0.71, 0.2, 1.01],
};
const paragraphVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.01,
      delayChildren: 2.0, // Wait for heading animation to complete
    },
  },
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

export default function AboutSection() {
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

  return (
    <section className="bg-black text-midwhite py-10 lg:py-10 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Title and Heading */}
          <div className="space-y-8">
            <motion.div
              className="flex items-center space-x-4"
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
                <TypingText text="Who We Are" />
              </motion.span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-tight flex flex-wrap gap-x-3 gap-y-1"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {["We Transform"].map((word, i) => (
                <motion.span key={i} variants={wordVariants}>
                  {word}
                </motion.span>
              ))}
              <br className="hidden lg:block w-full h-0" />
              {["Creative Concepts"].map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden lg:block w-full h-0" />
              {["Into Powerful Results."].map((word, i) => (
                <motion.span key={i} variants={wordVariants}>
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-8">
            <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed font-light"
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TypingText
                text="One Fam Media Hub"
                className="text-primary font-medium"
              />
              <TypingText text=" is a professional creative agency specializing in " />
              <TypingText
                text="Event Documentation"
                className="text-white font-medium"
              />
              <TypingText text=", " />
              <TypingText
                text="Digital Marketing"
                className="text-white font-medium"
              />
              <TypingText text=", and " />
              <TypingText
                text="Multimedia Production"
                className="text-white font-medium"
              />
              <TypingText text=". We provide high-end photography, cinematic videography, drone coverage, and data-driven marketing to elevate your brand’s visibility." />
              <br />
              <br />
              <TypingText text="From first-frame production to final-click conversion, we are your partners in digital excellence." />
            </motion.p>
            {/* <motion.p
              className="text-lg md:text-xl text-gray-300 leading-relaxed font-light"
              variants={paragraphVariants}
              transition={transition}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TypingText text="From first-frame production to final-click conversion, we are your partners in digital excellence." />
            </motion.p> */}
            {/* <div className="flex items-center space-x-4">
              <span className="h-0.5 w-12 bg-primary"></span>
              <span className="text-primary font-medium tracking-widest uppercase text-sm">
                Your Vision. Our Lens. One Family.
              </span>
            </div> */}

            <motion.div
              className="flex items-center space-x-4"
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
                <TypingText text="Your Vision. Our Lens. One Family." />
              </motion.span>
            </motion.div>
            {/* Services Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Event Documentation",
                "Digital Marketing",
                "Multimedia Production",
              ].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 border border-white/10 rounded-full text-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Metrics/Features (Optional Visual Balance) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 border-t border-white/10 pt-12">
          {[
            {
              title: "Excellence",
              desc: "Setting the highest standards in every project.",
            },
            {
              title: "Precision",
              desc: "Attention to detail that defines quality.",
            },
            {
              title: "Innovation",
              desc: "Forward-thinking solutions for modern brands.",
            },
          ].map((feature, i) => (
            <div key={i} className="group">
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
