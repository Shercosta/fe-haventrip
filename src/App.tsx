import "./App.css";

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
          backgroundSize: "cover", // 👈 THIS is the important one
          backgroundRepeat: "no-repeat", // 👈 optional but recommended
        }}
      >
        <div className="w-[100%] h-[100%] p-5">
          <div className="w-full h-full border-4 border-white/30 rounded-xl py-8 px-10">
            {/* navbar */}
            <div className="flex w-full">
              <div>
                <img
                  src="https://raw.githubusercontent.com/Shercosta/fe-haventrip/refs/heads/master/public/logo-only-transparent.png"
                  alt="haventrip logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
