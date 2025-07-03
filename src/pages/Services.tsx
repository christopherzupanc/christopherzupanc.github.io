import { Cpu, Cog, Package, CheckCircle, FileAxis3d } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Prototypenentwicklung",
      description: "Entwicklung funktionsfähiger Prototypen von der Konzeptphase bis zur Realisierung",
      features: [
        "Elektronikentwicklung mit modernen Mikrocontrollern",
        "Mechanische Konstruktion und Design",
        "Rapid Prototyping mittels 3D-Druck",
        "Funktionstest und Optimierung",
      ],
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Maschinenbau & Speziallösungen",
      description: "Individuelle Maschinen und Geräte nach Ihren Anforderungen",
      features: [
        "Kleingeräte für spezielle Anwendungen",
        "Automatisierungslösungen",
        "Sondermaschinen für Forschung und Entwicklung",
        "Umbau und Modifikation bestehender Systeme",
      ],
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Bausätze & Kleinserienfertigung",
      description: "Professionelle Bausätze und Kleinserien mit hoher Qualität",
      features: [
        "Bausätze für Labor und Forschung",
        "Elektronik-Kits mit Dokumentation",
        "Kleinserienfertigung bis 10 Stück",
        "Qualitätskontrolle und Verpackung",
      ],
    },
    {
    icon: <FileAxis3d className="w-12 h-12" />,
      title: "CAD-Design & 3D-Druck",
      description: "Digitale Konstruktion und additive Fertigung",
      features: [
        "3D-CAD Konstruktion",
        "FDM und SLA 3D-Druck",
        "Nachbearbeitung und Oberflächenveredelung",
        "Technische Zeichnungen und Dokumentation",
      ],
    },
  ];

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Meine <span className="text-orange-500">Leistungen</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Von der ersten Idee bis zum fertigen Produkt – ich begleite Sie durch alle Phasen 
            der technischen Entwicklung.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden
                       hover:bg-gray-800/80 transition-all duration-300 p-8"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="text-orange-500">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3 ml-18">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 rounded-xl p-8 
                      border border-orange-500/30 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Preise auf Anfrage
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Jedes Projekt ist einzigartig. Kontaktieren Sie mich für ein unverbindliches 
            Beratungsgespräch und ein maßgeschneidertes Angebot.
          </p>
          <button className="px-8 py-3 bg-orange-500 text-white rounded-lg font-medium 
                         hover:bg-orange-600 transition-all transform hover:scale-105">
            Projekt anfragen
          </button>
        </div>
      </div>
    </div>
  );
}