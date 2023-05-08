import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cover from '../../components/Cover';

describe('Cover component test', () => {
  it('Heading renders', () => {
    render(<Cover />);
    const header = screen.getByText('Residential and Commercial Properties');
    expect(header).toBeInTheDocument();
  });

  it('Sub-heading renders', () => {
    render(<Cover />);
    const subheader = screen.getByText('Buy | Rent | Sell');
    expect(subheader).toBeInTheDocument();
  });
});
