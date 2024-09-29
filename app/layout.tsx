import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Billing-Next",
  description: "Billing component for opting for the price plan",
  icons: {
    icon: "/favicon.png",
  },
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
