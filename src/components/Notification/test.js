import React from 'react';
import { render } from '@testing-library/react';
import Notification from '.';

describe('Notification', () => {
  it('matches snapshot success', () => {
    const { container } = render(
      <Notification type="success">
        <p>This is a test</p>
      </Notification>
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot info', () => {
    const { container } = render(
      <Notification type="info">
        <p>This is a test</p>
      </Notification>
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot info', () => {
    const { container } = render(
      <Notification type="warning">
        <p>This is a test</p>
      </Notification>
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot info', () => {
    const { container } = render(
      <Notification type="error">
        <p>This is a test</p>
      </Notification>
    );
    expect(container).toMatchSnapshot();
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
