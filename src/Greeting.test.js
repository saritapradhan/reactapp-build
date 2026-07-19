import { render, screen,fireEvent } from '@testing-library/react';
import { Greeting } from './Greeting';

test('renders learn react link', () => {
  render(<Greeting name="John"/>);
  const linkElement = screen.getByText(/Welcome John/i);
  expect(linkElement).toBeInTheDocument();
});
test('check button exist with text',() => {
    render(<Greeting name="John"/>);
    const linkElement = screen.getByRole('button');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent('Click');
});
test('button click calls the handler', () => {
    const mockOnClick = jest.fn();
    render(<Greeting name="John" onClick={mockOnClick}/>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    
  });