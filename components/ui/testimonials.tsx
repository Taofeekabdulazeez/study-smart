import user_image from "@/public/user-image-1.png";
import Image from "next/image";

type Testimonial = {
  fullName: string;
  image: string;
  occupation: string;
};

const testimonials = [
  { fullName: "John kenny", image: "", occupation: "Financial secretary" },
  { fullName: "John kenny", image: "", occupation: "Financial secretary" },
  { fullName: "John kenny", image: "", occupation: "Financial secretary" },
];

function Testimonials() {
  return (
    <div className="media-scroller mask-gradient lg:flex lg:[&>*]:flex-[1_1_30%] flex-wrap">
      {testimonials.map((testimonial) => {
        return <Quote key={testimonial.fullName} testimonial={testimonial} />;
      })}
    </div>
  );
}

function Quote({ testimonial }: { testimonial: Testimonial }) {
  const { fullName, image, occupation } = testimonial;
  return (
    <div className="relative p-4 shadow-md rounded-lg before:content-['\201C'] before:text-[#a725bc] before:text-[4rem] before:absolute before:top-0 custom-shadow">
      <p className="text-xs leading-5 mb-8 mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        veniam obcaecati quam, tenetur similique in atque unde sit et cumque
        reprehenderit quo est eos nisi! Illum eius ipsa quo expedita.
      </p>
      <div className="flex items-center gap-6">
        <div className="h-9 w-9 rounded-full bg-primary-50 overflow-hidden relative">
          <Image
            src={user_image}
            alt="customer img"
            className="block w-[85%] mx-auto absolute bottom-0 translate-x-[10%]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-medium text-sm">{fullName}</p>
          <p className="text-xs">{occupation}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
