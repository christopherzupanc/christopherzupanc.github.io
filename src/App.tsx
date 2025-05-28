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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="relative">
        {/* Background decoration */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        {renderPage()}
      </main>
    </div>
  );
}

export default App;