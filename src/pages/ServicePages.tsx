import ServicePage, { type ServicePageData } from "./ServicePage";
import {
  Wrench,
  ShieldCheck,
  Settings,
  Thermometer,
  Zap,
  BarChart3,
  ClipboardList,
  FileCheck,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Wind,
  Snowflake,
  Gauge,
  Cpu,
  Droplets,
  Flame,
  type LucideIcon,
} from "lucide-react";

// ============================================================
// 1. MAINTENANCE CVC
// ============================================================
const maintenanceData: ServicePageData = {
  seoTitle: "Maintenance CVC Île-de-France - Multi-sites & Tertiaire | LD MULTITEC",
  seoDescription: "LD MULTITEC assure votre maintenance CVC en Île-de-France : contrats structurés, techniciens qualifiés, organisation multi-sites. Devis gratuit sous 48h.",
  canonical: "/maintenance-cvc-ile-de-france",
  h1: "Maintenance CVC en Île-de-France - Votre prestataire technique multi-sites",
  heroSubtitle: "Réduction des coûts d'exploitation, conformité réglementaire et performance énergétique : une maintenance CVC structurée au service de vos installations.",
  heroImage: "/assets/technicien-ld-multitec-maintenance-cvc.webp",
  introP1: "Une maintenance CVC structurée n'est pas une contrainte réglementaire, c'est un levier direct de performance, de maîtrise des coûts et de sécurisation de vos installations. Des équipements bien entretenus consomment moins, tombent moins en panne et restent conformes aux obligations en vigueur.",
  introP2: "LD MULTITEC construit des organisations de maintenance adaptées à la réalité de vos patrimoines : planification anticipée, techniciens spécialisés, comptes-rendus systématiques et traçabilité complète de chaque intervention.",
  scope: [
    { icon: ClipboardList, label: "Visites préventives planifiées selon réglementation et inventaire technique" },
    { icon: Settings, label: "Contrôle, nettoyage et réglage de tous équipements (chaudières, CTA, groupes froids, VRV, PAC)" },
    { icon: Thermometer, label: "Vérification des paramètres de régulation et des températures de consigne" },
    { icon: ShieldCheck, label: "Tests de sécurité et contrôle des organes de coupure" },
    { icon: Snowflake, label: "Analyse des fluides frigorigènes et traitement anti-corrosion" },
    { icon: FileCheck, label: "Rédaction des comptes-rendus et mise à jour du carnet d'entretien réglementaire" },
  ],
  benefits: [
    { icon: Wrench, title: "Réduction des pannes", desc: "La maintenance préventive réduit significativement la fréquence des défaillances et supprime les coûts de dépannage d'urgence non maîtrisés." },
    { icon: ShieldCheck, title: "Conformité réglementaire garantie", desc: "Respect strict des obligations réglementaires (arrêté du 2 octobre 2010, réglementation gaz) et gestion documentaire complète associée." },
    { icon: BarChart3, title: "Maîtrise budgétaire", desc: "Contrats forfaitaires clairs, sans surprise, avec indicateurs de performance mesurables et reporting régulier." },
    { icon: TrendingUp, title: "Performance énergétique durable", desc: "Équipements réglés au plus près du besoin réel : consommations réduites, durée de vie prolongée, charges d'exploitation maîtrisées." },
  ],
  method: [
    { step: 1, title: "Audit de l'existant", desc: "Inventaire technique complet de vos installations CVC" },
    { step: 2, title: "Plan de maintenance", desc: "Programme sur mesure adapté à vos équipements et contraintes" },
    { step: 3, title: "Exécution planifiée", desc: "Interventions préventives selon calendrier validé conjointement" },
    { step: 4, title: "Reporting et suivi", desc: "Comptes-rendus systématiques, indicateurs de performance et bilan périodique" },
  ],
  faqs: [
    { q: "Quelle fréquence de visite pour la maintenance CVC ?", a: "La fréquence dépend du type d'équipement et des obligations réglementaires applicables. Elle est définie lors de l'audit initial et formalisée dans le contrat de maintenance." },
    { q: "Intervenez-vous sur toutes les marques d'équipements CVC ?", a: "Oui, nos techniciens sont formés sur l'ensemble des marques du marché : De Dietrich, Bosch, Viessmann, Daikin, Mitsubishi, Atlantic, et bien d'autres." },
    { q: "Que se passe-t-il en cas de panne ?", a: "En cas de panne, notre équipe intervient selon les délais définis contractuellement. Les clients sous contrat P3 bénéficient d'une prise en charge complète incluant pièces et main-d'œuvre." },
    { q: "Proposez-vous un rapport de performance annuel ?", a: "Oui, un bilan annuel est systématiquement remis, incluant l'analyse des interventions réalisées, les indicateurs de performance et les préconisations d'amélioration." },
  ],
  relatedLinks: [
    { label: "Contrats de maintenance P2/P3", path: "/contrats-maintenance-cvc" },
    { label: "Dépannage CVC", path: "/depannage-cvc-urgence-ile-de-france" },
    { label: "Optimisation énergétique", path: "/optimisation-energetique-cvc" },
  ],
};

