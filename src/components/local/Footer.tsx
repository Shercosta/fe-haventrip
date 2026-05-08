import { HavenTripText } from "./Haventrip-Text";

export function Footer() {
  return (
    <footer
      id="footer"
      className="
        relative overflow-hidden
        bg-gradient-to-b
        from-sky-50
        via-white
        to-blue-100
        border-t border-blue-200/40
      "
    >
      {/* soft background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-300/10 blur-3xl rounded-full pointer-events-none" />

      {/* Main content */}
      <div
        className="
          relative z-10
          min-h-[45vh]
          flex flex-col lg:flex-row
          items-center justify-center
          gap-8 lg:gap-16
          px-6 py-16
        "
      >
        {/* Logo */}
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full scale-75" />

          <img
            src="https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/logo-only-transparent.png"
            alt="haventrip logo"
            className="
              relative z-10
              w-36 h-36
              sm:w-44 sm:h-44
              lg:w-80 lg:h-80
              object-contain
              drop-shadow-[0_20px_40px_rgba(0,150,255,0.25)]
            "
          />
        </div>

        {/* Brand */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <HavenTripText classNameBoth="text-5xl sm:text-7xl lg:text-[10rem] leading-none tracking-tight font-black" />

          <p
            className="
              mt-5
              max-w-lg
              text-sky-900/70
              text-sm sm:text-base
              leading-relaxed
            "
          >
            Jelajahi pulau pilihan, pantai tersembunyi, dan perjalanan tak
            terlupakan melintasi destinasi terindah di Indonesia.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="
          relative z-10
          border-t border-blue-200/40
          px-6 lg:px-10
          py-5
          flex flex-col sm:flex-row
          items-center justify-between
          gap-3
          text-sm
          text-sky-900/60
          backdrop-blur-sm
        "
      >
        <div>© {new Date().getFullYear()} Shercosta. All rights reserved.</div>

        <div className="flex gap-3">
          <a
            href="mailto:haventripid@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
            transition-all duration-300
            hover:text-sky-950
            hover:-translate-y-0.5
          "
          >
            haventripid@gmail.com ↗
          </a>
          <a
            href="https://instagram.com/haventripid"
            target="_blank"
            rel="noopener noreferrer"
            className="
            transition-all duration-300
            hover:text-sky-950
            hover:-translate-y-0.5
          "
          >
            Instagram ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
