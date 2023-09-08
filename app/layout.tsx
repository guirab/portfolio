import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import { Header } from "@/components";

const jetBrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio de Guilherme Rabelo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jetBrains.className}>
        <main className="bg-main-background h-screen w-screen">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
