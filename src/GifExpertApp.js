import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {

//   const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];
const [categories, setCategories] = useState(['One Punch']);

// const handleAdd = () => {
//     // setCategories( ['Shingeki no Kyojin', ...categories] );
//     setCategories( cats => [...cats, 'Shingeki no Kyojin'] );
// }

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr/>


        <ol>
            { categories.map( category => 
                // <li key={ category }> { category } </li>
                <GifGrid 
                key={ category }
                category={ category } 
                />
            )}
        </ol>
    </>
  )
}
