import React from 'react';
import { render } from '@testing-library/react';
import Badge from '.';

describe('Badge', () => {
  it('matches snapshot success', () => {
    const { container } = render(<Badge type="primary" label="test label" />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot secondary', () => {
    const { container } = render(<Badge type="secondary" label="test label" />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot dark', () => {
    const { container } = render(<Badge type="dark" label="test label" />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot success', () => {
    const { container } = render(<Badge type="success" label="test label" />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot warning', () => {
    const { container } = render(<Badge type="warning" label="test label" />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot error', () => {
    const { container } = render(<Badge type="error" label="test label" />);
    expect(container).toMatchSnapshot();
  });

  it('display correct text passed by label', () => {
    const { getByText } = render(<Badge type="error" label="test label" />);
    expect(getByText('test label').innerHTML).toBe('test label');
  });
});
