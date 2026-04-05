import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Swapped Geist for Inter
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import { Providers } from "./lib/auth/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayesha Express",
  description: "Ecommerce project for making ayesha express",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}> {/* Remove geist variables here */}
     <Providers>{children}</Providers>
      </body>
    </html>
  );
}