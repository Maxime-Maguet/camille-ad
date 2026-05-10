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
import { ContactFormData } from "@/lib/schemas/contact";
import { sendContactForm } from "@/actions/sendContactForm";

import SuccessMessage from "../contact/SuccessMessage";

const items = [
  { label: "Ressources Humaines & Paie", value: "Ressources Humaines & Paie" },
  { label: "Comptabilité & Facturation", value: "Comptabilité & Facturation" },
  {
    label: "Administration & Exploitation",
    value: "Administration & Exploitation",
  },
  { label: "Accompagnement IA", value: "Accompagnement IA" },
  { label: "Plusieurs prestations", value: "Plusieurs prestations" },
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    besoin: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (
      formData.besoin === "" ||
      formData.message === "" ||
      formData.nom === "" ||
      formData.entreprise === "" ||
      formData.telephone === ""
    )
      return setStatus("error");
    setStatus("loading");
    const result = await sendContactForm(formData);
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  const inputClass =
    "h-auto bg-white border-linen text-ink py-[13px] px-4 text-[0.88rem] font-light rounded-none focus:border-bark focus:ring-0 focus-visible:ring-0 focus-visible:border-bark placeholder:text-linen";

  const labelClass =
    "text-[0.62rem] font-medium tracking-[0.16em] uppercase text-stone";

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <SuccessMessage key="success" />
      ) : (
        <m.form
          key="form"
          onSubmit={handleSubmit}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          className="flex flex-col gap-3.5 pl-20 pt-0"
        >
          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-1.5">
              <Label className={labelClass}>Prénom & Nom</Label>
              <Input
                type="text"
                placeholder="Jean Dupont"
                className={inputClass}
                value={formData.nom}
                onChange={(e) =>
                  setFormData({ ...formData, nom: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className={labelClass}>Entreprise</Label>
              <Input
                type="text"
                placeholder="Propreté Sud SARL"
                className={inputClass}
                value={formData.entreprise}
                onChange={(e) =>
                  setFormData({ ...formData, entreprise: e.target.value })
                }
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            <div className="flex flex-col gap-1.5">
              <Label className={labelClass}>Email</Label>
              <Input
                type="email"
                placeholder="jean@entreprise.fr"
                className={inputClass}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className={labelClass}>Téléphone</Label>
              <Input
                type="text"
                placeholder="06 00 00 00 00"
                pattern="[0-9]{10}"
                className={inputClass}
                value={formData.telephone}
                onChange={(e) =>
                  setFormData({ ...formData, telephone: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <Label className={labelClass}>Besoin</Label>
            <Select
              defaultValue=""
              value={formData.besoin}
              onValueChange={(value) =>
                setFormData({ ...formData, besoin: value ?? "" })
              }
            >
              <SelectTrigger className="w-full h-auto rounded-none border-linen py-3.25 px-4 text-[0.88rem] font-light focus:ring-0 focus:border-bark bg-white ">
                <SelectValue placeholder="Choisir un pôle..." />
              </SelectTrigger>
              <SelectContent
                alignItemWithTrigger={false}
                className="rounded-none border-linen "
              >
                <SelectGroup>
                  <SelectItem value="" disabled className="text-[#9ca3af]">
                    Choisir un pôle…
                  </SelectItem>
                  {items.map((item) => (
                    <SelectItem
                      key={item.value}
                      value={item.value}
                      className="text-[0.88rem] font-light text-ink rounded-none focus:bg-sand focus:text-ink"
                    >
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className={labelClass}>Message</Label>

            <Textarea
              className={`min-h-22.5 resize-y ${inputClass}`}
              placeholder="Décrivez brièvement votre situation…"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
          {/* Honeypot anti-bot — champ caché, ne doit jamais être rempli par un humain */}
          <input
            type="text"
            value={formData.honeypot}
            onChange={(e) =>
              setFormData({ ...formData, honeypot: e.target.value })
            }
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="text-[0.75rem] font-medium tracking-widest uppercase text-white bg-ink py-3.75 px-8 border-[1.5px] border-ink hover:bg-transparent hover:text-ink transition-all duration-300 ease-in-out"
          >
            {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
          </button>
          {status === "error" && (
            <p className="text-[0.75rem] font-medium tracking-wide text-red-700">
              Formulaire invalide. Vérifiez vos informations
            </p>
          )}
        </m.form>
      )}
    </AnimatePresence>
  );
}
