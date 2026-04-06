import type { Metadata } from "next";
import { Mulish, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { BackToTop } from "@/components/BackToTop";
import { MotionProvider } from "@/components/MotionProvider";

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Decor haven home",
  description: "Decor haven home — modern home decor storefront",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.variable} ${playfair.variable} antialiased`}>
        <MotionProvider>
          <div className="min-h-dvh bg-background text-foreground">
            <SiteHeader />
            {children}
            <SiteFooter />
            <BackToTop />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
