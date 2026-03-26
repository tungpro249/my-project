import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeProvider } from "next-themes";
import GlobalLoading from "../components/ui/GlobalLoading";
import CanvasCursor from "../components/ui/CanvasCursor";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Trang blog chia sẻ kiến thức lập trình",
    template: "%s | bò sữa phê cỏ",
  },
  description: "Blog của tôi",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="data-theme">
          <AntdRegistry>
            <GlobalLoading />
            {children}
            <Analytics />
            <CanvasCursor />
          </AntdRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
