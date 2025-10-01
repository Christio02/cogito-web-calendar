import type { Metadata } from "next";
import "./globals.css";

import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Cogito Calendar",
  description: "The Cogito NTNU calendar for events ",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="antialised">{children}</body>
    </html>
  );
}
