//@flow
import React from 'react';
import PropTypes from 'prop-types';

type BadgeType =
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'success'
  | 'warning'
  | 'error';

type BadgeSize = 'big' | 'small';

export type BadgeProps = {
  label: String,
  size: BadgeSize,
  type: BadgeType
};

export function Badge(props: BadgeProps): React.ReactNode {
  const { size, type, label } = props;
  const sizeClassName = size ? 'badge--' + size : '';
  const typeClassName = type ? 'badge--' + type : '';
  return (
    <div className={`badge ${typeClassName} ${sizeClassName}`}>{label}</div>
  );
}

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['big', 'small']),
  type: PropTypes.oneOf([
    'primary',
    'secondary',
    'dark',
    'success',
    'warning',
    'error'
  ])
};

export default Badge;
