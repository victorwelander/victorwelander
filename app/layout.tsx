import type { Metadata } from "next";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { Nunito } from "next/font/google";
import Attention from "@/components/attention";

const STORAGE_KEY = "mode";

const font = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Victor Welander",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <ThemeProvider
          storageKey={STORAGE_KEY}
          attribute="class"
          enableSystem={true}
          value={{
            dark: "dark-theme",
            system: "system",
            light: "light-theme",
          }}
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <Attention />
      </body>
    </html>
  );
}

/* 
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
*/
