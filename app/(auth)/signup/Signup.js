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
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <p className="text-5xl mb-10">(Title Here)</p>
      <form
        className="flex flex-col justify-center w-full md:w-1/5 gap-2 items-center p-4 md:p-0"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <label htmlFor="email" className="block text-left">
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="p-1 rounded h-10 w-full"
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="password" className="block text-left">
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="p-1 border-white rounded h-10 w-full"
            required
          />
          <label className="text-sm">
            Already Have an account?{" "}
            <Link href="/login" className="underline text-blue-600">
              Login
            </Link>
          </label>
        </div>

        <button
          className="border-2 rounded-lg mt-3 w-full items-center p-1"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
