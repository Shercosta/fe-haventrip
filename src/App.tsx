import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/local/Navbar";
import { destinations } from "./arrays/destinations";
import { cn } from "./lib/utils";
import { Button } from "./components/ui/button";
import { MapPin } from "lucide-react";

function App() {
  const [heroDestination] = useState(
    destinations.filter((destination) => destination.isHero)[0],
  );
  return (
    <section>
      <div
        id="hero"
        style={{
          backgroundImage: `url(${heroDestination.images[0].url})`,
          width: "100vw",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[100%] h-[100%] p-5">
          <div className="w-full h-full border-4 border-white/30 rounded-[35px] py-8 px-10 flex flex-col">
            {/* navbar */}
            <Navbar />
            {/* content */}
            <div className="flex flex-col flex-1">
              {heroDestination.catchphrases ? (
                heroDestination.catchphrases.map(
                  (catchphrase, catchphrase_idx) => (
                    <span
                      key={`catchphrase-${catchphrase_idx}`}
                      className={cn([
                        "block leading-[0.8] text-4xl sm:text-5xl md:text-6xl lg:text-[80px]",
                        "break-words",
                        "text-right md:text-left",
                        catchphrase.colorHex
                          ? `text-[${catchphrase.colorHex}]`
                          : "text-white",
                      ])}
                      style={{
                        opacity: catchphrase.opacity ?? 1,
                      }}
                    >
                      {catchphrase.text}
                    </span>
                  ),
                )
              ) : (
                <>
                  <span className="text-[100px] block leading-[0.8] text-white">
                    Your Heaven
                  </span>
                  <span className="text-[100px] block leading-[0.8] text-white opacity-60">
                    Our Trip
                  </span>
                </>
              )}
              {/* need this to take up the height of the remaining space */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 items-end">
                <div className="hidden lg:block">
                  <div className="flex lg:max-w-[60%] text-white">
                    {heroDestination.description}
                  </div>
                </div>
                <div className="text-white hidden lg:block">
                  <div className="flex text-lg gap-2 items-center">
                    <MapPin /> {heroDestination.location}
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-4 bg-black/30 backdrop-blur-sm rounded-xl p-4 text-white">
                    <span className="text-xl block">
                      {heroDestination.name}
                    </span>
                    <span className="block">
                      Rp {heroDestination.price.toLocaleString()}
                    </span>
                    <Button className="w-full" variant={"secondary"}>
                      Reservasi
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
