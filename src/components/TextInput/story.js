import React from 'react';
import TextInputComponent from '.';

export default {
  title: 'Input'
};

export const TextInput = () => (
  <div className="container">
    <h1>Form input</h1>
    <hr />
    <TextInputComponent label="First Name" type="text" />
  </div>
);
