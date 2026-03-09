import { type Metadata } from "next";
import { Poppins } from "next/font/google";
import { Chatbot } from "@/components/common/Chatbot";
import { AOSInit } from "@/components/common/AOSInit";
import { PageLoader } from "@/components/common/PageLoader";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "SRD Foundation",
    template: "%s | SRD Foundation",
  },
  description: "Supporting Newcomers & Seniors",
  icons:{
    icon:"/srd.png",
    shortcut:"/srd.png",
    apple:"/srd.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`${poppins.variable} min-h-screen antialiased`}>
        <Providers>
          <PageLoader />
          <AOSInit />
          <SiteShell>{children}</SiteShell>
          <Chatbot />
        </Providers>
      </body>
    </html>
  );
}
