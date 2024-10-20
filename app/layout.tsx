import type { Metadata } from "next";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

const STORAGE_KEY = "mode";

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
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
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
      </body>
    </html>
  );
}

/* 
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
*/
