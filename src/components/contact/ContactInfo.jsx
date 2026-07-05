"use client";

import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
      <h3 className="text-2xl font-bold text-white">Contact Info</h3>

      <p className="text-gray-400 text-sm mt-3 leading-6">
        Have a project in mind? Let’s talk and make it happen.
      </p>

      {/* Cards */}
      <div className="mt-8 space-y-4">
        <Link href="mailto:your@email.com" className="contact-card">
          <FiMail />
          <div>
            <p className="text-gray-400 text-sm">Email</p>
            <p className="text-white">your@email.com</p>
          </div>
        </Link>

        <Link href="tel:+8801XXXXXXXXX" className="contact-card">
          <FiPhone />
          <div>
            <p className="text-gray-400 text-sm">Phone</p>
            <p className="text-white">+880 1XXXXXXXXX</p>
          </div>
        </Link>

        <div className="contact-card">
          <FiMapPin />
          <div>
            <p className="text-gray-400 text-sm">Location</p>
            <p className="text-white">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Social */}
      <div className="mt-10">
        <p className="text-gray-400 mb-4">Follow Me</p>

        <div className="flex gap-3">
          <Social href="#" icon={<FaGithub />} />
          <Social href="#" icon={<FaLinkedin />} />
          <Social href="#" icon={<FaWhatsapp />} />
        </div>
      </div>

      {/* reusable style */}
      <style jsx>{`
        .contact-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          transition: 0.3s;
        }
        .contact-card:hover {
          border-color: #22d3ee;
          transform: translateY(-2px);
        }
        .contact-card svg {
          font-size: 20px;
          color: #22d3ee;
        }
      `}</style>
    </div>
  );
}

function Social({ href, icon }) {
  return (
    <Link
      href={href}
      className="h-10 w-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:bg-cyan-500 hover:text-black transition"
    >
      {icon}
    </Link>
  );
}
