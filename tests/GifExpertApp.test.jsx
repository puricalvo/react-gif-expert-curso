import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp', () => {

    const newCategory = 'Saitama';
    

    test('debe hacer match con el snapshot', () => {

        const { container } = render( <GifExpertApp /> );
        expect( container ).toMatchSnapshot();
        // screen.debug();
    });

    test('debe agregar categorias nuevas', () => {


         render( <GifExpertApp  /> );
         const input = screen.getByRole('textbox'); 
         const form = screen.getByRole('form'); 

         fireEvent.input(input, { target: { value: newCategory } });
         fireEvent.submit(form); //agrega Saitama

         fireEvent.input(input, { target: { value: newCategory + '2' } });
         fireEvent.submit(form); //agrega Saitama2

         expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3);
        
    });

    test('debe no agregar una categoria que ya existe', () => {

        const inputValue = 'Saitama';
        const onAddCategory = jest.fn();

         render( <GifExpertApp  onAddCategory={ newCategory }/> );
         const input = screen.getByRole('textbox'); 
         const form = screen.getByRole('form');
         
         fireEvent.input(input, { target: { value: inputValue } });
         fireEvent.submit(form); //agrega Saitama

         fireEvent.input(input, { target: { value: newCategory } });
         fireEvent.submit(form); //intento agregar Saitama nuevamente

         expect( onAddCategory ).toHaveBeenCalledTimes(0);
    });
});