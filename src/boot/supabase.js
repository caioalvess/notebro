import { createClient } from "@supabase/supabase-js";
import { useAuthStore } from "src/stores/auth-store";

const supabaseUrl = "https://hjrhtqpywpgowlonewzz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhqcmh0cXB5d3Bnb3dsb25ld3p6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTYwMzg4NzksImV4cCI6MTk3MTYxNDg3OX0.UIb8Ptvf63aD9IHKNOyhP3z1AIUDf1Ge7XnQZolWfgc";

const supabase = createClient(supabaseUrl, supabaseKey);
const useAuth = useAuthStore();
supabase.auth.onAuthStateChange((event, session) => {
  useAuth.user = session?.user || null;
});

console.log("init supabase: ", supabase);

export default function useSupabase() {
  return { supabase };
}
