import Image from "next/image";
import hero_image from "@/public/hero-img.png";
import Link from "next/link";

export default function SectionHero() {
  return (
    <section className="py-16">
      <div className="container-center">
        <div className="text-center">
          <span className="bg-[#5D3FD31A] inline-block rounded-md px-12 py-2 text-sm mb-4">
            Specially Designed for Students
          </span>
          <h1 className="text-6xl text-gradient mb-6">STUDY SMART</h1>
          <p className="text-xs leading-5 mb-8">
            Personalized AI-Generated Study Resources and Tailored Assessments
            for Students
          </p>
          <button className="btn-gradient px-6 py-3 font-semibold rounded-xl">
            Create account
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 mt-24">
          <div>
            <h3 className="text-2xl text-gradient mb-4">About study smart</h3>
            <p>
              {`Study Smart is a cutting-edge educational platform designed to
              revolutionize the way students learn. Leveraging advanced AI
              technology, STUDY SMART allows students to easily submit prompts
              on any topic. Our system then generates customized learning
              resources tailored to each student's preferences and learning
              style.`}{" "}
            </p>
            <Link href="/about" className="text-gradient">
              Read more...
            </Link>
          </div>
          <div>
            <Image src={hero_image} alt="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
