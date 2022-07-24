import { render, screen } from '@testing-library/react';
import { Header } from "./Header";

test('Header renders code section', () => {
  render(<Header />);
  const codeMessage = screen.getByText("src/App.tsx");
  expect(codeMessage).toBeInTheDocument();
});
