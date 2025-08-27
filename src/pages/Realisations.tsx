import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageCircle,
  ArrowLeft,
  ArrowRight,
  Star,
  Calendar,
  MapPin
} from "lucide-react";
import { useState } from "react";
import cuisineImage from "@/assets/cuisine-montage.jpg";
import fenetreImage from "@/assets/fenetre-reparation.jpg";
import urgenceImage from "@/assets/urgence-porte.jpg";

const Realisations = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const realisations = [
    {
      title: "Montage cuisine complète - Allonnes",
      description: "Installation d'une cuisine équipée avec électroménager encastrable, plan de travail quartz et finitions soignées.",
      image: cuisineImage,
      date: "Novembre 2024",
      lieu: "Allonnes (72)",
      type: "Montage cuisine",
      duree: "2 jours",
      details: [
        "Montage 12 meubles hauts et bas",
        "Installation plan de travail quartz",
        "Pose électroménager encastrable",
        "Raccordements eau et électricité",
        "Finitions et ajustements précis"
      ]
    },
    {
      title: "Réparation fenêtres après effraction - Le Mans",
      description: "Intervention d'urgence pour sécurisation et réparation complète de fenêtres endommagées lors d'une effraction.",
      image: fenetreImage,
      date: "Octobre 2024",
      lieu: "Le Mans centre",
      type: "Réparation urgence",
      duree: "1 jour",
      details: [
        "Sécurisation immédiate avec panneaux",
        "Réparation encadrement bois",
        "Remplacement vitrage",
        "Renforcement serrures",
        "Finitions peinture"
      ]
    },
    {
      title: "Aménagement camping-car - Coulaines",
      description: "Création d'un aménagement sur mesure pour camping-car avec rangements optimisés et mobilier adapté.",
      image: urgenceImage,
      date: "Septembre 2024",
      lieu: "Coulaines (72)",
      type: "Aménagement mobile",
      duree: "3 jours",
      details: [
        "Conception sur mesure",
        "Rangements optimisés",
        "Mobilier multifonctionnel",
        "Isolation thermique",
        "Finitions résistantes"
      ]
    },
    {
      title: "Rénovation portes intérieures - Changé",
      description: "Rénovation complète de 8 portes intérieures avec changement de poignées et ajustements.",
      image: fenetreImage,
      date: "Août 2024",
      lieu: "Changé (72)",
      type: "Rénovation",
      duree: "2 jours",
      details: [
        "Ponçage et préparation",
        "Application lasure chêne",
        "Changement poignées design",
        "Ajustement battants",
        "Finitions soignées"
      ]
    },
    {
      title: "Placards sur mesure - Yvré-l'Évêque",
      description: "Création de placards sous pente avec portes coulissantes et aménagement intérieur optimisé.",
      image: cuisineImage,
      date: "Juillet 2024",
      lieu: "Yvré-l'Évêque (72)",
      type: "Aménagement",
      duree: "2 jours",
      details: [
        "Mesures précises sous pente",
        "Portes coulissantes silencieuses",
        "Aménagement modulable",
        "Éclairage LED intégré",
        "Finition blanc laqué"
      ]
    },
    {
      title: "Dépannage volets roulants - Arnage",
      description: "Intervention express pour réparer 3 volets roulants bloqués et remplacement des sangles.",
      image: urgenceImage,
      date: "Juin 2024",
      lieu: "Arnage (72)",
      type: "Dépannage",
      duree: "1/2 jour",
      details: [
        "Diagnostic rapide des pannes",
        "Déblocage mécanismes",
        "Remplacement sangles usées",
        "Lubrification complète",
        "Test de fonctionnement"
      ]
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % realisations.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + realisations.length) % realisations.length);
  };

  return (
    <Layout 
      title="Nos réalisations en menuiserie – Le Mans et Sarthe"
      description="Découvrez nos réalisations de menuiserie au Mans : montage cuisine, réparation fenêtres, aménagements sur mesure. Photos avant/après des chantiers."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nos réalisations en menuiserie
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Découvrez quelques-unes de nos réalisations récentes au Mans et en Sarthe. 
              24 ans d'expérience au service de la qualité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <MessageCircle className="w-5 h-5" />
                Demander un devis similaire
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="w-5 h-5" />
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie principale */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative mb-12">
              <div className="aspect-video overflow-hidden rounded-lg shadow-hero">
                <img 
                  src={realisations[currentImageIndex].image} 
                  alt={realisations[currentImageIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ArrowRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-4 bg-black/70 text-white p-4 rounded-lg max-w-md">
                <h3 className="font-bold text-lg mb-1">{realisations[currentImageIndex].title}</h3>
                <p className="text-sm opacity-90">{realisations[currentImageIndex].description}</p>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/70 text-white p-2 rounded-lg">
                <span className="text-sm">{currentImageIndex + 1} / {realisations.length}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grille des réalisations */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Projets récents
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {realisations.map((realisation, index) => (
                <Card 
                  key={index} 
                  className="hover-lift cursor-pointer shadow-card group"
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={realisation.image} 
                      alt={realisation.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {realisation.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {realisation.date}
                      </span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">
                      {realisation.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm mb-3 line-clamp-2">
                      {realisation.description}
                    </CardDescription>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {realisation.lieu}
                      </span>
                      <span>Durée: {realisation.duree}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Détails de la réalisation sélectionnée */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-hero">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">
                    {realisations[currentImageIndex].type}
                  </Badge>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {realisations[currentImageIndex].date}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {realisations[currentImageIndex].lieu}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-2xl text-primary">
                  {realisations[currentImageIndex].title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {realisations[currentImageIndex].description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-primary mb-3">Détails de la réalisation :</h4>
                <ul className="space-y-2">
                  {realisations[currentImageIndex].details.map((detail, index) => (
                    <li key={index} className="flex items-center">
                      <Star className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 p-4 bg-accent rounded-lg">
                  <p className="text-sm text-accent-foreground">
                    <strong>Durée des travaux :</strong> {realisations[currentImageIndex].duree}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Témoignages clients */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
              Ce que disent nos clients
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm italic mb-4">
                    "David a monté notre cuisine en 2 jours. Travail impeccable, 
                    très professionnel et de bons conseils. Je recommande !"
                  </p>
                  <p className="text-sm font-semibold">Marie L. - Allonnes</p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm italic mb-4">
                    "Intervention rapide après effraction. David a sécurisé 
                    et réparé nos fenêtres le jour même. Excellent service !"
                  </p>
                  <p className="text-sm font-semibold">Pierre M. - Le Mans</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-wood text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Votre projet mérite la même attention
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contactez-nous pour discuter de votre projet de menuiserie
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <MessageCircle className="w-6 h-6" />
              Devis gratuit WhatsApp
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="w-6 h-6" />
              +33 6 80 40 14 00
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Realisations;