import { Shield } from "lucide-react";

export function Imprint() {
  return (
    <div className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Impressum & <span className="text-orange-500">Datenschutz</span>
          </h1>
        </div>

        {/* Impressum */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-orange-500" />
            Impressum
          </h2>
          
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="text-white font-medium mb-2">Angaben gemäß § 5 TMG</h3>
              <p>
                Thomas Zupanc<br />
                Technische Entwicklung & Maschinenbau<br />
                Musterstraße 123<br />
                8010 Graz<br />
                Österreich
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">Kontakt</h3>
              <p>
                Telefon: +43 664 123 45 67<br />
                E-Mail: info@techwerk.at
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">Umsatzsteuer-ID</h3>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                ATU12345678
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
              <p>
                Berufsbezeichnung: Ingenieur<br />
                Zuständige Kammer: Wirtschaftskammer Steiermark<br />
                Verliehen in: Österreich
              </p>
            </div>
          </div>
        </div>

        {/* Datenschutz */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            Datenschutzerklärung
          </h2>
          
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-white font-medium mb-2">1. Datenschutz auf einen Blick</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">2. Datenerfassung auf dieser Website</h3>
              <p className="mb-3">
                <strong className="text-white">Wer ist verantwortlich für die Datenerfassung?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="mb-3">
                <strong className="text-white">Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p>
                <strong className="text-white">Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website 
                zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">3. Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns 
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">4. Ihre Rechte</h3>
              <p>
                Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger 
                und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben 
                außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
            </div>

            <div>
              <h3 className="text-white font-medium mb-2">5. SSL-Verschlüsselung</h3>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung 
                vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung 
                erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" 
                wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}