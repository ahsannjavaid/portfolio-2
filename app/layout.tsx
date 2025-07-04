import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
// import { Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahsan Javed",
  description: "Welcome to the portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
