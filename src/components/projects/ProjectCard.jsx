"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiGithub, FiExternalLink } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-xl shadow-2xl"
    >
      {/* Glow */}
      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl group-hover:bg-cyan-500/40 transition-all duration-700"></div>

      {/* Browser */}
      <div className="border-b border-white/10 bg-[#111827] px-5 py-3 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>

        <p className="text-xs text-gray-400 truncate">{project.live_Url}</p>
      </div>

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.project_name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h2 className="text-2xl font-bold text-white">
          {project.project_name}
        </h2>

        <p className="mt-4 text-gray-400 leading-7">{project.description}</p>

        {/* Tech */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs  text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <Link
            href={project.github_Url}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 text-white transition hover:bg-white hover:text-black"
          >
            <FiGithub />
            GitHub
          </Link>

          <Link
            href={project.live_Url}
            target="_blank"
            className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:scale-105"
          >
            Live Demo
            <FiExternalLink />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
