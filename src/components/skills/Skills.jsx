// "use client";

// import SkillsSlider from "./SkillsSlider";

// export default function Skills() {
//   return (
//     <section id="skills" className="relative tech-grid hero-grid overflow-hidden py-32">
//       {/* Background */}

//       <div className="absolute inset-0 -z-10">
//         <div className="absolute left-0 top-0 h-125 w-full md:w-125 rounded-full bg-blue-500/10 blur-[180px]" />

//         <div className="absolute right-0 bottom-0 w-full h-125 md:w-125 rounded-full bg-violet-500/10 blur-[180px]" />
//       </div>

//       <div className="mx-auto mb-20 max-w-3xl text-center">
//         <p className="font-semibold uppercase tracking-[5px] text-primary">
//           My Tech Stack
//         </p>

//         <h2 className="mt-5 text-5xl font-black lg:text-6xl">
//           Technologies I
//           <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
//             {" "}
//             Love
//           </span>
//         </h2>

//         <p className="mt-8 text-lg leading-8 text-gray-400">
//           I enjoy building modern, scalable, and high-performance web
//           applications using today&apos;s most powerful technologies.
//         </p>
//       </div>

//       <SkillsSlider />
//     </section>
//   );
// }


"use client";

import SkillsSlider from "./SkillsSlider";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative tech-grid hero-grid overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-64 w-64
        sm:w-20 rounded-full bg-blue-500/10 blur-[120px] md:h-125 md:w-125 md:blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-64  rounded-full bg-violet-500/10 blur-[120px] md:h-125 md:w-125 md:blur-[180px]" />
      </div>

      <div className="mx-auto mb-10 max-w-3xl px-5 text-center sm:mb-14 lg:mb-20">
        <p className="font-semibold uppercase tracking-[3px] text-primary sm:tracking-[5px]">
          My Tech Stack
        </p>

        <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:mt-5 lg:text-6xl">
          Technologies I
        </h2>

        <p className="mt-5 text-base leading-7  w-80 md:w-full mx-auto text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
          I enjoy building modern, scalable, and high-performance web
          applications using today&apos;s most powerful technologies.
        </p>
      </div>

      <SkillsSlider />
    </section>
  );
}
