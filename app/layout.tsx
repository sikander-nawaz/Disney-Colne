import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";

export const metadata: Metadata = {
  title: "Disney+",
  description: "Only use for educational purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = getServerSession();
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1A1C29]">
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
