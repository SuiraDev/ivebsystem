import type { Route } from "./+types/catch-all";

/**
 * Rota catch-all para ignorar requisições de ferramentas de desenvolvimento
 * e outras rotas não mapeadas
 */
export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  
  // Ignorar requisições do Chrome DevTools e outras ferramentas
  if (
    url.pathname.startsWith("/.well-known/") ||
    url.pathname.startsWith("/favicon.ico") ||
    url.pathname.includes("devtools")
  ) {
    return new Response(null, { status: 204 });
  }

  // Para outras rotas não encontradas, retornar 404
  throw new Response("Not Found", { status: 404 });
}

export default function CatchAll() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-white/60">Página não encontrada</p>
      </div>
    </div>
  );
}

