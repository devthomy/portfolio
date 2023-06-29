import React from 'react';
import './globals.css';
import Navbar from 'src/layout/navbar';
import Footer from 'src/layout/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
