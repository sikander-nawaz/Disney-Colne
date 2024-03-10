import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Disney+",
  description: "Only use for educational purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
