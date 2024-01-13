import { supabase } from "utils/supabaseClient";

export async function getGymSessions(user_id) {
  if (user_id) {
    let { data: gym_sessions, error } = await supabase
      .from("gym_sessions")
      .select("*")
      .eq("user_id", user_id);

    if (error) {
      return error;
    }
    return gym_sessions;
  }
  return false;
}
