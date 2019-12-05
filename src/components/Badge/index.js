//@flow
import React from 'react';
import PropTypes from 'prop-types';
import { Size, SizeList, Variant, VariantList } from '../../scss/';

export type BadgeProps = {
  label: String,
  size: Size,
  variant: Variant
};

export function Badge(props: BadgeProps): React.ReactNode {
  const { size, variant, label } = props;
  const sizeClassName = size ? 'badge--' + size : '';
  const variantClassName = 'badge--' + variant;

  return (
    <span className={`badge ${variantClassName} ${sizeClassName}`}>
      {label}
    </span>
  );
}

Badge.defaultProps = {
  variant: 'default'
};

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(SizeList),
  variant: PropTypes.oneOf(VariantList)
};

export default Badge;
