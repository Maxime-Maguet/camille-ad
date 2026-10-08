import { ContactFormData } from "@/lib/schemas/contact";

/**
 * Email interne envoyé à Camille à chaque demande de contact.
 * Optimisé pour la lecture rapide sur mobile.
 */
export function getInternalEmailHtml(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nouvelle demande de contact</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f5f1ea; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color: #1a1a1a;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f1ea;">
      <tr>
        <td align="center" style="padding: 40px 20px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e8e0d3;">
            
            <!-- Header -->
            <tr>
              <td style="padding: 32px 40px 24px 40px; border-bottom: 1px solid #e8e0d3;">
                <p style="margin: 0 0 8px 0; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: #8a8275; font-weight: 500;">
                  Nouvelle demande
                </p>
                <h1 style="margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: 24px; font-weight: 400; color: #1a1a1a; line-height: 1.3;">
                  ${escapeHtml(data.nom)} — ${escapeHtml(data.entreprise)}
                </h1>
              </td>
            </tr>

            <!-- Tag besoin -->
            <tr>
              <td style="padding: 24px 40px 8px 40px;">
                <span style="display: inline-block; background-color: #1a1a1a; color: #ffffff; padding: 6px 12px; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 500;">
                  ${escapeHtml(data.besoin)}
                </span>
              </td>
            </tr>

            <!-- Coordonnées -->
            <tr>
              <td style="padding: 16px 40px 24px 40px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #1a1a1a;">
                      <strong style="color: #8a8275; font-weight: 500; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Email :</strong><br />
                      <a href="mailto:${escapeHtml(data.email)}" style="color: #1a1a1a; text-decoration: underline;">${escapeHtml(data.email)}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #1a1a1a;">
                      <strong style="color: #8a8275; font-weight: 500; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Téléphone :</strong><br />
                      ${data.telephone
                        ? `<a href="tel:${escapeHtml(data.telephone)}" style="color: #1a1a1a; text-decoration: underline;">${escapeHtml(data.telephone)}</a>`
                        : "—"}
                    </td>
                  </tr>
                  ${
                    data.taille
                      ? `<tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #1a1a1a;">
                      <strong style="color: #8a8275; font-weight: 500; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Taille :</strong><br />
                      ${escapeHtml(data.taille)}
                    </td>
                  </tr>`
                      : ""
                  }
                  ${
                    data.formule
                      ? `<tr>
                    <td style="padding: 8px 0; font-size: 14px; color: #1a1a1a;">
                      <strong style="color: #8a8275; font-weight: 500; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">Formule :</strong><br />
                      ${escapeHtml(data.formule)}
                    </td>
                  </tr>`
                      : ""
                  }
                </table>
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="padding: 0 40px 32px 40px;">
                <p style="margin: 0 0 12px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #8a8275; font-weight: 500;">
                  Message
                </p>
                <div style="background-color: #f5f1ea; border-left: 3px solid #1a1a1a; padding: 16px 20px; font-size: 14px; line-height: 1.6; color: #1a1a1a; white-space: pre-wrap;">${escapeHtml(data.message)}</div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 20px 40px; background-color: #f5f1ea; border-top: 1px solid #e8e0d3;">
                <p style="margin: 0; font-size: 11px; color: #8a8275; line-height: 1.5;">
                  Email automatique envoyé depuis le formulaire de contact du site.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}

/**
 * Échappe les caractères HTML spéciaux pour éviter les injections.
 * Important car les données viennent d'un formulaire utilisateur.
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
