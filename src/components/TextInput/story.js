import React from 'react';
import TextInput from '.';

export default {
  title: 'TextInput '
};
export const Number = () => {
  return (
    <div className="container">
      <h1>Number input</h1>
      <hr />
      <TextInput
        id="number_01"
        label="Number"
        type="number"
        required={true}
        placeholder="Number [0-10]"
        min={0}
        max={10}
      />
    </div>
  );
};
export const FormDemo = () => (
  <div className="container">
    <h1>Form input</h1>
    <hr />
    <TextInput
      id="first_name"
      label="First Name"
      type="text"
      required={true}
      placeholder="First Name"
    />
    <TextInput
      id="last_name"
      label="Last Name"
      type="text"
      required={true}
      placeholder="Last Name"
    />
    <TextInput
      id="email"
      label="Email"
      type="email"
      required={true}
      placeholder="email@example.com"
    />

    <TextInput
      id="url"
      label="Url"
      type="url"
      required={true}
      placeholder="http://www.example.com"
    >
      <legend>
        Please insert your callback url. This is a legend that explains in more
        details the field
      </legend>
    </TextInput>
    <TextInput
      id="password"
      label="Password"
      type="password"
      required={true}
      placeholder="password"
    />
  </div>
);
