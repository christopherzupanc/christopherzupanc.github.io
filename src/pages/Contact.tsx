import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, Clock } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "E-Mail",
      value: "christopherzupanc@outlook.com",
      href: "mailto:christopherzupanc@outlook.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Standort",
      value: "Leonhardstraße 135, 8010 Graz",
      href: null,
    },
  ];

  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-zinc-100">Kontakt </span>
            <span className="text-gradient-orange">aufnehmen</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Haben Sie ein spannendes Projekt? Ich freue mich auf Ihre Anfrage
            und melde mich schnellstmöglich bei Ihnen.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-3 bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-semibold text-zinc-100 mb-8">
              Projekt anfragen
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl
                           text-zinc-100 placeholder-zinc-500
                           focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50
                           transition-all duration-200"
                  placeholder="Ihr Name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl
                           text-zinc-100 placeholder-zinc-500
                           focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50
                           transition-all duration-200"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl
                           text-zinc-100 placeholder-zinc-500 resize-none
                           focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50
                           transition-all duration-200"
                  placeholder="Beschreiben Sie Ihr Projekt..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  id="privacy"
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-orange-500
                           focus:ring-orange-500/50 focus:ring-offset-0"
                />
                <label htmlFor="privacy" className="text-sm text-zinc-400 leading-relaxed">
                  Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung
                  meiner Daten einverstanden. *
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white
                         rounded-xl font-semibold shadow-lg shadow-orange-500/25
                         hover:shadow-orange-500/40 hover:from-orange-400 hover:to-orange-500
                         transition-all duration-300 transform hover:scale-[1.01]
                         disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100
                         flex items-center justify-center gap-3"
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
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-zinc-100 mb-6">
                Kontaktinformationen
              </h2>

              <div className="space-y-5">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center
                                  text-orange-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-zinc-400 mb-1">{item.label}</h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-zinc-200 hover:text-orange-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-zinc-200">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 to-amber-500/10" />
              <div className="relative border border-orange-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center
                                text-orange-400 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-2">
                      Antwortzeit
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Ich antworte in der Regel innerhalb von 24 Stunden auf Ihre Anfrage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
