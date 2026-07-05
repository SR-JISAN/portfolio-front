"use client";

import { Code2, Rocket, Sparkles, MonitorSmartphone } from "lucide-react";

const cards = [
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: "Clean Code",
    desc: "Writing scalable, reusable and maintainable code with modern best practices.",
  },
  {
    icon: <MonitorSmartphone className="h-8 w-8 text-cyan-400" />,
    title: "Responsive UI",
    desc: "Creating beautiful user interfaces that work perfectly on every device.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-violet-400" />,
    title: "Performance",
    desc: "Optimized websites with excellent loading speed and smooth interactions, SEO Friendly.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-amber-400" />,
    title: "User Experience",
    desc: "Designing intuitive 3D Animation experiences that users enjoy using every day.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative w-full sm:w-11/12 mx-auto hero-grid py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      <div className="mx-auto w-[92%] max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-amber-500 text-3xl font-semibold uppercase tracking-[5px]">
            Why Me!
          </span>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Building modern web experiences
            <span className="bg-linear-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              with purpose.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            I&apos;m <span className="font-semibold text-white">MD. Jisan</span>, a
            passionate Full Stack Web Developer focused on building fast,
            responsive, SEO Friendly and scalable web applications using Tailwind, Daisy UI, Next.js, React.js, Gsap, Three.js, Vibe Coding, TypeScript,
            Prisma, PostgreSQL, AI and modern UI technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 hover:bg-white/10"
            >
              <div className="mb-6">{card.icon}</div>

              <h3 className="mb-4 text-xl font-bold">{card.title}</h3>

              <p className="leading-7 text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
            <h3 className="text-5xl font-black text-primary">20+</h3>
            <p className="mt-2 text-gray-400">Projects Completed</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
            <h3 className="text-5xl font-black text-primary">2+</h3>
            <p className="mt-2 text-gray-400">Years Learning</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
            <h3 className="text-5xl font-black text-primary">100%</h3>
            <p className="mt-2 text-gray-400">Client Focused</p>
          </div>
        </div>
      </div>
    </section>
  );
}
