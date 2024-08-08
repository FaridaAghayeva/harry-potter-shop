import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wfwhnvoaiamjqszagaky.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indmd2hudm9haWFtanFzemFnYWt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0MTAzMDcsImV4cCI6MjAzNzk4NjMwN30.0WFLn0epsqWel2JTkLKmNk-XTVgaxXfAqNyR68FQ0DQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
