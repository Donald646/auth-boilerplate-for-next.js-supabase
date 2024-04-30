"use client";
import React from "react";

import { createClient } from "@/utils/supabase/client";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const supabase = createClient();

  const handleSubmit = async (e) => {

    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    console.log(data);
    console.log(error);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Email Sent");
    }
  };
  
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-1/5 gap-2 "
      >
        <label className="text-left">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          className="border-2 border-white rounded h-10 w-full text-black"
          required
        />
        <button
          type="submit"
          className="border-2 rounded-lg mt-3 w-full items-center p-1"
        >
          Send Reset Email
        </button>
      </form>
    </div>
  );
}
