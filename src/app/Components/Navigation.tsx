interface NavigationProps{
    totalPages: number;
}

export default function Navigation({totalPages}: NavigationProps) {
    const pages:number[]=[];

    for (let i=1; i<=totalPages; i++){
        pages.push(i);
    }

  return (
    <div>
        Total de paginas: {totalPages}
        <div>
            {pages.map((numero) => (
                <a key={numero} href={`/?page=${numero}`} className="text-blue-500 hover:underline">
                    {numero}
                </a>
            ))}
        </div>
    </div>
  )
}
 
 