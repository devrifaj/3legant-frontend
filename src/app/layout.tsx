import type { Metadata } from "next";
import { Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/store/ReduxProvider";

/* fonts */
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["500"],
  subsets: ["latin"],
});

/* metadata */
export const metadata: Metadata = {
  title: "3legant | Modern E-Commerce Store",
  description:
    "Elegant is your one-stop shop for premium shop with confidence and discover elegance in every product. Shop with style at Elegant – your destination for premium online shopping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased flex flex-col h-screen`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
