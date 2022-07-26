import { render, screen } from '@testing-library/react';
import { Home } from "./Home";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => (jest.fn())
}));