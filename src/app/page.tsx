// Componente SERVERC.

import CardCharacter from "./Components/CardCharacter";
import Navbar from "./Components/Navbar";

import { Character } from "./types";


export default async function Home() {

  //MANDAR A FETCH A BUSCAR NUESTROS PERSONAJES
  const resultado = await fetch('https://rickandmortyapi.com/api/character')
  const data = await resultado.json();
  console.log(data);
 
  const personajes = data.results;

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Holiwis</h1>
      {/* INGRESAR UNA NAVBAR (ES UN COMPONENTE NAVBAR) CON: ------------ RETO ------------
      nombre de la app
      2 hipervinculos:
      - Home
      - Favoritos

      TIENE QUE ESTAR ESTILIZADO CON TAILWIND
      */}

      <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-6">
          {personajes.map( (pj:Character) => { 
              return <CardCharacter key={pj.id} id={pj.id} nombre={pj.name} imagen={pj.image} estado={pj.status}/>
          })}
        </div>
    </div>
  );
}


//Admin3221_db
//https://bdwxyqjymrkuawrnbzjk.supabase.co/rest/v1/favoritos
//bdwxyqjymrkuawrnbzjk
//sb_publishable_Mc0xwtW4T9DBEOM8XiwD9g_UqJMies3