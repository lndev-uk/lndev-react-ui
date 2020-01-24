import React from 'react';
import Badge from '.';
import docsMDX from './docs.mdx';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: { docs: { page: docsMDX } }
};

export const Example = () => (
  <div className="container">
    <h1>
      Example heading <Badge variant="primary" label="Primary" />
    </h1>
    <h2>
      Example heading <Badge variant="secondary" label="Secondary" />
    </h2>
    <h3>
      Example heading <Badge variant="default" label="default" />
    </h3>
    <h4>
      Example heading <Badge variant="warning" label="Warning" />
    </h4>
    <h5>
      Example heading <Badge variant="success" label="Success" />
    </h5>
    <h6>
      Example heading <Badge variant="error" label="Error" />
    </h6>
  </div>
);

export const Variants = () => (
  <div className="container">
    <h3>UX</h3>
    <p>
      <Badge variant={'primary'} label={'primary'} />
    </p>
    <p>
      <Badge variant={'secondary'} label={'secondary'} />
    </p>
    <p>
      <Badge variant={'tertiary'} label={'tertiary'} />
    </p>
    <p>
      <Badge variant={'quaternary'} label={'quaternary'} />
    </p>
    <h3>UI</h3>
    <p>
      <Badge variant={'default'} label={'default'} />
    </p>
    <p>
      <Badge variant={'info'} label={'info'} />
    </p>
    <p>
      <Badge variant={'success'} label={'success'} />
    </p>
    <p>
      <Badge variant={'warning'} label={'warning'} />
    </p>
    <p>
      <Badge variant={'error'} label={'error'} />
    </p>
  </div>
);

export const Sizes = () => (
  <div className="container">
    <p>
      <Badge size={'xs'} label={'xs'} /> Extra Small
    </p>
    <p>
      <Badge size={'sm'} label={'sm'} /> Small
    </p>
    <p>
      <Badge size={'md'} label={'md'} /> Meddium
    </p>
    <p>
      <Badge size={'lg'} label={'lg'} /> Large
    </p>
    <p>
      <Badge size={'xl'} label={'xl'} /> Extra Large
    </p>
  </div>
);
