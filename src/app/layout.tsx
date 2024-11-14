import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import { Header } from "./component/Header";
import { Footer } from "./component/Footer";

const manrope = Manrope({
  variable: "--font-monrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: "Home - Kensink",
  description: "Learn more about our company and what we do.",
  keywords: ["Home", "Kensink"],
  openGraph: {
    title: "Home - Kensink",
    description: "Learn more about our company and what we do.",
    url: "#",
    images: [
      {
        url: "#",
        width: 800,
        height: 600,
        alt: "LLM - Kensink",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className}`} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
