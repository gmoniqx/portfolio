const recipientEmail = "gayle@zentariph.com";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const parseBody = (body) => {
  if (!body) return {};
  if (typeof body === "string") return JSON.parse(body);
  return body;
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  let body;

  try {
    body = parseBody(request.body);
  } catch {
    return response.status(400).json({ error: "Invalid request body" });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return response.status(400).json({ error: "Name, email, and message are required" });
  }

  if (name.length > 120 || email.length > 254 || message.length > 4000 || !isValidEmail(email)) {
    return response.status(400).json({ error: "Please check your contact details and message length" });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_EMAIL_FROM;

  if (!supabaseUrl || !serviceRoleKey || !resendApiKey || !fromEmail) {
    return response.status(500).json({ error: "Contact form email service is not configured" });
  }

  const savedMessage = await fetch(`${supabaseUrl}/rest/v1/contact_messages`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      name,
      email,
      message,
      user_agent: request.headers["user-agent"],
    }),
  });

  if (!savedMessage.ok) {
    return response.status(500).json({ error: "Unable to save your message right now" });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br>");

  const sentEmail = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: recipientEmail,
      reply_to: email,
      subject: `New portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>New portfolio contact message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    }),
  });

  if (!sentEmail.ok) {
    return response.status(502).json({ error: "Unable to send your message right now" });
  }

  return response.status(200).json({ ok: true });
}
