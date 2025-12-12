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
    <div className="min-h-screen relative overflow-hidden bg-[#12121a]">
      {/* Modern mesh gradient background */}
      <div className="fixed inset-0">
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#12121a] via-[#16161f] to-[#12121a]" />

        {/* Primary orange glow - top right */}
        <div
          className="absolute top-0 right-0 w-[900px] h-[700px] animate-pulse-slow"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(249, 115, 22, 0.22) 0%, transparent 65%)',
            transform: 'translate(15%, -25%)',
          }}
        />

        {/* Secondary amber glow - bottom left */}
        <div
          className="absolute bottom-0 left-0 w-[700px] h-[600px] animate-pulse-slow"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.15) 0%, transparent 65%)',
            transform: 'translate(-25%, 15%)',
            animationDelay: '-3s',
          }}
        />

        {/* Accent glow - center */}
        <div
          className="absolute top-1/2 left-1/2 w-[1200px] h-[700px] animate-pulse-slow"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(249, 115, 22, 0.1) 0%, transparent 55%)',
            transform: 'translate(-50%, -50%)',
            animationDelay: '-6s',
          }}
        />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
        <main>
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;