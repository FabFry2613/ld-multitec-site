import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";

export default function MentionsLegales() {
  return (
    <Layout>
      <Helmet>
        <title>Mentions légales | LD MULTITEC</title>
        <meta
          name="description"
          content="Mentions légales du site LD MULTITEC."
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
            Mentions légales
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Informations légales relatives au site LD MULTITEC
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Éditeur du site */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Éditeur du site
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

          {/* Directeur de la publication */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Directeur de la publication
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              LD MULTITEC
            </p>
          </div>

          {/* Hébergement */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Hébergement
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-1">
              <p className="font-semibold">Vercel Inc.</p>
              <p>340 S Lemon Ave #4133</p>
              <p>Walnut, CA 91789</p>
              <p>États-Unis</p>
              <p>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A7BAA] font-medium hover:text-[#D4550A] transition-colors"
                >
                  https://vercel.com
                </a>
              </p>
            </div>
          </div>

          {/* Données personnelles */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Données personnelles
            </h2>
            <div className="text-base text-gray-700 leading-relaxed space-y-3">
              <p>
                Les informations collectées via le formulaire de contact sont
                utilisées uniquement dans le cadre de la relation commerciale.
              </p>
              <p>
                Vous pouvez demander la modification ou la suppression de vos
                données à :{" "}
                <a
                  href="mailto:contact@ld-multitec.fr"
                  className="text-[#1A7BAA] font-medium hover:text-[#D4550A] transition-colors"
                >
                  contact@ld-multitec.fr
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}