// ============================================================
// 2. CONTRATS MAINTENANCE
// ============================================================
const contratsData: ServicePageData = {
  seoTitle: "Contrat maintenance CVC P2 P3 Île-de-France | LD MULTITEC",
  seoDescription: "Contrats de maintenance CVC P2 et P3 sur mesure en Île-de-France. Audit technique préalable, reporting structuré, interlocuteur unique. Demandez votre étude.",
  canonical: "/contrats-maintenance-cvc",
  h1: "Contrats de maintenance CVC - Prestations P2 et P3 sur mesure",
  heroSubtitle: "Des contrats de maintenance CVC structurés, adaptés à vos installations et à vos exigences de continuité de service.",
  heroImage: "/assets/contrat-maintenance-cvc-p2-p3-cta-tertiaire-ile-de-france.webp",
  introP1: "Le contrat P2 couvre la maintenance préventive planifiée de vos installations CVC : visites selon calendrier validé, comptes-rendus systématiques, carnet d'entretien réglementaire tenu à jour et technicien référent dédié.",
  introP2: "Le contrat P3 inclut l'ensemble des prestations P2, auxquelles s'ajoutent les dépannages illimités, la fourniture et pose des pièces dans le périmètre défini contractuellement, ainsi qu'une garantie de continuité de service avec délais d'intervention formalisés.",
  scope: [
    { icon: ClipboardList, label: "Maintenance préventive planifiée (P2)" },
    { icon: Wrench, label: "Dépannages illimités inclus (P3)" },
    { icon: Settings, label: "Fourniture et pose des pièces (P3)" },
    { icon: ShieldCheck, label: "Garantie de continuité de service" },
    { icon: FileCheck, label: "Reporting mensuel et bilan trimestriel" },
    { icon: Clock, label: "Délais d'intervention définis contractuellement" },
  ],
  benefits: [
    { icon: ShieldCheck, title: "Sécurité contractuelle", desc: "Périmètre clair, engagements formalisés, aucune surprise budgétaire. Chaque prestation est définie et chiffrée." },
    { icon: Clock, title: "Réactivité garantie", desc: "Délais d'intervention définis et respectés contractuellement, avec niveaux de priorité adaptés à la criticité." },
    { icon: ClipboardList, title: "Traçabilité complète", desc: "Comptes-rendus détaillés après chaque intervention, historique accessible et carnet d'entretien à jour." },
    { icon: TrendingUp, title: "Performance durable", desc: "Une maintenance régulière et structurée réduit les pannes, prolonge la durée de vie et maîtrise les charges." },
  ],
  method: [
    { step: 1, title: "Audit technique", desc: "Inventaire complet de vos installations CVC" },
    { step: 2, title: "Proposition P2/P3", desc: "Offre personnalisée selon vos besoins et contraintes" },
    { step: 3, title: "Signature et prise en main", desc: "Démarrage opérationnel avec technicien référent dédié" },
    { step: 4, title: "Suivi structuré", desc: "Reporting mensuel, bilan trimestriel et revue annuelle" },
  ],
  faqs: [
    { q: "Quelle est la durée minimale d'un contrat de maintenance CVC ?", a: "Nos contrats sont généralement conclus pour une durée de 1 an, renouvelable. Des engagements pluriannuels sont possibles avec des conditions avantageuses." },
    { q: "Les pièces sont-elles incluses dans le contrat ?", a: "Dans un contrat P3, oui. Les pièces d'usure et de remplacement sont incluses dans le périmètre défini contractuellement. En P2, elles sont facturées séparément sur devis." },
    { q: "Peut-on contractualiser sur un seul équipement ?", a: "Oui, nous adaptons nos contrats à votre situation, qu'il s'agisse d'un équipement unique ou d'un parc multi-sites complet." },
    { q: "Proposez-vous des contrats pluriannuels ?", a: "Oui, les contrats pluriannuels permettent une meilleure visibilité budgétaire, une stabilité de l'organisation et des conditions tarifaires optimisées." },
  ],
  relatedLinks: [
    { label: "Maintenance CVC", path: "/maintenance-cvc-ile-de-france" },
    { label: "Entretien chaufferie", path: "/entretien-chaufferie-ile-de-france" },
    { label: "Rénovation CVC", path: "/renovation-installation-cvc" },
  ],
};

