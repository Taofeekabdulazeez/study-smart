"use client";
import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

export function Accordion({ faqs }: { faqs: FAQ[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const handleClickedItem = function (index: number | null) {
    setActiveIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <ul className="grid grid-cols-1 divide-y">
      {faqs.map((faq, index) => (
        <AccordionItem
          data={faq}
          key={index}
          isOpen={activeIndex === index}
          onClick={() => handleClickedItem(index)}
        />
      ))}
    </ul>
  );
}

function AccordionItem({
  isOpen,
  onClick,
  data,
}: {
  isOpen: boolean;
  onClick: () => void;
  data: FAQ;
}) {
  const { question, answer } = data;

  return (
    <li className="pt-8 pb-4">
      <div className="grid grid-cols-[1fr_auto] gap-8 items-center justify-between cursor-pointer pb-4">
        <h4 className="text font-semibold">{question}</h4>
        <button
          className="inline-flex items-center justify-center h-6 w-6 bg-[#0A071B1A] rounded-full font-bold text-[1.5rem]"
          onClick={onClick}
        >
          <span>{isOpen ? "-" : "+"}</span>
        </button>
      </div>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <p className="overflow-hidden text-sm">{answer}</p>
      </div>
    </li>
  );
}
