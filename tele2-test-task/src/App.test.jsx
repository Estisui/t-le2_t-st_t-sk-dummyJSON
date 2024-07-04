import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });
  
  it('has pagination', () => {
    render(<App />);

    expect(screen.getByText(/Next/)).toBeInTheDocument();
    expect(screen.getByText(/Previous/)).toBeInTheDocument();
  })

  it('pagination works', async () => {
    const user = userEvent.setup()

    render(<App />);

    const nextButton = screen.getByText(/Next/);
    const prevButton = screen.getByText(/Prev/);

    await screen.findByText(/Essence/);
    user.click(nextButton);
    await screen.findByText(/Lemon/);
    user.click(prevButton);
    await screen.findByText(/Essence/);
  })

  it('has search', () => {
    render(<App />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText(/Search/)).toBeInTheDocument();
  })

  it('search works', async () => {
    const user = userEvent.setup()
    console.log(user);

    render(<App />);

    const searchInput = screen.getByRole('textbox');
    const searchButton = screen.getByText(/Search/);

    await user.type(searchInput, 'Iphone');
    expect(searchInput).toHaveValue('Iphone')
    user.click(searchButton);
    await screen.findByText(/iPhone X/);
  })
});