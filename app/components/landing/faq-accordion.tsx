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
    <div ref={ref} className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`border-b border-white/10 pb-6 transition-all duration-300 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <button
            onClick={() => toggle(index)}
            className="w-full py-4 flex items-center justify-between text-left group"
          >
            <span className="font-semibold text-white text-lg pr-4 group-hover:text-sky-400 transition-colors">
              {item.question}
            </span>
            <Icon
              icon="lucide:chevron-down"
              className={`w-6 h-6 text-sky-400 flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="pt-4 text-white/60 leading-relaxed text-base">
              {typeof item.answer === "string" ? <p>{item.answer}</p> : item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
