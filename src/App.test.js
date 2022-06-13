import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Message mounted/i);
  expect(linkElement).toBeInTheDocument();
});
