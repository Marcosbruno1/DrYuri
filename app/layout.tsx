import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dr-yuri-trindade.mb128.chatgpt.site"),
  title: "Dr. Yuri Trindade — Odontologia em Patos-PB",
  description:
    "Odontologia estética, facetas em resina, ortodontia e reabilitação com Dr. Yuri Trindade em Patos-PB.",
  openGraph: {
    title: "Dr. Yuri Trindade — Odontologia",
    description:
      "Planejamento, cuidado e naturalidade para o seu sorriso. Atendimento em Patos-PB.",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Dr. Yuri Trindade — Odontologia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Yuri Trindade — Odontologia",
    description:
      "Planejamento, cuidado e naturalidade para o seu sorriso.",
    images: ["/og.png"],
  },
  themeColor: "#0b0c0e",
  icons: {
    icon: "/assets/dr-yuri-logo.svg",
    shortcut: "/assets/dr-yuri-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
