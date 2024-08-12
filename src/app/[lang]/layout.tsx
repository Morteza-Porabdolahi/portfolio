import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Vazirmatn } from "next/font/google";
import { type Metadata } from "next";
import { type Locale } from "@/lib/types";
import { Toaster } from "@/components/ui/sooner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const APP_NAME = "Morteza Porabdolahi's Portfolio";
const APP_DEFAULT_TITLE = "Morteza Porabdolahi";
const APP_DESCRIPTION =
  "Front-end developer with +3 years experience in building different websites";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: APP_DEFAULT_TITLE,
  description: APP_DESCRIPTION,
  keywords: "portfolio, developer, front-end, Javascript, React",
  icons: [{ rel: "icon", url: "/favicon.png" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
  },
};

const vazir = Vazirmatn({ display: "swap", subsets: ["arabic"] });

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
