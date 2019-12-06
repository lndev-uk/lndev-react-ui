//@flow
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '.';
import { VariantList, SizeList } from '../../scss';

describe('Button', () => {
  describe('Sizes', () => {
    SizeList.forEach(size => {
      it(`matches snapshot size: ${size}`, () => {
        const { container } = render(<Button size={size} label="test label" />);
        expect(container).toMatchSnapshot();
      });
    });
  });

  describe('Variants', () => {
    VariantList.forEach(variant => {
      it(`matches snapshot variant: ${variant}`, () => {
        const { container } = render(
          <Button variant={variant} label="test label" />
        );
        expect(container).toMatchSnapshot();
      });
    });
  });

  it('display correct text passed by label', () => {
    const { container } = render(<Button type="primary" label="test label" />);
    expect(container.querySelector('button').innerHTML).toBe('test label');
  });

  it('called onClick ', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button type="primary" onClick={onClick} label="test label" />
    );
    fireEvent.click(getByText('test label'));
    expect(onClick).toHaveBeenCalled();
  });
});
