import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageCircle, 
  Wrench, 
  Clock, 
  Shield, 
  Star,
  Home,
  DoorOpen,
  Hammer,
  Car
} from "lucide-react";
import heroImage from "@/assets/hero-menuisier.jpg";
import cuisineImage from "@/assets/cuisine-montage.jpg";
import fenetreImage from "@/assets/fenetre-reparation.jpg";
import urgenceImage from "@/assets/urgence-porte.jpg";

const Index = () => {
  const services = [
    {
      icon: DoorOpen,
      title: "Réparation fenêtres & portes",
      description: "Réparation de fenêtres, portes et volets cassés ou défaillants",
      image: fenetreImage
    },
    {
      icon: Home,
      title: "Montage cuisine",
      description: "Installation et montage de meubles de cuisine sur mesure",
      image: cuisineImage
    },
    {
      icon: Hammer,
      title: "Aménagement intérieur",
      description: "Aménagements bois pour particuliers et professionnels",
      image: cuisineImage
    },
    {
      icon: Car,
      title: "Travaux camping-cars",
      description: "Spécialiste des aménagements caravanes et camping-cars",
      image: urgenceImage
    }
  ];

  const urgencyServices = [
    "Réparation rapide portes/fenêtres cassées",
    "Sécurisation après effraction",
    "Dépannage volets coincés",
    "Intervention portes caravanes"
  ];

  return (
    <Layout 
      title="Menuisier au Mans – Artisan menuisier pour particuliers et professionnels"
      description="David, artisan menuisier au Mans avec 24 ans d'expérience. Réparation, montage cuisine, aménagement bois. Intervention express Le Mans et Sarthe (72)."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Artisan menuisier au Mans - David travaillant le bois"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center kayak-enter">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Menuisier au Mans
              <span className="block text-primary-glow">24 ans d'expérience</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Réparation, aménagement et montage de meubles sur mesure
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="lg" className="hover-lift">
                <MessageCircle className="w-6 h-6" />
                Devis gratuit WhatsApp
              </Button>
              <Button variant="emergency" size="lg" className="hover-lift">
                <Phone className="w-6 h-6" />
                Urgence - Appelez maintenant
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Artisan déclaré & assuré
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                24 ans d'expérience
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Intervention 7j/7
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nos prestations de menuiserie
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Du montage de cuisine à la réparation d'urgence, nous intervenons pour tous vos besoins en menuiserie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover-lift cursor-pointer shadow-card">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center text-lg">
                      <Icon className="w-5 h-5 text-primary mr-2" />
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Urgence Section */}
      <section className="py-20 bg-emergency/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-emergency mb-6">
                  Intervention express Le Mans
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Porte cassée ? Fenêtre bloquée ? Effraction ? Nous intervenons rapidement 
                  pour sécuriser votre domicile ou local professionnel.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {urgencyServices.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <Wrench className="w-5 h-5 text-emergency mr-3 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="emergency" size="lg" className="hover-lift">
                    <Phone className="w-5 h-5" />
                    02 43 XX XX XX
                  </Button>
                  <Button variant="whatsapp" size="lg" className="hover-lift">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp urgent
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={urgenceImage} 
                  alt="Intervention urgence menuiserie Le Mans"
                  className="rounded-lg shadow-hero w-full"
                />
                <div className="absolute top-4 right-4 bg-emergency text-emergency-foreground px-3 py-1 rounded-full text-sm font-medium">
                  7j/7 - 24h/24
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Zone d'intervention
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nous intervenons au <strong>Mans et dans toute la Sarthe (72)</strong> : 
              Allonnes, Coulaines, Arnage, La Chapelle-Saint-Aubin, Changé, 
              Yvré-l'Évêque, Sargé-lès-le-Mans et toutes les communes voisines.
            </p>
            
            <div className="bg-card p-8 rounded-lg shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">Délais rapides</h3>
                  <p className="text-sm text-muted-foreground">
                    Intervention sous 24h pour travaux standards
                  </p>
                </div>
                <div>
                  <Phone className="w-12 h-12 text-emergency mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">Urgences</h3>
                  <p className="text-sm text-muted-foreground">
                    Dépannage express 7j/7 pour sécurisation
                  </p>
                </div>
                <div>
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">Garantie qualité</h3>
                  <p className="text-sm text-muted-foreground">
                    Factures reconnues par les assurances
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-wood text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Demandez votre devis gratuit
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Réponse rapide et sans engagement pour tous vos travaux de menuiserie
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <MessageCircle className="w-6 h-6" />
              Devis WhatsApp gratuit
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="w-6 h-6" />
              02 43 XX XX XX
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
