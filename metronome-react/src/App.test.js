import { render, screen } from '@testing-library/react';
import Metrenome from './Metrenome';

test('renders learn react link', () => {
  render(<Metrenome />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
