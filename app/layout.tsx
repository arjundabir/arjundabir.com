import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arjun Dabir",
  description:
    "Welcome to Arjun Dabir's portfolio. If you find anything interesting or want to talk, please feel free to reach out!",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicons/light-mode-favicon.png",
        href: "/favicons/light-mode-favicon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicons/dark-mode-favicon.png",
        href: "/favicons/dark-mode-favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <GoogleAnalytics gaId="G-DSQEZ2WD77" />
    </html>
  );
}
