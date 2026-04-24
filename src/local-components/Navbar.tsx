import { Button } from "../components/ui/button";
import { HavenTripText } from "./Haventrip-Text";

export function Navbar() {
  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center gap-2">
        <img
          src="https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/logo-only-transparent.png"
          alt="haventrip logo"
          width={36}
        />
        <HavenTripText classNameBoth="text-shadow-white-glow text-xl" />
      </div>

      <div className="flex">
        <Button
          variant={"none"}
          className="text-white/80 font-normal text-shadow-lg/20 hover:text-white"
        >
          Destinasi
        </Button>
        <Button
          variant={"none"}
          className="text-white/80 font-normal text-shadow-lg/20 hover:text-white"
        >
          Kontak
        </Button>
        <Button variant={"secondary"}>Pesan Sekarang</Button>
      </div>
    </div>
  );
}
