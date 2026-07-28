import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// Honeypot field name — bots typically fill every field
const HONEYPOT_FIELD = "website_company";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot anti-spam check
    if (body[HONEYPOT_FIELD]) {
      // Pretend success but discard
      return NextResponse.json(
        { ok: true, message: "Gracias, hemos recibido tu solicitud." },
        { status: 200 }
      );
    }

    const { name, email, phone, service, interest, message, source } = body as {
      name?: string;
      email?: string;
      phone?: string;
      service?: string;
      interest?: string;
      message?: string;
      source?: string;
    };

    // Validación básica
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { ok: false, error: "Nombre es requerido." },
        { status: 400 }
      );
    }
    if (!service || typeof service !== "string") {
      return NextResponse.json(
        { ok: false, error: "Tipo de servicio es requerido." },
        { status: 400 }
      );
    }
    // Al menos un método de contacto
    if (
      (!email || typeof email !== "string" || !email.includes("@")) &&
      (!phone || typeof phone !== "string" || phone.trim().length < 7)
    ) {
      return NextResponse.json(
        { ok: false, error: "Proporciona un email o teléfono válido." },
        { status: 400 }
      );
    }

    const lead = await db.lead.create({
      data: {
        name: name.trim(),
        email: email?.trim() || null,
        phone: phone?.trim() || null,
        service: service.trim(),
        interest: interest?.trim() || null,
        message: message?.trim() || null,
        source: source?.trim() || null,
      },
    });

    return NextResponse.json(
      { ok: true, id: lead.id, message: "Solicitud recibida." },
      { status: 201 }
    );
  } catch (error) {
    console.error("[/api/leads] Error:", error);
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
