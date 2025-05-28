import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Start" },
    { id: "services", label: "Leistungen" },
    { id: "references", label: "Referenzen" },
    { id: "about", label: "Über mich" },
    { id: "contact", label: "Kontakt" },
    { id: "imprint", label: "Impressum" },
  ];

  return (
    <nav className="relative z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-white font-bold text-xl tracking-wider">
            <span className="text-orange-500">TECH</span>WERK
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  relative px-1 py-2 text-sm font-medium transition-colors
                  ${
                    currentPage === item.id
                      ? "text-orange-500"
                      : "text-gray-300 hover:text-white"
                  }
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full
                  after:bg-orange-500 after:transform after:scale-x-0 after:transition-transform
                  ${currentPage === item.id ? "after:scale-x-100" : "hover:after:scale-x-100"}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-b border-gray-700/50">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`
                    block w-full text-left px-4 py-2 rounded-lg transition-colors
                    ${
                      currentPage === item.id
                        ? "bg-orange-500/20 text-orange-500"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}