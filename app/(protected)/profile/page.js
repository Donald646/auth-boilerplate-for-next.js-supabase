"use client";
import React from "react";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
export default function Profile() {
  const [error, setError] = useState("");
  const supabase = createClient();
  const router = useRouter();
  const signOut = async () => {
    const { error } = supabase.auth.signOut();

    if (error) {
      setError(error);
    }
    router.push("/");
  };
  return (
    <div>
      <p>{error}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
