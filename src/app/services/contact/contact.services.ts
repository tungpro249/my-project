import { SUBSCRIBE_NOTIFICATION, SEND_MAIL_CONTACT } from "./contact.api";

export async function sendMail(data: any) {
  const res = await fetch(SEND_MAIL_CONTACT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function registerNotification(email: string) {
  const res = await fetch(SUBSCRIBE_NOTIFICATION, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch contact");
  }
  const data = await res.json();
  return data.data;
}
