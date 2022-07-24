import { render, screen } from '@testing-library/react';
import { Signin } from "./Signin";

test('Home renders code section', () => {
  render(<Signin />);
  const codeMessage = screen.getByText("src/App.tsx");
  expect(codeMessage).toBeInTheDocument();
});
