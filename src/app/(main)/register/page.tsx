import RegisterForm from "@/app/components/register/RegisterForm";

export const dynamic = "force-dynamic"; // SSR mỗi lần request

export default async function RegisterPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <RegisterForm />
    </div>
  );
}
