import { useState } from "react";
import { Button } from "../components/ui/button";
import { HavenTripText } from "./Haventrip-Text";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/logo-only-transparent.png"
            alt="haventrip logo"
            width={36}
          />
          <HavenTripText classNameBoth="text-shadow-white-glow text-xl" />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant={"none"}
            className="text-white/80 font-normal hover:text-white"
          >
            Destinasi
          </Button>
          <Button
            variant={"none"}
            className="text-white/80 font-normal hover:text-white"
          >
            Kontak
          </Button>
          <Button variant={"secondary"}>Pesan Sekarang</Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mt-4 flex flex-col gap-2 md:hidden bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/20">
          <Button
            variant={"none"}
            className="text-white/80 justify-start hover:text-white"
          >
            Destinasi
          </Button>
          <Button
            variant={"none"}
            className="text-white/80 justify-start hover:text-white"
          >
            Kontak
          </Button>
          <Button variant={"secondary"}>Pesan Sekarang</Button>
        </div>
      )}
    </nav>
  );
}
