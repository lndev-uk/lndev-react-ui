//@flow
import React from 'react';
import PropTypes from 'prop-types';

type ButtonType =
  | 'primary'
  | 'secondary'
  | 'green'
  | 'red'
  | 'outlined'
  | 'transparent';

type ButtonSize = 'big' | 'small';
type HtmlButtonType = 'button' | 'submit' | 'reset';

export type ButtonProps = {
  mobileFull: Boolean,
  label: String,
  size: ButtonSize,
  type: ButtonType,
  htmlType: HtmlButtonType,
  name: String,
  disabled: Boolean
};

export default function Button(props: ButtonProps): React.ReactNode {
  const { type, label, size, mobileFull, htmlType, name, disabled } = props;
  const sizeClassName = size ? 'button--' + size : '';
  const typeClassName = type ? 'button--' + type : '';
  const mobileFullClassName = mobileFull ? 'button--mobileFull' : '';
  const nameAttr = name ? { name } : {};
  const disabledAttr = disabled ? { disabled: 'disabled' } : {};
  return (
    <button
      type={htmlType}
      {...nameAttr}
      {...disabledAttr}
      className={`button  ${typeClassName} ${sizeClassName} ${mobileFullClassName}`}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  disabled: false
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  mobileFull: PropTypes.bool,
  size: PropTypes.oneOf(['big', 'small']),
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'green',
    'red',
    'outlined',
    'transparent'
  ]),
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  name: PropTypes.string,
  disabled: PropTypes.bool
};
