import { Link } from "react-router";
import { Container, Button, Card, CardHeader, CardTitle, CardContent } from "~/components";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - React Router App" },
    { name: "description", content: "Página inicial do aplicativo" },
  ];
}

export default function MarketingHome() {
  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Bem-vindo ao React Router v7
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Esta é uma página placeholder. Adicione seu conteúdo de marketing
          aqui.
        </p>

        {/* Call to Action */}
        <div className="flex gap-4 justify-center">
          <Link to="/about">
            <Button>Saiba Mais</Button>
          </Link>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Feature 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Descrição da primeira feature. Adicione mais detalhes aqui.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Feature 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Descrição da segunda feature. Adicione mais detalhes aqui.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Feature 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Descrição da terceira feature. Adicione mais detalhes aqui.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}

