import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../app/globals.css";

const inter = Raleway({ subsets: ["latin"], weight:['400','500','600','700','800'] });
export const metadata: Metadata = {
  title: "Daniloff LLC",
  description: "Professional Bathtub Refinishing in Los Angeles and its surroundings",
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
