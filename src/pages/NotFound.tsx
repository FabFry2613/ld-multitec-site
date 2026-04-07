import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

export default function NotFound() {
  return (
    <Layout>
      <section
        className="min-h-[70vh] flex items-center justify-center"
        style={{ backgroundColor: "#F7F8FA" }}
      >
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-[#1A1A2E] mb-4">
            404
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            La page que vous recherchez n'existe pas.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-3.5 text-base font-semibold text-white rounded transition-colors"
            style={{ backgroundColor: "#D4550A" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#B8470A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#D4550A")
            }
          >
            Retour à l'accueil
          </Link>
        </div>
      </section>
    </Layout>
  );
}