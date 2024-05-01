"use client";
import { postData } from "@/utils/httpRequests/util";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Correct import path for useRouter
import toast from "react-hot-toast";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter(); // Initialize useRouter outside of the handleSubmit function

  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const body = { userEmail: email, userPassword: password };

    const response = await postData(false, "api/loginUser", body);
    console.log(response);
    if (response.valid) {
      // Adjusted property name for clarity
      router.push("/home");
      router.refresh();
    } else {
      toast.error(response.error);
    }
    setIsDisabled(false);
  };

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center md:bg-slate-50 p-10">
      <form
        className="flex flex-col justify-center gap-5 md:p-10 rounded-xl w-full md:w-1/3 bg-white shadow-xl"
        onSubmit={handleSubmit}
      >
        <div>
          <p className="text-2xl text-left">Sign in to Worksheet Wiz</p>
          <p className="text-left text-md text-slate-500">
            Generate Worksheets In Seconds
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
            className="border-2 border-slate-300 rounded-lg h-10 w-full text-black"
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
            className="border-2 border-slate-300 rounded-lg h-10 w-full text-black"
            required
          />

          <Link
            href="/forgot-password"
            className="underline text-blue-600 text-sm"
          >
            Forgot Password?
          </Link>

          <button
            className="rounded-md mt-3 w-full items-center p-1 font-bold text-xl text-white bg-blue-500"
            type="submit"
            disabled={isDisabled}
          >
            Continue
          </button>
          <label className="text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="underline text-blue-600">
              Sign up
            </Link>
          </label>
        </div>
      </form>
    </div>
  );
}
