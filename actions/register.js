import { supabase } from "utils/supabaseClient";

export async function userRegisterWithEmail({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email: "example@email.com",
    password: "example-password",
  });
  if (error) {
    return error;
  }
  return data;
}

export async function userRegisterWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
}
