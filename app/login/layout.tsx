// app/registrar/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "../../styles/registroLogin.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RegistrarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {/* Script solo para esta página */}
      <Script src="/js/darkmode.js" strategy="afterInteractive" />
      {children}
    </div>
  );
}
