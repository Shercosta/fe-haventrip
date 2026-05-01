import "./App.css";
import { Navbar } from "./components/local/Navbar";
import { Hero } from "./components/local/Hero";
import { Destination } from "./components/local/Destination";
import { useHero } from "./context/HeroContext";

function App() {
  const { hero: heroDestination } = useHero();
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
        <div className="w-[100%] h-[90%] lg:h-[100%] p-5">
          <div className="w-full h-full border-4 border-white/30 rounded-[35px] py-8 px-10 flex flex-col">
            {/* navbar */}
            <Navbar />
            {/* content */}
            <Hero heroDestination={heroDestination} />
          </div>
        </div>
      </div>

      <Destination />
    </section>
  );
}

export default App;
