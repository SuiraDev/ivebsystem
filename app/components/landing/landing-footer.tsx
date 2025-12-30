import { Container } from "~/components";

export function LandingFooter() {
  return (
    <footer className="w-full bg-[#0d1222] text-white/60 py-20 border-t border-white/10">
      <Container className="w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/iveb-logo.svg" 
                  alt="iVebSystem Logo" 
                  className="h-10 w-auto"
                />
                <h3 className="text-xl font-black text-white tracking-tight">ivebsystem</h3>
              </div>
              <p className="text-white/50 leading-relaxed font-light">
                Tecnologia sob demanda. Desenvolvimento de software personalizado com modelo
                acessível e exclusividade garantida.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Contato</h4>
              <div className="space-y-4">
                <p className="text-white/50 font-light">
                  Entre em contato através do formulário acima
                </p>
                <p className="text-white/50 font-light">
                  Resposta em até 24 horas úteis
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 text-lg">Sobre</h4>
              <p className="text-white/50 leading-relaxed font-light">
                Somos especialistas em desenvolver soluções personalizadas que transformam ideias
                em software funcional, sem a necessidade de investimento inicial alto.
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/30 text-sm font-light">
            <p>&copy; {new Date().getFullYear()} ivebsystem. Todos os direitos reservados.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
