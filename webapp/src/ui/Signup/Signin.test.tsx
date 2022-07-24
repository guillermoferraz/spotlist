import { render, screen } from '@testing-library/react';
import { Signup } from "./Signup";

test('Home renders code section', () => {
  render(<Signup />);
  const codeMessage = screen.getByText("src/App.tsx");
  expect(codeMessage).toBeInTheDocument();
});
