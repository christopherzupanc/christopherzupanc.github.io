import "./index.css";
import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { References } from "./pages/References";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Imprint } from "./pages/Imprint";

export function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={setCurrentPage} />;
      case "services":
        return <Services />;
      case "references":
        return <References />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "imprint":
        return <Imprint />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.2),rgba(249,115,22,0))] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.2),rgba(59,130,246,0))] animate-pulse-slow" style={{ animationDelay: '-2s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(139,92,246,0.2),rgba(139,92,246,0))] animate-pulse-slow" style={{ animationDelay: '-4s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(16,185,129,0.15),rgba(16,185,129,0))] animate-pulse-slow" style={{ animationDelay: '-1s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(236,72,153,0.15),rgba(236,72,153,0))] animate-pulse-slow" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Content */}
      <div className="relative">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <main>
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;