"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  besoinOptions,
  ContactFormData,
  tailleOptions,
} from "@/lib/schemas/contact";
import { sendContactForm } from "@/actions/sendContactForm";
import SuccessMessage from "../contact/SuccessMessage";
import {
  parseFormuleParam,
  resolveCalendlyCta,
} from "@/lib/content/calendly";

type FormStatus = "idle" | "loading" | "success" | "error";

type ContactFormState = Omit<ContactFormData, "besoin"> & {
  besoin: ContactFormData["besoin"] | "";
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const formule = parseFormuleParam(searchParams.get("formule"));

  const [formData, setFormData] = useState<ContactFormState>({
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    taille: "",
    formule: "",
    besoin: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState(
    "Formulaire invalide. Vérifiez vos informations.",
  );

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (
      formData.besoin === "" ||
      formData.message === "" ||
      formData.nom === "" ||
      formData.entreprise === "" ||
      formData.email === ""
    ) {
      setErrorMessage("Formulaire invalide. Vérifiez vos informations.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    const payload: ContactFormData = {
      ...formData,
      besoin: formData.besoin,
      formule,
    };
    const result = await sendContactForm(payload);
    if (result.success) {
      setStatus("success");
    } else {
      setErrorMessage(
        result.message || "Erreur lors de l'envoi. Réessayez",
      );
      setStatus("error");
    }
  };

  const inputClass =
    "h-auto bg-white border-linen text-ink py-[13px] px-4 text-[0.88rem] font-light rounded-none focus:border-bark focus:ring-0 focus-visible:ring-0 focus-visible:border-bark placeholder:text-linen";

  const labelClass =
    "text-[0.62rem] font-medium tracking-[0.16em] uppercase text-stone";

  const calendlyHref = resolveCalendlyCta(formule);

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <SuccessMessage key="success" calendlyHref={calendlyHref} />
      ) : (
        <m.form
          key="form"
          onSubmit={handleSubmit}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="flex flex-col gap-3.5 lg:pl-20 pt-0"
          aria-label="Formulaire de contact"
          noValidate
          data-formule={formule || undefined}
        >
          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="nom" className={labelClass}>
                Prénom & nom *
              </Label>
              <Input
                id="nom"
                type="text"
                placeholder="Jean Dupont"
                className={inputClass}
                value={formData.nom}
                onChange={(e) =>
                  setFormData({ ...formData, nom: e.target.value })
                }
                autoComplete="name"
                required
                aria-required="true"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="entreprise" className={labelClass}>
                Entreprise *
              </Label>
              <Input
                id="entreprise"
                type="text"
                placeholder="Propreté Sud SARL"
                className={inputClass}
                value={formData.entreprise}
                onChange={(e) =>
                  setFormData({ ...formData, entreprise: e.target.value })
                }
                autoComplete="organization"
                required
                aria-required="true"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email" className={labelClass}>
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="jean@entreprise.fr"
                className={inputClass}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                autoComplete="email"
                required
                aria-required="true"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="telephone" className={labelClass}>
                Téléphone
              </Label>
              <Input
                id="telephone"
                type="tel"
                placeholder="06 00 00 00 00"
                className={inputClass}
                value={formData.telephone}
                onChange={(e) =>
                  setFormData({ ...formData, telephone: e.target.value })
                }
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="taille" className={labelClass}>
              Taille
            </Label>
            <Select
              value={formData.taille || null}
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  taille: (value ?? "") as ContactFormData["taille"],
                })
              }
            >
              <SelectTrigger
                id="taille"
                className="w-full h-auto rounded-none border-linen py-3.25 px-4 text-[0.88rem] font-light focus:ring-0 focus:border-bark bg-white"
              >
                <SelectValue placeholder="Effectif de l’entreprise…" />
              </SelectTrigger>
              <SelectContent
                alignItemWithTrigger={false}
                className="rounded-none border-linen"
              >
                <SelectGroup>
                  {tailleOptions.map((item) => (
                    <SelectItem
                      key={item}
                      value={item}
                      className="text-[0.88rem] font-light text-ink rounded-none focus:bg-sand focus:text-ink"
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="besoin" className={labelClass}>
              Besoin *
            </Label>
            <Select
              value={formData.besoin || null}
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  besoin: (value ?? "") as ContactFormData["besoin"],
                })
              }
            >
              <SelectTrigger
                id="besoin"
                className="w-full h-auto rounded-none border-linen py-3.25 px-4 text-[0.88rem] font-light focus:ring-0 focus:border-bark bg-white"
              >
                <SelectValue placeholder="Choisir un besoin…" />
              </SelectTrigger>
              <SelectContent
                alignItemWithTrigger={false}
                className="rounded-none border-linen"
              >
                <SelectGroup>
                  {besoinOptions.map((item) => (
                    <SelectItem
                      key={item}
                      value={item}
                      className="text-[0.88rem] font-light text-ink rounded-none focus:bg-sand focus:text-ink"
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="message" className={labelClass}>
              Message *
            </Label>
            <Textarea
              id="message"
              className={`min-h-22.5 resize-y ${inputClass}`}
              placeholder="Décrivez brièvement votre situation…"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              aria-required="true"
            />
          </div>

          <input
            type="text"
            value={formData.honeypot}
            onChange={(e) =>
              setFormData({ ...formData, honeypot: e.target.value })
            }
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            aria-disabled={status === "loading"}
            className="cursor-pointer text-[0.75rem] font-medium tracking-widest uppercase text-white bg-ink py-3.75 px-8 border-[1.5px] border-ink hover-hover:hover:bg-transparent hover-hover:hover:text-ink transition-all duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
          </button>
          <p className="text-[0.72rem] font-light leading-relaxed text-stone">
            En envoyant ce formulaire, vous acceptez que vos données soient
            utilisées pour vous recontacter. Voir la{" "}
            <Link
              href="/politique-confidentialite"
              className="underline text-bark hover-hover:hover:text-ink"
            >
              politique de confidentialité
            </Link>
            .
          </p>

          {status === "error" && (
            <p
              role="alert"
              className="text-[0.75rem] font-medium tracking-wide text-red-700"
            >
              {errorMessage}
            </p>
          )}
        </m.form>
      )}
    </AnimatePresence>
  );
}
