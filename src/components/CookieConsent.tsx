import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

const COOKIE_KEY = "ld_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Small delay so the banner appears smoothly after page load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem(COOKIE_KEY, "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] transition-all duration-500 ease-out"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Backdrop overlay */}
      <div className="absolute inset-0 -top-screen bg-black/20 pointer-events-none" />

      {/* Banner */}
      <div
        className="relative border-t"
        style={{
          backgroundColor: "#0D0D1E",
          borderColor: "rgba(255,255,255,0.08)",
          boxShadow: "0 -8px 40px rgba(0,0,0,0.4)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-5 md:py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            {/* Icon + Text */}
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: "rgba(212, 85, 10, 0.12)" }}
              >
                <Cookie className="w-5 h-5 text-[#D4550A]" />
              </div>
              <div className="min-w-0">
                <p className="text-[14px] font-semibold text-white mb-1">
                  Ce site utilise des cookies
                </p>
                <p className="text-[13px] text-white/60 leading-relaxed">
                  Nous utilisons des cookies strictement nécessaires au
                  fonctionnement du site. Aucun cookie publicitaire ou de
                  traçage n'est utilisé.{" "}
                  <Link
                    to="/politique-cookies"
                    className="text-[#1A7BAA] hover:text-[#D4550A] font-medium transition-colors underline underline-offset-2"
                  >
                    En savoir plus
                  </Link>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto">
              <button
                onClick={handleRefuse}
                className="flex-1 md:flex-none px-5 py-2.5 text-[13px] font-semibold rounded-md border transition-all duration-300 text-white/70 hover:text-white hover:border-white/40"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  backgroundColor: "transparent",
                }}
              >
                Refuser
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-5 py-2.5 text-[13px] font-semibold text-white rounded-md transition-all duration-300"
                style={{
                  backgroundColor: "#D4550A",
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
                Accepter
              </button>
            </div>

            {/* Close button (mobile-friendly alternative) */}
            <button
              onClick={handleRefuse}
              className="absolute top-3 right-3 md:hidden p-1.5 text-white/40 hover:text-white/70 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}