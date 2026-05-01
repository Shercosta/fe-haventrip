import { getDestinationById } from "@/arrays/destinations";
import { useParams } from "react-router-dom";

export function DestinationPage() {
  const { id } = useParams();

  const destination = getDestinationById(Number(id));

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Destination not found
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO */}
      <section
        className="relative h-[70vh] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${destination.images[0]?.url})`,
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        {/* content */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-20 py-12 text-white">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.3em] text-sm text-white/70 mb-3">
              {destination.location}
            </p>

            <h1 className="text-5xl lg:text-7xl font-black mb-4">
              {destination.name}
            </h1>

            <div className="flex flex-wrap gap-3 mb-6">
              <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-full">
                {destination.trip_duration} Days
              </div>

              <div className="bg-white/15 backdrop-blur-md px-4 py-2 rounded-full">
                Rp {destination.price.toLocaleString("id-ID")}
              </div>
            </div>

            <p className="max-w-2xl text-white/85 text-lg leading-relaxed">
              {destination.description}
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-10">
            {/* Gallery */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">
                Gallery
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={`${destination.name} ${index}`}
                    className={`
                      rounded-3xl
                      object-cover
                      w-full
                      h-72
                      shadow-lg
                      hover:scale-[1.02]
                      transition-all duration-300
                      ${image.highlight ? "sm:col-span-2 h-[28rem]" : ""}
                    `}
                  />
                ))}
              </div>
            </div>

            {/* Included */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-5 text-slate-900">
                What's Included
              </h2>

              <div className="grid sm:grid-cols-2 gap-3">
                {destination.facilities_included.map((facility, index) => (
                  <div
                    key={index}
                    className="bg-emerald-50 text-emerald-700 px-4 py-3 rounded-2xl"
                  >
                    ✓ {facility}
                  </div>
                ))}
              </div>
            </div>

            {/* Excluded */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-5 text-slate-900">
                Not Included
              </h2>

              <div className="grid sm:grid-cols-2 gap-3">
                {destination.facilities_excluded.map((facility, index) => (
                  <div
                    key={index}
                    className="bg-red-50 text-red-700 px-4 py-3 rounded-2xl"
                  >
                    ✕ {facility}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            {/* Booking card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-6">
              <div className="mb-6">
                <p className="text-slate-500 mb-1">Starting from</p>

                <h3 className="text-4xl font-black text-slate-900">
                  Rp {destination.price.toLocaleString("id-ID")}
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-slate-500 text-sm">Location</p>
                  <p className="font-semibold">{destination.location}</p>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">Duration</p>
                  <p className="font-semibold">
                    {destination.trip_duration} Days
                  </p>
                </div>
              </div>

              <button
                className="
                  w-full
                  bg-sky-500
                  hover:bg-sky-600
                  transition-colors
                  text-white
                  py-4
                  rounded-2xl
                  font-bold
                  text-lg
                "
              >
                Book Now
              </button>
            </div>

            {/* Available dates */}
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-5">Next Available Dates</h3>

              <div className="space-y-3">
                {destination.next_available_dates.map((date, index) => (
                  <div
                    key={index}
                    className="
                      border border-slate-200
                      rounded-2xl
                      px-4 py-3
                      hover:border-sky-400
                      transition-colors
                    "
                  >
                    {date}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
