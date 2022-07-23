import { render, screen } from '@testing-library/react';
import { Footer } from "./Footer";

test('Footer renders code section', () => {
  render(<Footer />);
  const codeMessage = screen.getByText("src/App.tsx");
  expect(codeMessage).toBeInTheDocument();
});
