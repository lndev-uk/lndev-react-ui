//@flow
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

type TextInputProps = {
  id: String,
  name: String,
  label: String,
  type: 'text' | 'email' | 'number',
  required: Boolean,
  value: any,
  onChange: (e: Event) => null
};

type TextInputState = {
  value: any,
  valid: Boolean,
  touched: Boolean
};

type Action = {
  type: String,
  payload: any
};

function inputReducer(state: TextInputState, action: Action): TextInputState {
  switch (action.type) {
    case 'TOUCHED':
      return { ...state, touched: true };
    case 'CHANGE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default function TextInput(props: TextInputProps): React.ReactNode {
  const { id, name, label, type, required, value, onChange } = props;

  const [state, dispatch] = useReducer(inputReducer, {
    value,
    valid: true,
    touched: false
  });

  let hasErrorClass = '';
  if (state.touched && !state.valid) hasErrorClass = 'hasError';

  const validate = (value: String): Boolean => {
    return value === '12345';
  };

  return (
    <div className={`TextInput ${hasErrorClass}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        value={state.value}
        onFocus={() => {
          dispatch({ type: 'TOUCHED' });
        }}
        onChange={e => {
          dispatch({
            type: 'CHANGE',
            payload: { value: e.target.value, valid: validate(e.target.value) }
          });
          onChange(e);
        }}
        required={required}
        name={name}
        id={id}
      />
    </div>
  );
}
