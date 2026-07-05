"use client";

import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <motion.div
      whileHover={{
        y: -12,
        rotateX: 4,
        rotateY: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="group relative h-80 w-full md:w-64 overflow-hidden rounded-4xl border border-white/10 bg-white/4 p-8 backdrop-blur-2xl"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at top, ${skill.color}30, transparent 70%)`,
        }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: 12,
          scale: 1.15,
        }}
      >
        <div className="text-[42px] sm:text-[54px]">
          <Icon
            color={skill.color}
            className="h-10.5 w-10.5 sm:h-13.5 sm:w-13.5"
          />
        </div>
      </motion.div>

      <h3 className="mt-5 text-lg font-bold sm:mt-6 sm:text-xl md:mt-8 md:text-2xl">
        {skill.name}
      </h3>

      <p className="mt-3 text-xs leading-6 text-gray-400 sm:mt-4 sm:text-sm sm:leading-7">
        {skill.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 md:mt-8">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] sm:px-3 sm:text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
