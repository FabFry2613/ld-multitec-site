import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import Layout from "@/components/Layout";
import { Mail, Clock, MapPin, CheckCircle, Send, Loader2, AlertCircle } from "lucide-react";

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

const departments = [
  "Paris (75)",
  "Hauts-de-Seine (92)",
  "Seine-Saint-Denis (93)",
  "Val-de-Marne (94)",
  "Seine-et-Marne (77)",
  "Yvelines (78)",
  "Essonne (91)",
  "Val-d'Oise (95)",
];

const requestTypes = [
  "Audit",
  "Étude de contrat",
  "Dépannage",
  "Rénovation",
  "Optimisation énergétique",
  "Autre",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    nom: "",
    societe: "",
    fonction: "",
    telephone: "",
    email: "",
    typeDemande: "",
    nombreSites: "",
    description: "",
    rgpd: false,
    honeypot: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (sending) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_j4rrz7l";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_gh0xywl";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "14HDA5qoo3BfAPNlN";

    setSending(true);
    setError("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.nom,
          company: formData.societe,
          job_title: formData.fonction,
          phone: formData.telephone,
          email: formData.email,
          request_type: formData.typeDemande,
          sites_count: formData.nombreSites,
          message: formData.description,
        },
        publicKey
      );
      setSubmitted(true);

      // Google Analytics 4 — track successful form submission
      if (typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          form_name: "contact_ld_multitec",
          lead_type: "contact",
          page_path: window.location.pathname,
        });
      }

      setFormData({
        nom: "",
        societe: "",
        fonction: "",
        telephone: "",
        email: "",
        typeDemande: "",
        nombreSites: "",
        description: "",
        rgpd: false,
        honeypot: "",
      });
    } catch {
      setError(
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement à contact@ld-multitec.fr."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact LD MULTITEC | Demande d'audit CVC et devis maintenance Île-de-France</title>
        <meta
          name="description"
          content="Contactez LD MULTITEC pour un audit de vos installations CVC ou une étude de contrat de maintenance en Île-de-France. Réponse sous 24h ouvrées. Entreprises, syndics, bailleurs sociaux."
        />
        <link rel="canonical" href="https://www.ldmultitec.fr/contact" />
        {/* Open Graph */}
        <meta property="og:title" content="Contact LD MULTITEC | Devis maintenance CVC Île-de-France" />
        <meta
          property="og:description"
          content="Demandez un audit CVC ou une étude de contrat de maintenance. LD MULTITEC répond sous 24h ouvrées. Île-de-France - professionnels uniquement."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ldmultitec.fr/contact" />
        <meta property="og:image" content="https://www.ldmultitec.fr/assets/logo-ld-multitec.webp" />
        <meta property="og:site_name" content="LD MULTITEC" />
        <meta property="og:locale" content="fr_FR" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact LD MULTITEC | Maintenance CVC Île-de-France" />
        <meta
          name="twitter:description"
          content="Demandez un audit CVC ou un devis de contrat de maintenance. Réponse sous 24h ouvrées. Île-de-France."
        />
        <meta name="twitter:image" content="https://www.ldmultitec.fr/assets/logo-ld-multitec.webp" />
      </Helmet>

      {/* HERO */}
      <section
        className="relative min-h-[40vh] flex items-center"
        style={{ backgroundColor: "#1A1A2E" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Contactez LD MULTITEC
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Demandez un audit technique de vos installations ou une étude personnalisée de contrat de maintenance CVC
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-base text-gray-700 leading-relaxed max-w-3xl mb-4">
              Que vous souhaitiez structurer un contrat de maintenance CVC,
              intervenir sur une panne ou réhabiliter une installation,
              remplissez le formulaire ci-dessous. Notre équipe technique
              analyse chaque demande et vous apporte une réponse sous 24h ouvrées.
            </p>
            <p className="text-sm text-gray-500 mb-12">
              Vous pouvez également nous écrire directement à{" "}
              <a
                href="mailto:contact@ld-multitec.fr"
                className="text-[#1A7BAA] font-medium hover:text-[#D4550A] transition-colors"
              >
                contact@ld-multitec.fr
              </a>
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* FORM */}
            <div className="lg:col-span-2">
              <FadeIn>
                {submitted ? (
                  <div className="p-8 bg-green-50 rounded-xl border border-green-200 text-center">
                    <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h2 className="text-xl font-bold text-[#1A1A2E] mb-2">
                      Demande envoyée
                    </h2>
                    <p className="text-sm text-gray-600">
                      Votre demande a bien été transmise à l'équipe LD MULTITEC.
                      Nous vous répondons sous 24h ouvrées.
                    </p>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
                          Nom et prénom *
                        </label>
                        <input
                          type="text"
                          name="nom"
                          required
                          value={formData.nom}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1A7BAA] focus:ring-1 focus:ring-[#1A7BAA] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
                          Société *
                        </label>
                        <input
                          type="text"
                          name="societe"
                          required
                          value={formData.societe}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1A7BAA] focus:ring-1 focus:ring-[#1A7BAA] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
                          Fonction / Rôle
                        </label>
                        <input
                          type="text"
                          name="fonction"
                          value={formData.fonction}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1A7BAA] focus:ring-1 focus:ring-[#1A7BAA] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleChange}
                          placeholder="Facultatif"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1A7BAA] focus:ring-1 focus:ring-[#1A7BAA] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1A7BAA] focus:ring-1 focus:ring-[#1A7BAA] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
                          Type de demande *
                        </label>
                        <select
                          name="typeDemande"
                          required
                          value={formData.typeDemande}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1A7BAA] focus:ring-1 focus:ring-[#1A7BAA] transition-colors bg-white"
                        >
                          <option value="">Sélectionner...</option>
                          {requestTypes.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
                        Nombre de sites concernés
                      </label>
                      <input
                        type="text"
                        name="nombreSites"
                        value={formData.nombreSites}
                        onChange={handleChange}
                        placeholder="Ex : 5 sites"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1A7BAA] focus:ring-1 focus:ring-[#1A7BAA] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#1A1A2E] mb-1.5">
                        Description du besoin *
                      </label>
                      <textarea
                        name="description"
                        required
                        rows={5}
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#1A7BAA] focus:ring-1 focus:ring-[#1A7BAA] transition-colors resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        name="rgpd"
                        required
                        checked={formData.rgpd}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 accent-[#D4550A]"
                      />
                      <label className="text-xs text-gray-600 leading-relaxed">
                        J'accepte que mes données soient traitées par LD MULTITEC
                        dans le cadre de ma demande, conformément à la politique
                        de confidentialité et au RGPD. *
                      </label>
                    </div>

                    {error && (
                      <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white rounded transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{ backgroundColor: "#D4550A" }}
                      onMouseEnter={(e) => {
                        if (!sending) e.currentTarget.style.backgroundColor = "#B8470A";
                      }}
                      onMouseLeave={(e) => {
                        if (!sending) e.currentTarget.style.backgroundColor = "#D4550A";
                      }}
                    >
                      {sending ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Envoi en cours…
                        </span>
                      ) : (
                        "Envoyer ma demande d'audit"
                      )}
                    </button>
                  </form>
                )}
              </FadeIn>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-8">
              <FadeIn>
                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50/50">
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-4">
                    Nous écrire
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#1A7BAA] mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-[#1A1A2E]">
                          Email
                        </p>
                        <a
                          href="mailto:contact@ld-multitec.fr"
                          className="text-sm text-[#1A7BAA] font-medium hover:text-[#D4550A] transition-colors"
                        >
                          contact@ld-multitec.fr
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Send className="w-5 h-5 text-[#1A7BAA] mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-[#1A1A2E]">
                          Réponse sous 24h ouvrées
                        </p>
                        <p className="text-sm text-gray-600">
                          Chaque demande est analysée par notre équipe technique pour vous apporter une réponse adaptée.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#1A7BAA] mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-[#1A1A2E]">
                          Disponibilité
                        </p>
                        <p className="text-sm text-gray-600">
                          Lundi - Vendredi, 8h - 18h
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="p-6 rounded-xl border border-gray-100 bg-gray-50/50">
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#D4550A]" />
                    Zone d'intervention
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {departments.map((d) => (
                      <span
                        key={d}
                        className="inline-block px-3 py-1.5 text-xs font-medium rounded-full border border-gray-200 text-[#1A1A2E]"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}