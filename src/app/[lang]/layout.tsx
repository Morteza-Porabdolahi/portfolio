import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Vazirmatn } from "next/font/google";
import { type Metadata } from "next";
import { type Locale } from "@/lib/types";
import { Toaster } from "@/components/ui/sooner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Morteza Porabdolahi",
  description:
    "Front-end developer with +3 years experience in building different websites",
  keywords: "portfolio, developer, front-end, Javascript, React",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

const vazir = Vazirmatn({ display: "swap", weight: "400" });

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { lang: Locale } }>) {
  const messages = await getMessages();

  return (
    <html
      lang={params.lang}
      dir={params.lang === "fa" ? "rtl" : "ltr"}
      className={`dark ${params.lang === "fa" ? vazir.className : GeistSans.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
