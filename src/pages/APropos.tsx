import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import {
  ShieldCheck,
  Flame,
  FileCheck,
  Users,
  Target,
  Award,
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

const qualifications = [
  {
    icon: Flame,
    label:
      "Attestation de capacité manipulation fluides frigorigènes (catégories I et II)",
  },
  {
    icon: Flame,
    label: "Habilitations gaz pour installations professionnelles et collectives",
  },
  {
    icon: ShieldCheck,
    label: "Assurance responsabilité civile professionnelle et décennale",
  },
  {
    icon: FileCheck,
    label:
      "Coordination avec organismes de contrôle agréés (APAVE, Bureau Veritas)",
  },
];

export default function APropos() {
  return (
    <Layout>
      <Helmet>
        <title>À propos de LD MULTITEC | Entreprise de maintenance CVC en Île-de-France</title>
        <meta
          name="description"
          content="Découvrez LD MULTITEC : entreprise spécialisée en maintenance CVC pour professionnels en Île-de-France. Organisation structurée, techniciens qualifiés, approche orientée performance et conformité réglementaire."
        />
        <link rel="canonical" href="https://www.ldmultitec.fr/a-propos" />
        {/* Open Graph */}
        <meta property="og:title" content="À propos de LD MULTITEC | Expert CVC B2B Île-de-France" />
        <meta
          property="og:description"
          content="Entreprise spécialisée en maintenance CVC pour professionnels en Île-de-France. Organisation structurée, techniciens qualifiés, performance et conformité."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ldmultitec.fr/a-propos" />
        <meta property="og:image" content="https://www.ldmultitec.fr/assets/og-apropos-hero.png" />
        <meta property="og:site_name" content="LD MULTITEC" />
        <meta property="og:locale" content="fr_FR" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À propos de LD MULTITEC | Expert CVC Île-de-France" />
        <meta
          name="twitter:description"
          content="Entreprise spécialisée en maintenance CVC pour professionnels en Île-de-France. Organisation structurée et techniciens qualifiés."
        />
        <meta name="twitter:image" content="https://www.ldmultitec.fr/assets/og-apropos-twitter.png" />
      </Helmet>

      {/* HERO */}
      <section
        className="relative min-h-[50vh] flex items-center"
        style={{ backgroundColor: "#1A1A2E" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{
            backgroundImage: "url(/assets/hero-technician-2.webp)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            LD MULTITEC - Expertise CVC, rigueur opérationnelle, engagement terrain
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Prestataire de maintenance CVC dédié aux professionnels en Île-de-France
          </p>
        </div>
      </section>

      {/* POSITIONNEMENT */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-[#D4550A]" />
                  <h2 className="text-2xl font-bold text-[#1A1A2E]">
                    Notre positionnement
                  </h2>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  LD MULTITEC est une entreprise de maintenance CVC exclusivement
                  dédiée aux professionnels en Île-de-France. Nous intervenons auprès
                  d'entreprises, syndics de copropriété, bailleurs sociaux, property managers et
                  collectivités sur l'ensemble de leurs installations CVC :
                  chaufferies collectives, CTA, VMC, VRV, groupes froids, pompes
                  à chaleur, réseaux hydrauliques, régulation et GTB.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-[#1A7BAA]" />
                  <h2 className="text-2xl font-bold text-[#1A1A2E]">
                    Notre conviction
                  </h2>
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  La maintenance CVC est un levier de performance et de maîtrise des coûts,
                  pas une contrainte administrative. Des installations bien entretenues
                  coûtent moins cher à exploiter, tombent moins en panne et
                  durent plus longtemps. C'est pourquoi nous avons construit une
                  organisation qui va au-delà du simple entretien : rigueur, traçabilité,
                  reporting et amélioration continue.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "#F7F8FA" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-[#D4550A]" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E]">
                Qualifications et certifications
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualifications.map((q, i) => (
              <FadeIn key={i}>
                <div className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#1A7BAA15" }}
                  >
                    <q.icon className="w-5 h-5 text-[#1A7BAA]" />
                  </div>
                  <p className="text-sm font-medium text-[#1A1A2E]">
                    {q.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* LD SYSTEMS */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="p-8 rounded-xl border border-gray-100 bg-gray-50/50">
              <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">
                LD SYSTEMS - Outils métier au service de la qualité
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pour garantir la qualité de son suivi et de son reporting,
                LD MULTITEC s'appuie sur des outils digitaux métier développés
                par{" "}
                <span className="font-semibold text-[#1A7BAA]">
                  LD SYSTEMS
                </span>
                , spécialiste en solutions logicielles pour le secteur CVC.
                Ces outils permettent d'assurer la traçabilité des opérations,
                le suivi des équipements et la production d'un reporting structuré
                à destination de nos clients.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "#1A1A2E" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Vous souhaitez en savoir plus sur notre organisation ?
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un échange sur vos besoins en maintenance CVC ou demandez directement un audit technique de vos installations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white rounded transition-colors"
                style={{ backgroundColor: "#D4550A" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#B8470A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#D4550A")
                }
              >
                Demander un audit technique
              </Link>
              <Link
                to="/realisations"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white rounded border-2 border-white/30 hover:border-white/60 transition-colors"
              >
                Voir nos réalisations
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}