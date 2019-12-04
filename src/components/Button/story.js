import React from 'react';
import Button from '.';

export default { title: 'Button' };

export const Types = () => (
  <div>
    <div>
      <Button type="primary" label="Primary" />
    </div>
    <div>
      <Button type="secondary" label="Secondary" />
    </div>
    <div>
      <Button type="green" label="green" />
    </div>
    <div>
      <Button type="red" label="red" />
    </div>
    <div>
      <Button type="outlined" label="outlined" />
    </div>
    <div>
      <Button type="transparent" label="transparent" />
    </div>
  </div>
);

export const Sizes = () => (
  <div>
    <div>
      <Button size="small" label="Small" />
    </div>
    <div>
      <Button label="Default" />
    </div>
    <div>
      <Button size="big" label="Big" />
    </div>
  </div>
);

export const mobileFull = () => (
  <div>
    <div>Enable Chrome Dev Tools and simulate mobile/tabelt</div>
    <div>
      <Button mobileFull={true} label="Full Width Mobile" />
    </div>
  </div>
);
