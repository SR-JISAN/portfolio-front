"use client";

import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden bg-ink hero-grid"
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-0 h-100 w-100 bg-cyan-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 h-100 w-100 bg-purple-500/20 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 tracking-[6px] uppercase text-sm">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Let’s Build Something{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
              Amazing
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            I’m always open to freelance work, full-time roles, or creative
            ideas. Let’s connect and build something great together.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left */}
          <div className="lg:col-span-4">
            <ContactInfo />
          </div>

          {/* Right */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
