"use client";
import React, { useState } from "react";
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

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const fieldPatterns = {
  name: /^[A-Za-z ]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[0-9]+$/,
  subject: /^[A-Za-z0-9 ]+$/,
  message: /^[A-Za-z0-9 ]*$/,
};

function sanitizeField(name, value) {
  if (name === "name") return value.replace(/[^A-Za-z ]/g, "");
  if (name === "phone") return value.replace(/[^0-9]/g, "");
  if (name === "subject" || name === "message") {
    return value.replace(/[^A-Za-z0-9 ]/g, "");
  }
  return value;
}

function validateForm(data) {
  const errors = {};
  const values = {
    name: data.name.trim(),
    email: data.email.trim(),
    phone: data.phone.trim(),
    subject: data.subject.trim(),
    message: data.message.trim(),
  };

  if (!values.name) {
    errors.name = "Name is required.";
  } else if (!fieldPatterns.name.test(values.name)) {
    errors.name = "Name can contain alphabets and spaces only.";
  }

  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!fieldPatterns.email.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.phone) {
    errors.phone = "Phone number is required.";
  } else if (!fieldPatterns.phone.test(values.phone)) {
    errors.phone = "Phone number can contain numbers only.";
  }

  if (!values.subject) {
    errors.subject = "Subject is required.";
  } else if (!fieldPatterns.subject.test(values.subject)) {
    errors.subject = "Subject can contain alphabets, numbers, and spaces only.";
  }

  if (values.message && !fieldPatterns.message.test(values.message)) {
    errors.message = "Message can contain alphabets, numbers, and spaces only.";
  }

  return errors;
}

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const sanitizedValue = sanitizeField(name, value);

    setFormData((current) => ({ ...current, [name]: sanitizedValue }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields before submitting.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (!response.ok) {
        setErrors(result.errors || {});
        setStatus({
          type: "error",
          message: result.message || "Unable to send your message.",
        });
        return;
      }

      setFormData(initialFormData);
      setStatus({
        type: "success",
        message: "Thank you. Your message has been saved successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            hello, we&apos;d love to hear from you.
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
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup
                  label="Name"
                  name="name"
                  placeholder="John Doe"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                />
                <InputGroup
                  label="Email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                />
              </div>
              <InputGroup
                label="Phone"
                name="phone"
                placeholder="9876543210"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                inputMode="numeric"
                required
              />
              <InputGroup
                label="Subject"
                name="subject"
                placeholder="Project Inquiry"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                required
              />
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message <span className="text-gray-600">(optional)</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all resize-none ${
                    errors.message
                      ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/50"
                      : "border-white/10 focus:border-primary/50 focus:ring-primary/50"
                  }`}
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message ? (
                  <p className="mt-2 text-xs text-red-400">{errors.message}</p>
                ) : null}
              </div>

              {status.message ? (
                <p
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-green-500/30 bg-green-500/10 text-green-300"
                      : "border-red-500/30 bg-red-500/10 text-red-300"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:opacity-90 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/25 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
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

function InputGroup({
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
  error,
  inputMode,
  required = false,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-400 mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        inputMode={inputMode}
        required={required}
        className={`w-full bg-black/40 border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-1 transition-all ${
          error
            ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/50"
            : "border-white/10 focus:border-primary/50 focus:ring-primary/50"
        }`}
        placeholder={placeholder}
      />
      {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}
    </div>
  );
}
