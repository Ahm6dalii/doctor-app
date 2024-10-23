import React from "react";
import type { Metadata } from "next";
import Aside from "@/components/Aside/Aside";

export const metadata: Metadata = {
  title: "Dr.Doctor Name",
  description: "Website For Doctors SEO",
};

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      id="Admin-Layout"
      className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8"
    >
      <div className="col-span-1">
        <Aside />
      </div>
      <div className="col-span-1 sm:col-span-3 md:col-span-5 xl:col-span-7">{children}</div>
    </div>
  );
}
