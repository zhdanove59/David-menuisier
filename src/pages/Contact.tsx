import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  MessageCircle, 
  Mail,
  MapPin,
  Clock,
  Send
} from "lucide-react";

const Contact = () => {
  return (
    <Layout 
      title="Demandez votre devis gratuit – Menuisier Le Mans"
      description="Contactez David, menuisier au Mans. Devis gratuit par WhatsApp ou formulaire. Intervention Le Mans et toute la Sarthe (72). Urgences 7j/7."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Demandez votre devis gratuit
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Réponse rapide et sans engagement pour tous vos projets de menuiserie. 
              Intervention Le Mans et toute la Sarthe (72).
            </p>
          </div>
        </div>
      </section>

      {/* Contact rapide */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Coordonnées */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Contactez-nous directement
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Téléphone fixe</h3>
                    <p className="text-muted-foreground">02 43 XX XX XX</p>
                    <p className="text-sm text-muted-foreground">Lun-Ven 8h-18h</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">WhatsApp</h3>
                    <p className="text-muted-foreground">06 XX XX XX XX</p>
                    <p className="text-sm text-muted-foreground">7j/7 - Réponse rapide</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <p className="text-muted-foreground">david@menuisier-lemans.fr</p>
                    <p className="text-sm text-muted-foreground">Réponse sous 24h</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Adresse</h3>
                    <p className="text-muted-foreground">Le Mans, Sarthe (72)</p>
                    <p className="text-sm text-muted-foreground">Déplacement à domicile</p>
                  </div>
                </div>
              </div>

              <div className="bg-emergency/10 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 text-emergency mr-2" />
                  <h3 className="font-semibold text-emergency">Urgences 7j/7</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Pour les interventions urgentes (portes cassées, effractions, sécurisation), 
                  appelez directement ou contactez via WhatsApp.
                </p>
                <div className="flex gap-3">
                  <Button variant="emergency" size="sm">
                    <Phone className="w-4 h-4" />
                    Urgence
                  </Button>
                  <Button variant="whatsapp" size="sm">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Formulaire de devis */}
            <div>
              <Card className="shadow-hero">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Formulaire de demande de devis
                  </CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire pour recevoir un devis gratuit via WhatsApp
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nom">Nom *</Label>
                      <Input id="nom" placeholder="Votre nom" />
                    </div>
                    <div>
                      <Label htmlFor="prenom">Prénom *</Label>
                      <Input id="prenom" placeholder="Votre prénom" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="telephone">Téléphone *</Label>
                    <Input id="telephone" type="tel" placeholder="06 XX XX XX XX" />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="votre@email.fr" />
                  </div>

                  <div>
                    <Label htmlFor="ville">Ville *</Label>
                    <Input id="ville" placeholder="Le Mans, Allonnes, Coulaines..." />
                  </div>

                  <div>
                    <Label htmlFor="type-prestation">Type de prestation *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez le type de travaux" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reparation-fenetre">Réparation fenêtre/porte</SelectItem>
                        <SelectItem value="montage-cuisine">Montage cuisine</SelectItem>
                        <SelectItem value="amenagement-interieur">Aménagement intérieur</SelectItem>
                        <SelectItem value="camping-car">Travaux camping-car/caravane</SelectItem>
                        <SelectItem value="urgence">Intervention urgence</SelectItem>
                        <SelectItem value="autre">Autre (préciser dans le message)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="urgence">Urgence</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Délai souhaité" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgence">Urgence (sous 24h)</SelectItem>
                        <SelectItem value="rapide">Rapide (sous 48h)</SelectItem>
                        <SelectItem value="semaine">Cette semaine</SelectItem>
                        <SelectItem value="mois">Ce mois-ci</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Description du projet *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Décrivez vos travaux de menuiserie : dimensions, matériaux, état actuel, photos si possible..."
                      rows={4}
                    />
                  </div>

                  <Button variant="whatsapp" size="lg" className="w-full">
                    <Send className="w-5 h-5" />
                    Envoyer la demande via WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    En cliquant sur "Envoyer", vos informations seront transmises via WhatsApp 
                    pour un devis rapide et personnalisé.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention avec carte */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Zone d'intervention : Le Mans et toute la Sarthe (72)
              </h2>
              <p className="text-lg text-muted-foreground">
                Nous nous déplaçons dans toute la Sarthe pour vos travaux de menuiserie
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Principales communes desservies :</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="space-y-1">
                    <p>• Le Mans</p>
                    <p>• Allonnes</p>
                    <p>• Coulaines</p>
                    <p>• Arnage</p>
                    <p>• La Chapelle-Saint-Aubin</p>
                    <p>• Changé</p>
                  </div>
                  <div className="space-y-1">
                    <p>• Yvré-l'Évêque</p>
                    <p>• Sargé-lès-le-Mans</p>
                    <p>• Rouillon</p>
                    <p>• Pruillé-le-Chétif</p>
                    <p>• Saint-Saturnin</p>
                    <p>• Et toute la Sarthe...</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-card rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">Frais de déplacement :</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Gratuit dans un rayon de 15km du Mans</li>
                    <li>• Tarif préférentiel pour la Sarthe</li>
                    <li>• Devis de déplacement pour autres départements</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card p-4 rounded-lg shadow-card">
                <div className="bg-gradient-kayak h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="font-bold text-primary mb-2">Plan Google Maps</h4>
                    <p className="text-sm text-muted-foreground">
                      Carte interactive à intégrer ici avec la localisation du Mans 
                      et les zones d'intervention
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-wood text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contactez-nous dès maintenant pour un devis gratuit et personnalisé
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <MessageCircle className="w-6 h-6" />
              WhatsApp - Réponse rapide
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="w-6 h-6" />
              Appelez maintenant
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;