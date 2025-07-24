import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // This line is crucial for styling

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HydroFresh - Kanpur's Freshest Greens",
  description: "Fresh, pesticide-free hydroponic vegetables delivered to your door in Kanpur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
