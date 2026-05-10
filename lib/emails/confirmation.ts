import { ContactFormData } from "@/lib/schemas/contact";

/**
 * Email de confirmation envoyé au client après soumission du formulaire.
 * Premier point de contact avec la marque — soigné, rassurant, pro.
 */
export function getConfirmationEmailHtml(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Votre message a bien été reçu</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f5f1ea; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color: #1a1a1a;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f1ea;">
      <tr>
        <td align="center" style="padding: 40px 20px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff;">
            
            <!-- Header avec marque -->
            <tr>
              <td style="padding: 48px 48px 32px 48px; text-align: center; border-bottom: 1px solid #e8e0d3;">
                <p style="margin: 0 0 4px 0; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #8a8275; font-weight: 500;">
                  MC Office Manager
                </p>
                <p style="margin: 0; font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: #b5ad9e;">
                  Assistante de direction freelance
                </p>
              </td>
            </tr>

            <!-- Corps -->
            <tr>
              <td style="padding: 48px 48px 32px 48px;">
                <h1 style="margin: 0 0 24px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 28px; font-weight: 400; color: #1a1a1a; line-height: 1.3;">
                  Bonjour ${escapeHtml(getFirstName(data.nom))},
                </h1>

                <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.7; color: #1a1a1a;">
                  Votre message est bien arrivé. Merci de l'intérêt que vous portez à mes prestations.
                </p>

                <p style="margin: 0 0 20px 0; font-size: 15px; line-height: 1.7; color: #1a1a1a;">
                  Je prends connaissance de votre demande concernant <strong style="font-weight: 600;">${escapeHtml(data.besoin)}</strong> et reviens vers vous personnellement <strong style="font-weight: 600;">sous 24 à 48 heures ouvrées</strong> pour échanger plus en détail sur votre situation.
                </p>

                <p style="margin: 0 0 32px 0; font-size: 15px; line-height: 1.7; color: #1a1a1a;">
                  En attendant, n'hésitez pas à me contacter directement si votre besoin est urgent.
                </p>

                <!-- Récapitulatif -->
                <div style="background-color: #f5f1ea; padding: 24px 28px; margin-bottom: 32px;">
                  <p style="margin: 0 0 12px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; color: #8a8275; font-weight: 500;">
                    Récapitulatif de votre demande
                  </p>
                  <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #1a1a1a;">
                    <strong style="font-weight: 600;">Pôle :</strong> ${escapeHtml(data.besoin)}<br />
                    <strong style="font-weight: 600;">Entreprise :</strong> ${escapeHtml(data.entreprise)}
                  </p>
                </div>

                <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #1a1a1a;">
                  Bien à vous,
                </p>
              </td>
            </tr>

            <!-- Signature -->
            <tr>
              <td style="padding: 0 48px 48px 48px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top: 1px solid #e8e0d3; padding-top: 24px;">
                  <tr>
                    <td>
                      <p style="margin: 24px 0 4px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 18px; font-weight: 400; color: #1a1a1a;">
                        Camille Maguet
                      </p>
                      <p style="margin: 0 0 16px 0; font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #8a8275;">
                        Assistante de direction freelance
                      </p>
                      <p style="margin: 0; font-size: 13px; line-height: 1.8; color: #1a1a1a;">
                        <a href="tel:+33638376182" style="color: #1a1a1a; text-decoration: none;">06 38 37 61 82</a><br />
                        <a href="mailto:camille.mcofficemanager@gmail.com" style="color: #1a1a1a; text-decoration: none;">camille.mcofficemanager@gmail.com</a><br />
                        Toulouse · Zone d'intervention 30-50 km
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer légal -->
            <tr>
              <td style="padding: 20px 48px; background-color: #1a1a1a; text-align: center;">
                <p style="margin: 0; font-size: 10px; color: #8a8275; line-height: 1.6; letter-spacing: 0.04em;">
                  Cet email a été envoyé suite à votre demande de contact.<br />
                  MC Office Manager · Auto-entreprise
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
 * Extrait le prénom depuis le champ "Prénom Nom" du formulaire.
 * Si pas d'espace, retourne la chaîne complète.
 */
function getFirstName(fullName: string): string {
  return fullName.trim().split(" ")[0] || fullName;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
