import React from 'react';



export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <div id="Client-Layout">
          {children}
          </div>

  );
}