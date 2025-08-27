import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coordonnées */}
          <div>
            <h3 className="text-lg font-bold mb-4">David Menuisier</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-glow" />
                <span>+33 6 80 40 14 00</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-primary-glow" />
                <span>+33 6 80 40 14 00</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-glow" />
                <span>david@menuisier-lemans.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-glow" />
                <span>6 Rue Bazoge, 72100 Le Mans</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Réparation fenêtres & portes</li>
              <li>Montage cuisine</li>
              <li>Aménagement intérieur</li>
              <li>Dépannage express</li>
              <li>Travaux camping-cars</li>
              <li>Sécurisation après effraction</li>
            </ul>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h3 className="text-lg font-bold mb-4">Zone d'intervention</h3>
            <p className="text-sm mb-4">
              Le Mans et toutes les communes environnantes : Allonnes, Coulaines, 
              Arnage, La Chapelle-Saint-Aubin, Changé, Yvré-l'Évêque, 
              Sargé-lès-le-Mans...
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="w-4 h-4 text-primary-glow" />
              <span>Intervention 7j/7 pour urgences</span>
            </div>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="border-t border-primary-glow/20 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <div className="flex space-x-4">
              <Button variant="emergency" size="lg">
                <Phone className="w-5 h-5" />
                +33 6 80 40 14 00
              </Button>
              <Button variant="whatsapp" size="lg" asChild>
                <a href="https://wa.me/33680401400?text=Bonjour, je souhaiterais un devis gratuit pour mes travaux de menuiserie." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Devis gratuit WhatsApp
                </a>
              </Button>
            </div>
            <div className="text-center">
              <p className="text-sm text-primary-foreground/80">
                🏆 24 ans d'expérience - Artisan déclaré & assuré
              </p>
              <p className="text-xs text-primary-foreground/60 mt-1">
                Factures reconnues par les assurances
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-glow/20 mt-8 pt-4 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 David Menuisier - Le Mans. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;