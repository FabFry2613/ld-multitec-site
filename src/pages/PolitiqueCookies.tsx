import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function PolitiqueCookies() {
  return (
    <Layout>
      <Helmet>
        <title>Politique de cookies | LD MULTITEC</title>
        <meta
          name="description"
          content="Politique de cookies du site LD MULTITEC. Informations sur l'utilisation des cookies et vos droits."
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
            Politique de cookies
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Informations sur l'utilisation des cookies sur le site LD MULTITEC
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Qu'est-ce qu'un cookie ? */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Qu'est-ce qu'un cookie ?
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-3">
              <p>
                Un cookie est un petit fichier texte déposé sur votre terminal
                (ordinateur, tablette, smartphone) lors de la visite d'un site
                internet. Il permet au site de mémoriser des informations sur
                votre visite, comme votre langue préférée et d'autres
                paramètres, afin de faciliter votre navigation.
              </p>
            </div>
          </div>

          {/* Cookies utilisés sur ce site */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Cookies utilisés sur ce site
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[#1A1A2E] mb-2">
                  Cookies strictement nécessaires
                </h3>
                <p>
                  Ces cookies sont indispensables au fonctionnement du site et ne
                  peuvent pas être désactivés. Ils sont généralement établis en
                  réponse à des actions que vous effectuez, comme la définition de
                  vos préférences de confidentialité ou le remplissage de
                  formulaires.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1A1A2E] mb-2">
                  Cookie de consentement
                </h3>
                <p>
                  Ce cookie enregistre votre choix concernant l'acceptation ou le
                  refus des cookies. Il est conservé pendant 12 mois. Nom du
                  cookie : <span className="font-mono text-sm bg-gray-100 px-1.5 py-0.5 rounded">ld_cookie_consent</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Cookies tiers */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Cookies tiers
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Ce site n'utilise actuellement aucun cookie tiers (analytics,
              publicité, réseaux sociaux). Si cela devait évoluer, cette page
              serait mise à jour et votre consentement serait à nouveau
              sollicité.
            </p>
          </div>

          {/* Gestion des cookies */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Gestion des cookies
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-3">
              <p>
                Vous pouvez à tout moment modifier vos préférences en matière de
                cookies. Lors de votre première visite, un bandeau vous permet
                d'accepter ou de refuser les cookies. Vous pouvez également
                configurer votre navigateur pour accepter ou refuser les cookies.
              </p>
              <p>
                Voici les liens vers les pages de gestion des cookies des
                principaux navigateurs :
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1A7BAA] font-medium hover:text-[#D4550A] transition-colors"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1A7BAA] font-medium hover:text-[#D4550A] transition-colors"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1A7BAA] font-medium hover:text-[#D4550A] transition-colors"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1A7BAA] font-medium hover:text-[#D4550A] transition-colors"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Vos droits */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Vos droits
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-3">
              <p>
                Conformément au Règlement Général sur la Protection des Données
                (RGPD) et à la loi Informatique et Libertés, vous disposez d'un
                droit d'accès, de rectification, de suppression et d'opposition
                au traitement de vos données personnelles.
              </p>
              <p>
                Pour exercer ces droits, contactez-nous à :{" "}
                <a
                  href="mailto:contact@ld-multitec.fr"
                  className="text-[#1A7BAA] font-medium hover:text-[#D4550A] transition-colors"
                >
                  contact@ld-multitec.fr
                </a>
              </p>
              <p>
                Pour en savoir plus, consultez nos{" "}
                <Link
                  to="/mentions-legales"
                  className="text-[#1A7BAA] font-medium hover:text-[#D4550A] transition-colors"
                >
                  mentions légales
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Mise à jour */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Mise à jour de cette politique
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Cette politique de cookies peut être mise à jour à tout moment. La
              date de dernière mise à jour est indiquée ci-dessous.
            </p>
            <p className="text-sm text-gray-500 mt-3">
              Dernière mise à jour : avril 2026
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}