import LoginForm from "@/app/components/login/LoginForm";

export const dynamic = "force-dynamic"; // đảm bảo SSR mỗi lần request

export default async function LoginPage() {
  // Có thể fetch data SSR ở đây (vd: config login, csrf token...)
  // const res = await fetch("http://localhost:5000/api/v1/auth/config", { cache: "no-store" });
  // const config = await res.json();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <LoginForm />
    </div>
  );
}
