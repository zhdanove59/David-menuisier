import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "@/assets/logo-david.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Réalisations", path: "/realisations" },
    { name: "À propos", path: "/a-propos" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 lg:space-x-3 hover-lift flex-shrink-0">
            <img 
              src={logoImage} 
              alt="David Menuisier - L'art du bois sur mesure" 
              className="h-10 md:h-12 w-auto"
            />
            <div className="hidden sm:block">
              <span className="text-base lg:text-lg font-bold text-primary">David Menuisier</span>
              <p className="text-xs text-muted-foreground hidden md:block">Le Mans - Sarthe</p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Navigation Tablette - Version compacte */}
          <nav className="hidden md:flex lg:hidden space-x-4">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-medium transition-colors hover:text-primary whitespace-nowrap ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Boutons d'action Desktop */}
          <div className="hidden lg:flex items-center space-x-2 flex-shrink-0">
            <Button variant="emergency" size="sm" className="text-xs">
              <Phone className="w-4 h-4" />
              Urgence
            </Button>
            <Button variant="whatsapp" size="sm" asChild>
              <a href="https://wa.me/33680401400?text=Bonjour, je souhaiterais un devis pour mes travaux." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Devis
              </a>
            </Button>
          </div>

          {/* Boutons d'action Tablette - Version compacte */}
          <div className="hidden md:flex lg:hidden items-center space-x-1 flex-shrink-0">
            <Button variant="emergency" size="sm" className="text-xs px-2">
              <Phone className="w-4 h-4" />
            </Button>
            <Button variant="whatsapp" size="sm" className="px-2" asChild>
              <a href="https://wa.me/33680401400?text=Bonjour, je souhaiterais un devis pour mes travaux." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Menu mobile */}
          <button
            className="md:hidden flex-shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu mobile déployé */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border kayak-enter">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground rounded-md ${
                    isActive(item.path) ? "text-primary bg-secondary" : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-2 px-4 pt-4">
                <Button variant="emergency" size="sm" className="text-xs flex-1">
                  <Phone className="w-4 h-4" />
                  Urgence
                </Button>
                <Button variant="whatsapp" size="sm" className="flex-1" asChild>
                  <a href="https://wa.me/33680401400?text=Bonjour, je souhaiterais un devis pour mes travaux." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" />
                    Devis
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;