import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { Helmet } from "react-helmet-async";

/**
 * Route-to-label mapping for all internal pages.
 * Service pages are grouped under a virtual "Services" parent.
 */
const SERVICE_PATHS = [
  "/maintenance-cvc-ile-de-france",
  "/contrats-maintenance-cvc",
  "/entretien-chaufferie-ile-de-france",
  "/depannage-cvc-urgence-ile-de-france",
  "/renovation-installation-cvc",
  "/optimisation-energetique-cvc",
];

const ROUTE_LABELS: Record<string, string> = {
  "/maintenance-cvc-ile-de-france": "Maintenance CVC complète",
  "/contrats-maintenance-cvc": "Contrats de maintenance P2 / P3",
  "/entretien-chaufferie-ile-de-france": "Entretien chaufferie collective",
  "/depannage-cvc-urgence-ile-de-france": "Dépannage rapide CVC",
  "/renovation-installation-cvc": "Rénovation et mise aux normes CVC",
  "/optimisation-energetique-cvc": "Optimisation énergétique des installations",
  "/realisations": "Nos références",
  "/a-propos": "À Propos",
  "/contact": "Contact",
  "/mentions-legales": "Mentions légales",
  "/politique-cookies": "Politique de cookies",
  "/politique-de-confidentialite": "Politique de confidentialité",
  "/plan-du-site": "Plan du site",
};

interface BreadcrumbItem {
  label: string;
  path?: string;
}

function buildBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const label = ROUTE_LABELS[pathname];
  if (!label) return [];

  const items: BreadcrumbItem[] = [];

  // If it's a service page, add "Services" as intermediate level
  if (SERVICE_PATHS.includes(pathname)) {
    items.push({ label: "Services" });
  }

  // Current page (no link — it's the active page)
  items.push({ label });

  return items;
}

function buildJsonLd(items: BreadcrumbItem[], pathname: string) {
  const listItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://www.ldmultitec.fr/",
    },
  ];

  let position = 2;
  for (let i = 0; i < items.length; i++) {
    const isLast = i === items.length - 1;
    const entry: Record<string, unknown> = {
      "@type": "ListItem",
      position,
      name: items[i].label,
    };
    if (isLast) {
      entry.item = `https://www.ldmultitec.fr${pathname}`;
    }
    listItems.push(entry);
    position++;
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: listItems,
  };
}

export default function Breadcrumb() {
  const { pathname } = useLocation();

  // Don't render on homepage
  if (pathname === "/") return null;

  const items = buildBreadcrumbs(pathname);
  if (items.length === 0) return null;

  const jsonLd = buildJsonLd(items, pathname);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav
        aria-label="Fil d'Ariane"
        className="bg-[#F7F8FA] border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-1.5 py-3 text-[12px] text-gray-500 flex-wrap">
            {/* Home */}
            <li className="flex items-center gap-1.5">
              <Link
                to="/"
                className="flex items-center gap-1 text-gray-500 hover:text-[#D4550A] transition-colors duration-200"
                title="Accueil"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Accueil</span>
              </Link>
            </li>

            {items.map((item, i) => {
              const isLast = i === items.length - 1;
              return (
                <li key={i} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-gray-300 flex-shrink-0" />
                  {isLast ? (
                    <span
                      className="text-[#1A1A2E] font-medium truncate max-w-[200px] sm:max-w-none"
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : item.path ? (
                    <Link
                      to={item.path}
                      className="text-gray-500 hover:text-[#D4550A] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-gray-400">{item.label}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}