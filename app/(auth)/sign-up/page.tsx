import Input from "@/components/ui/Input";
import Image from "next/image";
import googleSvg from "@/public/google.svg";
import microsoftSvg from "@/public/microsoft.svg";
import Link from "next/link";

export default function Page() {
  return (
    <div className="py-10">
      <div className="text-center space-y-2 mb-6">
        <h3 className="text-2xl">Welcome to STUDY SMART</h3>
        <p className="text-lg">{`Let's begin the new adventure`}</p>
      </div>
      <form action="">
        <div className="w-[90%] max-w-[500px] mx-auto">
          <h4 className="text-xl text-gradient text-center mb-6">Sign up</h4>
          <div className="grid gap-6 mb-4">
            <Input name="email" label="Email" placeholder="example@gmail.com" />
            <Input
              name="password"
              label="Password"
              placeholder="enter your password"
            />
            <Input
              name="fullName"
              label="Full Name"
              placeholder="enter your full name"
            />
          </div>
          <div className="flex gap-2 ml-3 mb-8">
            <input type="checkbox" name="" className="accent-[#423f87]" />
            <span className="text-xs text-[#423f87]">Remember me</span>
          </div>
          <div className="flex justify-center">
            <button className="btn-gradient px-6 py-3 font-semibold rounded-xl">
              Create account
            </button>
          </div>
        </div>
      </form>
      <div className="text-center mt-6">
        <span>or</span>
        <div className="flex gap-12 justify-center mb-4">
          <button className="bg-white h-12 aspect-square flex items-center justify-center rounded-lg">
            <Image src={googleSvg} alt="google logo" height={26} />
          </button>
          <button className="bg-white h-12 aspect-square flex items-center justify-center rounded-lg">
            <Image src={microsoftSvg} alt="google logo" height={26} />
          </button>
        </div>
        <p className="text-xs flex items-center gap-2 justify-center">
          <span>Already have an account?</span>
          <Link href="/login" className="text-[#423f87]">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
