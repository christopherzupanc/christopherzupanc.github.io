import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Kontakt <span className="text-orange-500">aufnehmen</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Haben Sie ein spannendes Projekt? Ich freue mich auf Ihre Anfrage 
            und melde mich schnellstmöglich bei Ihnen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Projekt anfragen
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-gray-300 mb-2 block">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg 
                           text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                           focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-gray-300 mb-2 block">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg 
                           text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                           focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-gray-300 mb-2 block">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg 
                           text-white placeholder-gray-500 focus:outline-none focus:ring-2 
                           focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  placeholder="Beschreiben Sie Ihr Projekt..."
                />
              </div>

              <div className="flex items-start gap-2 text-xs text-gray-400">
                <input type="checkbox" required className="mt-1" />
                <span>
                  Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung 
                  meiner Daten einverstanden. *
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg font-medium 
                         hover:bg-orange-600 transition-all transform hover:scale-105 
                         disabled:opacity-50 disabled:cursor-not-allowed flex items-center 
                         justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Nachricht gesendet!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Nachricht senden
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Kontaktinformationen
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-1">E-Mail</h3>
                    <a href="mailto:info@kiko-engineering.at" 
                       className="text-gray-300 hover:text-orange-500 transition-colors">
                      info@kiko-engineering.at
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Telefon</h3>
                    <a href="tel:+436641234567" 
                       className="text-gray-300 hover:text-orange-500 transition-colors">
                      +43 664 123 45 67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-1">Standort</h3>
                    <p className="text-gray-300">
                      Graz, Steiermark<br />
                      Österreich
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600/20 to-orange-500/20 
                          border border-orange-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">
                Antwortzeit
              </h3>
              <p className="text-gray-300">
                Ich antworte in der Regel innerhalb von 24 Stunden auf Ihre Anfrage. 
                Bei dringenden Projekten erreichen Sie mich auch telefonisch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}