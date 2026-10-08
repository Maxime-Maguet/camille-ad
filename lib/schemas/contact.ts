import * as z from "zod";

export const besoinOptions = [
  "Gestion administrative & secrétariat",
  "RH & paie",
  "Pré-comptabilité & facturation",
  "Autre",
] as const;

export const tailleOptions = ["1–10", "11–50", "51–250"] as const;

export const contactSchema = z.strictObject({
  nom: z.string().min(1, "Champ requis").max(100),
  entreprise: z.string().min(1, "Champ requis").max(100),
  email: z.email().max(254),
  telephone: z.string().max(20),
  taille: z.enum(["1–10", "11–50", "51–250", ""]).optional(),
  formule: z.enum(["ponctuelle", "essentiel", "serenite", ""]).optional(),
  besoin: z.enum(besoinOptions),
  message: z.string().min(1, "Champ requis").max(2000),
  honeypot: z.string().max(0, "Bot détecté"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
