import { ArrowRight, Cpu, Cog, Wrench } from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const highlights = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Prototypenentwicklung",
      description: "Von der Idee zum funktionsfähigen Prototyp",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Kleinserienbau",
      description: "Präzise Fertigung in kleinen Stückzahlen",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Individuelle Lösungen",
      description: "Maßgeschneiderte Maschinenlösungen",
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center justify-center px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Innovative <span className="text-orange-500">Technik</span>
              <br />
              präzise gefertigt
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Vom Prototyp bis zur Kleinserie – ich entwickle und fertige 
              individuelle technische Lösungen für Ihre Anforderungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button
                onClick={() => onNavigate("contact")}
                className="group px-8 py-4 bg-orange-500 text-white rounded-lg font-medium 
                         hover:bg-orange-600 transition-all transform hover:scale-105 
                         flex items-center justify-center gap-2"
              >
                Jetzt Projekt anfragen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate("services")}
                className="px-8 py-4 bg-gray-800 text-white rounded-lg font-medium 
                         hover:bg-gray-700 transition-all border border-gray-700"
              >
                Leistungen ansehen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
                         rounded-xl hover:bg-gray-800/80 transition-all duration-300 hover:scale-105"
              >
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Preview */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">
                Qualität trifft <span className="text-orange-500">Innovation</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Mit modernster Technik und handwerklicher Präzision verwirkliche ich 
                Ihre technischen Visionen. Ob Elektronik, Mechanik oder die Kombination 
                aus beidem – ich finde die passende Lösung.
              </p>
              <button
                onClick={() => onNavigate("references")}
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 
                         font-medium group"
              >
                Referenzen ansehen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl 
                            overflow-hidden border border-gray-700/50 shadow-2xl">
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gray-600 text-center">
                    <Cog className="w-16 h-16 mx-auto mb-2 animate-spin-slow" />
                    <p>Projekt-Showcase</p>
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