import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ivebsystem | Consultoria Técnica Estratégica",
  description: "Consultoria técnica de elite para startups e empresas em escala. Diagnósticos de arquitetura, auditoria de código, CTO as a Service e governança técnica para fundadores e CEOs.",
  keywords: "consultoria técnica, cto as a service, cto on demand, consultoria cto, auditoria de software, auditoria de código, arquitetura de software, governança técnica, tech advisory, ivebsystem",
  authors: [{ name: "Ivebsystem" }],
  metadataBase: new URL("https://ivebsystem.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ivebsystem | Consultoria Técnica Estratégica para Negócios",
    description: "Parem de queimar caixa com arquiteturas erradas. Entregamos inteligência técnica e governança para escalar seu negócio.",
    url: "https://ivebsystem.com.br",
    siteName: "Ivebsystem",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ivebsystem - Consultoria Técnica Estratégica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ivebsystem | Inteligência Técnica para Escalar",
    description: "Diagnósticos precisos, execução de alto nível e governança técnica para CEOs e Fundadores.",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "name": "Ivebsystem",
      "image": "https://ivebsystem.com.br/og-image.png",
      "@id": "https://ivebsystem.com.br",
      "url": "https://ivebsystem.com.br",
      "telephone": "",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "description": "Consultoria técnica de elite e CTO as a Service para startups e empresas em escala.",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
        "https://www.linkedin.com/company/ivebsystem"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Como funciona o modelo de contratação?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Trabalhamos com 3 camadas: Diagnósticos rápidos de escopo fechado, Projetos de execução por entrega (não por hora) e Consultoria recorrente para governança e tech advisory."
          }
        },
        {
          "@type": "Question",
          "name": "O código-fonte pertence a quem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O código-fonte e toda a propriedade intelectual desenvolvida durante a parceria pertencem integralmente a você. Entregamos repositórios limpos e documentados."
          }
        },
        {
          "@type": "Question",
          "name": "Qual a experiência da equipe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nossa equipe é formada exclusivamente por engenheiros seniores e arquitetos de software com vasta experiência em sistemas críticos e escaláveis."
          }
        },
        {
          "@type": "Question",
          "name": "Posso cancelar a qualquer momento?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, trabalhamos com um modelo flexível. Queremos ser parceiros pelo valor que geramos, não por contratos de fidelidade engessados."
          }
        },
        {
          "@type": "Question",
          "name": "Como é feita a comunicação durante o projeto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Utilizamos metodologias ágeis com reuniões quinzenais de demonstração. Você tem acesso direto ao time técnico através de canais dedicados no Slack/WhatsApp e acompanhamento em tempo real."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#000000" />
        <Script src="https://code.iconify.design/3/3.1.0/iconify.min.js" strategy="afterInteractive" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-brand-cyan/20 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
