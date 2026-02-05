import { Shield, Lock, FileText } from "lucide-react";

export function Imprint() {
  return (
    <div className="min-h-screen px-6 lg:px-8 py-20">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-zinc-100">Impressum & </span>
            <span className="text-gradient-orange">Datenschutz</span>
          </h1>
        </div>

        {/* Impressum */}
        <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 md:p-10 mb-8">
          <h2 className="text-2xl font-semibold text-zinc-100 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-orange-400" />
            </div>
            Impressum
          </h2>

          <div className="space-y-6 text-zinc-400">
            <div className="space-y-2">
              <h3 className="text-zinc-100 font-medium">Angaben gemäß § 5 TMG</h3>
              <p className="leading-relaxed">
                Christopher Zupanc<br />
                Kiko Engineering<br />
                Leonhardstraße 135<br />
                8010 Graz<br />
                Österreich
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-zinc-100 font-medium">Kontakt</h3>
              <p className="leading-relaxed">
                E-Mail: christopherzupanc@outlook.com
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-zinc-100 font-medium">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
              <p className="leading-relaxed">
                Berufsbezeichnung: Gewerbewortlaut:
Mechatroniker für Elektronik, Büro- und EDV-Systemtechnik verbunden mit Mechatroniker für 
Maschinen- und Fertigungstechnik; Mechatroniker für Elektromaschinenbau und Automatisierung; 
Mechatroniker für Medizingerätetechnik<br />
                Zuständige Kammer: Wirtschaftskammer Steiermark<br />
                Verliehen in: Österreich
              </p>
            </div>
          </div>
        </div>

        {/* Datenschutz */}
        <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-semibold text-zinc-100 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <Lock className="w-5 h-5 text-orange-400" />
            </div>
            Datenschutzerklärung
          </h2>

          <div className="space-y-8 text-zinc-400">
            <div className="space-y-3">
              <h3 className="text-zinc-100 font-medium">1. Datenschutz auf einen Blick</h3>
              <p className="leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-zinc-100 font-medium">2. Datenerfassung auf dieser Website</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-zinc-200 font-medium mb-1">Wer ist verantwortlich für die Datenerfassung?</p>
                  <p className="leading-relaxed">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                    Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                  </p>
                </div>
                <div>
                  <p className="text-zinc-200 font-medium mb-1">Wie erfassen wir Ihre Daten?</p>
                  <p className="leading-relaxed">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
                    Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                </div>
                <div>
                  <p className="text-zinc-200 font-medium mb-1">Wofür nutzen wir Ihre Daten?</p>
                  <p className="leading-relaxed">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website
                    zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-zinc-100 font-medium">3. Kontaktformular</h3>
              <p className="leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
                zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-zinc-100 font-medium">4. Ihre Rechte</h3>
              <p className="leading-relaxed">
                Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger
                und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
                außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-zinc-100 font-medium">5. SSL-Verschlüsselung</h3>
              <p className="leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung
                erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://"
                wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>
          </div>
        </div>

        {/* AGBs */}
        <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 md:p-10 mt-8">
          <h2 className="text-2xl font-semibold text-zinc-100 mb-8 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <FileText className="w-5 h-5 text-orange-400" />
            </div>
            Allgemeine Geschäftsbedingungen (AGB)
          </h2>

          <div className="space-y-8 text-zinc-400">
            <p className="leading-relaxed">
              Die allgemeinen Geschäftsbedingungen werden in Kürze hier veröffentlicht.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
