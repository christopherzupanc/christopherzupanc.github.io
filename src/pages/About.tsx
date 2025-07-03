import { GraduationCap, Briefcase, Heart, Target } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Über <span className="text-orange-500">mich</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <div className="space-y-6">
              <div className="w-48 h-48 mx-auto relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <img
                  src="assets/dein-bild.webp"
                  alt="Christopher Zupanc"
                  className="w-full h-full object-cover rounded-full border-4 border-orange-500/30 
                           shadow-lg shadow-orange-500/20 hover:scale-105 transition-all duration-300
                           relative z-10"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500/0 to-orange-600/0 
                              group-hover:from-orange-500/10 group-hover:to-orange-600/10 transition-all duration-300
                              z-20"></div>
              </div>
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-white">Christopher Zupanc</h2>
                <p className="text-gray-300 text-lg">
                  Maschinenbauingenieur & Technischer Entwickler
                </p>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Mit Leidenschaft für Technik und Innovation entwickle ich seit über 8 Jahren 
                  maßgeschneiderte Lösungen für anspruchsvolle technische Herausforderungen.
                </p>
              </div>
            </div>
          </div>

          {/* Journey Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Ausbildung</h3>
                  <p className="text-gray-300">
                    HTL Abschluss mit Schwerpunkt Elektronik und technische Informatik. 
                    Fortlaufende Weiterbildung in Elektronik und Softwareentwicklung.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Briefcase className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Werdegang</h3>
                  <p className="text-gray-300">
                    Vom Technischen Fachplaner und Mechatronik-Spezialist zum selbstständigen 
                    Unternehmer – immer mit dem Ziel, innovative Technik zugänglich zu machen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Heart className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Motivation</h3>
                  <p className="text-gray-300">
                    Die Begeisterung, aus Ideen greifbare Produkte zu erschaffen 
                    und dabei Menschen bei ihren Projekten zu unterstützen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Philosophie</h3>
                  <p className="text-gray-300">
                    Pragmatische Lösungen, hochwertige Technik und faire Preise – 
                    das sind die Grundpfeiler meiner Arbeit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 
                        border border-orange-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Meine Arbeitsweise
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-orange-500 text-5xl font-bold mb-2">01</div>
                <h4 className="text-white font-medium mb-2">Zuhören</h4>
                <p className="text-gray-300 text-sm">
                  Ihre Anforderungen verstehen und die beste Lösung finden
                </p>
              </div>
              <div>
                <div className="text-orange-500 text-5xl font-bold mb-2">02</div>
                <h4 className="text-white font-medium mb-2">Entwickeln</h4>
                <p className="text-gray-300 text-sm">
                  Mit Kreativität und technischem Know-how zum Ziel
                </p>
              </div>
              <div>
                <div className="text-orange-500 text-5xl font-bold mb-2">03</div>
                <h4 className="text-white font-medium mb-2">Perfektionieren</h4>
                <p className="text-gray-300 text-sm">
                  Bis ins Detail durchdacht und optimal umgesetzt
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Technische Kompetenzen
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { skill: "CAD-Design (SolidWorks, Fusion 360)", level: 95 },
                { skill: "Elektronikentwicklung", level: 90 },
                { skill: "Mikrocontroller-Programmierung", level: 85 },
                { skill: "3D-Druck & Rapid Prototyping", level: 92 },
                { skill: "Mechanische Fertigung", level: 88 },
                { skill: "Projektmanagement", level: 87 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{item.skill}</span>
                    <span className="text-orange-500">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-600 
                               rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
