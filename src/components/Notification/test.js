import React from 'react';
import { render } from '@testing-library/react';
import Notification from '.';
import { VariantList } from '../../scss/bridge';

describe('Notification', () => {
  describe('Variant', () => {
    VariantList.forEach(variant => {
      it(`matches snapshot size: ${variant}`, () => {
        const { container } = render(
          <Notification variant={variant}>
            <p>This is a test {variant}</p>
          </Notification>
        );
        expect(container).toMatchSnapshot();
      });
    });
  });

  it('matches children', () => {
    const { getByText } = render(
      <Notification type="error">
        <p>This is a test</p>
      </Notification>
    );
    const element = getByText('This is a test');
    expect(element.localName).toBe('p');
  });
});
