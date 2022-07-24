import { render, screen } from '@testing-library/react';
import { Form } from "./Form";

test('Footer renders code section', () => {
  render(<Form />);
  const codeMessage = screen.getByText("src/App.tsx");
  expect(codeMessage).toBeInTheDocument();
});
