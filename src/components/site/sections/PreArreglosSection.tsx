"use client";

import { useState } from "react";
import { Check, Clock, ShieldCheck, Gift, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const benefits = [
  "Precio congelado a perpetuidad — sin cargos sorpresa",
  "Planes transferibles a otros miembros de la familia",
  "Financiación flexible a su medida",
  "Tres niveles de planes: GOLD, ROYAL y básicos",
  "Sin compromiso, sin costo de consulta",
];

const guarantees = [
  { icon: Clock, text: "Disponemos en menos de 2 horas" },
  { icon: ShieldCheck, text: "Sus datos están protegidos" },
  { icon: Gift, text: "Sin compromisos, sin costos" },
];

export function PreArreglosSection() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    // honeypot
    if (formData.get("website")) return;

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: "pre-arreglos",
          interest: formData.get("plan"),
          message: formData.get("message"),
          source: "pre-arreglos-home",
          website: formData.get("website"),
        }),
      });
    } catch {
      // silently ignore — fallback success state
    }
    setSubmitted(true);
    form.reset();
  }

  return (
    <section
      id="pre-arreglos"
      aria-labelledby="prearreglos-heading"
      className="bg-noir text-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Texto */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              Pre-arreglos funerarios
            </p>
            <h2
              id="prearreglos-heading"
              className="mt-3 font-serif text-3xl sm:text-4xl font-semibold leading-tight"
            >
              Planifique hoy con calma lo que mañana será inevitable
            </h2>
            <p className="mt-5 text-[15px] sm:text-base text-white/75 leading-relaxed">
              Un pre-arreglo funerario es un acto de amor hacia su familia.
              Libere a los suyos de decisiones difíciles en momentos de dolor,
              congele el precio contra la inflación y garantice que sus deseos
              se cumplan tal como usted los imaginó.
            </p>

            <ul className="mt-7 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-white/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10">
              {guarantees.map((g) => (
                <div key={g.text} className="flex flex-col gap-2 text-center">
                  <g.icon className="h-5 w-5 text-gold mx-auto" aria-hidden="true" />
                  <span className="text-xs text-white/80 leading-snug">
                    {g.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-noir-deep border border-white/10 rounded-sm p-7 sm:p-8">
            <div className="flex items-center gap-2 text-gold mb-1">
              <FileText className="h-5 w-5" aria-hidden="true" />
              <h3 className="font-serif text-xl font-semibold">
                Solicitar asesoría
              </h3>
            </div>
            <p className="text-sm text-white/60 mb-6">
              Le contactaremos en menos de 24 horas. Sin compromiso.
            </p>

            {submitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
                  <Check className="h-7 w-7" />
                </div>
                <p className="font-serif text-lg">Solicitud enviada</p>
                <p className="mt-2 text-sm text-white/70">
                  Gracias por confiar en Funeraria Romana. Le contactaremos
                  pronto.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 border-white/30 text-white hover:bg-white hover:text-black"
                  onClick={() => setSubmitted(false)}
                >
                  Enviar otra solicitud
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div>
                  <Label htmlFor="pa-name" className="text-white/80 text-xs">
                    Nombre completo *
                  </Label>
                  <Input
                    id="pa-name"
                    name="name"
                    required
                    placeholder="Ej. Juan Pérez"
                    className="mt-1 bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-gold focus-visible:border-gold"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pa-email" className="text-white/80 text-xs">
                      Correo electrónico
                    </Label>
                    <Input
                      id="pa-email"
                      name="email"
                      type="email"
                      placeholder="correo@ejemplo.com"
                      className="mt-1 bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-gold focus-visible:border-gold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pa-phone" className="text-white/80 text-xs">
                      Teléfono / WhatsApp *
                    </Label>
                    <Input
                      id="pa-phone"
                      name="phone"
                      required
                      placeholder="(809) 000-0000"
                      className="mt-1 bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-gold focus-visible:border-gold"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pa-for" className="text-white/80 text-xs">
                      ¿Para quién es el pre-arreglo?
                    </Label>
                    <Select name="for">
                      <SelectTrigger
                        id="pa-for"
                        className="mt-1 bg-white/5 border-white/15 text-white focus:ring-gold"
                      >
                        <SelectValue placeholder="Seleccionar..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mi-mismo">Para mí mismo</SelectItem>
                        <SelectItem value="familiar">Un familiar</SelectItem>
                        <SelectItem value="padres">Mis padres</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="pa-plan" className="text-white/80 text-xs">
                      Plan de interés
                    </Label>
                    <Select name="plan">
                      <SelectTrigger
                        id="pa-plan"
                        className="mt-1 bg-white/5 border-white/15 text-white focus:ring-gold"
                      >
                        <SelectValue placeholder="Sin preferencia / no sé" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gold">Plan GOLD</SelectItem>
                        <SelectItem value="royal">Plan ROYAL</SelectItem>
                        <SelectItem value="basico">Plan básico</SelectItem>
                        <SelectItem value="sin-preferencia">
                          Sin preferencia
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="pa-msg" className="text-white/80 text-xs">
                    Mensaje (opcional)
                  </Label>
                  <Textarea
                    id="pa-msg"
                    name="message"
                    rows={3}
                    placeholder="Cuéntenos su situación o cualquier pregunta que tenga..."
                    className="mt-1 bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-gold focus-visible:border-gold"
                  />
                </div>

                <p className="text-[11px] text-white/50 leading-relaxed">
                  Al enviar, acepta nuestras políticas de privacidad y autoriza
                  a Funeraria Romana a contactarle para fines de la asesoría. No
                  compartimos sus datos con terceros.
                </p>

                <Button
                  type="submit"
                  className="w-full bg-gold text-black hover:bg-gold/90 font-semibold"
                >
                  Enviar solicitud de asesoría
                </Button>

                <p className="text-[10px] text-white/40 text-center">
                  Protegido contra spam. Sus datos se usarán conforme a la Ley
                  172-13 sobre Protección de Datos Personales de la República
                  Dominicana.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
