import type { Metadata, Viewport } from "next";
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
        alt: "Black screen"
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Black screen",
    description: "Just a black web page",
    creator: "@pyxeldev",
    images: ['https://blackscreen.app/images/icon-192x192.png']
  }
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
      </head>
      <body>{children}</body>
    </html>
  );
}
