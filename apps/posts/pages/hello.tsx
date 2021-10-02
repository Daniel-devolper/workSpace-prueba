import { useState } from 'react';

export default function Page(){
    
    const [number, setNumber] = useState(0)
    return(
        <main>
            {/*se le asigna un nombre para acceder por data-cy como un id  */}
            <h1 data-cy="hello">Hello from posts</h1> 
            <h1 data-cy="counter">{number}</h1>
            <button onClick={()=> setNumber(number + 1)} data-cy="btn-counter">Incrementar</button>
        </main>
    )
}