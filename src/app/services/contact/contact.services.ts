import { SEND_MAIL_CONTACT } from "./contact.api";

export async function sendMail(data: any) {
  const res = await fetch(SEND_MAIL_CONTACT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
