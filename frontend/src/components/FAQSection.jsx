import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = t('faq.items', { returnObjects: true });

  return (
    <section id="faq" className="bg-[#a8dadc] py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-[#1d3557] mb-10">
        {t('faq.title')}
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggle(index)}
          />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left px-6 py-4 font-medium text-[#1d3557]"
      >
        <span>{question}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        style={{ maxHeight: `${height}px` }}
        className="overflow-hidden transition-all duration-300 px-6"
      >
        <div ref={contentRef} className="py-2 pb-6 text-[#1d3557]/90">
          {answer}
        </div>
      </div>
    </div>
  );
}
