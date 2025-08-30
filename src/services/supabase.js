import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nszkrgkrgqbrcnpvmdmd.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zemtyZ2tyZ3FicmNucHZtZG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0OTg0MDksImV4cCI6MjA3MjA3NDQwOX0.SCVXlNN73gE3OMeOVfZNoexRRVPIIYpqqbIPYDCkWoA";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
