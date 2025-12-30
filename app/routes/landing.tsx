import { useState } from "react";
import { redirect, useActionData } from "react-router";
import { sanitizeInput, validateFormData, type FormData } from "~/utils/validation";
import { getOrganizationSchemaJSON } from "~/utils/schema";
import {
  ProblemSection,
  SolutionSection,
  BenefitsSection,
  ServicesSection,
  AboutSection,
  HowItWorksSection,
  ComparisonSection,
  ExclusivitySection,
  FAQSection,
  FinalCTASection,
  ContactFormSection,
  LandingFooter,
  LandingHeader,
  HeroSection,
  MobileMenu,
} from "~/components";
import type { Route } from "./+types/landing";

export function meta({}: Route.MetaArgs) {
  const metadata = {
    title: "iVebSystem - Tecnologia Sob Demanda | Desenvolvimento de Software",
    description:
      "Desenvolvemos software sob demanda com custo mensal previsível, sem alto investimento inicial. Parceria contínua, garantia de entrega e possibilidade de expansão.",
    keywords:
      "desenvolvimento de software, tecnologia sob demanda, software sob medida, desenvolvimento web, aplicativos mobile, automação de processos, integração de sistemas, consultoria tecnológica",
    og: {
      title: "iVebSystem - Tecnologia Sob Demanda",
      description:
        "Desenvolvemos software sob demanda com custo mensal previsível, sem alto investimento inicial. Parceria contínua, garantia de entrega e possibilidade de expansão.",
      type: "website",
      url: "https://ivebsystem.com.br",
      image: "https://ivebsystem.com.br/og-image.jpg",
    },
    twitter: {
      card: "summary_large_image",
      title: "iVebSystem - Tecnologia Sob Demanda",
      description:
        "Desenvolvemos software sob demanda com custo mensal previsível, sem alto investimento inicial.",
      image: "https://ivebsystem.com.br/twitter-image.jpg",
    },
    canonical: "https://ivebsystem.com.br",
  };

  return [
    { title: metadata.title },
    { name: "description", content: metadata.description },
    { name: "keywords", content: metadata.keywords },
    // Open Graph
    { property: "og:title", content: metadata.og.title },
    { property: "og:description", content: metadata.og.description },
    { property: "og:type", content: metadata.og.type },
    { property: "og:url", content: metadata.og.url },
    { property: "og:image", content: metadata.og.image },
    // Twitter Card
    { name: "twitter:card", content: metadata.twitter.card },
    { name: "twitter:title", content: metadata.twitter.title },
    { name: "twitter:description", content: metadata.twitter.description },
    { name: "twitter:image", content: metadata.twitter.image },
    // Canonical
    { rel: "canonical", href: metadata.canonical },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  
  // Extrair e sanitizar dados
  const name = sanitizeInput((formData.get("name") as string) || "");
  const email = sanitizeInput((formData.get("email") as string) || "");
  const phone = sanitizeInput((formData.get("phone") as string) || "");
  const company = sanitizeInput((formData.get("company") as string) || "");
  const message = sanitizeInput((formData.get("message") as string) || "");

  // Criar objeto FormData para validação
  const data: FormData = {
    name,
    email,
    phone,
    company: company || undefined,
    message: message || undefined,
  };

  // Validar dados
  const validation = validateFormData(data);

  if (!validation.valid) {
    return { errors: validation.errors };
  }

  try {
    // Formatar mensagem para WhatsApp
    const whatsappMessage = `*NOVO CONTATO - ivebsystem*

*Nome:* ${name}
*Email:* ${email}
*Telefone:* ${phone}
${company ? `*Empresa:* ${company}` : ''}

*Mensagem:*
${message || 'Sem mensagem adicional'}

---
_Enviado através do formulário da landing page_`;

    // Codificar mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Número do WhatsApp com código do país (55 = Brasil)
    const whatsappNumber = "5586981304658";
    
    // URL do WhatsApp Web
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Redirecionar para WhatsApp
    return redirect(whatsappUrl);
  } catch (error) {
    return { error: "Erro ao enviar formulário. Tente novamente." };
  }
}

export default function Landing() {
  const actionData = useActionData<typeof action>();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById("formulario");
    formElement?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] overflow-x-hidden w-full">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getOrganizationSchemaJSON() }}
      />
      
      {/* Header */}
      <LandingHeader
        onScrollToForm={scrollToForm}
        onMobileMenuOpen={() => setIsMobileMenuOpen(true)}
        onLinkClick={handleLinkClick}
        onScrollToTop={scrollToTop}
      />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onScrollToForm={scrollToForm}
      />

      {/* Main Content */}
      <main>
        <HeroSection onScrollToForm={scrollToForm} />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <ServicesSection />
        <HowItWorksSection />
        <AboutSection />
        <ComparisonSection />
        <ExclusivitySection />
        <FAQSection />
        <FinalCTASection onScrollToForm={scrollToForm} />
        <ContactFormSection />
      </main>
      
      <LandingFooter />
    </div>
  );
}
