"use server";

import { Resend } from "resend";
import { contactSchema, ContactFormData } from "@/lib/schemas/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactForm(data: ContactFormData) {
  const result = contactSchema.safeParse(data);
  if (!result.success) {
    return { success: false, data: result.error };
  }
  await resend.emails.send({
    from: "Camille Site <onboarding@resend.dev>",
    to: ["camille.mcofficemanager@gmail.com"],
    subject: result.data.besoin,
    html: `<h2>Nouveau message depuis le site</h2>
<p><strong>Nom : ${result.data.nom}</strong> </p>
<p><strong>Entreprise : ${result.data.entreprise}</strong> </p>
<p><strong>Email : ${result.data.email}</strong> </p>
<p><strong>Téléphone : ${result.data.telephone}</strong> </p>
<p><strong>Besoin : ${result.data.besoin}</strong> </p>
<hr />
<p><strong>Message : ${result.data.message}</strong></p>
<p></p>`,
  });
  return { success: true, data: result.data };
}
