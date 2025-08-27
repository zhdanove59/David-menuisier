import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageCircle, 
  DoorOpen,
  Home,
  Hammer,
  Car,
  Wrench,
  Clock,
  CheckCircle,
  Shield
} from "lucide-react";
import cuisineImage from "@/assets/cuisine-montage.jpg";
import fenetreImage from "@/assets/fenetre-reparation.jpg";
import urgenceImage from "@/assets/urgence-porte.jpg";

const Services = () => {
  const services = [
    {
      icon: DoorOpen,
      title: "Réparation de portes, fenêtres et volets",
      description: "Spécialiste de la réparation de menuiseries extérieures",
      image: fenetreImage,
      details: [
        "Réparation de fenêtres cassées ou bloquées",
        "Remise en état de portes défaillantes", 
        "Dépannage volets roulants et battants",
        "Changement de serrures et poignées",
        "Réparation après effraction"
      ],
      keywords: "réparation fenêtre Le Mans, dépannage porte Le Mans, volet roulant Le Mans"
    },
    {
      icon: Home,
      title: "Montage et installation de meubles de cuisine",
      description: "Installation professionnelle de cuisines équipées",
      image: cuisineImage,
      details: [
        "Montage de meubles de cuisine sur mesure",
        "Installation d'électroménager encastrable",
        "Pose de plans de travail",
        "Raccordements eau et électricité",
        "Finitions et ajustements précis"
      ],
      keywords: "montage cuisine Le Mans, installation cuisine Le Mans, menuisier cuisine Sarthe"
    },
    {
      icon: Hammer,
      title: "Aménagement intérieur en bois",
      description: "Créations sur mesure pour particuliers et professionnels",
      image: cuisineImage,
      details: [
        "Placards et dressings sur mesure",
        "Bibliothèques et étagères intégrées",
        "Cloisons et séparations en bois",
        "Aménagement de combles",
        "Mobilier professionnel"
      ],
      keywords: "aménagement bois Le Mans, placard sur mesure Le Mans, dressing Le Mans"
    },
    {
      icon: Car,
      title: "Travaux spécifiques caravanes et camping-cars",
      description: "Expertise unique en aménagement mobile",
      image: urgenceImage,
      details: [
        "Réparation portes de caravanes",
        "Aménagement intérieur camping-car",
        "Mobilier adapté aux véhicules",
        "Isolation et habillage bois",
        "Rangements optimisés"
      ],
      keywords: "aménagement camping-car Sarthe, réparation caravane Le Mans, menuiserie mobile"
    }
  ];

  const urgencyServices = [
    {
      title: "Réparation rapide de portes et fenêtres",
      description: "Intervention sous 2h pour sécuriser votre habitation"
    },
    {
      title: "Sécurisation après effraction", 
      description: "Pose provisoire de panneaux bois pour protection immédiate"
    },
    {
      title: "Dépannage volets et portes de caravanes",
      description: "Spécialiste du dépannage en urgence pour véhicules de loisirs"
    }
  ];

  return (
    <Layout 
      title="Nos prestations de menuiserie au Mans et en Sarthe"
      description="Services complets de menuiserie : réparation portes/fenêtres, montage cuisine, aménagement bois, dépannage express. Le Mans et Sarthe (72)."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Nos prestations de menuiserie au Mans et en Sarthe
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              24 ans d'expérience à votre service pour tous vos travaux de menuiserie, 
              de la réparation d'urgence aux aménagements sur mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <MessageCircle className="w-5 h-5" />
                Devis gratuit WhatsApp
              </Button>
              <Button variant="emergency" size="lg">
                <Phone className="w-5 h-5" />
                Urgence : +33 6 80 40 14 00
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center mb-4">
                      <Icon className="w-8 h-8 text-primary mr-3" />
                      <h2 className="text-2xl md:text-3xl font-bold text-primary">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="wood" size="lg">
                        <MessageCircle className="w-5 h-5" />
                        Devis pour ce service
                      </Button>
                      <Button variant="outline" size="lg">
                        <Phone className="w-5 h-5" />
                        Nous appeler
                      </Button>
                    </div>

                    <div className="mt-4">
                      <Badge variant="outline" className="text-xs">
                        {service.keywords}
                      </Badge>
                    </div>
                  </div>

                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="rounded-lg shadow-hero w-full hover-lift"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interventions express */}
      <section className="py-20 bg-emergency/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-emergency mb-4">
                Interventions express et dépannage rapide
              </h2>
              <p className="text-xl text-muted-foreground">
                Urgence menuiserie ? Nous intervenons 7j/7 pour sécuriser et dépanner
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {urgencyServices.map((service, index) => (
                <Card key={index} className="hover-lift shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg text-emergency">
                      <Wrench className="w-5 h-5 mr-2" />
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <Clock className="w-6 h-6 text-emergency" />
                <span className="text-lg font-semibold text-emergency">
                  Intervention sous 2h pour les urgences
                </span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="emergency" size="lg">
                  <Phone className="w-5 h-5" />
                  Urgence : +33 6 80 40 14 00
                </Button>
                <Button variant="whatsapp" size="lg">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp urgent
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garanties et certifications */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
              Nos garanties et certifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-card hover-lift">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-3">Artisan déclaré & assuré</h3>
                <p className="text-sm text-muted-foreground">
                  Entreprise déclarée avec assurance responsabilité civile professionnelle
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-card hover-lift">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-3">Factures reconnues assurances</h3>
                <p className="text-sm text-muted-foreground">
                  Nos factures sont acceptées par toutes les compagnies d'assurance
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-card hover-lift">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-3">24 ans d'expérience</h3>
                <p className="text-sm text-muted-foreground">
                  Plus de deux décennies au service des particuliers et professionnels
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-wood text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'un devis pour votre projet ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contactez-nous pour une estimation gratuite et sans engagement
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <MessageCircle className="w-6 h-6" />
              Devis WhatsApp gratuit
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

export default Services;