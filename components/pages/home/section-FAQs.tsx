import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/static/data";

export default function SectionFAQs() {
  return (
    <section className="py-16">
      <div className="container-center">
        <h3 className="text-2xl text-gradient mb-8 text-center">
          How does study smart work to help you?
        </h3>
        <div className="w-85% max-w-[800px] mx-auto">
          <Accordion faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
