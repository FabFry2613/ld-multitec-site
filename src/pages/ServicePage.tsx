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
  Building2,
  Users,
  Home,
  Landmark,
  Building,
  ArrowRight,
  type LucideIcon,
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

const clientTypes = [
  { icon: Building2, label: "Entreprises tertiaires" },
  { icon: Home, label: "Syndics de copropriété" },
  { icon: Users, label: "Bailleurs sociaux" },
  { icon: Building, label: "Property managers" },
  { icon: Landmark, label: "Collectivités" },
];

export interface ServicePageData {
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  h1: string;
  heroSubtitle: string;
  heroImage: string;
  introP1: string;
  introP2: string;
  scope: { icon: LucideIcon; label: string }[];
  benefits: { icon: LucideIcon; title: string; desc: string }[];
  method: { step: number; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  relatedLinks: { label: string; path: string }[];
  extraSection?: React.ReactNode;
}

function toAbsoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `https://www.ldmultitec.fr${path}`;
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  const absoluteImageUrl = toAbsoluteUrl(data.heroImage);
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: {
      "@type": "LocalBusiness",
      name: "LD MULTITEC",
    },
    name: data.h1,
    description: data.seoDescription,
    areaServed: { "@type": "State", name: "Île-de-France" },
  };

  return (
    <Layout>
      <Helmet>
        <title>{data.seoTitle}</title>
        <meta name="description" content={data.seoDescription} />
        <link rel="canonical" href={`https://www.ldmultitec.fr${data.canonical}`} />
        {/* Open Graph */}
        <meta property="og:title" content={data.seoTitle} />
        <meta property="og:description" content={data.seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.ldmultitec.fr${data.canonical}`} />
        <meta property="og:image" content={absoluteImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="LD MULTITEC" />
        <meta property="og:locale" content="fr_FR" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.seoTitle} />
        <meta name="twitter:description" content={data.seoDescription} />
        <meta name="twitter:image" content={absoluteImageUrl} />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrg)}
        </script>
      </Helmet>

      {/* HERO */}
      <section
        className="relative min-h-[60vh] flex items-center"
        style={{ backgroundColor: "#0F1C2E" }}
      >
        <img
          src={data.heroImage}
          alt="Technicien LD MULTITEC en intervention de maintenance CVC dans une chaufferie"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1C2E]/80 via-[#0F1C2E]/60 to-[#0F1C2E]/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {data.h1}
            </h1>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl">
              {data.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
                Demander un audit gratuit
              </Link>
              <Link
                to="/realisations"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white rounded border-2 border-white/30 hover:border-white/60 transition-colors"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-base text-gray-700 leading-relaxed mb-4">
              {data.introP1}
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              {data.introP2}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SCOPE */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] text-center mb-10">
              Périmètre d'intervention
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl mx-auto">
            {data.scope.map((item, i) => (
              <FadeIn key={i}>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 hover:border-[#1A7BAA]/20 hover:shadow-sm transition-all">
                  <item.icon className="w-5 h-5 text-[#1A7BAA] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#1A1A2E]">
                    {item.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* EXTRA SECTION (optional, e.g. priority table for dépannage) */}
      {data.extraSection}

      {/* BENEFITS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] text-center mb-10">
              Bénéfices
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.benefits.map((b, i) => (
              <FadeIn key={i}>
                <div className="group p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg hover:border-[#D4550A]/20 transition-all duration-300 h-full">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#1A7BAA15" }}
                  >
                    <b.icon className="w-6 h-6 text-[#1A7BAA]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1A1A2E] mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] text-center mb-10">
              Notre méthode
            </h2>
          </FadeIn>
          <div className="flex flex-col md:flex-row items-start justify-center gap-4 md:gap-0">
            {data.method.map((m, i) => (
              <FadeIn key={i} className="flex-1">
                <div className="flex flex-col items-center text-center px-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white mb-4"
                    style={{ backgroundColor: "#D4550A" }}
                  >
                    {m.step}
                  </div>
                  <h3 className="text-base font-bold text-[#1A1A2E] mb-2">
                    {m.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
                {i < data.method.length - 1 && (
                  <div className="hidden md:flex items-center justify-center mt-7">
                    <ArrowRight className="w-5 h-5 text-gray-300" />
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] text-center mb-10">
              Clients concernés
            </h2>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-6">
            {clientTypes.map((c, i) => (
              <FadeIn key={i}>
                <div className="flex flex-col items-center gap-3 p-5 bg-white rounded-xl border border-gray-100 min-w-[140px] hover:shadow-md transition-shadow">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#1A7BAA15" }}
                  >
                    <c.icon className="w-6 h-6 text-[#1A7BAA]" />
                  </div>
                  <span className="text-xs font-semibold text-[#1A1A2E] text-center">
                    {c.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] text-center mb-10">
              Questions fréquentes
            </h2>
          </FadeIn>
          <FadeIn>
            <Accordion type="single" collapsible className="space-y-3">
              {data.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-gray-100 rounded-lg px-6 bg-white data-[state=open]:border-[#D4550A]/20 data-[state=open]:shadow-sm"
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
          </FadeIn>
        </div>
      </section>

      {/* RELATED LINKS */}
      {data.relatedLinks.length > 0 && (
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {data.relatedLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.path}
                  className="text-sm font-medium text-[#1A7BAA] hover:text-[#D4550A] transition-colors"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "#D4550A" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Besoin d'un audit ou d'une étude personnalisée ?
            </h2>
            <p className="text-white/90 mb-8 max-w-xl mx-auto">
              Notre équipe étudie votre situation et vous soumet une proposition
              adaptée sous 48h ouvrées.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 text-base font-semibold rounded transition-colors bg-white text-[#D4550A] hover:bg-gray-100"
            >
              Nous contacter
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}