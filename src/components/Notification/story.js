import React from 'react';
import Notification from '.';
import { VariantList } from '../../scss';

export default {
  title: 'Notification'
};

export const Variant = () => (
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
