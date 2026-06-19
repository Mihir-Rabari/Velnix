import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Velnix — Engineering Digital Excellence",
    template: "%s | The Velnix",
  },
  description:
    "The Velnix is a premium IT company specializing in custom software development, web & mobile apps, AI/ML, cloud solutions, and UIUX design. Engineering digital excellence for forward-thinking businesses.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "AI machine learning",
    "cloud solutions",
    "UIUX design",
    "IT consulting",
    "SaaS development",
    "custom software",
    "The Velnix",
  ],
  authors: [{ name: "The Velnix" }],
  creator: "The Velnix",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thevelnix.com",
    siteName: "The Velnix",
    title: "The Velnix — Engineering Digital Excellence",
    description:
      "Premium IT company specializing in custom software, web & mobile apps, AI/ML, cloud solutions, and UIUX design.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Velnix — Engineering Digital Excellence",
    description:
      "Premium IT company specializing in custom software, web & mobile apps, AI/ML, cloud solutions, and UIUX design.",
    images: ["/og-image.jpg"],
    creator: "@thevelnix",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://thevelnix.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#09090B" />
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('velnix-theme') || 'dark';
                  var resolved = theme === 'system' 
                    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
                    : theme;
                  document.documentElement.setAttribute('data-theme', resolved);
                  if (resolved === 'dark') document.documentElement.classList.add('dark');
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className="min-h-screen antialiased"
        style={{
          fontFamily: "var(--font-body)",
          background: "var(--theme-bg)",
          color: "var(--theme-text-primary)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
