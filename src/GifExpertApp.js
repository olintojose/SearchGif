import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrids } from './components/GifGrids';

export const GifExpertApp = ({ defaultCategories = [] }) => {
const [categories, setCategories] = useState( defaultCategories );


    return ( 
        <>
       
        <h2 className="animate__animated animate__flipInX">Search Gif</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr/>
        
        <ol>
            {
                categories.map(category => 
                  <GifGrids 
                   key={category}
                   category={category} />
                )
            }
        </ol>
        </>
     );
}
