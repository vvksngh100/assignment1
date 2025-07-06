import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import FunctionalCounter from './components/FunctionalCounter';

test('renders counter app heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Assignment-2 Counter Application/i);
  expect(linkElement).toBeInTheDocument();
});



describe('FunctionalCounter Component', () => {
  test('renders initial count and children content', () => {
    render(
      <FunctionalCounter>
        <h2>Test Heading</h2>
      </FunctionalCounter>
    );

    expect(screen.getByText('Test Heading')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('-')).toBeDisabled();
    expect(screen.getByText('+')).toBeEnabled();
  });

  test('increments the count when + button is clicked', () => {
    render(<FunctionalCounter />);
    const plusButton = screen.getByText('+');
    fireEvent.click(plusButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('decrements the count when - button is clicked and is not disabled', () => {
    render(<FunctionalCounter />);
    const plusButton = screen.getByText('+');
    const minusButton = screen.getByText('-');

    fireEvent.click(plusButton); // count: 1
    fireEvent.click(minusButton); // count: 0

    expect(screen.getByText('0')).toBeInTheDocument();
    expect(minusButton).toBeDisabled(); // should be disabled again
  });

  test('does not decrement count below 0', () => {
    render(<FunctionalCounter />);
    const minusButton = screen.getByText('-');
    fireEvent.click(minusButton); // should not affect count
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
