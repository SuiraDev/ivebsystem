import { Link, Outlet } from "react-router";
import { Container, NavLink } from "~/components";
import type { Route } from "./+types/layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Marketing - React Router App" },
    { name: "description", content: "Marketing pages" },
  ];
}

export default function MarketingLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <Container>
          <nav className="flex items-center justify-between py-4">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Logo
            </Link>
            <div className="flex gap-4">
              <NavLink to="/" exact>Home</NavLink>
              <NavLink to="/about">Sobre</NavLink>
              <NavLink to="/contact">Contato</NavLink>
            </div>
          </nav>
        </Container>
      </header>

      {/* Conteúdo principal - Rotas filhas renderizam aqui */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <Container>
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 React Router App. Todos os direitos reservados.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}

