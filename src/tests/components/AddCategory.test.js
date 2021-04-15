import React from 'react'

import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
   let wrapper = shallow ( <AddCategory setCategories= {setCategories}/>)

   beforeEach(() => {
       jest.clearAllMocks();
       wrapper = shallow ( <AddCategory setCategories= {setCategories}/>)
   })
    test('Debe de mostrarse correctamente', () => {
        
     
        expect( wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{target: {value } });
    })
    
    test('No debe postear la informacion con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });  
        expect( setCategories ).not.toHaveBeenCalled();
        
    })
    
    test('Debe de llamar la el setcategories y limpiar la caja de texto', () => {
        
        const value = 'hola mundo';

        // 1. simular el inputChange
        wrapper.find('input').simulate('change',{target: { value } });

        //2. simular el submit
        wrapper.find('form').simulate('submit',{ preventDefault(){} });

        //3. setCategories se debe haber llamado
        expect( setCategories ).toHaveBeenCalled();

        //4. Elvalor del input debe estar vacio ''

        expect( wrapper.find('input').prop('value')).toBe('');

    })
    

    
})
