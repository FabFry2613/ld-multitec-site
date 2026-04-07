import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Wrench,
  ShieldCheck,
  Settings,
  Thermometer,
  Zap,
  BarChart3,
  Building2,
  Users,
  Home,
  Landmark,
  Building,
  FileCheck,
  ClipboardList,
  TrendingUp,
  Wind,
  Snowflake,
  Gauge,
  Cpu,
  Droplets,
  ArrowRight,
  ExternalLink,
  Monitor,
} from "lucide-react";

function useScrollFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeInSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useScrollFadeIn();
  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}
    >
      {children}
    </div>
  );
}

const services = [
  {
    icon: Wrench,
    title: "Maintenance CVC complète",
    desc: "Maintenance préventive, corrective et réglementaire adaptée à vos installations de chauffage, ventilation et climatisation.",
    path: "/maintenance-cvc-ile-de-france",
  },
  {
    icon: ShieldCheck,
    title: "Contrats de maintenance P2 / P3",
    desc: "Contrats structurés avec engagements formalisés : périmètre clair, délais garantis, maîtrise budgétaire totale.",
    path: "/contrats-maintenance-cvc",
  },
  {
    icon: Thermometer,
    title: "Entretien chaufferie",
    desc: "Suivi rigoureux et optimisation des performances de vos chaufferies collectives. Conformité réglementaire et sécurité assurées.",
    path: "/entretien-chaufferie-ile-de-france",
  },
  {
    icon: Zap,
    title: "Dépannage rapide CVC",
    desc: "Intervention efficace pour limiter les interruptions. Diagnostic précis, compte-rendu systématique après chaque intervention.",
    path: "/depannage-cvc-urgence-ile-de-france",
  },
  {
    icon: Settings,
    title: "Rénovation CVC",
    desc: "Réhabilitation, mise aux normes et modernisation de vos installations CVC pour retrouver performance et conformité.",
    path: "/renovation-installation-cvc",
  },
  {
    icon: BarChart3,
    title: "Optimisation énergétique",
    desc: "Amélioration durable des installations CVC : réduction mesurable des consommations par l'analyse, le réglage et le pilotage.",
    path: "/optimisation-energetique-cvc",
  },
];

const reassurance = [
  {
    icon: Wrench,
    title: "Expertise technique terrain",
    desc: "Techniciens spécialisés CVC, formés aux équipements tertiaires et collectifs. Interventions sur chaufferies, CTA, DRV, groupes froids, pompes à chaleur et régulation.",
  },
  {
    icon: Building2,
    title: "Organisation multi-sites",
    desc: "Gestion structurée de portefeuilles d'installations : technicien référent dédié, planification anticipée, reporting systématique et traçabilité complète des opérations.",
  },
  {
    icon: Zap,
    title: "Réactivité contractuelle",
    desc: "Délais d'intervention définis et respectés contractuellement. Interventions préventives planifiées et dépannages priorisés sur toute l'Île-de-France.",
  },
  {
    icon: Cpu,
    title: "Pilotage et traçabilité",
    desc: "Suivi rigoureux de vos installations via des outils métier développés par LD SYSTEMS : monitoring, historique d'interventions et reporting de qualité.",
  },
];

const technicalScope = [
  { icon: Thermometer, label: "Chaufferies collectives (petite à grande puissance)" },
  { icon: Wind, label: "Centrales de traitement d'air (CTA)" },
  { icon: Wind, label: "VMC simple flux et double flux" },
  { icon: Snowflake, label: "Systèmes DRV et split-system" },
  { icon: Snowflake, label: "Groupes froids et climatisations tertiaires" },
  { icon: Gauge, label: "Pompes à chaleur (air/eau, air/air)" },
  { icon: Droplets, label: "Réseaux hydrauliques (production et distribution)" },
  { icon: Cpu, label: "Régulation CVC et GTB" },
];

const clients = [
  { icon: Building2, label: "Entreprises tertiaires" },
  { icon: Home, label: "Syndics de copropriété" },
  { icon: Users, label: "Bailleurs sociaux" },
  { icon: Building, label: "Property managers" },
  { icon: Landmark, label: "Collectivités et établissements publics" },
];

