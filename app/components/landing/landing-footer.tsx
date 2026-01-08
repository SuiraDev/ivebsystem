import { Container } from "~/components";

export function LandingFooter() {
  return (
    <footer className="w-full bg-[#0a0e1a] bg-grid-separator text-slate-300 pt-24 pb-12 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">
            {/* Col 1 */}
            <div className="relative">
              <a href="#" className="flex items-center gap-2 mb-6 text-white font-semibold tracking-tight text-lg">
                IVEBSYSTEM
              </a>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Tecnologia sob demanda. Desenvolvimento de software personalizado com modelo
                acessível e exclusividade garantida.
              </p>
              <div className="md:hidden separator-line mt-8" />
            </div>

            {/* Col 2 */}
            <div className="relative">
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 -ml-6 md:-ml-8 separator-vertical" />
              <div className="hidden md:block lg:hidden absolute left-0 top-0 bottom-0 -ml-6 md:-ml-8 separator-vertical" />
              <h4 className="text-white font-semibold mb-6">Contato</h4>
              <div className="space-y-4 text-sm">
                <p className="text-slate-400">
                  Entre em contato através do formulário acima
                </p>
                <p className="text-slate-400">
                  Resposta em até 24 horas úteis
                </p>
              </div>
              <div className="md:hidden separator-line mt-8" />
            </div>

            {/* Col 3 */}
            <div className="relative">
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 -ml-6 md:-ml-8 separator-vertical" />
              <h4 className="text-white font-semibold mb-6">Sobre</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Somos especialistas em desenvolver soluções personalizadas que transformam ideias
                em software funcional, sem a necessidade de investimento inicial alto.
              </p>
              <div className="md:hidden separator-line mt-8" />
            </div>

            {/* Col 4 */}
            <div className="relative">
              <div className="hidden lg:block absolute left-0 top-0 bottom-0 -ml-6 md:-ml-8 separator-vertical" />
              <h4 className="text-white font-semibold mb-6">Links</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#como-funciona" className="hover:text-blue-400 transition-colors">Como Funciona</a></li>
                <li><a href="#vantagens" className="hover:text-blue-400 transition-colors">Vantagens</a></li>
                <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

        {/* Copyright */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <div>&copy; {new Date().getFullYear()} ivebsystem. Todos os direitos reservados.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