// ============================================================
// 3. ENTRETIEN CHAUFFERIE
// ============================================================
const chauffData: ServicePageData = {
  seoTitle: "Entretien chaufferie Paris Île-de-France | LD MULTITEC",
  seoDescription: "Entretien et maintenance de chaufferies collectives en Île-de-France. Conformité réglementaire, rendement optimisé, gestion documentaire. Contrats disponibles.",
  canonical: "/entretien-chaufferie-ile-de-france",
  h1: "Entretien de chaufferie en Île-de-France - Conformité, performance et sécurité",
  heroSubtitle: "Garantissez la conformité réglementaire, la sécurité et le rendement optimal de vos chaufferies collectives grâce à un entretien structuré et rigoureux.",
  heroImage: "/assets/technicien-hvac-chaufferie-collective.webp",
  introP1: "L'entretien régulier de vos chaufferies est une obligation réglementaire et un levier direct de performance énergétique. LD MULTITEC assure l'ensemble des prestations d'entretien sur chaufferies collectives, de la petite puissance aux installations supérieures à 400 kW.",
  introP2: "Nos techniciens qualifiés interviennent sur toutes les marques du marché : De Dietrich, Bosch, Viessmann, Elco, Saunier Duval, Atlantic. Nous coordonnons si nécessaire avec les organismes de contrôle agréés (APAVE, Bureau Veritas) pour garantir une conformité totale.",
  scope: [
    { icon: Flame, label: "Entretien annuel obligatoire des chaudières (gaz, fioul)" },
    { icon: Droplets, label: "Nettoyage et désembouage des circuits hydrauliques" },
    { icon: Settings, label: "Vérification et réglage des brûleurs" },
    { icon: ShieldCheck, label: "Contrôle des échangeurs, vannes et organes de sécurité" },
    { icon: Gauge, label: "Analyse de combustion et optimisation du rendement" },
    { icon: Droplets, label: "Traitement d'eau et suivi qualité des circuits" },
    { icon: FileCheck, label: "Conformité au registre de sécurité et réglementation gaz" },
  ],
  benefits: [
    { icon: ShieldCheck, title: "Conformité réglementaire assurée", desc: "Respect strict des obligations légales d'entretien et gestion documentaire complète à chaque intervention." },
    { icon: TrendingUp, title: "Rendement optimisé", desc: "Analyse de combustion et réglages précis pour un rendement maximal et des consommations maîtrisées." },
    { icon: Wrench, title: "Fiabilité renforcée", desc: "Prévention des pannes hivernales par un entretien rigoureux et anticipé de vos chaufferies." },
    { icon: BarChart3, title: "Économies d'énergie mesurables", desc: "Réduction significative des consommations grâce à des équipements correctement entretenus et réglés." },
  ],
  method: [
    { step: 1, title: "Diagnostic initial", desc: "État des lieux complet de la chaufferie et de ses équipements" },
    { step: 2, title: "Plan d'entretien", desc: "Programme adapté à la puissance, aux équipements et aux obligations" },
    { step: 3, title: "Interventions planifiées", desc: "Entretien selon calendrier réglementaire validé" },
    { step: 4, title: "Reporting structuré", desc: "Comptes-rendus détaillés et carnet d'entretien tenu à jour" },
  ],
  faqs: [
    { q: "L'entretien de chaufferie est-il obligatoire ?", a: "Oui, l'entretien annuel des chaudières est obligatoire. Pour les chaufferies de puissance supérieure à 400 kW, un contrat d'entretien avec un professionnel qualifié est requis par la réglementation." },
    { q: "Quelle est la durée d'une intervention d'entretien ?", a: "La durée dépend de la puissance et de la complexité de l'installation. Comptez entre 2 heures et une journée complète selon la configuration." },
    { q: "Intervenez-vous sur les chaufferies de grande puissance ?", a: "Oui, nous intervenons sur les chaufferies de toutes puissances, y compris les installations supérieures à 400 kW nécessitant des qualifications spécifiques." },
    { q: "La gestion documentaire est-elle incluse ?", a: "Oui, la tenue du carnet d'entretien réglementaire et la rédaction des comptes-rendus font partie intégrante de nos prestations d'entretien." },
  ],
  relatedLinks: [
    { label: "Maintenance CVC", path: "/maintenance-cvc-ile-de-france" },
    { label: "Dépannage CVC", path: "/depannage-cvc-urgence-ile-de-france" },
    { label: "Rénovation CVC", path: "/renovation-installation-cvc" },
  ],
};

