"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavLinks({ href, children, onClick }) {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  const isHashLink = href.startsWith("#");

  // handle active state
  useEffect(() => {
    const handleScroll = () => {
      if (!isHashLink) return;

      const id = href.replace("#", "");
      const section = document.getElementById(id);

      if (!section) return;

      const rect = section.getBoundingClientRect();
      setActive(rect.top <= 120 && rect.bottom >= 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [href,isHashLink]);

  const handleClick = (e) => {
    if (isHashLink) {
      e.preventDefault();

      const id = href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (onClick) onClick();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative rounded-full px-5 py-2 text-sm font-medium cursor-pointer"
    >
      {active && (
        <motion.span
          layoutId="navbar-pill"
          className="absolute inset-0 rounded-full bg-primary"
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
        />
      )}

      <span
        className={`relative z-10 transition-colors duration-300 ${
          active ? "text-white" : "text-white/70 hover:text-green-400"
        }`}
      >
        {children}
      </span>
    </a>
  );
}
