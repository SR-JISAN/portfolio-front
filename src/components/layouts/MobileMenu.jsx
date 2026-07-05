"use client";

import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MobileMenu({ open, setOpen, navItems }) {
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (open) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        {
          x: "0%",
          duration: 0.6,
          ease: "power4.out",
        },
      );

      gsap.fromTo(
        linksRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          delay: 0.2,
          duration: 0.6,
          ease: "power4.out",
        },
      );
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={menuRef}
      className=" fixed inset-0 z-999
    bg-white/2
    backdrop-blur-3xl
    backdrop-saturate-150
    border border-white/10"
    >
      {/* Close */}
      <button
        onClick={() => setOpen(false)}
        className="absolute right-8 top-8 z-50"
      >
        <X color="#f0f0f0" size={36} />
      </button>

      {/* Menu */}
      <div
        className="fixed inset-0 flex h-full flex-col items-center justify-center gap-5
             bg-black/10 backdrop-blur-3xl
                transition-all duration-300"
      >
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            ref={(el) => (linksRef.current[index] = el)}
            className="text-2xl font-bold text-white transition hover:text-primary"
          >
            {item.label}
          </Link>
        ))}

        <button
          className="flex w-32 items-center justify-center rounded-full border border-white/20
        bg-white/5 px-4 py-3 text-white backdrop-blur-md
          transition hover:bg-white/10"
        >
          <span>Let&apos;s Talk</span>
          <ArrowUpRight />
        </button>
      </div>
    </div>
  );
}
