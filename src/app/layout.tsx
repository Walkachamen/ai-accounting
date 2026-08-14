import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Accounting System",
  description: "AI-native accounting system for small businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
