"use server";

import { Resend } from "resend";
import { contactSchema, ContactFormData } from "@/lib/schemas/contact";
import { getInternalEmailHtml } from "@/lib/emails/internal";
import { getConfirmationEmailHtml } from "@/lib/emails/confirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(data: ContactFormData) {
  const result = contactSchema.safeParse(data);
  if (!result.success) {
    return { success: false, message: "Formulaire invalide." };
  }

  try {
    const [internalResult, confirmationResult] = await Promise.all([
      // Email interne — vers Camille
      resend.emails.send({
        from: "Camille Maguet <onboarding@resend.dev>",
        to: ["camille.maguet.assist@outlook.fr"],
        subject: `Nouvelle demande — ${result.data.besoin}`,
        html: getInternalEmailHtml(result.data),
        replyTo: result.data.email,
      }),
      // Email de confirmation — vers le prospect
      resend.emails.send({
        from: "Camille Maguet <onboarding@resend.dev>",
        to: [result.data.email],
        subject: "Votre message a bien été reçu",
        html: getConfirmationEmailHtml(result.data),
      }),
    ]);

    if (internalResult.error || confirmationResult.error) {
      console.error("Erreur envoi email :", {
        internal: internalResult.error,
        confirmation: confirmationResult.error,
      });
      return { success: false, message: "Erreur lors de l'envoi. Réessayez" };
    }

    console.log("Resend results :", internalResult, confirmationResult);
    return { success: true, message: "Message envoyé avec succès" };
  } catch (error: unknown) {
    console.error("Erreur envoi email :", error);
    return { success: false, message: "Erreur lors de l'envoi. Réessayez" };
  }
}
