/**
 * Utilitários para Schema.org JSON-LD
 */

export interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  logo?: string;
  contactPoint: {
    "@type": string;
    telephone: string;
    contactType: string;
    email?: string;
  };
  sameAs?: string[];
}

/**
 * Gera o schema JSON-LD para a organização
 */
export function getOrganizationSchema(): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "iVebSystem",
    description:
      "Desenvolvimento de software sob demanda com custo mensal previsível, sem alto investimento inicial. Parceria contínua, garantia de entrega e possibilidade de expansão.",
    url: "https://ivebsystem.com.br",
    logo: "https://ivebsystem.com.br/iveb-logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-86-98130-4658",
      contactType: "customer service",
      email: "contato@ivebsystem.com.br",
    },
    sameAs: [
      // Adicionar links de redes sociais quando disponíveis
      // "https://linkedin.com/company/ivebsystem",
      // "https://instagram.com/ivebsystem",
    ],
  };
}

/**
 * Retorna o JSON-LD como string formatada
 */
export function getOrganizationSchemaJSON(): string {
  return JSON.stringify(getOrganizationSchema(), null, 2);
}

