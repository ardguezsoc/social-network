import React from 'react';
import { describe, test, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  const userItem = {
    id: 123,
    name: 'Adrian',
    userName: 'ars',
  };

  test('Renders the user item details correctly', () => {
    render(<Card userItem={userItem} />);

    const name = screen.getByText('Adrian');
    const userName = screen.getByText('ars');
    const viewMoreButton = screen.getByRole('button');

    expect(name).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(viewMoreButton).toBeInTheDocument();
  });

  test('Calls the navigate function when the "Go to profile" button is clicked', () => {
    const navigateMock = vi.fn();
    vi.mock('react-router-dom', () => ({
      useNavigate: () => navigateMock,
    }));

    render(<Card userItem={userItem} navigateTo={navigateMock} />);

    const viewMoreButton = screen.getByRole('button');
    fireEvent.click(viewMoreButton);

    expect(navigateMock).toHaveBeenCalledWith('/users/123');
  });
});
