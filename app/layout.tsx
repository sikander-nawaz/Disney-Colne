import type { Metadata } from "next";
import "./globals.css";
import NextAuthProvider from "./common/NextAuthProvider";
import { getServerSession } from "next-auth";
import { Toaster } from "react-hot-toast";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Disney+ Clone",
  description: "All data used for only educational purpose",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className="dark:bg-[#1A1C29] bg-[#1A1C29] text-white">
        <NextAuthProvider session={session}>
          <Toaster position="top-right" />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
