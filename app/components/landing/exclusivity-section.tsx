import { useScrollAnimation } from "~/hooks/use-scroll-animation";

export function ExclusivitySection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      id="exclusividade"
      ref={ref}
      className="relative min-h-screen py-24 bg-[#0a0e1a] bg-grid-separator flex items-center scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-8">
          Exclusividade com possibilidade de expansão
        </h2>
        <p className="text-xl text-white/60 leading-relaxed">
          O software nasce exclusivo para sua empresa. Com maturidade, podemos
          expandir a solução para outras empresas do mesmo segmento,
          potencializando o produto e reduzindo custos.
        </p>
        </div>
      </div>
    </section>
  );
}
