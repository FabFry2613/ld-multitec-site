import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Mail,
  MapPin,
  ChevronDown,
  Clock,
  Building2,
} from "lucide-react";
import CookieConsent from "./CookieConsent";
import Breadcrumb from "./Breadcrumb";

const navLinks = [
  { label: "Accueil", path: "/" },
  {
    label: "Services",
    children: [
      { label: "Maintenance CVC complète", path: "/maintenance-cvc-ile-de-france" },
      { label: "Contrats de maintenance P2 / P3", path: "/contrats-maintenance-cvc" },
      { label: "Entretien chaufferie collective", path: "/entretien-chaufferie-ile-de-france" },
      { label: "Dépannage rapide CVC", path: "/depannage-cvc-urgence-ile-de-france" },
      { label: "Rénovation et mise aux normes CVC", path: "/renovation-installation-cvc" },
      { label: "Optimisation énergétique des installations", path: "/optimisation-energetique-cvc" },
    ],
  },
  { label: "Nos références", path: "/realisations" },
  { label: "À Propos", path: "/a-propos" },
  { label: "Contact", path: "/contact" },
];

/* ─────────────────────────── HEADER ─────────────────────────── */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(13, 13, 30, 0.98)" : "#0D0D1E",
        boxShadow: scrolled
          ? "0 4px 30px rgba(0, 0, 0, 0.3)"
          : "0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {/* ── A. TOPBAR SUPÉRIEURE ── */}
      <div
        className="hidden md:block border-b border-white/10"
        style={{ backgroundColor: "#080818" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[38px]">
          {/* Left — corporate info */}
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-white/70">
              <Building2 className="w-3 h-3 text-[#D4550A]" />
              Chauffage - Ventilation - Climatisation
            </span>
            <span className="w-px h-3.5 bg-white/15" />
            <span className="flex items-center gap-1.5 text-[11px] text-white/60">
              <MapPin className="w-3 h-3 text-[#1A7BAA]" />
              Île-de-France
            </span>
            <span className="hidden lg:block w-px h-3.5 bg-white/15" />
            <span className="hidden lg:flex items-center gap-1.5 text-[11px] text-white/60">
              <Clock className="w-3 h-3 text-white/50" />
              Lun – Ven · 8h – 18h
            </span>
          </div>

          {/* Right — contact */}
          <div className="flex items-center gap-5">
            <a
              href="mailto:contact@ld-multitec.fr"
              className="flex items-center gap-1.5 text-[11px] font-semibold text-white/70 hover:text-white transition-colors duration-300"
            >
              <Mail className="w-3 h-3" />
              contact@ld-multitec.fr
            </a>
          </div>
        </div>
      </div>

      {/* ── B. HEADER PRINCIPAL ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "h-[74px] md:h-[80px] lg:h-[84px]"
              : "h-[96px] md:h-[104px] lg:h-[110px]"
          }`}
        >
          {/* ── LOGO — large, prominent, no constraints ── */}
          <Link
            to="/"
            className="flex-shrink-0 flex items-center"
            style={{ minWidth: 0, overflow: "visible" }}
          >
            <img
              src="/assets/logo-ld-multitec.svg"
              alt="LD MULTITEC"
              title="LD MULTITEC - Maintenance CVC en Île-de-France"
              style={{ maxWidth: "none", maxHeight: "none" }}
              className={`w-auto block transition-all duration-500 ${
                scrolled
                  ? "h-[48px] md:h-[60px] lg:h-[70px]"
                  : "h-[54px] md:h-[72px] lg:h-[86px]"
              }`}
            />
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label} className="relative group">
                  <button
                    className={`flex items-center gap-1.5 px-4 py-2.5 text-[14px] font-semibold tracking-[0.01em] transition-colors duration-300 ${
                      location.pathname.includes("/maintenance") ||
                      location.pathname.includes("/contrats") ||
                      location.pathname.includes("/entretien") ||
                      location.pathname.includes("/depannage") ||
                      location.pathname.includes("/renovation") ||
                      location.pathname.includes("/optimisation")
                        ? "text-[#D4550A]"
                        : "text-white/75 hover:text-white"
                    }`}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                  </button>
                  <div
                    className={`absolute top-full left-0 w-72 rounded-lg py-2 transition-all duration-250 ${
                      servicesOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                    style={{
                      backgroundColor: "#FFFFFF",
                      boxShadow:
                        "0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)",
                    }}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-5 py-3 text-[13px] font-medium text-gray-700 hover:bg-gray-50 hover:text-[#D4550A] transition-colors duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  className="relative px-4 py-2.5 text-[14px] font-semibold tracking-[0.01em] transition-colors duration-300 group"
                >
                  <span
                    className={
                      location.pathname === item.path
                        ? "text-[#D4550A]"
                        : "text-white/75 group-hover:text-white"
                    }
                  >
                    {item.label}
                  </span>
                  {/* Elegant underline on active */}
                  <span
                    className={`absolute bottom-1 left-4 right-4 h-[2px] bg-[#D4550A] transition-all duration-300 ${
                      location.pathname === item.path
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-100"
                    }`}
                    style={{ transformOrigin: "center" }}
                  />
                </Link>
              )
            )}
          </nav>

          {/* ── CTA DESKTOP ── */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center justify-center font-semibold text-white rounded-md transition-all duration-300 border border-[#D4550A]/20"
            style={{
              backgroundColor: "#D4550A",
              padding: scrolled ? "10px 24px" : "12px 28px",
              fontSize: scrolled ? "13px" : "14px",
              letterSpacing: "0.02em",
              boxShadow: "0 2px 12px rgba(212, 85, 10, 0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#B8470A";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(212, 85, 10, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#D4550A";
              e.currentTarget.style.boxShadow =
                "0 2px 12px rgba(212, 85, 10, 0.25)";
            }}
          >
            Demander un audit technique
          </Link>

          {/* ── MOBILE TOGGLE ── */}
          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <div
        className={`lg:hidden border-t border-white/[0.06] overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "#0D0D1E" }}
      >
        <div className="px-5 py-5 space-y-1">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  className="flex items-center justify-between w-full px-3 py-3 text-[15px] font-semibold text-white/90"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    servicesOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 pb-2 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-3 py-2.5 text-[14px] text-white/60 hover:text-[#D4550A] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path!}
                className={`block px-3 py-3 text-[15px] font-semibold transition-colors ${
                  location.pathname === item.path
                    ? "text-[#D4550A]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            )
          )}

          {/* Mobile CTA */}
          <div className="pt-3">
            <Link
              to="/contact"
              className="block w-full text-center px-6 py-3.5 text-[14px] font-semibold text-white rounded-md transition-colors"
              style={{
                backgroundColor: "#D4550A",
                boxShadow: "0 2px 12px rgba(212, 85, 10, 0.25)",
              }}
            >
              Demander un audit technique
            </Link>
          </div>

          {/* Mobile info */}
          <div className="pt-4 mt-2 border-t border-white/[0.06] space-y-2">
            <a
              href="mailto:contact@ld-multitec.fr"
              className="flex items-center gap-2 text-[12px] text-white/50"
            >
              <Mail className="w-3.5 h-3.5 text-[#1A7BAA]/70" />
              contact@ld-multitec.fr
            </a>
            <span className="flex items-center gap-2 text-[12px] text-white/40">
              <MapPin className="w-3.5 h-3.5 text-[#1A7BAA]/70" />
              Île-de-France
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ─────────────────────────── FOOTER ─────────────────────────── */
export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0D0D1E" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description — prominent footer branding */}
          <div>
            <Link
              to="/"
              className="inline-block mb-5"
              style={{ overflow: "visible" }}
            >
              <img
                src="/assets/logo-ld-multitec.svg"
                alt="LD MULTITEC"
                title="LD MULTITEC - Maintenance CVC en Île-de-France"
                style={{ maxWidth: "none", maxHeight: "none" }}
                className="h-[48px] md:h-[56px] lg:h-[64px] w-auto block"
              />
            </Link>
            <p className="text-[13px] text-white/60 leading-relaxed mt-3">
              LD MULTITEC accompagne les entreprises, syndics et gestionnaires de patrimoine dans la maintenance et l'optimisation de leurs installations CVC en Île-de-France.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-5 text-[#D4550A]">
              Nos Services
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Maintenance CVC complète", path: "/maintenance-cvc-ile-de-france" },
                { label: "Contrats de maintenance P2 / P3", path: "/contrats-maintenance-cvc" },
                { label: "Entretien chaufferie collective", path: "/entretien-chaufferie-ile-de-france" },
                { label: "Dépannage rapide CVC", path: "/depannage-cvc-urgence-ile-de-france" },
                { label: "Rénovation et mise aux normes CVC", path: "/renovation-installation-cvc" },
                { label: "Optimisation énergétique des installations", path: "/optimisation-energetique-cvc" },
              ].map((s) => (
                <li key={s.path}>
                  <Link
                    to={s.path}
                    className="text-[13px] text-white/55 hover:text-[#D4550A] transition-colors duration-300"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-5 text-[#D4550A]">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-[13px] text-white/55">
                <Mail className="w-4 h-4 mt-0.5 text-[#1A7BAA]/70" />
                <a
                  href="mailto:contact@ld-multitec.fr"
                  className="hover:text-white transition-colors duration-300 font-medium"
                >
                  contact@ld-multitec.fr
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[13px] text-white/45">
                <MapPin className="w-4 h-4 mt-0.5 text-[#1A7BAA]/70" />
                <span>Île-de-France</span>
              </li>
              <li className="text-[11px] text-white/35 mt-2">
                Réponse sous 24h ouvrées
              </li>
            </ul>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-5 text-[#D4550A]">
              Zone d'intervention
            </h3>
            <p className="text-[13px] text-white/55 leading-relaxed">
              Paris (75), Hauts-de-Seine (92), Seine-Saint-Denis (93),
              Val-de-Marne (94), Seine-et-Marne (77), Yvelines (78), Essonne
              (91), Val-d'Oise (95)
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/[0.06] space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-white/40 flex items-center gap-2 flex-wrap">
              <span>© {new Date().getFullYear()} LD MULTITEC - Tous droits réservés</span>
              <span className="hidden md:inline text-white/20">|</span>
              <Link
                to="/mentions-legales"
                className="text-white/40 hover:text-white/70 transition-colors duration-300"
              >
                Mentions légales
              </Link>
              <span className="text-white/20">|</span>
              <Link
                to="/politique-cookies"
                className="text-white/40 hover:text-white/70 transition-colors duration-300"
              >
                Politique de cookies
              </Link>
              <span className="text-white/20">|</span>
              <Link
                to="/politique-de-confidentialite"
                className="text-white/40 hover:text-white/70 transition-colors duration-300"
              >
                Politique de confidentialité
              </Link>
              <span className="text-white/20">|</span>
              <Link
                to="/plan-du-site"
                className="text-white/40 hover:text-white/70 transition-colors duration-300"
              >
                Plan du site
              </Link>
            </p>
            <p className="text-[11px] text-white/30">
              <a
                href="https://ld-systems.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#3B82F6] hover:text-[#60A5FA] hover:underline transition-colors duration-300"
              >
                LD SYSTEMS
              </a>{" "}
              - solutions logicielles métier · LD PILOT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────── LAYOUT ─────────────────────────── */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Topbar (38px on md+) + main nav (96-110px) */}
      <main className="flex-1 pt-[96px] md:pt-[142px] lg:pt-[148px]">
        <Breadcrumb />
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}