// ============================================================
// 4. DÉPANNAGE CVC
// ============================================================
function PriorityTable() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] text-center mb-10">
          Niveaux de priorité d'intervention
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ backgroundColor: "#1A1A2E" }}>
                <th className="px-6 py-4 text-left text-sm font-bold text-white">Niveau</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-white">Situation</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-white">Traitement</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 bg-red-50/50">
                <td className="px-6 py-4 text-sm font-bold text-red-600">Urgence P1</td>
                <td className="px-6 py-4 text-sm text-gray-700">Perte totale de chauffage ou sécurité compromise</td>
                <td className="px-6 py-4 text-sm text-gray-700">Priorité maximale selon engagement contractuel</td>
              </tr>
              <tr className="border-b border-gray-100 bg-orange-50/50">
                <td className="px-6 py-4 text-sm font-bold text-orange-600">Urgent P2</td>
                <td className="px-6 py-4 text-sm text-gray-700">Panne partielle, confort dégradé</td>
                <td className="px-6 py-4 text-sm text-gray-700">Intervention prioritaire planifiée sous délai contractuel</td>
              </tr>
              <tr className="bg-blue-50/50">
                <td className="px-6 py-4 text-sm font-bold text-[#1A7BAA]">Standard P3</td>
                <td className="px-6 py-4 text-sm text-gray-700">Défaillance mineure, fonctionnement dégradé</td>
                <td className="px-6 py-4 text-sm text-gray-700">Planification concertée avec le client</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const depannageData: ServicePageData = {
  seoTitle: "Dépannage CVC urgence Île-de-France | LD MULTITEC",
  seoDescription: "Dépannage CVC rapide pour professionnels en Île-de-France. Pannes chaudières, climatisation, ventilation. Intervention structurée, compte-rendu systématique.",
  canonical: "/depannage-cvc-urgence-ile-de-france",
  h1: "Dépannage CVC en Île-de-France - Intervention rapide et structurée pour les professionnels",
  heroSubtitle: "Une panne CVC peut compromettre votre activité et le confort de vos occupants. LD MULTITEC intervient rapidement avec une organisation structurée et des techniciens qualifiés.",
  heroImage: "/assets/technicien-ld-multitec-depannage-cvc.webp",
  introP1: "Les pannes CVC en milieu professionnel ont un impact direct sur le confort des occupants, la continuité d'exploitation et parfois la sécurité des personnes. LD MULTITEC dispose d'une organisation permettant des interventions rapides, structurées et documentées.",
  introP2: "Chaque intervention fait l'objet d'un compte-rendu détaillé transmis au client. Pour les clients sous contrat de maintenance CVC, les délais d'intervention sont définis et garantis contractuellement selon le niveau de priorité.",
  scope: [
    { icon: Flame, label: "Pannes chaudières et brûleurs (gaz, fioul)" },
    { icon: Snowflake, label: "Défaillances groupes froids et climatiseurs VRV et split" },
    { icon: Wind, label: "Pannes CTA et systèmes de ventilation" },
    { icon: Snowflake, label: "Fuites fluides frigorigènes (intervention certifiée)" },
    { icon: Cpu, label: "Défauts de régulation CVC et GTB" },
    { icon: Droplets, label: "Problèmes de pompes, vannes et circulateurs" },
  ],
  benefits: [
    { icon: Zap, title: "Réactivité maîtrisée", desc: "Intervention rapide selon les niveaux de priorité définis contractuellement, avec traçabilité complète." },
    { icon: CheckCircle, title: "Diagnostic précis", desc: "Techniciens expérimentés pour un diagnostic rapide, fiable et une résolution efficace de la panne." },
    { icon: FileCheck, title: "Traçabilité systématique", desc: "Compte-rendu détaillé après chaque intervention, transmis au client et archivé dans l'historique." },
    { icon: ShieldCheck, title: "Certifications en règle", desc: "Habilitations gaz et attestation de capacité fluides frigorigènes (catégories I et II)." },
  ],
  method: [
    { step: 1, title: "Signalement", desc: "Appel ou demande via votre interlocuteur dédié" },
    { step: 2, title: "Qualification", desc: "Évaluation du niveau de priorité (P1/P2/P3)" },
    { step: 3, title: "Intervention terrain", desc: "Déplacement, diagnostic et réparation sur site" },
    { step: 4, title: "Résolution documentée", desc: "Réparation finalisée et compte-rendu détaillé transmis" },
  ],
  faqs: [
    { q: "Intervenez-vous en dépannage CVC hors contrat ?", a: "Oui, nous intervenons également hors contrat. Les conditions tarifaires et délais sont alors définis au cas par cas selon la nature de la panne." },
    { q: "Avez-vous l'habilitation fluides frigorigènes ?", a: "Oui, LD MULTITEC dispose de l'attestation de capacité pour la manipulation des fluides frigorigènes (catégories I et II)." },
    { q: "Un compte-rendu d'intervention est-il systématiquement fourni ?", a: "Oui, systématiquement. Chaque intervention de dépannage fait l'objet d'un compte-rendu détaillé transmis au client dans les meilleurs délais." },
    { q: "Les pièces sont-elles prises en charge ?", a: "Pour les clients sous contrat P3, les pièces sont incluses dans le périmètre contractuel défini. Hors contrat, elles sont facturées séparément sur devis." },
  ],
  relatedLinks: [
    { label: "Contrats de maintenance CVC", path: "/contrats-maintenance-cvc" },
    { label: "Maintenance CVC", path: "/maintenance-cvc-ile-de-france" },
    { label: "Entretien chaufferie", path: "/entretien-chaufferie-ile-de-france" },
  ],
  extraSection: <PriorityTable />,
};

