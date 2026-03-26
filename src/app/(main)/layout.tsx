import { FooterPage } from "@/components/layouts/Footer";
import { HeaderPage } from "@/components/layouts/Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderPage />
      <main className="bg-white dark:bg-gray-900">{children}</main>
      <FooterPage />
    </>
  );
}
