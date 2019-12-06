//@flow
import React from 'react';
import PropTypes from 'prop-types';
import { Size, SizeList, Variant, VariantList } from '../../scss/bridge';

type HtmlButtonType = 'button' | 'submit' | 'reset';

export type ButtonProps = {
  mobileFull: Boolean,
  label: String,
  size: Size,
  variant: Variant,
  type: HtmlButtonType,
  name: String,
  disabled: Boolean,
  onClick: (e: MouseEvent) => null
};

export default function Button(props: ButtonProps): React.ReactNode {
  const {
    variant,
    label,
    size,
    mobileFull,
    htmlType,
    name,
    disabled,
    onClick
  } = props;
  const onClickHandler = onClick ? onClick : (e: MouseEvent): null => null;
  const sizeClassName = size ? 'button--' + size : '';
  const variantClassName = 'button--' + variant;
  const mobileFullClassName = mobileFull ? 'button--mobileFull' : '';
  const nameAttr = name ? { name } : {};
  const disabledAttr = disabled ? { disabled: 'disabled' } : {};
  return (
    <button
      type={htmlType}
      {...nameAttr}
      {...disabledAttr}
      className={`button  ${variantClassName} ${sizeClassName} ${mobileFullClassName}`}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  variant: 'default',
  disabled: false
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  mobileFull: PropTypes.bool,
  size: PropTypes.oneOf(SizeList),
  variant: PropTypes.oneOf(VariantList),
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  name: PropTypes.string,
  disabled: PropTypes.bool
};
