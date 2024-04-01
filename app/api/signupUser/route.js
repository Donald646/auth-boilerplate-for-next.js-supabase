export async function signup(formData) {}

import { createClient } from "@/utils/supabase/server";

export async function POST(req) {
  const body = await req.json();
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = { email: body.userEmail, password: body.userPassword };
  if (data.password.length < 6) {
    return Response.json({
      valid: false,
      error: "Password Must Be Atleast 6 Characters",
    });
  }

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    const polishedError = error.code.replaceAll("_", " ");
    return Response.json({ valid: false, error: polishedError });
  }
  return Response.json({ valid: true, error: null });
}
