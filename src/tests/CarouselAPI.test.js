import { render, waitFor } from '@testing-library/react';
import ControlledCarousel from '../Components/Carousel';

test('API fetches top pick 1  ISBN 1856753530', async () => {
  const { getByText, getByAltText } = render(<ControlledCarousel />);
  await waitFor(() => getByText('TOP PICKS'));
  const bookTitleElement = getByText(/Book Title/i);
  expect(bookTitleElement).toBeInTheDocument();
  const bookImageElement = getByAltText(bookTitleElement.textContent);
  expect(bookImageElement).toBeInTheDocument();
  const book = getByText(/Book Title/i).closest('.carousel-item-content');
  const isbn = '1856753530';
  expect(book).toHaveAttribute('src', expect.stringContaining(`isbn:${isbn}`));
});
