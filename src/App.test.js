import { render, screen } from '@testing-library/react';
import INICIO from './comoponentes/inicio';

test('inicio', () => {
  render(<INICIO />);
  const linkElement = screen.getByText('INICIO');
  expect(linkElement).toBeInTheDocument();
});