const engagements = [
  {
    icon: FileCheck,
    title: "Conformité réglementaire",
    desc: "Respect strict des obligations légales d'entretien, des normes en vigueur (DTU, arrêtés préfectoraux) et gestion documentaire complète à chaque intervention.",
  },
  {
    icon: ClipboardList,
    title: "Traçabilité totale",
    desc: "Compte-rendu détaillé après chaque intervention, carnet d'entretien réglementaire tenu à jour, accès permanent à l'historique complet de vos installations.",
  },
  {
    icon: TrendingUp,
    title: "Amélioration continue",
    desc: "Analyse de performance à chaque visite pour anticiper les défaillances, réduire vos charges d'exploitation et prolonger la durée de vie de vos équipements.",
  },
];

const faqs = [
  {
    q: "LD MULTITEC intervient-elle auprès des particuliers ?",
    a: "Non. LD MULTITEC intervient exclusivement auprès de clients professionnels : gestionnaires de patrimoine, syndics de copropriété, bailleurs sociaux, exploitants et collectivités. Nos contrats de maintenance CVC sont dimensionnés pour des installations collectives ou des parcs multi-sites.",
  },
  {
    q: "Quelle est la zone d'intervention de LD MULTITEC ?",
    a: "Nous couvrons l'ensemble de l'Île-de-France : Paris (75) et les 7 départements limitrophes (92, 93, 94, 77, 78, 91, 95). Notre organisation logistique nous permet d'assurer un suivi régulier sur l'ensemble de ce territoire.",
  },
  {
    q: "LD MULTITEC peut-elle gérer plusieurs sites simultanément ?",
    a: "Oui. La gestion de portefeuilles multi-sites est notre cœur de métier. Nous attribuons un technicien référent à chaque portefeuille pour garantir la continuité du suivi, la connaissance des installations et la qualité du reporting.",
  },
  {
    q: "Quels types de contrats de maintenance CVC proposez-vous ?",
    a: "Nous proposons des contrats P2 (maintenance préventive planifiée) et P3 (maintenance préventive + corrective avec garantie totale), personnalisés selon l'inventaire technique de vos installations, après un audit préalable systématique.",
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "LD MULTITEC",
  description:
    "Maintenance CVC professionnelle en Île-de-France pour entreprises, syndics de copropriété, bailleurs sociaux et collectivités.",
  url: "https://www.ldmultitec.fr",
  email: "contact@ld-multitec.fr",
  areaServed: {
    "@type": "State",
    name: "Île-de-France",
  },
  serviceType: [
    "Maintenance CVC",
    "Contrat de maintenance CVC",
    "Entretien chaufferie",
    "Dépannage CVC",
    "Rénovation CVC",
    "Optimisation énergétique",
  ],
};

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <title>Maintenance CVC Île-de-France | LD MULTITEC - Chauffage, Ventilation, Climatisation</title>
        <meta
          name="description"
          content="LD MULTITEC, expert en maintenance CVC multi-sites en Île-de-France. Contrats P2/P3, entretien chaufferie, dépannage et rénovation pour entreprises, syndics, bailleurs sociaux et collectivités. Devis gratuit sous 48h."
        />
        <link rel="canonical" href="https://www.ldmultitec.fr/" />
        {/* Open Graph */}
        <meta
          property="og:title"
          content="Maintenance CVC Île-de-France | LD MULTITEC - Chauffage, Ventilation, Climatisation"
        />
        <meta
          property="og:description"
          content="Expert en maintenance CVC multi-sites en Île-de-France. Contrats P2/P3, entretien chaufferie, dépannage et rénovation pour professionnels. Devis gratuit sous 48h."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ldmultitec.fr/" />
        <meta property="og:image" content="https://www.ldmultitec.fr/assets/logo-ld-multitec.webp" />
        <meta property="og:site_name" content="LD MULTITEC" />
        <meta property="og:locale" content="fr_FR" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Maintenance CVC Île-de-France | LD MULTITEC"
        />
        <meta
          name="twitter:description"
          content="Expert en maintenance CVC multi-sites en Île-de-France. Contrats P2/P3, entretien chaufferie, dépannage et rénovation pour professionnels."
        />
        <meta name="twitter:image" content="https://www.ldmultitec.fr/assets/og-ld-multitec-hero.png" />
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="FR-IDF" />
        <meta name="geo.placename" content="Île-de-France" />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrg)}
        </script>
      </Helmet>

      {/* HERO — Sober, technical, industrial */}
      <section
        className="relative hero-section-animate"
        style={{ backgroundColor: "#1A1A2E" }}
      >
        {/* Subtle grid pattern overlay for industrial feel */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Background image — very subtle, with parallax on desktop */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 hero-parallax-bg"
          style={{ backgroundImage: "url(/assets/hero-technician-1.webp)" }}
        />



        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          {/* Thin accent line */}
          <div className="w-16 h-[3px] bg-[#D4550A] mb-6 hero-cascade hero-cascade-1" />

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-6 hero-cascade hero-cascade-1">
            Maintenance CVC fiable et structurée
            <br />
            <span className="text-white/60">pour vos bâtiments en Île-de-France</span>
          </h1>

          <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-8 max-w-3xl hero-cascade hero-cascade-2">
            LD MULTITEC assure la maintenance préventive et corrective
            de vos installations de chauffage, ventilation et climatisation.
            Nous accompagnons les entreprises, syndics de copropriété,
            bailleurs sociaux et collectivités avec une organisation rigoureuse,
            adaptée aux patrimoines complexes et aux exigences contractuelles
            les plus élevées.
          </p>

          {/* Key figures — industrial style */}
          <div className="flex flex-wrap gap-8 mb-10 hero-cascade hero-cascade-3">
            <div>
              <span className="block text-2xl md:text-3xl font-bold text-[#D4550A] tabular-nums">
                100%
              </span>
              <span className="text-[11px] uppercase tracking-wider text-white/40 font-medium">
                Clients professionnels
              </span>
              <span className="block text-[11px] text-white/30 mt-1">
                Entreprises, syndics, bailleurs, collectivités
              </span>
            </div>
            <div className="w-px bg-white/10 hidden sm:block" />
            <div>
              <span className="block text-2xl md:text-3xl font-bold text-white tabular-nums">
                IDF
              </span>
              <span className="text-[11px] uppercase tracking-wider text-white/40 font-medium">
                Île-de-France
              </span>
              <span className="block text-[11px] text-white/30 mt-1">
                Intervention sur l'ensemble du territoire francilien
              </span>
            </div>
            <div className="w-px bg-white/10 hidden sm:block" />
            <div>
              <span className="block text-2xl md:text-3xl font-bold text-white tabular-nums">
                CVC
              </span>
              <span className="text-[11px] uppercase tracking-wider text-white/40 font-medium">
                Contrats de maintenance
              </span>
              <span className="block text-[11px] text-white/30 mt-1">
                Maintenance, suivi technique et optimisation des installations
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 hero-cascade hero-cascade-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white rounded transition-colors"
              style={{ backgroundColor: "#D4550A" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#B8470A")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#D4550A")
              }
            >
              Demander un audit technique de vos installations
            </Link>
            <Link
              to="/maintenance-cvc-ile-de-france"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white/70 rounded border border-white/20 hover:border-white/40 hover:text-white transition-colors"
            >
              Découvrir nos services CVC
            </Link>
          </div>
        </div>

        {/* Bottom border accent */}
        <div className="h-[3px] bg-gradient-to-r from-[#D4550A] via-[#1A7BAA] to-transparent hero-accent-line" />
      </section>

      {/* REASSURANCE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reassurance.map((item, i) => (
              <FadeInSection key={i}>
                <div className="group p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg hover:border-[#D4550A]/20 transition-all duration-300">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#1A7BAA15" }}
                  >
                    <item.icon className="w-6 h-6 text-[#1A7BAA]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                Nos services de maintenance CVC
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Une offre complète et structurée couvrant l'ensemble du cycle de vie
                de vos installations de chauffage, ventilation et climatisation :
                maintenance, entretien, dépannage, rénovation et optimisation énergétique.
              </p>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeInSection key={i}>
                <Link
                  to={s.path}
                  className="group block p-6 bg-white border border-gray-100 rounded-xl hover:shadow-xl hover:border-[#D4550A]/30 transition-all duration-300 h-full"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "#1A7BAA15" }}
                  >
                    <s.icon className="w-6 h-6 text-[#1A7BAA]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-2 group-hover:text-[#D4550A] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-[#D4550A] group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SCOPE */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                Tous types d'installations CVC
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                De la chaufferie collective au patrimoine tertiaire multi-sites,
                LD MULTITEC maîtrise l'ensemble des systèmes de chauffage,
                ventilation et climatisation présents sur le marché.
              </p>
            </div>
          </FadeInSection>
          {/* Desktop: narrow centered column — premium vertical list */}
          <div className="hidden sm:block max-w-md mx-auto">
            {technicalScope.map((item, i) => (
              <FadeInSection key={i}>
                <div className="flex items-center justify-start gap-4 px-4 py-3.5 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#1A7BAA]" />
                  </div>
                  <span className="text-sm font-medium text-[#1A1A2E]">
                    {item.label}
                  </span>
                </div>
              </FadeInSection>
            ))}
          </div>
          {/* Mobile: single column, unchanged */}
          <div className="sm:hidden">
            <div className="flex flex-col">
              {technicalScope.map((item, i) => (
                <FadeInSection key={`m-${i}`}>
                  <div className="flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <item.icon className="w-5 h-5 text-[#1A7BAA] flex-shrink-0" />
                    <span className="text-sm font-medium text-[#1A1A2E]">
                      {item.label}
                    </span>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
                Des professionnels exigeants nous font confiance
              </h2>
            </div>
          </FadeInSection>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {clients.map((c, i) => (
              <FadeInSection key={i}>
                <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-gray-100 min-w-[160px] hover:shadow-md transition-shadow">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#1A7BAA15" }}
                  >
                    <c.icon className="w-7 h-7 text-[#1A7BAA]" />
                  </div>
                  <span className="text-sm font-semibold text-[#1A1A2E] text-center">
                    {c.label}
                  </span>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#1A1A2E" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Nos engagements opérationnels
              </h2>
            </div>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagements.map((e, i) => (
              <FadeInSection key={i}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 bg-[#D4550A]/10">
                    <e.icon className="w-7 h-7 text-[#D4550A]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {e.title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {e.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* LD SYSTEMS — Support tooling, secondary positioning */}
      <section className="py-12 md:py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center"
                style={{ backgroundColor: "#1A7BAA10" }}
              >
                <Cpu className="w-4 h-4 text-[#1A7BAA]" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-[#1A1A2E]">
                Nos outils de pilotage
              </h2>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-3xl">
              <span className="font-semibold text-[#1A1A2E]">LD MULTITEC</span>{" "}
              s'appuie sur une organisation technique structurée et sur des outils métier développés par{" "}
              <span className="font-semibold text-[#1A7BAA]">LD SYSTEMS</span>,
              spécifiquement conçus pour le pilotage des installations CVC.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-3xl">
              Cette infrastructure permet d'assurer un suivi précis des équipements, une traçabilité complète des interventions et un pilotage rigoureux des contrats sur l'ensemble de leur cycle de vie.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-3xl">
              Les opérations sont encadrées, historisées et analysées afin de garantir la continuité de service, l'anticipation des défaillances et l'optimisation durable des installations.
            </p>

            {/* LD PILOT — compact callout */}
            <div className="bg-gray-50 border border-gray-150 rounded-lg p-4 mb-4 max-w-2xl">
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "#1A7BAA10" }}
                >
                  <Monitor className="w-4 h-4 text-[#1A7BAA]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1A1A2E] mb-0.5">
                    LD PILOT
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Solution interne dédiée, intégrant la gestion des prises en charge, le suivi opérationnel des interventions, ainsi que la production de rapports d'activité annuels détaillés, exploitables et conformes aux exigences des gestionnaires de patrimoine.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-4 max-w-3xl">
              Cette organisation permet à nos clients de disposer d'une vision claire, structurée et fiable de leurs installations, dans le respect des engagements contractuels et des obligations réglementaires.
            </p>

            <p className="text-xs text-gray-500 italic mb-6 max-w-3xl">
              Une organisation conçue pour répondre aux exigences des patrimoines techniques complexes et multi-sites.
            </p>

            <a
              href="https://ld-systems.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-[#1A7BAA] hover:text-[#15688F] font-medium transition-colors"
            >
              En savoir plus sur LD SYSTEMS
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] text-center mb-12">
              Questions fréquentes
            </h2>
          </FadeInSection>
          <FadeInSection>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-gray-100 rounded-lg px-6 data-[state=open]:border-[#D4550A]/20 data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="text-left text-sm font-semibold text-[#1A1A2E] hover:text-[#D4550A] py-4 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600 leading-relaxed pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeInSection>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ backgroundColor: "#1A1A2E" }} className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Obtenir une étude personnalisée de votre maintenance CVC
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Audit technique, étude de contrat ou demande de devis : notre équipe analyse votre besoin et vous répond sous 48h.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-white rounded transition-colors"
              style={{ backgroundColor: "#D4550A" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#B8470A")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#D4550A")
              }
            >
              Demander un audit technique de vos installations
            </Link>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
}