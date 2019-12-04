//@flow

import React from 'react';
import PropTypes from 'prop-types';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

export type NotificationProps = {
  type: NotificationType,
  children: React.ReactNode
};
// onClick a funciton if defined add close button
// onTimeout a function that if defined will use a timer to call the callback
export default function Notification(
  props: NotificationProps
): React.ReactNode {
  const { type, children } = props;
  const typeClassName = type ? 'notification--' + type : '';
  return <div className={`notification ${typeClassName}`}>{children}</div>;
}

Notification.propTypes = {
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
  children: PropTypes.node.isRequired
};
