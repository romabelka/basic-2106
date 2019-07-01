import React from 'react';
import Review from './review.js';
import Enzyme, {mount} from 'enzyme';
import {restaurants} from '../fixtures';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter : new Adapter() });

const reviewTest = restaurants[0].reviews[0];
const container = mount( <Review review={reviewTest} /> );

describe('Review', () => { 
    it('should render stars of rating ', ()=>{
        expect( container.find('.ant-rate-star-full').length).toEqual(reviewTest.rating);
    })
});