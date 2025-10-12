const BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(
  /\/+$/,
  "",
);
if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
}
const SEND_MAIL_CONTACT = `${BASE_URL}/contact`;
const SUBSCRIBE_NOTIFICATION = `${BASE_URL}/subscribers`;

export { SEND_MAIL_CONTACT, SUBSCRIBE_NOTIFICATION };
