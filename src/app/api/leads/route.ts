import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// Honeypot field name — bots typically fill every field
const HONEYPOT_FIELD = "website_company";

type LeadInput = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  interest?: string;
  message?: string;
  source?: string;
};

function validate(input: LeadInput): string | null {
  const { name, email, phone, service } = input;
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return "Nombre es requerido.";
  }
  if (!service || typeof service !== "string") {
    return "Tipo de servicio es requerido.";
  }
  const hasValidEmail =
    !!email && typeof email === "string" && email.includes("@");
  const hasValidPhone =
    !!phone && typeof phone === "string" && phone.trim().length >= 7;
  if (!hasValidEmail && !hasValidPhone) {
    return "Proporciona un email o teléfono válido.";
  }
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as LeadInput;

    // Honeypot anti-spam check
    if (body[HONEYPOT_FIELD]) {
      return NextResponse.json(
        { ok: true, message: "Gracias, hemos recibido tu solicitud." },
        { status: 200 }
      );
    }

    const validationError = validate(body);
    if (validationError) {
      return NextResponse.json(
        { ok: false, error: validationError },
        { status: 400 }
      );
    }

    const payload = {
      name: body.name!.trim(),
      email: body.email?.trim() || null,
      phone: body.phone?.trim() || null,
      service: body.service!.trim(),
      interest: body.interest?.trim() || null,
      message: body.message?.trim() || null,
      source: body.source?.trim() || null,
    };

    // Intentar persistir en BD. Si falla (ej: SQLite efímero en serverless),
    // registramos en logs para que el equipo pueda verlo desde Vercel dashboard.
    try {
      const lead = await db.lead.create({ data: payload });
      return NextResponse.json(
        { ok: true, id: lead.id, message: "Solicitud recibida." },
        { status: 201 }
      );
    } catch (dbError) {
      console.error("[/api/leads] DB error (registrando en log):", dbError);
      console.log("[/api/leads] LEAD_FALLBACK_LOG", JSON.stringify(payload));
      // Aun así respondemos éxito al usuario para no perder la conversión.
      // El equipo puede ver el lead en los logs de Vercel (Functions → Logs).
      return NextResponse.json(
        {
          ok: true,
          message: "Solicitud recibida. Te contactaremos pronto.",
          fallback: true,
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("[/api/leads] Error inesperado:", error);
    return NextResponse.json(
      { ok: false, error: "Ocurrió un error. Intenta de nuevo." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: true, message: "Leads API — POST to submit" },
    { status: 200 }
  );
}
