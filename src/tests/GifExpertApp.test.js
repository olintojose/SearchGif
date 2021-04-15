import React from 'react'

import { shallow } from 'enzyme'
import { GifExpertApp } from '../GifExpertApp'


describe('Pruebas en GifExpertApp', () => {
    test('Debe mostrarse correctamente', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect (wrapper).toMatchSnapshot();

    })

    test('Debe mostrar la lista de categorias', () => {
        
        const categories = ['Goku', 'Messi'];

        const wrapper = shallow(<GifExpertApp defaultCategories= {categories} />);

       // console.log(categories.length)

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrids').length).toBe(categories.length);
    })
    
    
})
