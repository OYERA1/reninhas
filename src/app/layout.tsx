import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/global.scss";
import "@/styles/global.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "400", "700"],
  variable: "--poppins",
});

export const metadata: Metadata = {
  title: "Renas",
  description: "Para meu love renas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" type="image/x-icon" href="./favicon.ico"></link>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
