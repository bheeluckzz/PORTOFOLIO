import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hirzi Rofif Irsaydhi — Web Developer & Software Engineer",
  description:
    "Portfolio of Hirzi Rofif Irsaydhi — Software Engineering student at Politeknik Negeri Banyuwangi (D4 TRPL) and ex-Frontend Developer Intern at PT Hummatech. Specialized in dynamic Laravel systems, React, Next.js, and high-performance interfaces.",
  keywords: [
    "Hirzi Rofif Irsaydhi",
    "Web Developer",
    "Frontend Developer",
    "Laravel",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Politeknik Negeri Banyuwangi",
    "PT Hummatech",
  ],
  authors: [{ name: "Hirzi Rofif Irsaydhi" }],
  openGraph: {
    title: "Hirzi Rofif Irsaydhi — Web Developer",
    description:
      "Crafting resilient web systems and dynamic digital interfaces with Laravel, Next.js, and Tailwind CSS.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-canvas text-text-primary font-sans antialiased selection:bg-surface-elevated selection:text-white">
        {children}
      </body>
    </html>
  );
}
