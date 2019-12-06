//@flow

import React from 'react';
import PropTypes from 'prop-types';
import { Variant, VariantList } from '../../scss/bridge';


export type NotificationProps = {
  variant: Variant,
  children: React.ReactNode,
  className?: String
};

// onTimeout a function that if defined will use a timer to call the callback
export const Notification = React.forwardRef(function Notification(
  props: NotificationProps,
  ref: React.ref
): React.ReactNode {
  const { variant = 'default', children, className = '' } = props;
  const typeClassName = 'notification--' + variant;

  return (
    <div ref={ref} className={`notification ${typeClassName} ${className}`}>
      {children}
    </div>
  );
});

Notification.propTypes = {
  variant: PropTypes.oneOf(VariantList),
  children: PropTypes.node.isRequired
};

export default Notification;
