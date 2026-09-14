import Link from "next/link";
import { supabase } from "../repositories/supabase";
import CardCharacter from "../Components/CardCharacter";
import Navbar from "../Components/Navbar";

export default async function page() {
  // Voy a obtener todos los personajes favoritos
  const { data: favoritos, error } = await supabase.from("favoritos").select("*");

  return (
    <div className="flex flex-col items-center min-h-screen bg-zinc-50 font-sans dark:bg-black p-4">
      <Navbar />

      <div className="w-full max-w-6xl mt-4">
        <Link 
          href="/" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl transition-colors"
        >
          ← Volver al inicio
        </Link>
      </div>

      {/* Contenedor Grid para los favoritos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-6">
        {favoritos?.map((pj) => { 
          return (
            <CardCharacter 
              key={pj.id} 
              id={pj.character_id} 
              nombre={pj.name} 
              imagen={pj.image} 
              estado={pj.status}
            />
          );
        })}
      </div>
    </div>
  );
}