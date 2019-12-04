import React from 'react';
import Loader from '.';
import { render } from '@testing-library/react';

describe('Loader', () => {
  it('matches snapshot for bar', () => {
    const { container } = render(<Loader type="bar" />);
    expect(container).toMatchSnapshot('bar');
  });

  it('matches snapshot for spinner', () => {
    const { container } = render(<Loader type="spinner" />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot loading = false', () => {
    const { container } = render(<Loader type="bar" loading={false} />);
    expect(container).toMatchSnapshot();
  });
  it('matches snapshot loading = true', () => {
    const { container } = render(<Loader type="bar" loading={true} />);
    expect(container).toMatchSnapshot();
  });
});
