import { ArrowRight, Cpu, Cog, FileAxis3d, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const showcaseProjects = [
    {
      title: "Automatisierte Prüfstation",
      category: "Maschinenbau",
      image: "assets/projekt1-bild1.webp",
    },
    {
      title: "Labor-Inkubator Serie",
      category: "Bausatz",
      image: "assets/projekt2-bild1.webp",
    },
    {
      title: "Sensorik-Prototyp",
      category: "Prototypenentwicklung",
      image: "assets/projekt3-bild1.webp",
    },
  ];

  // Auto-rotation
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % showcaseProjects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, showcaseProjects.length]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setActiveSlide((prev) => (prev === 0 ? showcaseProjects.length - 1 : prev - 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setActiveSlide((prev) => (prev + 1) % showcaseProjects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const highlights = [
    {
      icon: <Cpu className="w-7 h-7" />,
      title: "Prototypenentwicklung",
      description: "Von der Idee zum funktionsfähigen Prototyp",
    },
    {
      icon: <FileAxis3d className="w-7 h-7" />,
      title: "CAD-Design & 3D-Druck",
      description: "Digitale Konstruktion und additive Fertigung",
    },
    {
      icon: <Cog className="w-7 h-7" />,
      title: "Maschinenbau & Speziallösungen",
      description: "Individuelle Maschinen und Geräte nach Ihren Anforderungen",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center px-6 lg:px-8 py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center space-y-8">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-zinc-100">Innovative </span>
              <span className="text-gradient-orange">Technik</span>
              <br />
              <span className="text-zinc-100">präzise gefertigt</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Prototypenentwicklung, CAD-Design, 3D-Druck und Maschinenbau –
              alles aus einer Hand.
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

            {/* Project Carousel */}
            <div className="relative">
              <div className="max-w-md mx-auto relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/10
                              rounded-3xl blur-3xl" />

                {/* Main carousel card */}
                <div className="relative bg-gradient-to-br from-white/[0.04] to-white/[0.01]
                              rounded-3xl border border-white/[0.08] p-6 backdrop-blur-sm overflow-hidden">

                  {/* Carousel container */}
                  <div className="relative rounded-xl overflow-hidden mb-4 bg-zinc-900/50">
                    {/* Slides wrapper */}
                    <div className="relative overflow-hidden">
                      <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                      >
                        {showcaseProjects.map((project, idx) => (
                          <div
                            key={idx}
                            className="min-w-full aspect-[4/3] min-h-[300px]"
                          >
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-contain rounded-lg"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Navigation arrows */}
                    <button
                      onClick={goToPrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full
                               bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm z-10"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full
                               bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm z-10"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Gradient overlay for text */}
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                    {/* Project info */}
                    <div className="absolute bottom-3 left-4 right-4 z-10">
                      <span className="text-xs text-orange-400 font-medium">
                        {showcaseProjects[activeSlide].category}
                      </span>
                      <h4 className="text-white font-semibold">
                        {showcaseProjects[activeSlide].title}
                      </h4>
                    </div>
                  </div>

                  {/* Dot indicators */}
                  <div className="flex justify-center gap-2">
                    {showcaseProjects.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === activeSlide
                            ? "w-6 bg-orange-500"
                            : "w-2 bg-zinc-600 hover:bg-zinc-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
