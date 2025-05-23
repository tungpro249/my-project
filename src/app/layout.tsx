import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ThemeProvider } from "next-themes";
import { HeaderPage } from "./components/layouts/Header";
import { FooterPage } from "./components/layouts/Footer";
import GlobalLoading from "./common/loading/GlobalLoading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "bò sữa phê cỏ",
  description: "Blog của tôi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased animate__animated animate__fadeInDown animate__faster`}
      >
        <ThemeProvider attribute="class">
          <AntdRegistry>
            <GlobalLoading />
            {children}
          </AntdRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
