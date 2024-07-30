import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://uzanwwhvcaizmfrympkf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6YW53d2h2Y2Fpem1mcnltcGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE3Mjc0OTEsImV4cCI6MjAzNzMwMzQ5MX0.5RBpMjPg3PgR6-Itb84Vt2XKADj113A7X_a1pH3h_UQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
