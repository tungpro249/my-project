export async function sendMail(data: any) {
  const res = await fetch("http://localhost:5000/api/v1/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
