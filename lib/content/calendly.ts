export type CalendlyEvent =
  | "appelGratuit"
  | "ponctuelle"
  | "essentiel"
  | "serenite";

export type FormuleCalendly = "ponctuelle" | "essentiel" | "serenite";

export const calendlyUrls: Record<CalendlyEvent, string> = {
  appelGratuit: process.env.NEXT_PUBLIC_CALENDLY_APPEL_GRATUIT ?? "",
  ponctuelle: process.env.NEXT_PUBLIC_CALENDLY_PONCTUELLE ?? "",
  essentiel: process.env.NEXT_PUBLIC_CALENDLY_ESSENTIEL ?? "",
  serenite: process.env.NEXT_PUBLIC_CALENDLY_SERENITE ?? "",
};

export function isCalendlyReady(url: string): boolean {
  return typeof url === "string" && url.trim().length > 0;
}

export function getCalendlyHref(event: CalendlyEvent): string {
  const url = calendlyUrls[event];
  return isCalendlyReady(url) ? url : "";
}

export function parseFormuleParam(
  value: string | null,
): FormuleCalendly | "" {
  if (
    value === "ponctuelle" ||
    value === "essentiel" ||
    value === "serenite"
  ) {
    return value;
  }
  return "";
}

/** Formule URL if later present; otherwise appelGratuit; otherwise "". */
export function resolveCalendlyCta(formule?: string | null): string {
  const parsed = parseFormuleParam(formule ?? null);
  if (parsed) {
    const formulaUrl = getCalendlyHref(parsed);
    if (isCalendlyReady(formulaUrl)) return formulaUrl;
  }
  return getCalendlyHref("appelGratuit");
}
