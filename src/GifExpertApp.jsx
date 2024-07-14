import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [ categories , setCategories ] = useState([ 'One Punch' ]);
    
    const onAddCategory = ( newCategory ) => {

        if ( categories.includes(newCategory) ) return;
        
        // categories.push(newCategory); Asi no hay que hacerlo...
        setCategories([ newCategory, ...categories ]);
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>


        {/* Input */}
        <AddCategory 
            onNewCategory={  (value) => onAddCategory(value) }
        />

       
       
        {/* Listados de Gif */}
        { categories.map( ( category ) => (
                    <GifGrid key={ category } category={ category} />
                )) 
        }
           
        
            {/* Gif Item */}
    </>
  )
}
