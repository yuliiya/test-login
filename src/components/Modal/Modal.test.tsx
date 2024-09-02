import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, vi } from 'vitest';

import { Modal } from './Modal';

const title = 'Test Modal';
const content = 'Modal Content';

describe('Modal Component', () => {
  test('renders nothing when `open` is false', () => {
    const onClose = vi.fn();
    render(<Modal open={false} title={title} onClose={onClose} />);

    const modalElement = screen.queryByText(title);
    expect(modalElement).not.toBeInTheDocument();
  });

  test('renders modal with title and children when `open` is true', () => {
    const onClose = vi.fn();
    render(
      <Modal open title={title} onClose={onClose}>
        <div>{content}</div>
      </Modal>,
    );

    const titleElement = screen.getByText(title);
    const contentElement = screen.getByText(content);

    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });

  test('calls `onClose` when close button in header is clicked', async () => {
    const onClose = vi.fn();
    render(<Modal open title={title} onClose={onClose} />);

    const closeButton = screen.getByRole('button', { name: /×/i });
    await userEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('calls `onClose` when Close button is footer clicked', async () => {
    const onClose = vi.fn();
    render(
      <Modal open title={title} onClose={onClose}>
        <div>{content}</div>
      </Modal>,
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    await userEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
