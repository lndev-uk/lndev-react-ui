import React from 'react';
import Badge from '.';

export default { title: 'Badge' };

export const Types = () => (
  <div>
    <div>
      <Badge type="primary" label="Primary" />
    </div>
    <div>
      <Badge type="secondary" label="Secondary" />
    </div>
    <div>
      <Badge type="dark" label="Dark" />
    </div>
    <div>
      <Badge type="success" label="Success" />
    </div>
    <div>
      <Badge type="warning" label="Warning" />
    </div>
    <div>
      <Badge type="error" label="Error" />
    </div>
  </div>
);

export const Sizes = () => (
  <div>
    <div>
      <Badge size="small" label="Small" />
    </div>
    <div>
      <Badge label="Default" />
    </div>
    <div>
      <Badge size="big" label="Big" />
    </div>
  </div>
);
