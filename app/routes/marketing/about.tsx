import { Container, PageHeader, Section } from "~/components";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sobre Nós - React Router App" },
    { name: "description", content: "Conheça mais sobre nossa empresa" },
  ];
}

export default function About() {
  return (
    <Container className="py-16">
      <div className="max-w-3xl mx-auto">
        <PageHeader
          title="Sobre Nós"
          description="Conheça mais sobre nossa empresa"
        />

        {/* Content Section */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Esta é uma página placeholder para a seção "Sobre Nós". Adicione
            informações sobre sua empresa, missão, visão e valores aqui.
          </p>

          <Section title="Nossa Missão" className="mt-8">
            <p className="text-gray-700 mb-6">
              Adicione a descrição da missão da sua empresa aqui.
            </p>
          </Section>

          <Section title="Nossa Visão" className="mt-8">
            <p className="text-gray-700 mb-6">
              Adicione a descrição da visão da sua empresa aqui.
            </p>
          </Section>

          <Section title="Nossos Valores" className="mt-8">
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Valor 1 - Adicione seus valores aqui</li>
              <li>Valor 2 - Adicione seus valores aqui</li>
              <li>Valor 3 - Adicione seus valores aqui</li>
            </ul>
          </Section>
        </div>
      </div>
    </Container>
  );
}

