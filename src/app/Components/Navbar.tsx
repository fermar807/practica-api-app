import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-gray-800 p-4 shadow-lg border-b border-gray-700 mb-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-black text-white tracking-wider">
          RICK Y MORTY
        </h1>
        
        <Link 
          href="/favoritos" 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center gap-2"
        >
          <span>⭐️</span> Mis Favoritos
        </Link>
      </div>
    </nav>
  );
}