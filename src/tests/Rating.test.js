import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Rating from '../Components/Rating';

describe('Rating', () => {
  it('must allow user to select a rating out of 5', () => {
    const { getByTestId } = render(<Rating />);
    const star3 = getByTestId('star-3'); 
    fireEvent.click(star3);
    const ratingContainer = getByTestId('rating-container');
    expect(ratingContainer).toHaveTextContent('Rating: 3');
  });

  it('must allow user to change rating', () => {
    const { getByTestId } = render(<Rating />);
    const star3 = getByTestId('star-3'); 
    fireEvent.click(star3);
    const star5 = getByTestId('star-5'); 
    fireEvent.click(star5);
    const ratingContainer = getByTestId('rating-container');
    expect(ratingContainer).toHaveTextContent('Rating: 5');
  });
});
