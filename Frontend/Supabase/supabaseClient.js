// supabaseClient.js
import { createClient } from "@supabase/supabase-js";
// Replace these values with your own Supabase project details
const superbaseUrl ='https://wxvetfhpqsetvqdaspsq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4dmV0ZmhwcXNldHZxZGFzcHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1MTIyMTYsImV4cCI6MjA1NjA4ODIxNn0.3vnkI3lxh8Lx0iH6QGlHELMvuBknTjHDm71vK0Oklos';

const supabase = createClient(superbaseUrl,supabaseKey );

export default supabase;
