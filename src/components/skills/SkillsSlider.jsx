//

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { skills } from "./SkillsData";
import SkillCard from "./SkillCard";
import { useEffect, useState } from "react";




export default function SkillsSlider() {
const [current, setCurrent] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % skills.length);
      }, 3000); // change every 3 seconds

      return () => clearInterval(interval);
    }, []);
  return (
    <>
      {/* ================= Desktop ================= */}
      <div className="relative hidden overflow-hidden py-8 md:block">
        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-40 bg-linear-to-r from-[#050816] to-transparent" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-40 bg-linear-to-l from-[#050816] to-transparent" />

        {/* Row 1 */}
        <motion.div
          className="mb-8 flex w-max gap-6"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <SkillCard key={`top-${index}`} skill={skill} />
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="flex w-max gap-6"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <SkillCard key={`bottom-${index}`} skill={skill} />
          ))}
        </motion.div>
      </div>

      {/* ================= Mobile ================= */}
      {/* Mobile */}
      <div className="relative flex h-85 items-center justify-center overflow-hidden md:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="absolute"
          >
            <SkillCard skill={skills[current]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}