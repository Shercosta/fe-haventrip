import { Navbar } from "../components/local/Navbar";
import { Hero } from "../components/local/Hero";
import { Destination } from "../components/local/Destination";
import { useHero } from "../context/HeroContext";
import { Footer } from "../components/local/Footer";
import { UserLocationRequest } from "@/components/local/UserLocationRequest";

function HomePage() {
  const { hero: heroDestination } = useHero();
  return (
    <section>
      <div
        id="hero"
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${heroDestination.images[0].url})`,
          width: "100vw",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div
          className="
      absolute inset-0
      bg-gradient-to-t
      from-black/50
      via-black/10
      to-transparent
      z-0
    "
        />

        {/* Content */}
        <div className="relative z-10 w-[100%] h-[90%] lg:h-[100%] p-5">
          <div className="w-full h-full border-4 border-white/30 rounded-[35px] py-8 px-10 flex flex-col">
            {/* navbar */}
            <Navbar />

            {/* content */}
            <Hero heroDestination={heroDestination} />
          </div>
        </div>
      </div>

      <Destination />
      <Footer />

      {/* user location request */}
      <UserLocationRequest />
    </section>
  );
}

export default HomePage;
