import { createClient } from "@supabase/supabase-js";
// import "react-native-url-polyfill/auto";

const supabaseUrl = "https://mfvkxzdvpnusajkzwmfm.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mdmt4emR2cG51c2Fqa3p3bWZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMTcyNDcsImV4cCI6MjA1NTg5MzI0N30.I88cLFh3JadyfYVNqwkEcw73Dfaie3B6mZ8vEKe8CZ4"


export const supabase = createClient(supabaseUrl,supabaseAnonKey)