import {createClient} from '@supabase/supabase-js'

const supabaseUrl = "https://bdwxyqjymrkuawrnbzjk.supabase.co";
const supabaseKey = "sb_publishable_Mc0xwtW4T9DBEOM8XiwD9g_UqJMies3";

//Creamos la conexion con supabase

export const supabase = createClient(supabaseUrl,supabaseKey);