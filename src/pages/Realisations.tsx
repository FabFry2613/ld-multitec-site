import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Building2, TrendingUp, CheckCircle } from "lucide-react";

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

function FadeIn({
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

const cases = [
  {
    title: "Maintenance CVC multi-sites - Patrimoine tertiaire multi-sites",
    image: "/assets/reference-chaufferie-tertiaire.png",
    context:
      "Gestion d'un parc immobilier tertiaire composé de plusieurs sites en Île-de-France, avec des installations CVC hétérogènes et un historique de maintenance peu structuré.",
    intervention:
      "Audit technique complet du parc, mise en place d'un contrat P2 unifié, plan de maintenance annuel par site avec technicien référent dédié et reporting mensuel consolidé.",
    results: [
      "Réduction des dépannages d'urgence de 60%",
      "Conformité réglementaire rétablie sur l'ensemble du parc",
      "Visibilité budgétaire et maîtrise des charges d'exploitation",
    ],
  },
  {
    title: "Réhabilitation de chaufferie collective - Copropriété résidentielle",
    image: "/assets/reference-climatisation-bureaux.png",
    context:
      "Chaufferie collective vieillissante, rendement dégradé et pannes récurrentes impactant le confort des occupants.",
    intervention:
      "Audit technique complet, remplacement par équipements à condensation haute performance, rénovation du réseau de distribution et mise en place d'une régulation climatique.",
    results: [
      "Gain de rendement de 28% mesuré après mise en service",
      "Suppression totale des pannes récurrentes",
      "Conformité réglementaire totale et économies significatives sur la facture gaz",
    ],
  },
  {
    title: "Contrat P3 avec garantie totale - Plateforme logistique multi-sites",
    image: "/assets/reference-renovation-cvc.png",
    context:
      "Sites logistiques multi-entrepôts en exploitation continue, nécessitant une forte exigence de continuité de service et de maîtrise des coûts.",
    intervention:
      "Contrat P3 avec astreinte, planning adapté aux horaires d'exploitation, technicien référent dédié et reporting mensuel structuré.",
    results: [
      "Zéro arrêt d'exploitation lié à une panne CVC sur 18 mois consécutifs",
      "Réduction mesurée des consommations énergétiques de 15%",
    ],
  },
];

export default function Realisations() {
  return (
    <Layout>
      <Helmet>
        <title>Réalisations et références CVC | Exemples d'interventions en Île-de-France | LD MULTITEC</title>
        <meta
          name="description"
          content="Découvrez les réalisations de LD MULTITEC en maintenance CVC : gestion multi-sites, rénovation chaufferie, contrats P3, optimisation énergétique. Exemples concrets d'interventions en Île-de-France."
        />
        <link rel="canonical" href="https://www.ldmultitec.fr/realisations" />
        {/* Open Graph */}
        <meta property="og:title" content="Réalisations CVC Île-de-France | Références & Exemples | LD MULTITEC" />
        <meta
          property="og:description"
          content="Exemples concrets d'interventions CVC en Île-de-France : maintenance multi-sites, rénovation chaufferie, contrats P3 et optimisation énergétique."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ldmultitec.fr/realisations" />
        <meta property="og:image" content="https://www.ldmultitec.fr/assets/logo-ld-multitec.webp" />
        <meta property="og:site_name" content="LD MULTITEC" />
        <meta property="og:locale" content="fr_FR" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Réalisations CVC | LD MULTITEC Île-de-France" />
        <meta
          name="twitter:description"
          content="Exemples concrets d'interventions CVC : maintenance multi-sites, rénovation chaufferie, contrats P3 en Île-de-France."
        />
        <meta name="twitter:image" content="https://www.ldmultitec.fr/assets/logo-ld-multitec.webp" />
      </Helmet>

      {/* HERO */}
      <section
        className="relative min-h-[50vh] flex items-center"
        style={{ backgroundColor: "#1A1A2E" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Nos références en maintenance CVC
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Exemples d'interventions représentatives de notre expertise en maintenance CVC auprès de professionnels en Île-de-France
          </p>
        </div>
      </section>

      {/* CASES */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {cases.map((c, i) => (
            <FadeIn key={i}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-xl md:text-2xl font-bold text-[#1A1A2E] mb-4">
                    {c.title}
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Building2 className="w-4 h-4 text-[#1A7BAA]" />
                        <span className="text-sm font-bold text-[#1A1A2E]">
                          Contexte
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {c.context}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp className="w-4 h-4 text-[#D4550A]" />
                        <span className="text-sm font-bold text-[#1A1A2E]">
                          Intervention
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {c.intervention}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-bold text-[#1A1A2E]">
                          Résultats
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {c.results.map((r, j) => (
                          <li
                            key={j}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span className="text-green-600 mt-1">✓</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "#D4550A" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Vous avez un projet similaire ?
            </h2>
            <p className="text-white/90 mb-8">
              Demandez une étude personnalisée adaptée à vos installations CVC et à vos contraintes d'exploitation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 text-base font-semibold rounded transition-colors bg-white text-[#D4550A] hover:bg-gray-100"
            >
              Obtenir une étude personnalisée
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}