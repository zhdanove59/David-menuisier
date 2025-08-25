import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageCircle,
  Hammer,
  Heart,
  Shield,
  Star,
  Clock,
  Award,
  Users,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-menuisier.jpg";
import vueLeMansImage from "@/assets/vue-le-mans.jpg";
import circuitLeMansImage from "@/assets/circuit-le-mans.jpg";

const APropos = () => {
  const valeurs = [
    {
      icon: Hammer,
      title: "Précision",
      description: "Chaque mesure, chaque coupe, chaque assemblage est réalisé avec la plus grande précision pour un résultat parfait."
    },
    {
      icon: Star,
      title: "Perfection",
      description: "Nous ne livrons que des travaux dont nous sommes fiers, avec des finitions soignées et durables."
    },
    {
      icon: Shield,
      title: "Professionnalisme",
      description: "Respect des délais, devis clairs, communication transparente et service client irréprochable."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "L'amour du bois et de l'artisanat guide chacune de nos réalisations depuis 24 ans."
    }
  ];

  const competences = [
    {
      domaine: "Réparation & Dépannage",
      experience: "24 ans",
      details: [
        "Réparation fenêtres et portes",
        "Dépannage volets roulants",
        "Sécurisation après effraction",
        "Interventions d'urgence 7j/7"
      ]
    },
    {
      domaine: "Montage & Installation",
      experience: "24 ans",
      details: [
        "Montage cuisines équipées",
        "Installation électroménager",
        "Pose de plans de travail",
        "Raccordements spécialisés"
      ]
    },
    {
      domaine: "Aménagement Sur Mesure",
      experience: "24 ans",
      details: [
        "Placards et dressings",
        "Bibliothèques intégrées",
        "Cloisons bois",
        "Aménagement de combles"
      ]
    },
    {
      domaine: "Spécialité Camping-Cars",
      experience: "15 ans",
      details: [
        "Aménagement intérieur",
        "Mobilier sur mesure",
        "Réparation portes",
        "Optimisation espaces"
      ]
    }
  ];

  const certifications = [
    {
      icon: Shield,
      title: "Artisan Déclaré & Assuré",
      description: "Entreprise déclarée avec toutes les assurances professionnelles"
    },
    {
      icon: Award,
      title: "24 Ans d'Expérience",
      description: "Plus de deux décennies d'expertise en menuiserie artisanale"
    },
    {
      icon: CheckCircle,
      title: "Factures Agréées Assurances",
      description: "Nos factures sont reconnues par toutes les compagnies d'assurance"
    },
    {
      icon: Users,
      title: "Particuliers & Professionnels",
      description: "Nous intervenons pour tous types de clients et projets"
    }
  ];

  return (
    <Layout 
      title="David – Artisan menuisier au Mans avec 24 ans d'expérience"
      description="Découvrez David, menuisier artisan au Mans depuis 24 ans. Précision, perfection, professionnalisme. Passion kayak intégrée dans notre approche fluide."
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="David, artisan menuisier au Mans dans son atelier"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              David, Artisan Menuisier
              <span className="block text-primary-glow">24 ans d'expérience au Mans</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Notre philosophie : précision, perfection, professionnalisme
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="hover-lift">
                <MessageCircle className="w-6 h-6" />
                Découvrir nos réalisations
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="w-6 h-6" />
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* L'histoire de David */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Un artisan passionné depuis 24 ans
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    Installé au <strong>Mans depuis plus de 20 ans</strong>, David a développé 
                    une expertise reconnue dans tous les domaines de la menuiserie. 
                    De la réparation d'urgence aux aménagements sur mesure les plus complexes.
                  </p>
                  <p>
                    Formé dans la tradition artisanale française, David allie savoir-faire 
                    ancestral et techniques modernes pour offrir des prestations de qualité 
                    exceptionnelle.
                  </p>
                  <p>
                    Sa <strong>passion pour le kayak</strong> influence sa philosophie de travail : 
                    comme sur l'eau, chaque geste doit être fluide, précis et adapté aux conditions. 
                    Cette approche se retrouve dans la navigation de nos projets et la qualité 
                    de nos finitions.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-card p-4 rounded-lg shadow-card text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Projets réalisés</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow-card text-center">
                    <div className="text-2xl font-bold text-primary">24</div>
                    <div className="text-sm text-muted-foreground">Années d'expérience</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="David dans son atelier de menuiserie"
                  className="rounded-lg shadow-hero w-full"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Depuis 2000
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Nos valeurs fondamentales
              </h2>
              <p className="text-xl text-muted-foreground">
                Les piliers qui guident notre travail au quotidien
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valeurs.map((valeur, index) => {
                const Icon = valeur.icon;
                return (
                  <Card key={index} className="hover-lift shadow-card text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl text-primary">
                        {valeur.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {valeur.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Nos compétences */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Nos domaines d'expertise
              </h2>
              <p className="text-xl text-muted-foreground">
                24 ans d'expérience dans tous les métiers de la menuiserie
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {competences.map((competence, index) => (
                <Card key={index} className="hover-lift shadow-card">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl text-primary">
                        {competence.domaine}
                      </CardTitle>
                      <Badge variant="secondary">
                        {competence.experience}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {competence.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* La passion kayak */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-kayak p-8 rounded-lg text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚣‍♂️</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Passion Kayak
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Une touche personnelle qui inspire notre approche fluide 
                    et précise dans chaque projet
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Une touche personnelle dans nos réalisations
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    La pratique du kayak depuis de nombreuses années a profondément 
                    influencé ma philosophie de travail. Sur l'eau, chaque mouvement 
                    doit être <strong>fluide, précis et adapté</strong> aux conditions.
                  </p>
                  <p>
                    Cette approche se retrouve dans tous nos projets : navigation 
                    souple entre les contraintes techniques, adaptation constante 
                    aux besoins clients, et recherche permanente de l'harmonie 
                    dans les finitions.
                  </p>
                  <p>
                    Comme un kayak qui glisse sur l'eau, nos interventions se 
                    font en douceur, sans disruption de votre quotidien, 
                    avec une progression constante vers l'objectif final.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications et garanties */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Certifications et garanties
              </h2>
              <p className="text-xl text-muted-foreground">
                Votre tranquillité d'esprit est notre priorité
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <Card key={index} className="hover-lift shadow-card text-center">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="font-bold text-primary mb-3 text-lg">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Au service du Mans et de la Sarthe
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Basé au Mans, nous intervenons dans toute la Sarthe (72) avec 
                la même qualité de service et le même professionnalisme.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img 
                  src={vueLeMansImage} 
                  alt="Vue panoramique du Mans - Artisan menuisier local"
                  className="rounded-lg shadow-hero w-full"
                />
                <p className="text-center text-sm text-muted-foreground mt-2">
                  Le Mans - Notre ville d'origine
                </p>
              </div>
              <div>
                <img 
                  src={circuitLeMansImage} 
                  alt="Circuit des 24 heures du Mans - Fierté régionale"
                  className="rounded-lg shadow-hero w-full"
                />
                <p className="text-center text-sm text-muted-foreground mt-2">
                  Circuit des 24 heures - Fierté du Mans
                </p>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">Proximité</h3>
                  <p className="text-sm text-muted-foreground">
                    Intervention rapide grâce à notre connaissance locale
                  </p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">Confiance</h3>
                  <p className="text-sm text-muted-foreground">
                    Réputation établie au Mans depuis plus de 20 ans
                  </p>
                </div>
                <div className="text-center">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-primary mb-2">Engagement</h3>
                  <p className="text-sm text-muted-foreground">
                    Chaque client est unique et mérite notre meilleur service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-wood text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à confier votre projet à un artisan passionné ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contactez David pour discuter de votre projet de menuiserie
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <MessageCircle className="w-6 h-6" />
              Devis gratuit WhatsApp
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

export default APropos;