import PlanCard from "@/components/common/plan-card";

const paidPlan = {
  features: [
    "Unlimited access to personalized study resources",
    "Unlimited prompt submissions",
    "Advanced assessments with detailed feedback",
    "Priority cutsomer support",
  ],
  price: 20,
  discount: 0.2,
};

const freePlan = {
  features: [
    "Access to basic study resources",
    "Limited number of serches per month",
    "Standard assessments",
    "Low cost",
  ],
  price: 0,
  discount: 0,
};

export default function SectionPricing() {
  return (
    <section className="py-16">
      <div className="container-center">
        <h3 className="text-2xl text-gradient mb-4 text-center">
          Discover our pricing plans
        </h3>
        <p className="text-sm text-center mb-12">
          Choose Your Plan Flexible Pricing Options for Every Student
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-[800px] w-[85%] mx-auto">
        <PlanCard plan={freePlan} />
        <PlanCard plan={paidPlan} />
      </div>
    </section>
  );
}
