import { Container, PageHeader, Card, CardHeader, CardTitle, CardContent, Input, Textarea, Button, FormField } from "~/components";
import type { Route } from "./+types/contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contato - React Router App" },
    { name: "description", content: "Entre em contato conosco" },
  ];
}

export default function Contact() {
  return (
    <Container className="py-16">
      <div className="max-w-2xl mx-auto">
        <PageHeader title="Entre em Contato" />

        {/* Contact Form */}
        <Card className="mb-12">
          <form className="space-y-6">
            <FormField label="Nome">
              <Input
                type="text"
                name="name"
                placeholder="Seu nome"
              />
            </FormField>

            <FormField label="Email">
              <Input
                type="email"
                name="email"
                placeholder="seu@email.com"
              />
            </FormField>

            <FormField label="Mensagem">
              <Textarea
                name="message"
                rows={6}
                placeholder="Sua mensagem..."
              />
            </FormField>

            <Button type="submit" fullWidth>
              Enviar Mensagem
            </Button>
          </form>
        </Card>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card padding="lg">
            <CardHeader>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">contato@exemplo.com</p>
            </CardContent>
          </Card>
          <Card padding="lg">
            <CardHeader>
              <CardTitle>Telefone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">+55 (11) 9999-9999</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}

