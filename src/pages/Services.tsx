import { Cpu, Cog, CheckCircle, FileAxis3d } from "lucide-react";

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Prototypenentwicklung",
      description: "Entwicklung funktionsfähiger Prototypen von der Konzeptphase bis zur Realisierung",
      features: [
        "Elektronikentwicklung mit modernen Mikrocontrollern",
        "Mechanische Konstruktion und Design",
        "Rapid Prototyping mittels 3D-Druck",
        "Funktionstest und Optimierung",
      ],
      accent: "from-orange-500/20 to-orange-600/10",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Maschinenbau & Speziallösungen",
      description: "Individuelle Maschinen und Geräte nach Ihren Anforderungen",
      features: [
        "Kleingeräte für spezielle Anwendungen",
        "Automatisierungslösungen",
        "Sondermaschinen für Forschung und Entwicklung",
        "Umbau und Modifikation bestehender Systeme",
      ],
      accent: "from-amber-500/20 to-amber-600/10",
    },
    {
      icon: <FileAxis3d className="w-8 h-8" />,
      title: "CAD-Design & 3D-Druck",
      description: "Digitale Konstruktion und additive Fertigung",
      features: [
        "3D-CAD Konstruktion",
        "FDM und SLA 3D-Druck",
        "Nachbearbeitung und Oberflächenveredelung",
        "Technische Zeichnungen und Dokumentation",
      ],
      accent: "from-amber-500/20 to-orange-500/10",
    },
  ];

  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-zinc-100">Meine </span>
            <span className="text-gradient-orange">Leistungen</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Von der ersten Idee bis zum fertigen Produkt – ich begleite Sie durch alle Phasen
            der technischen Entwicklung.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/[0.02] backdrop-blur-sm border-2 border-white/[0.06]
                       rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300"
            >

              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center
                                text-orange-400 flex-shrink-0 group-hover:bg-orange-500/15 transition-colors">
                    {service.icon}
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-zinc-100 mb-3 break-words">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-4 md:pl-20">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500/70 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-400 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-2xl border border-orange-500/20">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/15 to-amber-500/15" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

          <div className="relative p-10 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-4">
              Preise auf Anfrage
            </h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto leading-relaxed">
              Jedes Projekt ist einzigartig. Kontaktieren Sie mich für ein unverbindliches
              Beratungsgespräch und ein maßgeschneidertes Angebot.
            </p>
            <button
              onClick={() => onNavigate("contact")}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white
                           rounded-xl font-semibold shadow-lg shadow-orange-500/25
                           hover:shadow-orange-500/40 hover:from-orange-400 hover:to-orange-500
                           transition-all duration-300 transform hover:scale-[1.02]">
              Projekt anfragen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
