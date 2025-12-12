import { GraduationCap, Briefcase, Heart, Target } from "lucide-react";

export function About() {
  const skills = [
    { skill: "CAD-Design (SolidWorks, Fusion 360)", level: 95 },
    { skill: "Elektronikentwicklung", level: 90 },
    { skill: "Mikrocontroller-Programmierung", level: 85 },
    { skill: "3D-Druck & Rapid Prototyping", level: 92 },
    { skill: "Mechanische Fertigung", level: 88 },
    { skill: "Projektmanagement", level: 87 },
  ];

  const journeyItems = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Ausbildung",
      description: "HTL Abschluss mit Schwerpunkt Elektronik und technische Informatik. Fortlaufende Weiterbildung in Elektronik und Softwareentwicklung.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Werdegang",
      description: "Vom Technischen Fachplaner und Mechatronik-Spezialist zum selbstständigen Unternehmer – immer mit dem Ziel, innovative Technik zugänglich zu machen.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Motivation",
      description: "Die Begeisterung, aus Ideen greifbare Produkte zu erschaffen und dabei Menschen bei ihren Projekten zu unterstützen.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Philosophie",
      description: "Pragmatische Lösungen, hochwertige Technik und faire Preise – das sind die Grundpfeiler meiner Arbeit.",
    },
  ];

  const workSteps = [
    { number: "01", title: "Zuhören", description: "Ihre Anforderungen verstehen und die beste Lösung finden" },
    { number: "02", title: "Entwickeln", description: "Mit Kreativität und technischem Know-how zum Ziel" },
    { number: "03", title: "Perfektionieren", description: "Bis ins Detail durchdacht und optimal umgesetzt" },
  ];

  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-zinc-100">Über </span>
            <span className="text-gradient-orange">mich</span>
          </h1>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Introduction Card */}
          <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 md:p-10">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Profile Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-amber-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 scale-90" />
                <img
                  src="assets/dein-bild.webp"
                  alt="Christopher Zupanc"
                  className="w-40 h-40 object-cover rounded-full border-2 border-orange-500/30
                           shadow-xl shadow-orange-500/10 hover:scale-105 transition-transform duration-300
                           relative z-10"
                />
              </div>

              {/* Info */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-zinc-100">Christopher Zupanc</h2>
                <p className="text-orange-400 font-medium">
                  Softwareingenieur & Technischer Entwickler
                </p>
              </div>

              <p className="text-zinc-400 max-w-lg leading-relaxed">
                Mit Leidenschaft für Technik und Innovation entwickle ich seit über 8 Jahren
                maßgeschneiderte Lösungen für anspruchsvolle technische Herausforderungen.
              </p>
            </div>
          </div>

          {/* Journey Cards */}
          <div className="grid md:grid-cols-2 gap-5">
            {journeyItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white/[0.02] backdrop-blur-sm border border-white/[0.06]
                         rounded-2xl p-6 hover:border-orange-500/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center
                                text-orange-400 flex-shrink-0 group-hover:bg-orange-500/15 transition-colors">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-zinc-100">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Work Process */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10" />

            <div className="relative border border-orange-500/20 rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-zinc-100 mb-10 text-center">
                Meine Arbeitsweise
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {workSteps.map((step, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="text-4xl md:text-5xl font-bold text-gradient-orange">
                      {step.number}
                    </div>
                    <h4 className="text-zinc-100 font-semibold text-lg">{step.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-zinc-100 text-center">
              Technische Kompetenzen
            </h3>

            <div className="grid gap-5">
              {skills.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-zinc-300 font-medium">{item.skill}</span>
                    <span className="text-orange-400 font-semibold">{item.level}%</span>
                  </div>
                  <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-500
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
