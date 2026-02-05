import { useState } from "react";
import { Menu, X } from "lucide-react";
import { getPathFromPage } from "../lib/router";

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
    <nav className="sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-2xl border-b border-white/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a
            href={getPathFromPage("home")}
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
            }}
            className="group flex items-center gap-1 text-white font-bold text-xl tracking-wide"
          >
            <span className="text-gradient-orange">KIKO</span>
            <span className="text-zinc-100 group-hover:text-white transition-colors">ENGINEERING</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={getPathFromPage(item.id)}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className={`
                  relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                  ${
                    currentPage === item.id
                      ? "text-orange-400 bg-orange-500/10"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                  }
                `}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-2xl border-b border-white/5">
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={getPathFromPage(item.id)}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`
                    block w-full text-left px-4 py-3 rounded-xl transition-all duration-200
                    ${
                      currentPage === item.id
                        ? "bg-orange-500/15 text-orange-400 font-medium"
                        : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
                    }
                  `}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}