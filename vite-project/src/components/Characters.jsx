import React, { useState,useEffect } from 'react'


function Characters() {
const [characters, setCharacters] = useState([])

useEffect(()=>{
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=Game%of%thrones',{
        "method": "GET",
        "headers": {
            "Authorization": "Bearer APP_USR-619926955204064-052021-f3e0c5be667a978b686ada8a46958533-370993848"
        },
            
})
    .then(response => response.json())
    .then(data => setCharacters(data.results))

},[]);

return (
    <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
        

        {characters.map(character => (
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/5">
        <article key={character.id} className="overflow-hidden rounded-lg shadow-lg">
         <a href="#">
                <img alt={character.title} className="block h-auto w-full" src={character.thumbnail}/>
                </a>    

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            {character.title}
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        {character.price}
                    </p>
        </header>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                        <p class="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
  </div>      
  ))}
  
  </div>
  
  </div>
)
}



export default Characters
