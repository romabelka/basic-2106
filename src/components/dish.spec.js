import React from 'react';
import Dish  from './dish.js';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { restaurants } from "../fixtures";

Enzyme.configure( { adapter : new Adapter() } );

const dishTest = restaurants[0].menu;
const container = mount( <Dish {...dishTest} /> );

describe( 'Dish', ()=> {

    it('Should be add elem to all items', () => {
        expect( +container.find('[data-id="itemCnt"]').text() ).toEqual(0);

        container
            .find('[data-id="addItem"]')
            .at(0)
            .simulate("click");

        expect( +container.find('[data-id="itemCnt"]').text() ).toEqual(1);
    });

    it('Should be remove elem to all items', () => {
        expect( +container.find('[data-id="itemCnt"]').text() ).toEqual(1);

        container
            .find('[data-id="removeItem"]')
            .at(0)
            .simulate("click");

        expect( +container.find('[data-id="itemCnt"]').text() ).toEqual(0);
    });

});