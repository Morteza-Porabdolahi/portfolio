import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Toaster } from "@/components/ui/sooner";

export const metadata: Metadata = {
  title: "Morteza Porabdolahi",
  description: "Front-end developer with +3 years experience in building different websites",
  keywords: "portfolio, developer, front-end, Javascript, React",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable}`}>
      <body>
        <main>
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
