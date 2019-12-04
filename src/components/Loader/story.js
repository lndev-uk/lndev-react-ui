import React from 'react';
import Loader from '.';

export default {
  title: 'Loader'
};

export const Bar = () => (
  <div>
    <Loader type="bar" loading={true} />
  </div>
);

export const Spinner = () => (
  <div>
    <div>
      <Loader type="spinner" loading={true} />
    </div>
  </div>
);
