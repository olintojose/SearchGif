import React, { useState } from 'react';

import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {
    const [InputValue, setInputValue] = useState('')
    const handleInputChange= (e) => {
        setInputValue(e.target.value)
        console.log('HandreInputChange llamado')
    }

  
    
  
    const handleSubmit = (e) => {   
        e.preventDefault();
        console.log('handleSubmit');
        //console.log('submit hecho')
       // setCategories( [...categories,'HunterXHunter'] )  No tengo acceso a categories
       if ( InputValue.trim().length > 2) {
        setCategories ( cats => [ InputValue , ...cats ]);
        setInputValue('');
       }
      
    }
    return (
        <form onSubmit={ handleSubmit }>
          <input 
            type="text"
            value={ InputValue }
            onChange={handleInputChange}
          /> 
        </form>
    )
}


AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}