import { Quote, Play, Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { VideoPlayer } from "../components/VideoPlayer";

export function References() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [showVideo, setShowVideo] = useState<number | null>(null);

  const projects = [
    {
      title: "Automatisierte Prüfstation",
      category: "Maschinenbau",
      description: "Entwicklung einer vollautomatischen Prüfstation für elektronische Baugruppen mit integrierter Datenerfassung.",
      challenge: "Integration verschiedener Prüfverfahren in einem kompakten System",
      solution: "Modularer Aufbau mit austauschbaren Prüfadaptern und zentraler Steuerung",
      testimonial: "Die Lösung hat unsere Prüfzeiten um 70% reduziert. Exzellente Arbeit!",
      client: "Elektronikfertigung GmbH",
      images: [
        "assets/projekt1-bild1.webp",
        "assets/FrontexIdentifier.webp",
        "assets/projekt1-bild2.webp",
        "assets/projekt1-bild3.webp"
      ],
      video: "assets/projekt1-video.mp4"
    },
    {
      title: "Labor-Inkubator Serie",
      category: "Bausatz",
      description: "Entwicklung und Produktion einer Inkubator-Bausatz-Serie für Forschungslabore.",
      challenge: "Präzise Temperaturregelung bei einfachem Aufbau",
      solution: "Innovative Regelungselektronik mit benutzerfreundlicher Bauanleitung",
      testimonial: "Die Inkubatoren sind bei unseren Kunden sehr beliebt. Qualität stimmt!",
      client: "BioTech Supplies",
      images: [
        "assets/projekt2-bild1.webp",
        "assets/projekt2-bild2.webp",
        "assets/projekt2-bild3.webp"
      ],
    },
    {
      title: "Sensorik-Prototyp",
      category: "Prototypenentwicklung",
      description: "Prototyp eines drahtlosen Sensornetzwerks für Umweltmessungen.",
      challenge: "Lange Batterielaufzeit bei kontinuierlicher Datenübertragung",
      solution: "Energieoptimierte Hardware mit intelligentem Sleep-Mode",
      testimonial: "Der Prototyp übertraf alle unsere Erwartungen.",
      client: "Umweltforschung Institut",
      images: [
        "assets/projekt3-bild1.webp",
        "assets/projekt3-bild2.webp",
        "assets/projekt3-bild3.webp"
      ],
      video: "assets/projekt3-video.mp4"
    },
  ];

  const stats = [
    { value: "50+", label: "Projekte" },
    { value: "8", label: "Jahre Erfahrung" },
    { value: "100%", label: "Kundenzufriedenheit" },
    { value: "25+", label: "Stammkunden" },
  ];

  const handleImageClick = (projectIndex: number, imageIndex: number) => {
    setSelectedProject(projectIndex);
    setSelectedImage(imageIndex);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject === null) return;
    const project = projects[selectedProject];
    setSelectedImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject === null) return;
    const project = projects[selectedProject];
    setSelectedImage((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-zinc-100">Erfolgreiche </span>
            <span className="text-gradient-orange">Projekte</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Ein Auszug aus meinen realisierten Projekten – von der ersten Idee
            bis zur erfolgreichen Umsetzung.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/[0.02] backdrop-blur-sm border border-white/[0.06]
                       rounded-2xl overflow-hidden hover:border-orange-500/20
                       transition-all duration-300"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Images */}
                  <div className="lg:w-2/5 space-y-4">
                    {/* Main Image */}
                    <div
                      className="rounded-xl overflow-hidden relative cursor-pointer
                               border border-white/[0.06] group/image bg-zinc-900/50 aspect-[4/3]"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageClick(index, 0);
                      }}
                    >
                      {project.images && project.images.length > 0 && (
                        <div className="relative w-full h-full">
                          <img
                            src={project.images[0]}
                            alt={`${project.title} - Bild 1`}
                            className="w-full h-full object-contain rounded-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity rounded-xl" />
                          {project.images.length > 1 && (
                            <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1.5 rounded-lg
                                          backdrop-blur-sm flex items-center gap-1.5">
                              <ImageIcon className="w-3.5 h-3.5" />
                              <span>{project.images.length} Bilder</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Thumbnail Gallery */}
                    {project.images && project.images.length > 1 && (
                      <div className="flex gap-2">
                        {project.images.slice(0, 3).map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="relative cursor-pointer rounded-lg overflow-hidden
                                     border border-white/[0.06] hover:border-orange-500/30 transition-colors bg-zinc-900/50
                                     w-20 h-20"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleImageClick(index, imgIndex);
                            }}
                          >
                            <img
                              src={image}
                              alt={`${project.title} - Thumbnail ${imgIndex + 1}`}
                              className="w-full h-full object-contain rounded-md"
                            />
                          </div>
                        ))}
                        {project.video && (
                          <div
                            className="relative cursor-pointer rounded-lg overflow-hidden
                                     border border-white/[0.06] hover:border-orange-500/30 transition-colors
                                     bg-zinc-800/80 flex items-center justify-center w-20 h-20"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowVideo(index);
                            }}
                          >
                            <Play className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-3/5 space-y-5">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-medium text-orange-400 bg-orange-500/10
                                     border border-orange-500/20 rounded-full mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-semibold text-zinc-100">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-zinc-400 leading-relaxed">{project.description}</p>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                          Herausforderung
                        </h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">{project.challenge}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                          Lösung
                        </h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white/[0.02] rounded-xl p-5 border border-white/[0.04]">
                      <div className="flex items-start gap-4">
                        <Quote className="w-5 h-5 text-orange-500/60 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-zinc-300 italic leading-relaxed">{project.testimonial}</p>
                          <p className="text-zinc-500 text-sm mt-3">– {project.client}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Gallery Modal */}
        {selectedProject !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedProject(null)}
          >
            <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-12 right-0 text-zinc-400 hover:text-white transition-colors
                         p-2 rounded-full hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full flex items-center justify-center">
                <img
                  src={projects[selectedProject].images[selectedImage]}
                  alt={`${projects[selectedProject].title} - Bild ${selectedImage + 1}`}
                  className="max-w-full max-h-[80vh] object-contain rounded-xl"
                />
                {projects[selectedProject].images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full
                               hover:bg-black/80 transition-colors backdrop-blur-sm"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full
                               hover:bg-black/80 transition-colors backdrop-blur-sm"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                      {projects[selectedProject].images.map((_, idx) => (
                        <button
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === selectedImage ? 'bg-orange-500 w-6' : 'bg-white/40 hover:bg-white/60'
                          }`}
                          onClick={() => setSelectedImage(idx)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Video Modal */}
        {showVideo !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 md:p-12"
            onClick={() => setShowVideo(null)}
          >
            <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setShowVideo(null)}
                className="absolute -top-12 right-0 text-zinc-400 hover:text-white transition-colors
                         p-2 rounded-full hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
              <VideoPlayer
                src={projects[showVideo].video}
                poster={projects[showVideo].images[0]}
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-zinc-100">{projects[showVideo].title}</h3>
                <p className="text-zinc-400 mt-2">{projects[showVideo].description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/[0.02] rounded-2xl border border-white/[0.06]"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-orange">{stat.value}</div>
              <div className="text-zinc-500 mt-2 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
