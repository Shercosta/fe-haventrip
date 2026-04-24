import "./App.css";
import { HavenTripText } from "./local-components/haventrip-text";

function App() {
  return (
    <section>
      <div
        id="hero"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/pinewood.jpg')",
          width: "100vw",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[100%] h-[100%] p-5">
          <div className="w-full h-full border-4 border-white/30 rounded-[35px] py-8 px-10">
            {/* navbar */}
            <div className="flex w-full">
              <div className="flex items-center gap-2">
                <img
                  src="https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/logo-only-transparent.png"
                  alt="haventrip logo"
                  width={36}
                />
                <HavenTripText classNameBoth="text-shadow-white-glow text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
