import React from 'react'
import '@testing-library/jest-dom';

import { shallow } from "enzyme"
import { GifGrids } from "../../components/GifGrids"
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')


describe('Pruebas en <GifGrids />', () => {

    const category = 'Goku';
           

    test('Debe mostrar el componente GifGrids correctamente', () => {


        const gifs = [];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        })

        const wrapper = shallow(<GifGrids category={ category }/> )  
        expect (wrapper).toMatchSnapshot();
        
    })

    test('Debe mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrids category={ category }/> )
       // expect (wrapper).toMatchSnapshot();

       expect( wrapper.find('p').exists()).toBe(false);
       expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
    })
    
})