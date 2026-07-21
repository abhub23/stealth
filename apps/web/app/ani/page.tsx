import HeroFlame from "@/components/effects/flame/hero-flame";

export default function AniPage() {
  return (
    <section className="overflow-x-clip min-h-screen">
      <div className="pt-28 lg:pt-254 lg:-mt-100 pb-115 relative">
        <HeroFlame absolute />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm text-muted-foreground mb-8">
              <span className="size-2 rounded-full bg-emerald-500" />
              Now in beta
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl">
              Build intelligent workflows powered by AI
            </h1>

            <p className="text-center text-lg text-muted-foreground max-w-2xl mt-6">
              Turn any website into structured, agent-ready data.
              <br />
              AI agent workflows
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center -mt-20 relative z-10">
        <button className="px-8 py-3 rounded-lg text-base font-medium bg-foreground text-background hover:opacity-90 transition-all">
          Open agent builder
        </button>
      </div>
    </section>
  );
}
