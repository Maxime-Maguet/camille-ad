import assert from "node:assert/strict";
import { test } from "node:test";
import { getConfirmationEmailHtml } from "../lib/emails/confirmation";
import type { ContactFormData } from "../lib/schemas/contact";

const sample: ContactFormData = {
  nom: "Marie Dupont",
  entreprise: "Atelier Dupont",
  email: "marie@example.com",
  telephone: "0102030405",
  taille: "1–10",
  formule: "essentiel",
  besoin: "Gestion administrative & secrétariat",
  message: "Besoin d'un appui secrétariat",
  honeypot: "",
};

test("confirmation email includes expected brand and SLA copy", () => {
  const html = getConfirmationEmailHtml(sample);
  const lower = html.toLowerCase();

  assert.match(html, /48h ouvrées/);
  assert.match(html, /Camille/);
  assert.match(lower, /assistante administrative freelance/);
  assert.match(html, /micro-entreprise/);
  assert.match(html, /Outlook/i);
});

test("confirmation email omits outdated positioning, Gmail, and Camille phone details", () => {
  const html = getConfirmationEmailHtml(sample);
  const lower = html.toLowerCase();

  assert.doesNotMatch(lower, /gmail/);
  assert.doesNotMatch(html, /MC Office/i);
  assert.doesNotMatch(lower, /assistante de direction/);
  assert.doesNotMatch(lower, /tel:/);
  assert.doesNotMatch(html, /06 38/);
  assert.doesNotMatch(lower, /30-50 km/);
  assert.doesNotMatch(html, /(?:\+33|0)\s*6(?:[\s.-]?\d{2}){4}/);
});
