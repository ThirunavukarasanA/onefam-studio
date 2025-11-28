"use client";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Logo from "@/public/assets/images/logos/onefam_media_hub_logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Container = ({ children, className = "" }) => (
  <div
    className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
  >
    {children}
  </div>
);
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 6500);
  });
  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const links = [
    ["#services", "Services"],
    ["#process", "Process"],
    ["#lookbook", "Lookbook"],
    ["#testimonials", "Reviews"],
    ["#contact", "Contact"],
  ];
  const btnPrimary =
    "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-amber-500 px-6 py-3 text-white font-semibold shadow transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";
  const btnGhost =
    "inline-flex items-center justify-center gap-2 rounded-full ring-1 ring-zinc-300 px-6 py-3 text-white font-semibold transition-all hover:bg-blue-50 hover:ring-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";
  const btnTiny =
    "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-600 to-amber-500 px-4 py-2 text-white text-sm shadow transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";
  return (
    <>
      <AnimatePresence>
        {show ? (
          <motion.header
            initial={{ opacity: 0, y: -40 }} // starting position (hidden)
            animate={{ opacity: 1, y: 0 }} // visible state
            exit={{ opacity: 0, y: -40 }} // if ever hidden again
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-transparent transition-all duration-200 backdrop-blur w-full fixed top-0 z-50 border-b border-zinc-200/60"
          >
            <Container className="flex items-center justify-between py-3">
              {/* Logo */}
              <a href="#home" className="flex items-center gap-2">
                <div className="leading-tight">
                  <div>
                    <Image
                      src={Logo}
                      className=""
                      alt="OneFam Media Hub Logo"
                    />
                  </div>
                </div>
              </a>

              {/* Desktop nav */}
              <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
                {links.map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    className="uppercase text-white hover:text-primary"
                  >
                    {label}
                  </a>
                ))}
                {/* <a href="#contact" className={btnTiny}>
                Shop Now <ArrowRight className="h-4 w-4" />
              </a> */}
              </nav>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden p-2 rounded-md ring-1 text-primary ring-zinc-200"
                onClick={() => setOpen(true)}
                aria-label="Open Menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </Container>

            {/* Mobile Dialog Menu (right-to-left slide) */}
            <Transition show={open} as={Fragment}>
              <Dialog as="div" className="lg:hidden" onClose={setOpen}>
                {/* Backdrop */}
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black/60 z-40" />
                </Transition.Child>

                {/* Drawer panel */}
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in duration-200 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="fixed inset-y-0 right-0 w-full max-w-sm bg-black z-50 overflow-y-auto h-screen p-4 border-l border-zinc-200">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-sm font-semibold text-white tracking-widest">
                        MENU
                      </span>
                      <button
                        onClick={() => setOpen(false)}
                        className="text-zinc-900 p-2 rounded-md ring-1 ring-zinc-200"
                        aria-label="Close Menu"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    <nav className="space-y-4">
                      {links.map(([href, label]) => (
                        <a
                          key={href}
                          href={href}
                          onClick={() => setOpen(false)}
                          className="block uppercase font-semibold py-2 border-b border-zinc-200/60 text-white hover:text-primary "
                        >
                          {label}
                        </a>
                      ))}

                      <div className="mt-6 space-y-3">
                        <a
                          href="#contact"
                          onClick={() => setOpen(false)}
                          className={`${btnPrimary} w-full justify-center`}
                        >
                          Shop Now
                        </a>
                        <a
                          href="#lookbook"
                          onClick={() => setOpen(false)}
                          className={`${btnGhost} w-full justify-center`}
                        >
                          View Lookbook
                        </a>
                      </div>
                    </nav>
                  </Dialog.Panel>
                </Transition.Child>
              </Dialog>
            </Transition>
          </motion.header>
        ) : null}
      </AnimatePresence>
    </>
  );
}
