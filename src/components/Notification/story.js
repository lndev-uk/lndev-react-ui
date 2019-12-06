import React, { useRef } from 'react';
import Notification from '.';
import { VariantList } from '../../scss';
import useAnimation from '../../hooks/useAnimation';

export default {
  title: 'Notification'
};

export const Variant = () => {
  return (
    <div className="container">
      <h1>Notification Variants:</h1>

      {VariantList.map(variant => {
        return (
          <div key={variant}>
            <Notification variant={variant}>
              This is a <b>{variant}</b> notification!
            </Notification>
          </div>
        );
      })}
    </div>
  );
};

export const Animated = () => {
  const ref = useRef();
  const callback = (refEnd: React.ref) => {
    // eslint-disable-next-line no-console
    console.log('Animation Ended', refEnd.current);
  };
  const [done, reset] = useAnimation(ref, 'fadeIn', callback);
  return (
    <div className="container">
      <h1>Notification Animation:</h1>
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