// ============================================================
// 5. RÉNOVATION CVC
// ============================================================
const renovationData: ServicePageData = {
  seoTitle: "Rénovation installation CVC Île-de-France | LD MULTITEC",
  seoDescription: "Rénovation et réhabilitation de chaufferies, CTA, climatisation en Île-de-France. De l'audit à la mise en service. LD MULTITEC, expert CVC B2B.",
  canonical: "/renovation-installation-cvc",
  h1: "Rénovation et réhabilitation d'installations CVC en Île-de-France",
  heroSubtitle: "Modernisez vos installations CVC pour retrouver performance, conformité et durabilité. De l'audit technique à la mise en service.",
  heroImage: "/assets/renovation-chaufferie-cvc.webp",
  introP1: "Des installations CVC vieillissantes entraînent des surconsommations, des pannes récurrentes et des risques de non-conformité réglementaire. La rénovation permet de rétablir la performance, de sécuriser vos installations et de prolonger significativement la durée de vie de vos équipements.",
  introP2: "LD MULTITEC accompagne les professionnels dans la réhabilitation de leurs installations CVC, de l'audit initial à la mise en service, avec un suivi post-travaux assuré par un contrat de maintenance structuré.",
  scope: [
    { icon: Flame, label: "Remplacement de chaudières vétustes (condensation, PAC)" },
    { icon: Thermometer, label: "Réhabilitation complète de chaufferies collectives" },
    { icon: Snowflake, label: "Remplacement de systèmes de climatisation obsolètes" },
    { icon: ShieldCheck, label: "Mise aux normes d'installations non conformes" },
    { icon: Cpu, label: "Modernisation des régulations CVC et GTB" },
    { icon: Droplets, label: "Rénovation de réseaux hydrauliques (désembouage, remplacement)" },
  ],
  benefits: [
    { icon: TrendingUp, title: "Performance retrouvée", desc: "Équipements modernes et correctement dimensionnés : rendement optimal et consommations maîtrisées." },
    { icon: ShieldCheck, title: "Conformité totale", desc: "Mise aux normes complète de vos installations CVC selon la réglementation en vigueur." },
    { icon: BarChart3, title: "Économies durables", desc: "Retour sur investissement rapide grâce aux gains énergétiques et à la réduction des coûts de maintenance." },
    { icon: Wrench, title: "Fiabilité renforcée", desc: "Suppression des pannes récurrentes liées à la vétusté et sécurisation de la continuité de service." },
  ],
  method: [
    { step: 1, title: "Audit technique", desc: "État des lieux complet, diagnostic et identification des priorités" },
    { step: 2, title: "Préconisations", desc: "Solutions techniques adaptées et chiffrage détaillé" },
    { step: 3, title: "Exécution des travaux", desc: "Travaux réalisés par nos équipes techniques qualifiées" },
    { step: 4, title: "Mise en service", desc: "Tests, réglages, formation des équipes sur site" },
    { step: 5, title: "Maintenance post-travaux", desc: "Contrat de maintenance structuré pour pérenniser l'investissement" },
  ],
  faqs: [
    { q: "Comment savoir si mes installations CVC nécessitent une rénovation ?", a: "Un audit technique permet d'évaluer l'état de vos équipements et de déterminer si une rénovation est nécessaire ou si un entretien renforcé suffit à rétablir la performance." },
    { q: "Les travaux de rénovation CVC sont-ils éligibles aux CEE ?", a: "Certains travaux de rénovation CVC sont éligibles aux Certificats d'Économies d'Énergie (CEE). Nous vous accompagnons dans l'identification des aides disponibles." },
    { q: "Quelle est la durée des travaux de rénovation ?", a: "La durée dépend de l'ampleur du projet. Un remplacement de chaudière peut prendre quelques jours, une réhabilitation complète de chaufferie plusieurs semaines." },
    { q: "Quelle garantie sur les installations CVC rénovées ?", a: "Les équipements installés bénéficient de la garantie constructeur. Nos travaux sont couverts par notre assurance décennale et notre responsabilité civile professionnelle." },
  ],
  relatedLinks: [
    { label: "Optimisation énergétique", path: "/optimisation-energetique-cvc" },
    { label: "Maintenance CVC", path: "/maintenance-cvc-ile-de-france" },
    { label: "Entretien chaufferie", path: "/entretien-chaufferie-ile-de-france" },
  ],
};

