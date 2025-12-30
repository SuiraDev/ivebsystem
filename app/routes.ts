import {
  type RouteConfig,
  route,
  layout,
  index,
} from "@react-router/dev/routes";

export default [
  // Landing page (rota raiz)
  index("./routes/landing.tsx"), // Rende em /

  // Layout para rotas de marketing (não adiciona segmento à URL)
  layout("./routes/marketing/layout.tsx", [
    route("about", "./routes/marketing/about.tsx"), // Rende em /about
    route("contact", "./routes/marketing/contact.tsx"), // Rende em /contact
  ]),

  // Rota catch-all para ignorar requisições do Chrome DevTools e outras ferramentas
  route("*", "./routes/catch-all.tsx"),
] satisfies RouteConfig;
