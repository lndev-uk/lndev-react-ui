import React from 'react';
import { render } from '@testing-library/react';
import { SizeList, VariantList } from '../../scss/bridge';
import Badge from '.';

describe('Badge', () => {
  describe('Sizes', () => {
    SizeList.forEach(size => {
      it(`matches snapshot size: ${size}`, () => {
        const { container } = render(<Badge size={size} label="test label" />);
        expect(container).toMatchSnapshot();
      });
    });
  });

  describe('Variants', () => {
    VariantList.forEach(variant => {
      it(`matches snapshot variant: ${variant}`, () => {
        const { container } = render(
          <Badge variant={variant} label="test label" />
        );
        expect(container).toMatchSnapshot();
      });
    });
  });

  it('display correct label', () => {
    const { getByText } = render(<Badge type="error" label="test label" />);
    expect(getByText('test label').innerHTML).toBe('test label');
  });
});
