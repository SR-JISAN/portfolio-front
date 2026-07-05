"use client";

import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full sm:w-11/12 mx-auto hero-grid flex min-h-screen items-center">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#050816]" />

        <div className="absolute left-0 top-0 h-125  w-full md:w-125 rounded-full bg-blue-500/20 blur-[180px]" />

        <div className="absolute right-0 top-20 h-112.5 w-full md:w-112.5 rounded-full bg-violet-600/20 blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 h-87.5 w-full md:w-87.5 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto grid w-[92%] max-w-7xl grid-cols-1 items-center gap-16 pt-28 lg:grid-cols-2">
        {/* LEFT */}

        <div>
          <p className="mb-5  font-semibold tracking-[4px] uppercase">
            <span className="text-amber-500">Full Stack</span>{" "}
            <span className="text-fuchsia-500">Web Developer</span>
          </p>

          <h1 className="text-5xl font-black leading-tight lg:text-7xl">
            Hi, I&apos;m
            <br />
            <span className="bg-linear-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              MD. Jisan
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            I build modern, interactive and high-performance web applications
            using Tailwind, Daisy UI, React, Next.js, Vide Coding, TypeScript,
            Prisma and beautiful UI animations.
          </p>

          <div className="mt-10 flex justify-center md:justify-normal  gap-4 md:gap-7">
            <button className="btn text-white hover:bg-emerald-600 btn-outline rounded-full px-5 md:px-8">
              View Projects
              <ArrowRight size={18} />
            </button>

            <a
              href="https://drive.google.com/uc?export=download&id=1E9xv-yRD2zSmh0KVBtjLLVfXcfbOp5t1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline rounded-full px-5 md:px-8 hover:bg-emerald-600 text-white"
            >
              Download CV
              <Download size={18} />
            </a>
          </div>

          <div className="mt-14 flex gap-12">
            <div>
              <h2 className="text-3xl font-bold">20+</h2>
              <p className="text-gray-400">Projects</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">2+</h2>
              <p className="text-gray-400">Years Learning</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">100%</h2>
              <p className="text-gray-400">Dedication</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center">
          {/* Glow */}

          <div className="absolute  h-107.5 w-full md:w-107.5 rounded-full bg-blue-600/20 blur-[150px]" />

          {/* Card */}

          <div className="relative rounded-[40px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl">
            <Image
              src="/Hero.png"
              alt="Jisan"
              width={420}
              height={500}
              className=" rounded-[30px] transition duration-500 hover:scale-105"
            />
          </div>

          {/* Floating Badge */}

          <div className="absolute -left-8 top-16 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

              <div>
                <p className="font-semibold">Available</p>

                <p className="text-sm text-gray-400">Open to work</p>
              </div>
            </div>
          </div>

          <div className="absolute -left-5 bottom-12 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">
            💻 Full Stack Web Developer
          </div>
        </div>
      </div>
    </section>
  );
}
