import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: false },
};

const contactEmail = "camille.maguet.assist@outlook.fr";

export default function MentionsLegales() {
  return (
    <article className="px-13 py-25 max-w-3xl mx-auto">
      <h1 className="font-display text-[2.5rem] font-bold text-ink mb-12 tracking-[-0.02em]">
        Mentions légales
      </h1>

      <section className="mb-10">
        <h2 className="font-display text-[1.2rem] font-bold text-ink mb-4">
          Éditeur du site
        </h2>
        <div className="text-[0.95rem]/[1.85] font-light text-stone flex flex-col gap-1">
          <p>
            <strong className="text-bark font-medium">Nom :</strong> MAGUET
            Camille
          </p>
          <p>
            <strong className="text-bark font-medium">Activité :</strong>{" "}
            Assistante administrative freelance
          </p>
          <p>
            <strong className="text-bark font-medium">Statut :</strong>{" "}
            Micro-entrepreneur / micro-entreprise
          </p>
          <p>
            <strong className="text-bark font-medium">SIRET :</strong>{" "}
            90405294100021
          </p>
          <p>
            <strong className="text-bark font-medium">TVA :</strong> TVA non
            applicable, art. 293 B du CGI
          </p>
          <p>
            <strong className="text-bark font-medium">Adresse :</strong> [A
            COMPLETER — adresse de domiciliation]
          </p>
          <p>
            <strong className="text-bark font-medium">Email :</strong>{" "}
            {contactEmail}
          </p>
          <p>
            <strong className="text-bark font-medium">
              Directrice de publication :
            </strong>{" "}
            MAGUET Camille
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-[1.2rem] font-bold text-ink mb-4">
          Hébergement
        </h2>
        <div className="text-[0.95rem]/[1.85] font-light text-stone flex flex-col gap-1">
          <p>
            <strong className="text-bark font-medium">Hébergeur :</strong>{" "}
            Vercel Inc.
          </p>
          <p>
            <strong className="text-bark font-medium">Adresse :</strong> 440 N
            Barranca Ave #4133, Covina, CA 91723, États-Unis
          </p>
          <p>
            <strong className="text-bark font-medium">Site :</strong> vercel.com
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-[1.2rem] font-bold text-ink mb-4">
          Propriété intellectuelle
        </h2>
        <p className="text-[0.95rem]/[1.85] font-light text-stone">
          L&apos;ensemble du contenu de ce site (textes, images, graphismes) est
          la propriété exclusive de MAGUET Camille, sauf mention contraire.
          Toute reproduction, même partielle, est interdite sans autorisation
          préalable.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-[1.2rem] font-bold text-ink mb-4">
          Responsabilité
        </h2>
        <p className="text-[0.95rem]/[1.85] font-light text-stone">
          MAGUET Camille s&apos;efforce d&apos;assurer l&apos;exactitude des
          informations diffusées sur ce site. Elle ne saurait être tenue
          responsable des erreurs, omissions ou de l&apos;indisponibilité du
          site.
        </p>
      </section>

      <section>
        <h2 className="font-display text-[1.2rem] font-bold text-ink mb-4">
          Contact
        </h2>
        <p className="text-[0.95rem]/[1.85] font-light text-stone">
          Pour toute question relative au site :{" "}
          <a
            href={`mailto:${contactEmail}`}
            className="text-bark hover:text-ink transition-colors"
          >
            {contactEmail}
          </a>
        </p>
      </section>
    </article>
  );
}
