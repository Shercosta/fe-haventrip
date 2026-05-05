import {
  type AvailableMeetingPoint,
  getDestinationById,
} from "@/arrays/destinations";
import ItinerarySection from "@/components/local/Itineraries";
import { Button } from "@/components/ui/button";
import { useUserLocationContext } from "@/context/UserLocationContext";
import {
  constructWhatsappChatAndOpen,
  idNavigator,
  sortMeetingPointsWithDistance,
  tripDurationToContext,
} from "@/lib/common";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export function DestinationPage() {
  const { id } = useParams();
  const { location: userLocation } = useUserLocationContext();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedMeetingPoint, setSelectedMeetingPoint] =
    useState<AvailableMeetingPoint | null>(null);
  const [passengerCount, setPassengerCount] = useState<number>(1);

  const destination = getDestinationById(Number(id));

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Destination not found
      </div>
    );
  }

  const [showAllImages, setShowAllImages] = useState(false);

  const displayedImages = showAllImages
    ? destination.images
    : destination.images.slice(0, 1);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* HERO */}
      <section
        className="relative h-[75vh] w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${destination.images[0]?.url})`,
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* TOP NAVIGATION */}
        <div className="absolute top-0 left-0 w-full z-20 px-6 lg:px-10 py-6">
          <div className="flex flex-col gap-4">
            {/* back button */}
            <Link
              to="/"
              className="
                w-fit
                flex items-center gap-2
                px-5 py-3
                rounded-full
                bg-white/10
                backdrop-blur-md
                border border-white/20
                text-white
                hover:bg-white/20
                transition-all duration-300
              "
            >
              ← Back
            </Link>

            {/* breadcrumb */}
            <div
              className="
                w-fit
                px-5 py-3
                rounded-full
                bg-white/10
                backdrop-blur-md
                border border-white/20
                text-white/90
                text-sm
                flex items-center gap-2
                flex-wrap
              "
            >
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>

              <span className="text-white/50">/</span>

              <span className="text-white/70">Destinations</span>

              <span className="text-white/50">/</span>

              <span className="font-semibold text-white">
                {destination.name}
              </span>
            </div>
          </div>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-10 h-full flex items-end px-6 lg:px-20 py-14">
          <div className="max-w-4xl text-white">
            <p className="uppercase tracking-[0.3em] text-sm text-white/70 mb-4">
              {destination.location}
            </p>

            <h1 className="text-5xl lg:text-7xl font-black mb-5">
              {destination.name}
            </h1>

            <div className="flex flex-wrap gap-3 mb-6">
              <div className="bg-white/15 backdrop-blur-md px-5 py-2 rounded-full">
                {tripDurationToContext(destination.trip_duration)}
              </div>

              <div className="bg-white/15 backdrop-blur-md px-5 py-2 rounded-full">
                Rp {destination.price.toLocaleString("id-ID")}
              </div>
            </div>

            <p className="max-w-2xl text-lg text-white/85 leading-relaxed">
              {destination.description}
            </p>
          </div>
        </div>
      </section>

      {/* STICKY SECTION NAV */}
      <div
        className="
          sticky top-0 z-30
          backdrop-blur-xl
          bg-white/80
          border-b border-slate-200
        "
      >
        <div
          className="
            max-w-7xl mx-auto
            px-4 lg:px-10
            py-4
            flex gap-3 overflow-x-auto
          "
        >
          {[
            ["overview", "Sekilas"],
            ["gallery", "Galeri"],
            ["included", "Fasilitas Included"],
            ["excluded", "Fasilitas Excluded"],
            ["itinerary", "Itinerary"],
            ["dates", "Tanggal Tersedia"],
            ["meeting_points", "Meeting Points"],
          ].map(([id, label]) => (
            <Button
              key={id}
              className="
                whitespace-nowrap
                px-5 py-2
                rounded-full
                bg-slate-100
                hover:bg-sky-100
                hover:text-sky-700
                transition-all duration-300
                text-sm font-medium
              "
              variant={"ghost"}
              onClick={() => {
                idNavigator(id);
              }}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-10">
            {/* overview */}
            <section
              id="overview"
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <h2 className="text-3xl font-bold mb-5 text-slate-900">
                Sekilas
              </h2>

              <p className="text-slate-700 leading-relaxed text-lg">
                {destination.description}
              </p>
            </section>

            {/* gallery */}
            <section id="gallery">
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Galeri</h2>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {displayedImages.map((image, index) => (
                    <div
                      key={index}
                      className={`
          relative overflow-hidden rounded-3xl
          ${image.highlight ? "sm:col-span-2" : ""}
        `}
                    >
                      <img
                        src={image.url}
                        alt={`${destination.name} ${index}`}
                        className={`
            object-cover
            w-full
            h-72
            shadow-lg
            hover:scale-105
            transition-all duration-500
            ${image.highlight ? "h-[28rem]" : ""}
          `}
                      />

                      {/* dark overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300" />
                    </div>
                  ))}
                </div>

                {/* expand button */}
                {destination.images.length > 3 && (
                  <div className="flex justify-center">
                    <button
                      onClick={() => {
                        setShowAllImages(!showAllImages);
                        idNavigator("gallery");
                      }}
                      className="
          px-6 py-3
          rounded-full
          bg-sky-500
          hover:bg-sky-600
          text-white
          font-semibold
          transition-all duration-300
          hover:scale-105
          shadow-lg
        "
                    >
                      {showAllImages
                        ? "Tutup Galeri"
                        : `Lihat Semua Foto (${destination.images.length})`}
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* included */}
            <section
              id="included"
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-5 text-slate-900">
                Fasilitas Included
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
            </section>

            {/* excluded */}
            <section
              id="excluded"
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-5 text-slate-900">
                Fasilitas Excluded
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
            </section>

            {/* itinerary */}
            <ItinerarySection itineraries={destination.itineraries} />

            <section className="mt-16">
              <h2 className="text-3xl font-bold mb-8">Meeting Points</h2>

              <div className="space-y-4" id="meeting_points">
                {(userLocation
                  ? sortMeetingPointsWithDistance(
                      userLocation,
                      destination.meeting_points,
                    )
                  : destination.meeting_points
                ).map((meetingPoint, index) => (
                  <div
                    key={meetingPoint.name}
                    className="flex items-center justify-between gap-4 border-b border-border pb-4 cursor-pointer"
                    onClick={() => {
                      setSelectedMeetingPoint((prev) =>
                        prev?.name === meetingPoint.name ? null : meetingPoint,
                      );
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={cn([
                          "w-8 h-8 rounded-full text-primary flex items-center justify-center text-sm font-semibold shrink-0",
                          selectedMeetingPoint?.name === meetingPoint.name
                            ? "bg-sky-500 text-white"
                            : "bg-primary/10",
                        ])}
                      >
                        {selectedMeetingPoint
                          ? selectedMeetingPoint.name === meetingPoint.name
                            ? "✓"
                            : index + 1
                          : index + 1}
                      </div>

                      <div>
                        <p className="font-medium">{meetingPoint.name}</p>

                        {/* Future enhancement */}
                        {(meetingPoint as { distance?: number }).distance && (
                          <p className="text-sm text-muted-foreground">
                            {(
                              meetingPoint as { distance?: number }
                            ).distance?.toFixed(2)}{" "}
                            KM
                          </p>
                        )}
                      </div>
                    </div>

                    {meetingPoint.google_map_url && (
                      <a
                        href={meetingPoint.google_map_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
              text-primary
              text-sm
              font-medium
              hover:underline
              whitespace-nowrap
            "
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        Open Maps →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* booking card */}
            <div className="bg-white rounded-3xl p-8 shadow-lg sticky top-6">
              <div className="mb-6">
                <p className="text-slate-500 mb-1">Mulai Dari</p>

                <h3 className="text-4xl font-black text-slate-900">
                  Rp {destination.price.toLocaleString("id-ID")}
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-slate-500 text-sm">Lokasi</p>
                  <p className="font-semibold">{destination.location}</p>
                </div>

                <div>
                  <p className="text-slate-500 text-sm">Durasi</p>
                  <p className="font-semibold">
                    {tripDurationToContext(destination.trip_duration)}
                  </p>
                </div>
              </div>

              {/* dates */}

              <h3 className="text-xl font-bold mb-5">Tanggal Tersedia</h3>

              <div className="space-y-3 mb-4" id="dates">
                {destination.next_available_dates.map((date, index) => (
                  <div
                    key={index}
                    className={cn([
                      "border border-slate-200 rounded-2xl px-4 py-3 hover:border-sky-400 transition-colors",
                      selectedDate === date && "bg-sky-300",
                      "cursor-pointer",
                    ])}
                    onClick={() => {
                      setSelectedDate((prev) => (prev === date ? null : date));
                    }}
                  >
                    {new Date(date).toLocaleDateString("id-ID", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-4">Jumlah Pemesan</h3>
              <div
                className="
    rounded-2xl
    border
    border-border
    p-5
    bg-background/70
    backdrop-blur-sm
    shadow-sm
    w-full
    max-w-sm
    mb-4
  "
              >
                <div className="flex items-center justify-between">
                  {/* Minus */}
                  <button
                    onClick={() =>
                      setPassengerCount((prev) => Math.max(1, prev - 1))
                    }
                    disabled={passengerCount <= 1}
                    className="
        w-10 h-10
        rounded-full
        border
        border-border
        flex items-center justify-center
        hover:bg-muted
        active:scale-95
        transition
        disabled:opacity-40
        disabled:cursor-not-allowed
      "
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  {/* Input */}
                  <div className="text-center">
                    <input
                      type="number"
                      min={1}
                      value={passengerCount}
                      onChange={(e) => {
                        const value = e.target.value;

                        // Allow empty while typing
                        if (value === "") {
                          setPassengerCount(0);
                          return;
                        }

                        const num = Number(value);

                        if (!isNaN(num)) {
                          setPassengerCount(Math.max(1, num));
                        }
                      }}
                      onBlur={() => {
                        // Fix empty / zero on blur
                        if (!passengerCount || passengerCount < 1) {
                          setPassengerCount(1);
                        }
                      }}
                      onWheel={(e) => e.currentTarget.blur()}
                      className="
          w-20
          text-center
          text-2xl
          font-bold
          bg-transparent
          outline-none
          border-b
          border-border
          focus:border-primary
          transition
        "
                    />

                    <p className="text-xs text-muted-foreground mt-1">orang</p>
                  </div>

                  {/* Plus */}
                  <button
                    onClick={() => setPassengerCount((prev) => prev + 1)}
                    className="
        w-10 h-10
        rounded-full
        bg-primary
        text-white
        flex items-center justify-center
        hover:opacity-90
        active:scale-95
        transition
      "
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <Button
                className="
                  w-full
                  bg-sky-500
                  transition-colors
                  text-white
                  py-4
                  rounded-2xl
                  font-bold
                  text-lg
                "
                onClick={() => {
                  constructWhatsappChatAndOpen({
                    destination: destination.name,
                    date: selectedDate ?? undefined,
                    amount: passengerCount,
                    meetingPoint: selectedMeetingPoint?.name ?? undefined,
                  });
                }}
              >
                Pesan Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
