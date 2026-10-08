export type FormuleId = "ponctuelle" | "essentiel" | "serenite";

export type TarifPlan = {
  id: FormuleId;
  name: string;
  price: string;
  forWho: string;
  list: string[];
  badge: string | null;
};

export type PayrollNote = {
  title: string;
  parts: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const tarifPlans: TarifPlan[] = [
  {
    id: "ponctuelle",
    name: "PONCTUELLE",
    price: "45 € + HT / heure",
    forWho: "Pic d'activité, retard de classement, absence d'un salarié.",
    list: ["Missions à l'heure", "Minimum 3 h"],
    badge: null,
  },
  {
    id: "essentiel",
    name: "ESSENTIEL · 10 H / MOIS",
    price: "400 € + HT / mois · soit 40 €/h",
    forWho: "TPE qui veulent déléguer un suivi régulier.",
    list: ["10 h par mois", "Point mensuel", "Récapitulatif des tâches"],
    badge: "RECOMMANDÉ",
  },
  {
    id: "serenite",
    name: "SÉRÉNITÉ · 20 H / MOIS",
    price: "720 € + HT / mois · soit 36 €/h",
    forWho: "PME qui confient gestion administrative, RH et pré-compta.",
    list: ["20 h par mois", "Point mensuel", "Interlocutrice dédiée"],
    badge: null,
  },
];

export const payrollNote: PayrollNote = {
  title: "Besoin spécifique ou volume plus important ",
  parts: ["Devis personnalisé après l'appel découverte."],
};

export const faqItems: FaqItem[] = [
  {
    question:
      "Pourquoi une assistante freelance plutôt qu'un salarié ou un intérimaire ?",
    answer:
      "Vous payez uniquement les heures travaillées, sans charges sociales, congés payés ni période d'essai. Vous ajustez le volume selon votre activité et gardez la même interlocutrice.",
  },
  {
    question: "Travaillez-vous à distance ou dans nos locaux ?",
    answer:
      "Les deux. La plupart des tâches se font à distance. Je me déplace sur site en Haute-Garonne et dans le Tarn quand c'est utile.",
  },
  {
    question: "Comment accédez-vous à nos outils en toute sécurité ?",
    answer:
      "Avec des accès nominatifs que vous me créez (logiciel de paie, messagerie, banque en consultation). Vous pouvez les retirer à tout moment.",
  },
  {
    question: "Comment garantissez-vous la confidentialité ?",
    answer:
      "Un engagement de confidentialité est intégré à chaque contrat. Vos documents restent sur vos outils ou sur un espace sécurisé.",
  },
  {
    question: "Travaillez-vous avec notre expert-comptable ?",
    answer:
      "Oui. Je prépare les pièces et la saisie. Votre expert-comptable garde la main sur la comptabilité, les déclarations et le bilan.",
  },
  {
    question: "Quel est le volume minimum ?",
    answer:
      "10 heures par mois en forfait, ou 3 heures pour une mission ponctuelle.",
  },
  {
    question: "Comment se passe la facturation ?",
    answer:
      "Une facture par mois avec le détail des heures et des tâches. Paiement par virement à 30 jours.",
  },
  {
    question: "Que se passe-t-il pendant vos congés ou en cas d'absence ?",
    answer:
      "Je vous préviens à l'avance et on planifie les tâches urgentes (paie, factures) avant mon départ.",
  },
];
