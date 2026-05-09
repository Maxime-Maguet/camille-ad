"use server";
import { contactSchema, ContactFormData } from "@/lib/schemas/contact";

export async function sendContactForm(data: ContactFormData) {
  const result = contactSchema.safeParse(data);
  if (!result.success) {
    return { success: false, data: result.error };
  }
  return { success: true, data: result.data };
}
