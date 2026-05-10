import * as z from "zod";

export const contactSchema = z.strictObject({
  nom: z.string().min(1, "Champ requis").max(100),
  entreprise: z.string().min(1, "Champ requis").max(100),
  email: z.email().max(254),
  telephone: z.string().min(10, "Champ requis").max(20),
  besoin: z.string().min(1, "Champ requis").max(100),
  message: z.string().min(1, "Champ requis").max(2000),
  honeypot: z.string().max(0, "Bot détecté"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
