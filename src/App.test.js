import { render, screen } from '@testing-library/react';
import App from './App';
import { Greeting } from './Greeting';
jest.mock('./Greeting',()=>{
  return () =><h1>Mocked Greeting</h1>
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Lunch Tracker/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Greetings component', () => {
  render(<App />);
  const element = screen.getByText(/Mocked Greeting/i);
  expect(element).toBeInTheDocument();
});
