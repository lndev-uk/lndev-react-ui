import React from 'react';
import Button from '.';
import { VariantList, SizeList } from '../../scss';

export default { title: 'Button' };

export const Variants = () => (
  <div className="container">
    <h1>Button Variants:</h1>
    {VariantList.map(variant => {
      return (
        <p key={variant}>
          <Button variant={variant} label={variant} />
        </p>
      );
    })}
  </div>
);

export const Sizes = () => (
  <div className="container">
    <h1>Button Sizes:</h1>
    {SizeList.map(size => {
      return (
        <p key={size}>
          <Button size={size} label={size} />
        </p>
      );
    })}
  </div>
);

export const mobileFull = () => (
  <div className="container">
    <div>Enable Chrome Dev Tools and simulate mobile/tabelt</div>
    <div>
      <Button mobileFull={true} label="Full Width Mobile" />
    </div>
  </div>
);
