import { api } from "../api";
import { CONTACT_ENDPOINT, SUBSCRIBERS_ENDPOINT } from "./contact.api";

export async function sendMail(data: any) {
  const res = await api.post(CONTACT_ENDPOINT, data);
  return res.json();
}

export async function registerNotification(email: string) {
  const res = await api.post(SUBSCRIBERS_ENDPOINT, { email }, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to subscribe notification");
  }
  const data = await res.json();
  return data.data;
}
