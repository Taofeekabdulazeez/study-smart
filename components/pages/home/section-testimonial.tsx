import Testimonials from "@/components/ui/testimonials";

export default function SectionTestimonials() {
  return (
    <section className="py-16">
      <div className="container-center">
        <h3 className="text-2xl text-gradient mb-8 text-center">
          What our users say about us
        </h3>
        <Testimonials />
      </div>
    </section>
  );
}
