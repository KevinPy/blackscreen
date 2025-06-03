import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./style.css";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Black screen",
  description: "Just a black web page",
  metadataBase: new URL("https://blackscreen.app/"),
  manifest: "./manifest.webmanifest",
  robots: {
    index: false,
  },
  icons: {
    icon: "./images/icon-192x192.png",
    shortcut: "./images/icon-192x192.png",
    apple: "./images/icon-192x192.png",
  },
  openGraph: {
    title: "Black screen",
    type: "website",
    url: "https://blackscreen.app",
    description: "Just a black web page",
    images: [
      {
        url: "https://blackscreen.app/images/icon-192x192.png",
        width: 192,
        height: 192,
        alt: "Black screen",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Black screen",
    description: "Just a black web page",
    creator: "@pyxeldev",
    images: ["https://blackscreen.app/images/icon-192x192.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <script defer src="https://umami-pc00848scwk8c8k48k44kskk.pyxel.dev/script.js" data-website-id="03362717-9e9a-40e4-8f77-28cbb2b2af29"></script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
