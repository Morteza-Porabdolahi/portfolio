import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "@/components/ui/sooner";
import { Locale } from "i18n.config";

export const metadata: Metadata = {
  title: "Morteza Porabdolahi",
  description: "Front-end developer with +3 years experience in building different websites",
  keywords: "portfolio, developer, front-end, Javascript, React",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
  params: { lang }
}: Readonly<{ children: React.ReactNode, params: { lang: Locale } }>) {
  return (
    <html lang={lang} className={`dark ${GeistSans.variable}`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
