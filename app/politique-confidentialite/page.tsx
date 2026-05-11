import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="px-13 py-25 max-w-3xl mx-auto">
      <h1 className="font-display text-[2.5rem] font-bold text-ink mb-12 tracking-[-0.02em]">
        Politique de confidentialité
      </h1>

      <section className="mb-10">
        <h2 className="font-display text-[1.2rem] font-bold text-ink mb-4">
          Responsable du traitement
        </h2>
        <div className="text-[0.95rem]/[1.85] font-light text-stone flex flex-col gap-1">
          <p>
            <strong className="text-bark font-medium">Nom :</strong> MAGUET
            Camille
          </p>
          <p>
            <strong className="text-bark font-medium">Email :</strong>{" "}
            camille.mcofficemanager@gmail.com
          </p>
          <p>
            <strong className="text-bark font-medium">Adresse :</strong> [À
            COMPLÉTER — adresse de domiciliation Toulouse]
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-[1.2rem] font-bold text-ink mb-4">
          Données collectées
        </h2>
        <p className="text-[0.95rem]/[1.85] font-light text-stone mb-4">
          Dans le cadre du formulaire de contact, les données suivantes sont
          collectées :
        </p>
        <ul className="flex flex-col gap-2 text-[0.95rem]/[1.85] font-light text-stone">
          <li className="pl-4 border-l-2 border-linen">Prénom et nom</li>
          <li className="pl-4 border-l-2 border-linen">
            Nom de l&apos;entreprise
          </li>
          <li className="pl-4 border-l-2 border-linen">Adresse email</li>
          <li className="pl-4 border-l-2 border-linen">Numéro de téléphone</li>
          <li className="pl-4 border-l-2 border-linen">
            Message et nature du besoin
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-[1.2rem] font-bold text-ink mb-4">
          Finalité du traitement
        </h2>
        <p className="text-[0.95rem]/[1.85] font-light text-stone">
          Les données collectées sont utilisées uniquement pour répondre aux
          demandes de contact et établir une relation commerciale. Elles ne sont
          ni vendues, ni transmises à des tiers.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-[1.2rem] font-bold text-ink mb-4">
          Durée de conservation
        </h2>
        <p className="text-[0.95rem]/[1.85] font-light text-stone">
          Les données sont conservées pendant une durée maximale de 3 ans à
          compter du dernier contact, conformément au délai de prescription
          commerciale applicable en France.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-[1.2rem] font-bold text-ink mb-4">
          Hébergement et sous-traitants
        </h2>
        <div className="text-[0.95rem]/[1.85] font-light text-stone flex flex-col gap-3">
          <p>
            <strong className="text-bark font-medium">Hébergement :</strong>{" "}
            Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723,
            États-Unis). Les données transitent via des serveurs sécurisés.
            Vercel est conforme au RGPD.
          </p>
          <p>
            <strong className="text-bark font-medium">
              Envoi d&apos;emails :
            </strong>{" "}
            Les messages sont transmis via Resend et reçus sur Gmail (Google
            LLC). Google est soumis au RGPD via ses clauses contractuelles
            types.
          </p>
          <p>
            <strong className="text-bark font-medium">Analytics :</strong>{" "}
            Vercel Analytics collecte des données de navigation anonymisées
            (pages visitées, pays, type d&apos;appareil). Aucun cookie
            n&apos;est déposé, aucune donnée personnelle n&apos;est collectée.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-[1.2rem] font-bold text-ink mb-4">
          Cookies
        </h2>
        <p className="text-[0.95rem]/[1.85] font-light text-stone">
          Ce site n&apos;utilise pas de cookies de traçage ou publicitaires.
          Vercel Analytics fonctionne sans cookies. Aucun bandeau de
          consentement n&apos;est requis.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-[1.2rem] font-bold text-ink mb-4">
          Vos droits
        </h2>
        <p className="text-[0.95rem]/[1.85] font-light text-stone mb-4">
          Conformément au RGPD, vous disposez des droits suivants sur vos
          données :
        </p>
        <ul className="flex flex-col gap-2 text-[0.95rem]/[1.85] font-light text-stone">
          <li className="pl-4 border-l-2 border-linen">Droit d&apos;accès</li>
          <li className="pl-4 border-l-2 border-linen">
            Droit de rectification
          </li>
          <li className="pl-4 border-l-2 border-linen">
            Droit à l&apos;effacement
          </li>
          <li className="pl-4 border-l-2 border-linen">
            Droit à la limitation du traitement
          </li>
          <li className="pl-4 border-l-2 border-linen">
            Droit d&apos;opposition
          </li>
        </ul>
        <p className="text-[0.95rem]/[1.85] font-light text-stone mt-4">
          Pour exercer ces droits, contactez :{" "}
          <a
            href="mailto:camille.mcofficemanager@gmail.com"
            className="text-bark hover:text-ink transition-colors"
          >
            camille.mcofficemanager@gmail.com
          </a>
        </p>
        <p className="text-[0.95rem]/[1.85] font-light text-stone mt-2">
          En cas de litige, vous pouvez introduire une réclamation auprès de la{" "}
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bark hover:text-ink transition-colors"
          >
            CNIL
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="font-display text-[1.2rem] font-bold text-ink mb-4">
          Mise à jour
        </h2>
        <p className="text-[0.95rem]/[1.85] font-light text-stone">
          Politique mise à jour le 11 mai 2026.
        </p>
      </section>
    </main>
  );
}
