import { supabase } from "utils/supabaseClient";

export async function createUserProfile(values) {
  // Check if 'values' is defined
  if (!values) {
    return false;
  }

  const { uuid, first_name, last_name } = values;

  // Check that all required fields are neither null nor undefined
  if (uuid && first_name && last_name) {
    const { data, error } = await supabase
      .from("profiles")
      .insert([
        {
          id: uuid,
          first_name,
          last_name,
        },
      ])
      .select();
    if (error) {
      return error;
    }
    return data;
  }

  // Return false if any of the fields is null or undefined
  return false;
}
