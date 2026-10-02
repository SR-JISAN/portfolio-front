"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import NavLinks from "./NavLinks";
import MagneticButton from "./MagneticButton";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef(null);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // scroll background change
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // mobile menu animation
  useEffect(() => {
    if (!open) return;

    gsap.fromTo(
      menuRef.current,
      { x: "100%" },
      { x: "0%", duration: 0.6, ease: "power4.out" },
    );

    gsap.fromTo(
      linksRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        delay: 0.2,
        duration: 0.6,
        ease: "power4.out",
      },
    );
  }, [open]);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header className="fixed top-5 left-0 z-50 w-full">
        <div
          ref={navRef}
          className={`mx-auto flex items-center justify-between rounded-full border border-white/10
          transition-all duration-500 shadow-[0_8px_40px_rgba(0,0,0,0.35)]
          ${
            scrolled
              ? "h-16 w-[92%] bg-black/60 backdrop-blur-3xl"
              : "h-20 w-[96%] bg-white/6 backdrop-blur-3xl"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="ml-8 text-2xl font-black tracking-widest text-white"
          >
            J<span className="text-blue-600 italic">I</span>SAN.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
              {navItems.map((item, i) => (
                <li key={item.href}>
                  <NavLinks href={item.href}>{item.label}</NavLinks>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right */}
          <div className="mr-3 flex items-center gap-3">
            <MagneticButton>
              <span>Let&apos;s Talk</span>
              <ArrowUpRight size={18} />
            </MagneticButton>

            <button onClick={() => setOpen(true)} className="lg:hidden">
              <Menu size={30} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        open={open}
        setOpen={setOpen}
        navItems={navItems}
        menuRef={menuRef}
        linksRef={linksRef}
      />
    </>
  );
}
