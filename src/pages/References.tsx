import { Quote, ExternalLink } from "lucide-react";

export function References() {
  const projects = [
    {
      title: "Automatisierte Prüfstation",
      category: "Maschinenbau",
      description: "Entwicklung einer vollautomatischen Prüfstation für elektronische Baugruppen mit integrierter Datenerfassung.",
      challenge: "Integration verschiedener Prüfverfahren in einem kompakten System",
      solution: "Modularer Aufbau mit austauschbaren Prüfadaptern und zentraler Steuerung",
      testimonial: "Die Lösung hat unsere Prüfzeiten um 70% reduziert. Exzellente Arbeit!",
      client: "Elektronikfertigung GmbH",
    },
    {
      title: "Labor-Inkubator Serie",
      category: "Bausatz",
      description: "Entwicklung und Produktion einer Inkubator-Bausatz-Serie für Forschungslabore.",
      challenge: "Präzise Temperaturregelung bei einfachem Aufbau",
      solution: "Innovative Regelungselektronik mit benutzerfreundlicher Bauanleitung",
      testimonial: "Die Inkubatoren sind bei unseren Kunden sehr beliebt. Qualität stimmt!",
      client: "BioTech Supplies",
    },
    {
      title: "Sensorik-Prototyp",
      category: "Prototypenentwicklung",
      description: "Prototyp eines drahtlosen Sensornetzwerks für Umweltmessungen.",
      challenge: "Lange Batterielaufzeit bei kontinuierlicher Datenübertragung",
      solution: "Energieoptimierte Hardware mit intelligentem Sleep-Mode",
      testimonial: "Der Prototyp übertraf alle unsere Erwartungen.",
      client: "Umweltforschung Institut",
    },
  ];

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Erfolgreiche <span className="text-orange-500">Projekte</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ein Auszug aus meinen realisierten Projekten – von der ersten Idee 
            bis zur erfolgreichen Umsetzung.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden
                       hover:bg-gray-800/80 transition-all duration-300 group p-8"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Project Image Placeholder */}
                <div className="md:w-1/3">
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 
                                  rounded-lg overflow-hidden relative group-hover:scale-105 
                                  transition-transform duration-300">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-600">Projektbild</span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="md:w-2/3 space-y-4">
                  <div>
                    <span className="text-orange-500 text-sm font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-300">{project.description}</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">
                        Herausforderung
                      </h4>
                      <p className="text-gray-300 text-sm">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-400 mb-1">
                        Lösung
                      </h4>
                      <p className="text-gray-300 text-sm">{project.solution}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">
                    <div className="flex items-start gap-3">
                      <Quote className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-300 italic">{project.testimonial}</p>
                        <p className="text-gray-500 text-sm mt-2">– {project.client}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Projekte" },
            { value: "8", label: "Jahre Erfahrung" },
            { value: "100%", label: "Kundenzufriedenheit" },
            { value: "25+", label: "Stammkunden" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-orange-500">{stat.value}</div>
              <div className="text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}