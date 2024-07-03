import Image from "next/image";
import f_1 from "@/public/f-1.png";
import f_2 from "@/public/f-2.png";
import f_3 from "@/public/f-3.png";

export default function SectionFeatures() {
  return (
    <section className="py-8">
      <div className="container-center">
        <h4 className="text-2xl mb-8">Features</h4>
        <div className="grid md:grid-cols-3 gap-12 md:gap-6">
          <div className="custom-shadow p-3 rounded-md">
            <Image src={f_1} alt="feature icon" className="mb-4" />
            <h4 className="text-lg uppercase text-gradient mb-2">
              AI Generated Resources
            </h4>
            <p className="text-sm leading-5">
              {`Our platform provides comprehensive study materials, including
            articles, videos, quizzes, and more, tailored to address the
            specific needs outlined in the student's prompt.`}
            </p>
          </div>
          <div className="custom-shadow p-3 rounded-md">
            <Image src={f_2} alt="feature icon" className="mb-4" />
            <h4 className="text-lg uppercase text-gradient mb-2">
              Tailored Assessments
            </h4>
            <p className="text-sm leading-5">
              {`After reviewing the generated resources, students can take personalized assessments designed to test their comprehension and reinforce their learning.`}
            </p>
          </div>
          <div className="custom-shadow p-3 rounded-md">
            <Image src={f_3} alt="feature icon" className="mb-4" />
            <h4 className="text-lg uppercase text-gradient mb-2">
              Accessibility
            </h4>
            <p className="text-sm leading-5">
              {`The platform is accessible anytime, anywhere, allowing students to study at their own pace and convenience..`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
