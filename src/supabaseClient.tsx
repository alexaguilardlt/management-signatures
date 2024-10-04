import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yudguvycanctrubcasqa.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1ZGd1dnljYW5jdHJ1YmNhc3FhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYyMzA4MDksImV4cCI6MjA0MTgwNjgwOX0.VsDc42bTRHfc_VaQwK3R40NkKHH1wcZ1vNbBA5kEnj0'

export const supabase = createClient(supabaseUrl, supabaseKey)
