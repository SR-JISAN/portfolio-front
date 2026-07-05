"use client";

import { useRef } from "react";

export default function MagneticButton({ children }) {
  const ref = useRef(null);

  function move(e) {
    const btn = ref.current;
    const rect = btn.getBoundingClientRect();

    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    btn.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
  }

  function leave() {
    ref.current.style.transform = "translate(0px,0px)";
  }

  return (
    <button
      ref={ref}
      onClick={() =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      onMouseMove={move}
      onMouseLeave={leave}
      className="btn w-31 border-0  bg-white/0 text-white  rounded-full transition-transform duration-300 hidden md:flex backdrop-blur-md hover:bg-white/20 shadow-lg "
    >
      {children}
    </button>
  );
}