// ============================================================
// 6. OPTIMISATION ÉNERGÉTIQUE
// ============================================================
const optimisationData: ServicePageData = {
  seoTitle: "Optimisation énergétique CVC Île-de-France | LD MULTITEC",
  seoDescription: "Réduisez vos charges CVC sans investissement majeur. Audit, réglages, équilibrage hydraulique, monitoring. LD MULTITEC, expert optimisation énergie Île-de-France.",
  canonical: "/optimisation-energetique-cvc",
  h1: "Optimisation énergétique de vos installations CVC - Réduire les charges, améliorer la performance",
  heroSubtitle: "Les systèmes CVC représentent 40 à 60% de la consommation énergétique d'un bâtiment tertiaire. Des gains de 10 à 25% sont atteignables sans investissement majeur.",
  heroImage: "/assets/optimisation-energetique-cvc-hero.png",
  introP1: "Les installations CVC représentent 40 à 60% de la consommation énergétique d'un bâtiment tertiaire. Des actions ciblées de réglage, d'équilibrage et d'optimisation permettent des gains mesurables de 10 à 25% sans investissement lourd.",
  introP2: "LD MULTITEC intègre cette démarche d'optimisation dans chaque contrat de maintenance CVC. Nos techniciens analysent les paramètres de fonctionnement à chaque visite pour identifier les leviers d'économie et améliorer la performance globale de vos installations.",
  scope: [
    { icon: Thermometer, label: "Optimisation des courbes de chauffe et températures de consigne" },
    { icon: Cpu, label: "Paramétrage des régulateurs et programmateurs CVC" },
    { icon: Droplets, label: "Équilibrage hydraulique des réseaux de distribution" },
    { icon: Gauge, label: "Remplacement de pompes énergivores par pompes à vitesse variable" },
    { icon: Thermometer, label: "Amélioration du calorifugeage des réseaux" },
    { icon: Clock, label: "Optimisation des plages de fonctionnement selon usages réels" },
    { icon: BarChart3, label: "Analyse des données de comptage et suivi des indicateurs de performance" },
  ],
  benefits: [
    { icon: TrendingUp, title: "Gains mesurables", desc: "10 à 25% de réduction des consommations CVC sans investissement lourd, avec résultats documentés." },
    { icon: BarChart3, title: "Pilotage par la donnée", desc: "Monitoring structuré des consommations, suivi des indicateurs et reporting de qualité à destination du client." },
    { icon: ShieldCheck, title: "Conformité décret tertiaire", desc: "Accompagnement vers la conformité aux obligations de réduction des consommations énergétiques." },
    { icon: Wrench, title: "Actions concrètes et immédiates", desc: "Réglages, équilibrage, programmation : des actions terrain qui produisent des résultats rapides et mesurables." },
  ],
  method: [
    { step: 1, title: "Audit énergétique CVC", desc: "Analyse des consommations, des paramètres et des usages" },
    { step: 2, title: "Plan d'actions", desc: "Identification et priorisation des leviers d'optimisation" },
    { step: 3, title: "Mise en œuvre terrain", desc: "Réglages, équilibrage, programmation et ajustements" },
    { step: 4, title: "Monitoring et suivi", desc: "Suivi des résultats, ajustements et reporting périodique" },
  ],
  faqs: [
    { q: "Quels gains énergétiques peut-on espérer sur les installations CVC ?", a: "Les gains dépendent de l'état initial des installations. En moyenne, nos interventions d'optimisation permettent des économies de 10 à 25% sur les consommations CVC." },
    { q: "L'optimisation est-elle compatible avec un contrat de maintenance existant ?", a: "Oui, l'optimisation énergétique est intégrée dans nos contrats de maintenance CVC. Elle peut également faire l'objet d'une mission spécifique indépendante." },
    { q: "LD MULTITEC peut-elle accompagner sur le décret tertiaire ?", a: "Oui, nous accompagnons nos clients dans l'identification et la mise en œuvre des actions de réduction de consommation liées aux obligations du décret tertiaire." },
    { q: "Proposez-vous un audit énergétique CVC ?", a: "Oui, nous réalisons des audits énergétiques ciblés sur les installations CVC pour identifier les leviers d'optimisation prioritaires et chiffrer les gains attendus." },
  ],
  relatedLinks: [
    { label: "Maintenance CVC", path: "/maintenance-cvc-ile-de-france" },
    { label: "Rénovation CVC", path: "/renovation-installation-cvc" },
    { label: "Contrats de maintenance CVC", path: "/contrats-maintenance-cvc" },
  ],
};

// ============================================================
// EXPORTS
// ============================================================
export function MaintenanceCVC() {
  return <ServicePage data={maintenanceData} />;
}

export function ContratsMaintenance() {
  return <ServicePage data={contratsData} />;
}

export function EntretienChaufferie() {
  return <ServicePage data={chauffData} />;
}

export function DepannageCVC() {
  return <ServicePage data={depannageData} />;
}

export function RenovationCVC() {
  return <ServicePage data={renovationData} />;
}

export function OptimisationEnergetique() {
  return <ServicePage data={optimisationData} />;
}