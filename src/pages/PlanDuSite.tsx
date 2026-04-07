import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import {
  Home,
  Wrench,
  ShieldCheck,
  Thermometer,
  Zap,
  Settings,
  BarChart3,
  Award,
  Users,
  Mail,
  FileText,
  Cookie,
  Map,
} from "lucide-react";

const sitemapSections = [
  {
    title: "Accueil",
    icon: Home,
    links: [
      { label: "Page d'accueil", path: "/", desc: "Présentation générale de LD MULTITEC et de nos services CVC" },
    ],
  },
  {
    title: "Nos services CVC",
    icon: Wrench,
    links: [
      { label: "Maintenance CVC complète", path: "/maintenance-cvc-ile-de-france", desc: "Maintenance préventive, corrective et réglementaire de vos installations CVC" },
      { label: "Contrats de maintenance P2 / P3", path: "/contrats-maintenance-cvc", desc: "Contrats structurés avec engagements formalisés et maîtrise budgétaire" },
      { label: "Entretien chaufferie collective", path: "/entretien-chaufferie-ile-de-france", desc: "Suivi et optimisation des performances de vos chaufferies collectives" },
      { label: "Dépannage rapide CVC", path: "/depannage-cvc-urgence-ile-de-france", desc: "Intervention rapide et diagnostic précis pour limiter les interruptions" },
      { label: "Rénovation et mise aux normes CVC", path: "/renovation-installation-cvc", desc: "Réhabilitation et modernisation de vos installations CVC" },
      { label: "Optimisation énergétique", path: "/optimisation-energetique-cvc", desc: "Réduction des consommations par l'analyse, le réglage et le pilotage" },
    ],
  },
  {
    title: "L'entreprise",
    icon: Users,
    links: [
      { label: "Nos références", path: "/realisations", desc: "Découvrez nos réalisations et références clients" },
      { label: "À propos", path: "/a-propos", desc: "Notre histoire, nos valeurs et notre équipe" },
      { label: "Contact", path: "/contact", desc: "Formulaire de contact et coordonnées" },
    ],
  },
  {
    title: "Informations légales",
    icon: FileText,
    links: [
      { label: "Mentions légales", path: "/mentions-legales", desc: "Informations légales relatives au site LD MULTITEC" },
      { label: "Politique de cookies", path: "/politique-cookies", desc: "Informations sur l'utilisation des cookies et vos droits" },
      { label: "Plan du site", path: "/plan-du-site", desc: "Vue d'ensemble de toutes les pages du site" },
    ],
  },
];

const iconMap: Record<string, typeof Home> = {
  "/": Home,
  "/maintenance-cvc-ile-de-france": Wrench,
  "/contrats-maintenance-cvc": ShieldCheck,
  "/entretien-chaufferie-ile-de-france": Thermometer,
  "/depannage-cvc-urgence-ile-de-france": Zap,
  "/renovation-installation-cvc": Settings,
  "/optimisation-energetique-cvc": BarChart3,
  "/realisations": Award,
  "/a-propos": Users,
  "/contact": Mail,
  "/mentions-legales": FileText,
  "/politique-cookies": Cookie,
  "/plan-du-site": Map,
};

export default function PlanDuSite() {
  return (
    <Layout>
      <Helmet>
        <title>Plan du site | LD MULTITEC</title>
        <meta
          name="description"
          content="Plan du site LD MULTITEC. Retrouvez l'ensemble des pages du site organisées par catégories."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* HERO */}
      <section
        className="relative min-h-[40vh] flex items-center"
        style={{ backgroundColor: "#1A1A2E" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Plan du site
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Retrouvez l'ensemble des pages du site LD MULTITEC
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {sitemapSections.map((section) => (
              <div
                key={section.title}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-[#D4550A]/20 transition-all duration-300"
              >
                {/* Section header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#1A7BAA15" }}
                  >
                    <section.icon className="w-5 h-5 text-[#1A7BAA]" />
                  </div>
                  <h2 className="text-xl font-bold text-[#1A1A2E]">
                    {section.title}
                  </h2>
                </div>

                {/* Links */}
                <ul className="space-y-3">
                  {section.links.map((link) => {
                    const LinkIcon = iconMap[link.path] || FileText;
                    return (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <LinkIcon className="w-4 h-4 text-[#D4550A]/60 group-hover:text-[#D4550A] mt-0.5 flex-shrink-0 transition-colors" />
                          <div className="min-w-0">
                            <span className="text-sm font-semibold text-[#1A1A2E] group-hover:text-[#D4550A] transition-colors block">
                              {link.label}
                            </span>
                            <span className="text-xs text-gray-500 leading-relaxed block mt-0.5">
                              {link.desc}
                            </span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Ce plan du site recense l'ensemble des{" "}
              <span className="font-semibold text-[#1A1A2E]">
                {sitemapSections.reduce((acc, s) => acc + s.links.length, 0)} pages
              </span>{" "}
              du site LD MULTITEC.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Dernière mise à jour : avril 2026
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}