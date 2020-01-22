//@flow
import React, { useReducer, FC } from 'react';
import { validator, getErrorMessage } from './validator';
import PropTypes from 'prop-types';

export type TextInputProps = {
  id: String,
  name: String,
  label: String,
  type: 'text' | 'email' | 'number' | 'password' | 'url',
  required: Boolean,
  value: any,
  placeholder: String,
  min: Number,
  max: Number,
  onChange: (e: Event) => null
};

export type TextInputState = {
  value: any,
  valid: Boolean,
  touched: Boolean
};

export type Action = {
  type: String,
  payload: any
};

export function inputReducer(
  state: TextInputState,
  action: Action
): TextInputState {
  switch (action.type) {
    case 'TOUCHED':
      return { ...state, touched: true };
    case 'VALID':
      return { ...state, valid: true, error: '' };
    case 'INVALID_ERROR':
      return { ...state, valid: false, error: action.payload };
    case 'CHANGE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export interface DummyProps {
  textProp: string;
}

export const TextInput: FC<DummyProps> = (
  props: TextInputProps
): React.ReactNode => {
  const {
    id,
    name,
    label,
    type,
    required,
    value,
    onChange,
    placeholder,
    min,
    max
  } = props;

  const [state, dispatch] = useReducer(inputReducer, {
    value,
    valid: true,
    touched: false,
    error: ''
  });

  let hasErrorClass = '';
  if (state.touched && !state.valid) hasErrorClass = 'hasError';

  const validate = (value: String): void => {
    const val = value.trim();
    if (required && !validator('required', val)) {
      return dispatch({
        type: 'INVALID_ERROR',
        payload: getErrorMessage('required')
      });
    }
    if (type === 'email' && !validator('email', val)) {
      return dispatch({
        type: 'INVALID_ERROR',
        payload: getErrorMessage('email')
      });
    }

    if (type === 'url' && !validator('url', val)) {
      return dispatch({
        type: 'INVALID_ERROR',
        payload: getErrorMessage('url')
      });
    }

    if (type === 'number' && min !== undefined && !validator('min', val, min)) {
      return dispatch({
        type: 'INVALID_ERROR',
        payload: getErrorMessage('min', min)
      });
    }

    if (type === 'number' && max !== undefined && !validator('max', val, max)) {
      return dispatch({
        type: 'INVALID_ERROR',
        payload: getErrorMessage('max', max)
      });
    }

    return dispatch({ type: 'VALID' });
  };

  const onChangeHandler = (e: Event) => {
    validate(e.target.value);
    dispatch({ type: 'CHANGE', payload: { value: e.target.value } });
    onChange(e);
  };
  const onFocusHandler = (): void => dispatch({ type: 'TOUCHED' });
  const onBlurHandler = (e: Event): void => validate(e.target.value);

  return (
    <div className={`TextInput ${hasErrorClass}`}>
      <label htmlFor={id}>
        {label} {required ? <span>*</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={state.value}
        required={required}
        placeholder={placeholder}
        min={min}
        max={max}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        aria-errormessage={`error_${id}`}
        aria-required={required}
        aria-invalid={!state.valid}
      />
      <small id={`error_${id}`}>{state.error ? state.error : '\u00A0'}</small>
      {props.children}
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default TextInput;
