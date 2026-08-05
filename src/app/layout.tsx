import type { Metadata } from "next";
import { Open_Sans, Poppins, Montserrat, Inter, Lato, Outfit } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Become a Host - TRCK Platform",
  description: "Create events, manage bookings, and reach your audience. Hosting starts here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${poppins.variable} ${montserrat.variable} ${inter.variable} ${lato.variable} ${outfit.variable} font-sans h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-[#ED5A2E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
