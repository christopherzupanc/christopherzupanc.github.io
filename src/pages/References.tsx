import { Quote, ExternalLink, Play, Image as ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { VideoPlayer } from "../components/VideoPlayer";

export function References() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [showVideo, setShowVideo] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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
      ]
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

  useEffect(() => {
    if (showVideo !== null && videoRef.current) {
      const video = videoRef.current;
      const videoUrl = projects[showVideo].video;
      video.src = videoUrl;
      
      video.play().catch(error => {
        console.log("Playback failed:", error);
      });
    }
  }, [showVideo]);

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

  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.stopPropagation();
    const video = e.currentTarget;
    const rect = video.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    
    if (video.duration) {
      video.currentTime = percentage * video.duration;
    }
  };

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
                       hover:scale-[1.02] transition-all duration-300 group p-8 cursor-pointer"
              onClick={() => project.video && setShowVideo(index)}
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Project Images */}
                <div className="md:w-1/3 space-y-4">
                  {/* Main Image */}
                  <div className="aspect-video rounded-lg overflow-hidden relative">
                    {project.images && project.images.length > 0 && (
                      <div className="relative w-full h-full">
                        <img
                          src={project.images[selectedImage]}
                          alt={`${project.title} - Bild ${selectedImage + 1}`}
                          className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleImageClick(index, selectedImage);
                          }}
                        />
                        {project.images.length > 1 && (
                          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded
                                        backdrop-blur-sm flex items-center gap-1">
                            <ImageIcon className="w-3 h-3" />
                            {selectedImage + 1}/{project.images.length}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  {project.images && project.images.length > 1 && (
                    <div 
                      className="flex gap-2 overflow-x-auto pb-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative w-20 h-20 flex-shrink-0 cursor-pointer group"
                          onClick={() => setSelectedImage(imgIndex)}
                        >
                          <img
                            src={image}
                            alt={`${project.title} - Thumbnail ${imgIndex + 1}`}
                            className={`w-full h-full object-cover rounded-lg transition-all duration-300
                                     ${selectedImage === imgIndex ? 'ring-2 ring-orange-500' : 'opacity-70 hover:opacity-100'}`}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Video Indicator */}
                  {project.video && (
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full
                                  backdrop-blur-sm flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      <span className="text-sm">Video</span>
                    </div>
                  )}
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

        {/* Image Gallery Modal */}
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8 md:p-16"
               onClick={() => setSelectedProject(null)}>
            <div className="relative max-w-5xl w-full max-h-[calc(100vh-8rem)] mt-16" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-16 right-8 text-white hover:text-orange-500 transition-colors
                         bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full h-full">
                <img
                  src={projects[selectedProject].images[selectedImage]}
                  alt={`${projects[selectedProject].title} - Bild ${selectedImage + 1}`}
                  className="w-full h-auto max-h-[calc(100vh-12rem)] object-contain rounded-lg shadow-2xl"
                />
                {projects[selectedProject].images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full
                               hover:bg-black/70 transition-colors shadow-lg"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full
                               hover:bg-black/70 transition-colors shadow-lg"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </button>
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                      {projects[selectedProject].images.map((_, idx) => (
                        <button
                          key={idx}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            idx === selectedImage ? 'bg-orange-500 scale-125' : 'bg-white/50'
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
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8 md:p-16"
               onClick={() => setShowVideo(null)}>
            <div className="relative max-w-5xl w-full mt-16" onClick={e => e.stopPropagation()}>
              <button
                onClick={() => setShowVideo(null)}
                className="absolute -top-16 right-8 text-white hover:text-orange-500 transition-colors
                         bg-black/50 p-2 rounded-full hover:bg-black/70"
              >
                <X className="w-6 h-6" />
              </button>
              <VideoPlayer
                src={projects[showVideo].video}
                poster={projects[showVideo].images[0]}
              />
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-bold">{projects[showVideo].title}</h3>
                <p className="text-gray-300 mt-2">{projects[showVideo].description}</p>
              </div>
            </div>
          </div>
        )}

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