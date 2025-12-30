import { Container } from "~/components";
import { useScrollAnimation } from "~/hooks/use-scroll-animation";

export function ExclusivitySection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, triggerOnce: true });

  return (
    <section 
      id="exclusividade"
      ref={ref} 
      className="w-full bg-[#0d1222] pt-40 pb-32 border-t border-white/5 scroll-mt-24"
    >
      <Container className="w-full">
        <div className="max-w-6xl mx-auto text-white">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">
              Exclusividade com possibilidade de expansão
            </h2>
            <p className="text-xl text-white/60 leading-relaxed font-light max-w-4xl">
              O software nasce exclusivo para sua empresa. Com maturidade, podemos
              expandir a solução para outras empresas do mesmo segmento,
              potencializando o produto e reduzindo custos.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
