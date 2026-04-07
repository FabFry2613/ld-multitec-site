import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

export default function PolitiqueConfidentialite() {
  return (
    <Layout>
      <Helmet>
        <title>Politique de confidentialité | LD MULTITEC</title>
        <meta
          name="description"
          content="Politique de confidentialité du site LD MULTITEC. Informations sur la collecte, le traitement et la protection de vos données personnelles conformément au RGPD."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.ldmultitec.fr/politique-de-confidentialite" />
      </Helmet>

      {/* HERO */}
      <section
        className="relative min-h-[40vh] flex items-center"
        style={{ backgroundColor: "#1A1A2E" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Protection et traitement de vos données personnelles conformément au RGPD
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Introduction
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-3">
              <p>
                LD MULTITEC s'engage à protéger la vie privée des utilisateurs de
                son site internet{" "}
                <a
                  href="https://www.ldmultitec.fr"
                  className="text-[#1A7BAA] font-medium hover:text-[#D4550A] transition-colors"
                >
                  www.ldmultitec.fr
                </a>
                . La présente politique de confidentialité décrit les données
                personnelles que nous collectons, les raisons de leur collecte et
                la manière dont nous les utilisons.
              </p>
              <p>
                Cette politique est conforme au Règlement Général sur la
                Protection des Données (RGPD – Règlement UE 2016/679) et à la
                loi Informatique et Libertés du 6 janvier 1978 modifiée.
              </p>
            </div>
          </div>

          {/* Responsable du traitement */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Responsable du traitement
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-1">
              <p className="font-semibold">LD MULTITEC</p>
              <p>SIRET : 97904455900016</p>
              <p>Siège social : 128, RUE LA BOETIE - 75008 - PARIS</p>
              <p>
                Email :{" "}
                <a
                  href="mailto:contact@ld-multitec.fr"
                  className="text-[#1A7BAA] font-medium hover:text-[#D4550A] transition-colors"
                >
                  contact@ld-multitec.fr
                </a>
              </p>
            </div>
          </div>

          {/* Données collectées */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Données personnelles collectées
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-3">
              <p>
                Lors de l'utilisation du formulaire de contact, les données
                suivantes peuvent être collectées :
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone (facultatif)</li>
                <li>Nom de la société</li>
                <li>Fonction / rôle</li>
                <li>Contenu du message (description du besoin)</li>
              </ul>
              <p>
                Ces données sont collectées uniquement lorsque vous remplissez
                volontairement le formulaire de contact.
              </p>
            </div>
          </div>

          {/* Finalité du traitement */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Finalité du traitement
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-3">
              <p>
                Les données personnelles collectées sont utilisées exclusivement
                pour :
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  Répondre à vos demandes de contact, d'audit technique ou
                  d'étude de contrat de maintenance CVC
                </li>
                <li>
                  Vous recontacter dans le cadre de votre demande
                </li>
                <li>
                  Assurer le suivi de la relation commerciale
                </li>
              </ul>
              <p>
                Vos données ne sont jamais vendues, louées ou cédées à des tiers
                à des fins commerciales.
              </p>
            </div>
          </div>

          {/* Base légale */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Base légale du traitement
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Le traitement de vos données repose sur votre consentement
              explicite, recueilli via la case à cocher RGPD du formulaire de
              contact, conformément à l'article 6.1.a du RGPD.
            </p>
          </div>

          {/* Durée de conservation */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Durée de conservation
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-3">
              <p>
                Vos données personnelles sont conservées pour une durée maximale
                de <strong>36 mois</strong> à compter de votre dernière
                interaction avec LD MULTITEC.
              </p>
              <p>
                Au-delà de cette période, vos données sont supprimées ou
                anonymisées de manière irréversible.
              </p>
            </div>
          </div>

          {/* Vos droits */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Vos droits
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-3">
              <p>
                Conformément au RGPD, vous disposez des droits suivants
                concernant vos données personnelles :
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>
                  <strong>Droit d'accès :</strong> obtenir la confirmation que
                  vos données sont traitées et en recevoir une copie
                </li>
                <li>
                  <strong>Droit de rectification :</strong> demander la
                  correction de données inexactes ou incomplètes
                </li>
                <li>
                  <strong>Droit à l'effacement :</strong> demander la suppression
                  de vos données personnelles
                </li>
                <li>
                  <strong>Droit à la limitation :</strong> demander la limitation
                  du traitement de vos données
                </li>
                <li>
                  <strong>Droit à la portabilité :</strong> recevoir vos données
                  dans un format structuré et lisible
                </li>
                <li>
                  <strong>Droit d'opposition :</strong> vous opposer au
                  traitement de vos données
                </li>
              </ul>
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
                Nous nous engageons à répondre à votre demande dans un délai
                maximum de 30 jours.
              </p>
              <p>
                Vous disposez également du droit d'introduire une réclamation
                auprès de la{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A7BAA] font-medium hover:text-[#D4550A] transition-colors"
                >
                  CNIL (Commission Nationale de l'Informatique et des Libertés)
                </a>
                .
              </p>
            </div>
          </div>

          {/* Google Analytics */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Google Analytics
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-3">
              <p>
                Ce site utilise Google Analytics 4, un service d'analyse web
                fourni par Google LLC, afin de mesurer l'audience et d'améliorer
                l'expérience utilisateur.
              </p>
              <p>
                Google Analytics collecte des données anonymisées telles que :
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>Pages visitées et durée de navigation</li>
                <li>Source de trafic (moteur de recherche, lien direct, etc.)</li>
                <li>Type d'appareil et navigateur utilisé</li>
                <li>Localisation géographique approximative</li>
              </ul>
              <p>
                Ces données sont traitées de manière agrégée et ne permettent pas
                de vous identifier personnellement. L'adresse IP est anonymisée.
              </p>
              <p>
                Vous pouvez refuser la collecte de ces données en paramétrant
                votre navigateur ou en utilisant le bandeau de gestion des cookies
                présent sur le site.
              </p>
              <p>
                Pour en savoir plus :{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A7BAA] font-medium hover:text-[#D4550A] transition-colors"
                >
                  Politique de confidentialité de Google
                </a>
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Cookies
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-3">
              <p>
                Pour plus d'informations sur les cookies utilisés sur ce site,
                veuillez consulter notre{" "}
                <a
                  href="/politique-cookies"
                  className="text-[#1A7BAA] font-medium hover:text-[#D4550A] transition-colors"
                >
                  Politique de cookies
                </a>
                .
              </p>
            </div>
          </div>

          {/* Modification de la politique */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Modification de cette politique
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-3">
              <p>
                LD MULTITEC se réserve le droit de modifier la présente politique
                de confidentialité à tout moment. Toute modification sera publiée
                sur cette page avec la date de mise à jour.
              </p>
              <p className="text-sm text-gray-500">
                Dernière mise à jour : 6 avril 2026
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Contact
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Pour toute question relative à cette politique de confidentialité
              ou à vos données personnelles, contactez-nous à :{" "}
              <a
                href="mailto:contact@ld-multitec.fr"
                className="text-[#1A7BAA] font-medium hover:text-[#D4550A] transition-colors"
              >
                contact@ld-multitec.fr
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}