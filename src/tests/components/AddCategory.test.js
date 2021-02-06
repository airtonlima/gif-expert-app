import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('debe de mostrar el component correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de cambiar la caja de texto', () => {
         const input = wrapper.find('input');
         const value = 'Hola Mundo';
         input.simulate('change', { target: { value } });
         expect( wrapper.find('p').text().trim() ).toBe(value);
    });

    test('No debe de postear la información ', () => {
        wrapper.find('form').simulate('subimit', { preventDefault() {} })
        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hello World';
        // 1. simular el inputChange
        wrapper.find('input').simulate('change', { target: { value }});
        // 2. simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        // 3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        // 4. el valor de input debe de estar ''
        expect( wrapper.find('input').prop('value') ).toBe('');
        
    });
});