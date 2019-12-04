import React from 'react';
import { render } from '@testing-library/react';
import Button from '.';

describe('Button', () => {
  it('matches snapshot success', () => {
    const { container } = render(<Button type="primary" label="test label" />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot secondary', () => {
    const { container } = render(
      <Button type="secondary" label="test label" />
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot green', () => {
    const { container } = render(<Button type="green" label="test label" />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot red', () => {
    const { container } = render(<Button type="red" label="test label" />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot outlined', () => {
    const { container } = render(<Button type="outlined" label="test label" />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot transparent', () => {
    const { container } = render(
      <Button type="transparent" label="test label" />
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot htmlType submit', () => {
    const { container } = render(
      <Button type="transparent" htmlType="submit" label="test label" />
    );
    expect(container).toMatchSnapshot();
  });

  it('display correct text passed by label', () => {
    const { container } = render(<Button type="primary" label="test label" />);
    expect(container.querySelector('button').innerHTML).toBe('test label');
  });
});
