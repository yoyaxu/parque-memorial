"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/lib/site-config";

const formSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre completo"),
  phone: z.string().min(7, "Ingresa un teléfono válido"),
  email: z
    .string()
    .email("Email inválido")
    .optional()
    .or(z.literal("")),
  interest: z.string().min(1, "Selecciona una opción"),
  message: z.string().optional(),
  // honeypot
  website_company: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const interestOptions = [
  { value: "nichos", label: "Nichos verticales" },
  { value: "parcelas", label: "Parcelas tradicionales" },
  { value: "mausoleo", label: "Mausoleo familiar" },
  { value: "jardin", label: "Jardín memorial" },
  { value: "asesoria", label: "Solo asesoría" },
];

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      interest: "",
      message: "",
      website_company: "",
    },
  });

  const interestValue = watch("interest");

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email || undefined,
          phone: values.phone,
          interest: values.interest,
          message: values.message,
          service: "parque-memorial",
          source: "parque-memorial",
          website_company: values.website_company, // honeypot
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Error al enviar");
      }

      setSubmitted(true);
      reset();
      toast({
        title: "Solicitud enviada",
        description: "Te contactaremos pronto.",
      });
    } catch (err) {
      toast({
        title: "No se pudo enviar",
        description:
          err instanceof Error ? err.message : "Intenta de nuevo o llámanos.",
        variant: "destructive",
      });
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 sm:p-10 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="font-serif text-2xl font-semibold">
          Gracias por tu interés
        </h3>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          Hemos recibido tu solicitud. Un asesor del Parque Memorial te
          contactará muy pronto para coordinar una visita o resolver tus dudas.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="outline">
            <a href={siteConfig.phoneHref}>Llámanos ahora</a>
          </Button>
          <Button onClick={() => setSubmitted(false)}>Enviar otra solicitud</Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
      noValidate
    >
      {/* Honeypot — hidden visually */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label htmlFor="website_company">No llenar</label>
        <input
          id="website_company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website_company")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Nombre completo <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            placeholder="Tu nombre"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">
            Teléfono <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="809-000-0000"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email (opcional)</Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@correo.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="interest">
            Tipo de interés <span className="text-destructive">*</span>
          </Label>
          <Select
            value={interestValue}
            onValueChange={(v) => setValue("interest", v, { shouldValidate: true })}
          >
            <SelectTrigger id="interest" aria-invalid={!!errors.interest}>
              <SelectValue placeholder="Selecciona una opción" />
            </SelectTrigger>
            <SelectContent>
              {interestOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.interest && (
            <p className="text-xs text-destructive">{errors.interest.message}</p>
          )}
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="message">Mensaje (opcional)</Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Cuéntanos tus dudas, fechas de interés o cualquier detalle importante."
          {...register("message")}
        />
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          Tus datos son confidenciales y no serán compartidos.
        </p>
        <Button type="submit" disabled={isSubmitting} size="lg">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando…
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Enviar solicitud
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
