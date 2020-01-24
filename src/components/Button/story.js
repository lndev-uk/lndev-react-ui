import React from 'react';
import Button from '.';
import { VariantList, SizeList } from '../../scss/bridge';
import docsMDX from './docs.mdx';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: { docs: { page: docsMDX } }
};

export const Example = () => {
  return (
    <div className="container">
      <p>
        <Button variant={'info'} label="info" />
      </p>
      <p>
        <Button variant={'success'} label="success" />
      </p>
      <p>
        <Button variant={'warning'} label="warning" />
      </p>
      <p>
        <Button variant={'error'} label="error" />
      </p>
      <p>
        <Button variant={'default'} label="default" />
      </p>
    </div>
  );
};

export const Variants = () => {
  return (
    <div className="container">
      <p>
        <Button variant={'primary'} label="primary" />
      </p>
      <p>
        <Button variant={'secondary'} label="secondary" />
      </p>
      <p>
        <Button variant={'tertiary'} label="tertiary" />
      </p>
      <p>
        <Button variant={'quaternary'} label="quaternary" />
      </p>
    </div>
  );
};

export const Sizes = () => (
  <div className="container">
    <p>
      <Button size={'xs'} label={'xs'} /> Extra Small
    </p>
    <p>
      <Button size={'sm'} label={'sm'} /> Small
    </p>
    <p>
      <Button size={'md'} label={'md'} /> Meddium
    </p>
    <p>
      <Button size={'lg'} label={'lg'} /> Large
    </p>
    <p>
      <Button size={'xl'} label={'xl'} /> Extra Large
    </p>
  </div>
);

export const mobileFull = () => (
  <div className="container">
    <div>
      <Button mobileFull={true} label="Full Width Mobile" />
    </div>
  </div>
);
