import * as z from "zod";

export const contactSchema = z.strictObject({
  nom: z.string().min(1, "Champ requis"),
  entreprise: z.string().min(1, "Champ requis"),
  email: z.email(),
  telephone: z.string().min(10, "Champ requis"),
  besoin: z.string().min(1, "Champ requis"),
  message: z.string().min(1, "Champ requis"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
