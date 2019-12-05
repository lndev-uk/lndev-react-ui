//@flow

import React from 'react';
import PropTypes from 'prop-types';
import { Variant, VariantList } from '../../scss/';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export type NotificationProps = {
  variant: Variant,
  children: React.ReactNode
};
// onClick a funciton if defined add close button
// onTimeout a function that if defined will use a timer to call the callback
export default function Notification(
  props: NotificationProps
): React.ReactNode {
  const { variant, children } = props;
  const typeClassName = 'notification--' + variant;
  return <div className={`notification ${typeClassName}`}>{children}</div>;
}
Notification.defaultProps = { variant: 'default' };

Notification.propTypes = {
  variant: PropTypes.oneOf(VariantList),
  children: PropTypes.node.isRequired
};
