import Logo from "@/components/common/logo";
import Icon from "@/components/ui/icon";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-[#423f87]">
      <div className="w-[90%] max-w-[100rem] mx-auto">
        <nav className="grid grid-cols-2 gap-8 border-b-2 py-6 lg:pb-8 lg:grid-cols-4">
          <ul className="flex flex-col gap-3">
            <li className="">Features</li>
            <li>
              <a className="text-xs font-medium" href="#">
                Payment Link
              </a>
            </li>
            <li>
              <a className="text-xs font-medium" href="#">
                Recurring Billing
              </a>
            </li>
            <li>
              <a className="text-xs font-medium" href="#">
                Invoicing
              </a>
            </li>
            <li>
              <a className="text-xs font-medium" href="#">
                Checkout
              </a>
            </li>
            <li>
              <a className="text-xs font-medium" href="#">
                Integration
              </a>
            </li>
            <li>
              <a className="text-xs font-medium" href="#">
                Pricing
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-3">
            <li className="">Solutons</li>
            <li>
              <a className="text-xs font-medium" href="#">
                eCommerce
              </a>
            </li>
            <li>
              <a className="text-xs font-medium" href="#">
                Financial Automation
              </a>
            </li>
            <li>
              <a className="text-xs font-medium" href="#">
                Crypto
              </a>
            </li>
            <li>
              <a className="text-xs font-medium" href="#">
                Global Business
              </a>
            </li>
            <li>
              <a className="text-xs font-medium" href="#">
                Market Places
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-3">
            <li className="">Resources</li>
            <li>
              <a className="text-xs font-medium" href="#">
                Tutorials
              </a>
            </li>
            <li>
              <a className="text-xs font-medium" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="text-xs font-medium" href="#">
                Community
              </a>
            </li>
            <li>
              <a className="text-xs font-medium" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>

          <ul className="flex flex-col gap-3">
            <li className="">About</li>
            <li>
              <a className="text-xs font-medium" href="#">
                Company
              </a>
            </li>
            <li>
              <a className="text-xs font-medium" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="text-xs font-medium" href="#">
                FAQs
              </a>
            </li>
            <li>
              <a className="text-xs font-medium" href="#">
                Contact us
              </a>
            </li>
            <li>
              <a className="text-xs font-medium" href="#">
                Integration
              </a>
            </li>
          </ul>
        </nav>
        <div className="lg:flex justify-between items-center">
          <p className="text-center my-4 font-medium">
            2023 Study smart. All right reserved
          </p>
          <ul className="flex items-center justify-center gap-4">
            <li>
              <a href="#">
                <FaLinkedin size={24} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter size={24} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebook size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
