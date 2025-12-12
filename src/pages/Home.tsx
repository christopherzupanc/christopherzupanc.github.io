import { ArrowRight, Cpu, Cog, Wrench, Sparkles } from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const highlights = [
    {
      icon: <Cpu className="w-7 h-7" />,
      title: "Prototypenentwicklung",
      description: "Von der Idee zum funktionsfähigen Prototyp",
    },
    {
      icon: <Cog className="w-7 h-7" />,
      title: "Kleinserienbau",
      description: "Präzise Fertigung in kleinen Stückzahlen",
    },
    {
      icon: <Wrench className="w-7 h-7" />,
      title: "Individuelle Lösungen",
      description: "Maßgeschneiderte Maschinenlösungen",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center px-6 lg:px-8 py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-400">Engineering & Prototyping</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-zinc-100">Innovative </span>
              <span className="text-gradient-orange">Technik</span>
              <br />
              <span className="text-zinc-100">präzise gefertigt</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Vom Prototyp bis zur Kleinserie – ich entwickle und fertige
              individuelle technische Lösungen für Ihre Anforderungen.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => onNavigate("contact")}
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white
                         rounded-xl font-semibold shadow-lg shadow-orange-500/25
                         hover:shadow-orange-500/40 hover:from-orange-400 hover:to-orange-500
                         transition-all duration-300 transform hover:scale-[1.02]
                         flex items-center justify-center gap-3"
              >
                Jetzt Projekt anfragen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate("services")}
                className="px-8 py-4 bg-white/5 text-zinc-100 rounded-xl font-semibold
                         border border-white/10 hover:bg-white/10 hover:border-white/20
                         transition-all duration-300"
              >
                Leistungen ansehen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="px-6 lg:px-8 py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-white/[0.02] backdrop-blur-sm border border-white/[0.06]
                         rounded-2xl hover:bg-white/[0.04] hover:border-orange-500/20
                         transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center
                              text-orange-400 mb-5 group-hover:bg-orange-500/15 group-hover:scale-110
                              transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-zinc-100 mb-3">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="px-6 lg:px-8 py-24">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
                  Qualität trifft{" "}
                  <span className="text-gradient-orange">Innovation</span>
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Mit modernster Technik und handwerklicher Präzision verwirkliche ich
                  Ihre technischen Visionen. Ob Elektronik, Mechanik oder die Kombination
                  aus beidem – ich finde die passende Lösung.
                </p>
              </div>

              {/* Feature List */}
              <ul className="space-y-4">
                {[
                  "Modernste CAD-Software und 3D-Druck",
                  "Persönliche Betreuung von A bis Z",
                  "Schnelle Prototypen-Iteration",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onNavigate("references")}
                className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300
                         font-medium group transition-colors"
              >
                Referenzen ansehen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/10
                              rounded-3xl blur-3xl" />

                {/* Main card */}
                <div className="relative h-full bg-gradient-to-br from-white/[0.04] to-white/[0.01]
                              rounded-3xl border border-white/[0.08] p-8 backdrop-blur-sm
                              flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-grid-pattern opacity-40 rounded-3xl" />
                  <Cog className="w-24 h-24 text-orange-500/50 animate-spin-slow relative z-10" />
                  <p className="text-zinc-500 mt-6 text-center relative z-10">
                    Projekt-Showcase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
