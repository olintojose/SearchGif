import React from 'react'
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs'
 import { GifGridItem } from './GifGridItem';

export const GifGrids = ({category }) => {


    const  { data:images, loading }= useFetchGifs(category);


    return (
        <>
        <h3 className="animate__animated animate__bounce">{category}</h3>

        <div className="card-grid animate__animated animate__fadeIn">
          
          { loading && <p className="animate__animated animate__flash">Loading</p> }
            
               {
                   images.map ((img ) => (
                      <GifGridItem  
                      key={ img.id }
                         { ...img } 
                      />
                   ))
               }
            

        </div>
        </>
    )
}

GifGrids.propTypes= {
    category: PropTypes.string.isRequired
}
