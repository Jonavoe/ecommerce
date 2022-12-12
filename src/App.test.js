import { render, screen } from '@testing-library/react';
import App from './App';

test('Paginas', () => {
  render(<App />);
  const linkElement = screen.getByText("Inicio");
  expect(linkElement).toBeInTheDocument();
});
