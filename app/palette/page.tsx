const colors = [
  {
    name: "Primary",
    hex: "#436169",
    bgClass: "bg-[#436169]",
    textClass: "text-[#436169]",
    buttonClass: "bg-[#436169] text-white hover:bg-[#344C52]",
  },
  {
    name: "Accent",
    hex: "#E2B39F",
    bgClass: "bg-[#E2B39F]",
    textClass: "text-[#7A3E1F]",
    buttonClass: "bg-[#E2B39F] text-[#1F1F1D] hover:bg-[#D59F88]",
  },
  {
    name: "Background",
    hex: "#FBF6F3",
    bgClass: "bg-[#FBF6F3]",
    textClass: "text-[#1F1F1D]",
    buttonClass: "bg-[#FBF6F3] text-[#1F1F1D] ring-1 ring-[#DDD4CE] hover:bg-white",
  },
  {
    name: "Surface",
    hex: "#FFFFFF",
    bgClass: "bg-[#FFFFFF]",
    textClass: "text-[#1F1F1D]",
    buttonClass: "bg-white text-[#1F1F1D] ring-1 ring-[#DDD4CE] hover:bg-[#FBF6F3]",
  },
  {
    name: "Text",
    hex: "#1F1F1D",
    bgClass: "bg-[#1F1F1D]",
    textClass: "text-[#1F1F1D]",
    buttonClass: "bg-[#1F1F1D] text-white hover:bg-black",
  },
  {
    name: "Muted Text",
    hex: "#6F6864",
    bgClass: "bg-[#6F6864]",
    textClass: "text-[#6F6864]",
    buttonClass: "bg-[#6F6864] text-white hover:bg-[#5B5552]",
  },
  {
    name: "Border",
    hex: "#DDD4CE",
    bgClass: "bg-[#DDD4CE]",
    textClass: "text-[#436169]",
    buttonClass: "bg-[#DDD4CE] text-[#1F1F1D] hover:bg-[#D0C4BD]",
  },
];

export default function PalettePage() {
  return (
    <main className="min-h-screen bg-[#FBF6F3] px-6 py-16 text-[#1F1F1D] md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#436169]">
            Mums United Design Tokens
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            Temporary colour palette preview
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#6F6864]">
            A working preview of warm, trustworthy and community-focused colours
            extracted from the Mums United logo.
          </p>
        </div>

        <section
          aria-label="Colour palette swatches"
          className="mt-12 grid gap-6 md:grid-cols-2"
        >
          {colors.map((color) => (
            <article
              key={color.name}
              className="rounded-3xl border border-[#DDD4CE] bg-white p-6 shadow-sm"
            >
              <div
                className={`h-32 rounded-2xl border border-[#DDD4CE] ${color.bgClass}`}
                aria-label={`${color.name} colour swatch`}
              />

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className={`text-2xl font-bold ${color.textClass}`}>
                    {color.name}
                  </h2>
                  <p className="mt-1 font-mono text-sm text-[#6F6864]">
                    {color.hex}
                  </p>
                </div>

                <button
                  type="button"
                  className={`rounded-full px-5 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#436169] focus:ring-offset-2 ${color.buttonClass}`}
                >
                  Sample button
                </button>
              </div>

              <div className="mt-6 rounded-2xl bg-[#FBF6F3] p-5">
                <h3 className={`text-xl font-bold ${color.textClass}`}>
                  Sample heading
                </h3>
                <p className="mt-3 leading-7 text-[#6F6864]">
                  Sample paragraph text showing how this colour can support a
                  warm, accessible and community-focused website experience.
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
