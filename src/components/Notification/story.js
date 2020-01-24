import React, { useRef, useState } from 'react';
import Notification from '.';
import docsMDX from './docs.mdx';
import { VariantList } from '../../scss/bridge';
import useAnimation from '../../hooks/useAnimation';

export default {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    docs: {
      page: docsMDX
    }
  }
};

export const Example = () => {
  return (
    <div className="container">
      <p>
        <Notification variant={'info'}>
          This is a <b>info</b> notification!
        </Notification>
      </p>
      <p>
        <Notification variant={'success'}>
          This is a <b>seccess</b> notification!
        </Notification>
      </p>
      <p>
        <Notification variant={'warning'}>
          This is a <b>warning</b> notification!
        </Notification>
      </p>
      <p>
        <Notification variant={'error'}>
          This is a <b>error</b> notification!
        </Notification>
      </p>
      <p>
        <Notification variant={'default'}>
          This is a <b>default</b> notification!
        </Notification>
      </p>
    </div>
  );
};

export const Variants = () => {
  return (
    <div className="container">
      <p>
        <Notification variant={'primary'}>
          This is a <b>primary</b> notification!
        </Notification>
      </p>
      <p>
        <Notification variant={'secondary'}>
          <h6>
            This is a <b>secondary</b> notification!
          </h6>
          <p>Notifications can habe has many content has required.</p>
        </Notification>
      </p>
      <p>
        <Notification variant={'tertiary'}>
          This is a <b>tertiary</b> notification!
        </Notification>
      </p>
      <p>
        <Notification variant={'quaternary'}>
          This is a <b>quaternary</b> notification!
        </Notification>
      </p>
    </div>
  );
};

export const Dismissal = () => {
  const [state, setState] = useState({ showReset: false });
  return (
    <div className="container">
      <p>
        <Notification
          variant={'success'}
          dismissal={true}
          onClose={(isVisible, setVisible) => {
            setState({ showReset: true, setVisible });
          }}
        >
          The data has ben updated!. (Click close)
        </Notification>
        {state.showReset && (
          <button
            onClick={() => {
              state.setVisible(true);
              setState({ showReset: false });
            }}
          >
            Reset
          </button>
        )}
      </p>
    </div>
  );
};

export const Stateless = () => {
  const [state, setState] = useState({
    show: true,
    message: 'An Initial Message',
    variant: 'warning'
  });
  return (
    <div className="container">
      <p>
        {state.show && (
          <Notification
            variant={state.variant}
            dismissal={true}
            stateless={true}
            onClose={() => {
              setState({ show: false });
            }}
          >
            {state.message}
          </Notification>
        )}
        {!state.show && (
          <button
            onClick={() => {
              setState({
                show: true,
                message: 'A new message',
                variant: 'success'
              });
            }}
          >
            Reset
          </button>
        )}
      </p>
    </div>
  );
};

export const Animated = () => {
  const ref = useRef();
  const callback = refEnd => {
    // eslint-disable-next-line no-console
    console.log('Animation Ended', refEnd.current);
  };
  const [done, reset] = useAnimation(ref, 'fadeInDown', callback);
  return (
    <div className="container">
      <Notification ref={ref} variant="success">
        Animation Test notification
      </Notification>
      {done && (
        <p>
          Animation Complete!{' '}
          <button
            onClick={() => {
              reset();
            }}
          >
            Play Again
          </button>
        </p>
      )}
    </div>
  );
};
