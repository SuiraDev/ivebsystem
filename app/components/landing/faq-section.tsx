import { FAQAccordion } from "~/components";
import { useScrollAnimation } from "~/hooks/use-scroll-animation";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const faqItems: FAQItem[] = [
    {
      question: "É confiável? Como posso ter certeza de que vocês vão entregar?",
      answer:
        "Absolutamente. Trabalhamos com contrato formal, entregas incrementais e acompanhamento constante. Você vê o progresso em tempo real e pode validar cada etapa antes de seguir para a próxima. Além disso, mantemos comunicação transparente durante todo o processo.",
    },
    {
      question: "E se eu quiser cancelar o contrato?",
      answer:
        "Entendemos que situações mudam. Nosso contrato prevê condições claras de cancelamento, sempre de forma justa para ambas as partes. O importante é que você tenha controle sobre seu investimento.",
    },
    {
      question: "Como funciona a exclusividade? O produto é realmente só meu?",
      answer:
        "Sim, o produto é desenvolvido exclusivamente para sua empresa. No contrato de exclusividade, garantimos que ninguém mais terá acesso ao mesmo produto. É seu, 100%. A possibilidade de expansão só acontece com sua autorização e para empresas do mesmo segmento que você aprovar.",
    },
    {
      question: "Quanto tempo leva para desenvolver o software?",
      answer:
        "Depende da complexidade do projeto. Projetos mais simples podem estar funcionando em algumas semanas, enquanto projetos mais complexos podem levar alguns meses. O importante é que trabalhamos com entregas incrementais, então você começa a usar partes do sistema antes mesmo da conclusão total.",
    },
    {
      question: "E se eu quiser expandir para outras empresas depois?",
      answer:
        "Perfeito! Essa é uma das grandes vantagens do nosso modelo. Quando você decidir expandir, nós ajudamos a adaptar o produto para outros clientes do mesmo segmento. Você pode monetizar seu investimento inicial, transformando-o em uma fonte de receita adicional.",
    },
    {
      question: "O custo mensal é fixo ou varia?",
      answer:
        "O custo mensal é definido no contrato inicial e permanece fixo durante o período de desenvolvimento. Após a conclusão, podemos ajustar para um valor de manutenção e hospedagem, sempre de forma transparente e acordada.",
    },
    {
      question: "Vocês fazem manutenção e suporte?",
      answer:
        "Sim! A manutenção e suporte estão incluídos no nosso modelo. Você não precisa se preocupar com atualizações, correções ou melhorias. Nós cuidamos de tudo para manter seu produto sempre funcionando perfeitamente.",
    },
    {
      question: "Que tipo de software vocês desenvolvem?",
      answer:
        "Desenvolvemos soluções personalizadas para diversos segmentos: sistemas de gestão, plataformas web, aplicativos mobile, integrações, automações e muito mais. Se você tem uma necessidade específica, podemos desenvolver a solução ideal para seu negócio.",
    },
  ];

  return (
    <section 
      id="faq" 
      ref={ref}
      className="relative min-h-screen py-24 bg-[#0d1222] bg-grid-separator flex items-center scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="w-full max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-white/60">
            Tire suas dúvidas sobre nosso modelo de negócio
          </p>
        </div>

        <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}

