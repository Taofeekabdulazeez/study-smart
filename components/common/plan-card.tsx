import { IoIosCheckmarkCircleOutline } from "react-icons/io";

type Plan = {
  features: string[];
  price: number;
  discount: number;
};

type Props = {
  plan: Plan;
};

export default function PlanCard({ plan }: Props) {
  const { features, price, discount } = plan;
  return (
    <div
      className={`bg-[#111] p-6 rounded-lg relative ${
        price ? "border-gradient" : ""
      }`}
    >
      <div className="border-gradien">
        <div className="border-b border-stone-600 pb-6 mb-6">
          <span className="text-xs inline-block mb-6">
            {price ? "Paid Team plan" : "Free Team plan"}
          </span>
          <div className="flex gap-3 items-center">
            <p className="text-4xl">{price ? `$${price}` : "0$"}</p>
            <div>
              <p className="text-sm text-stone-200">/ month</p>
            </div>
            <span className="inline-block px-3 py-1.5 text-xs btn-gradient rounded-md absolute top-0 right-0">
              {price ? `-${discount * 100}%` : "Free"}
            </span>
          </div>
        </div>
        <div>
          <h5 className="text-sm mb-4">{`What's included?`}</h5>

          <ul className="flex flex-col gap-2 mb-8">
            {features.map((feature) => (
              <li
                key={feature}
                className={`flex items-center gap-2 ${
                  price ? "text-gradient" : ""
                }`}
              >
                <IoIosCheckmarkCircleOutline
                  size={20}
                  className={price ? "text-[#a725bc]" : ""}
                />
                <span className="text-xs">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center">
            <button className="btn-gradient px-6 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
