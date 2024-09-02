import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { createRef } from 'react';

import { Button } from './Button';

describe('Button component', () => {
  test('renders the button with children', () => {
    render(<Button>Click me</Button>);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('applies the correct class names based on className', () => {
    const { container } = render(
      <Button variant="secondary" className="custom-class">
        Click me
      </Button>,
    );

    const buttonElement = container.querySelector('button');
    expect(buttonElement).toHaveClass('custom-class');
  });

  test('shows the spinner when loading is true', () => {
    const { getByText } = render(<Button loading>Click me</Button>);

    const spinnerElement = getByText('Loading...');
    expect(spinnerElement).toBeInTheDocument();
  });

  test('does not show children when loading is true', () => {
    render(<Button loading>Click me</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).not.toHaveTextContent('Click me');
  });

  test('renders children when loading is false', () => {
    render(<Button loading={false}>Click me</Button>);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('forwards the ref to the button element', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click me</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  test('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    await userEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
