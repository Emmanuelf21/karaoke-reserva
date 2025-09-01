import { createClient } from '@supabase/supabase-js';

// Pegando as variáveis de ambiente
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Criando o cliente do Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
