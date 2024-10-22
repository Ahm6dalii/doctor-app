import React from 'react';
import Footbar from "@/components/Footbar/Footbar";
import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import './globals.css';

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr.Doctor Name",
  description: "Website For Doctors SEO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <nav>
          <Navbar />
        </nav>
        <div id="Global-Layout">{children}</div>
        <footer>
          <Footbar />
        </footer>
      </body>
    </html>
  );
}
