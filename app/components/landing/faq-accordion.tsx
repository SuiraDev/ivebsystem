import { Icon } from "@iconify/react";
import { useState, type ReactNode } from "react";
import { useScrollAnimation } from "~/hooks/use-scroll-animation";

interface FAQItem {
  question: string;
  answer: string | ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={ref} className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`border-2 border-white/10 bg-white/5 overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/10 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-8 py-6 flex items-center justify-between text-left group"
          >
            <span className="font-bold text-white text-lg pr-4 group-hover:text-sky-400 transition-colors">
              {item.question}
            </span>
            <Icon
              icon="mdi:chevron-down"
              className={`w-6 h-6 text-sky-400 flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-8 pb-6 text-white/60 leading-relaxed font-light text-base border-t border-white/10 pt-6">
              {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
