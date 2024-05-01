"use client";
import Link from "next/link";
import { postData } from "@/utils/httpRequests/util";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

export default function SignUpPage() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const body = { userEmail: email, userPassword: password };
    const response = await postData(false, "api/signupUser", body);
    console.log(response);
    if (response.valid) {
      router.push("/home"); // Use router.push for navigation
    } else {
      toast.error(response.error);
    }
  };

  return (
    <div className="flex flex-row w-full h-screen items-center justify-center">
      <form
        className="flex flex-col w-full justify-center items-center md:w-1/2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-3/5 justify-center gap-5">
          <div>
            <p className="text-2xl text-left">Create an Account</p>
            <p className="text-left text-md text-slate-500">
              Get Started on Your Worksheet Journey
            </p>
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block text-left">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="border-2 border-slate-300 rounded-lg h-10 w-full text-black p-1"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="block text-left">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="border-2 border-slate-300 rounded-lg h-10 w-full text-black p-1"
              required
            />
            <label className="text-sm">
              Already Have an account?{" "}
              <Link href="/login" className="underline text-blue-600">
                Login
              </Link>
            </label>
            <button
              className="rounded-md mt-3 w-full items-center p-1 font-bold text-xl text-white bg-blue-500"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </div>
      </form>
      <div className="flex w-1/2 h-full p-4">
        <img src="/" className="rounded-xl" alt="img here" />
      </div>
    </div>
  );
}
