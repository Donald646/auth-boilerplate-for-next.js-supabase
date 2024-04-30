"use client";
import React from "react";
import { createClient } from "@/utils/supabase/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const supabase = createClient();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const new_password = formData.get("new_password");
    const confirmed_password = formData.get("confirmed_password");
    if (new_password != confirmed_password) {
      toast.error("Passwords are not matching");
    }
    const { data, error } = await supabase.auth.updateUser({
      password: new_password,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Password Changed");
      router.push("/dashboard");
    }
  };
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-1/5 gap-2 "
      >
        <label className="text-left">New Password:</label>
        <input
          type="password"
          name="new_password"
          className="border-2 border-white rounded h-10 w-full text-black"
          required
        />
        <label className="text-left">Confirmed Password:</label>
        <input
          type="password"
          name="confirmed_password"
          className="border-2 border-white rounded h-10 w-full text-black"
          required
        />
        <button
          type="submit"
          className="border-2 rounded-lg mt-3 w-full items-center p-1"
        >
          Change Password
        </button>
      </form>
    </div>
  );
}
