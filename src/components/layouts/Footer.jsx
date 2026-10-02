export default function Footer() {
  return (
    <footer className="relative hero-grid text-white border-t border-white/10 backdrop-blur-2xl overflow-hidden">
      {/* 🌊 Background Glow Layer */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-125 h-125 bg-cyan-500/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-14 z-10">
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-semibold tracking-wide">Md Jisan</h2>
            <p className="text-sm text-white/60 mt-4 leading-relaxed">
              Frontend Developer focused on building modern, fast, and
              interactive web experiences with clean UI and smooth animations.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white/70 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3 text-white/60">
              <li>
                <a href="#about" className="hover:text-blue-400 transition">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-400 transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white/70 mb-5">
              Let’s Connect
            </h3>

            <p className="text-white/60 text-sm mb-6">
              Available for freelance work and collaborations.
            </p>

            <a
              href="#contact"
              className="inline-flex cursor-pointer items-center px-6 py-2 rounded-full bg-[#2563eb] text-white font-medium transition hover:bg-[#1d4ed8]"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} Md Jisan. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="https://github.com"
              className="hover:text-white transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
            <a href="#top" className="hover:text-white transition">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
