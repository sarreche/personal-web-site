import { NextResponse } from "next/server";

const MAX_BODY_SIZE = 12_000;

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_SIZE) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, company = "", service, message, website = "" } = body as Record<string, unknown>;
  if (website) return NextResponse.json({ ok: true });

  if (!isString(name) || !isString(email) || !isString(company) || !isString(service) || !isString(message)) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }

  if (name.length < 2 || name.length > 80
    || email.length > 160 || !/^\S+@\S+\.\S+$/.test(email)
    || company.length > 120 || service.length < 2 || service.length > 100
    || message.length < 20 || message.length > 3000) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("Contact email environment variables are not configured.");
    return NextResponse.json({ error: "Email service unavailable" }, { status: 503 });
  }

  const safe = {
    name: escapeHtml(name.trim()),
    email: escapeHtml(email.trim()),
    company: escapeHtml(company.trim() || "—"),
    service: escapeHtml(service.trim()),
    message: escapeHtml(message.trim()).replace(/\n/g, "<br />"),
  };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email.trim(),
      subject: `Nueva consulta web · ${service.trim()}`,
      html: `<h2>Nueva consulta desde sarreche.dev</h2><p><strong>Nombre:</strong> ${safe.name}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Empresa:</strong> ${safe.company}</p><p><strong>Área:</strong> ${safe.service}</p><p><strong>Mensaje:</strong><br />${safe.message}</p>`,
    }),
  }).catch((error: unknown) => {
    console.error("Could not connect to Resend.", error instanceof Error ? error.message : "Unknown error");
    return null;
  });

  if (!response) {
    return NextResponse.json({ error: "Email service unreachable" }, { status: 502 });
  }

  if (!response.ok) {
    const resendError = await response.text();
    console.error("Resend rejected a contact message.", response.status, resendError.slice(0, 500));
    return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
