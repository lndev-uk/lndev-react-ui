//@flow

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Variant, VariantList } from '../../scss/bridge';
import styled from 'styled-components';

export type NotificationProps = {
  variant?: Variant,
  children: React.ReactNode,
  className?: String,
  visible?: Boolean,
  dismissal?: Boolean,
  stateless?: Boolean,
  onClose?: () => void
};

const CloseButton = styled.button`
  ::before {
    content: 'x';
  }
  font-family: Arial;
  font-size: 2rem;
  color: white;
  border: none;
  background: transparent;
  position: absolute;
  right: 3rem;
  top: 1.5rem;
  padding: 0;
  :focus {
    color: white;
    border: none;
    background: transparent;
  }
  :hover {
    color: white;
    border: none;
    background: transparent;
  }
`;

// onTimeout a function that if defined will use a timer to call the callback
export const Notification = React.forwardRef(function Notification(
  props: NotificationProps,
  ref: React.ref
): React.ReactNode {
  const {
    variant = 'default',
    children,
    className,
    visible,
    dismissal,
    stateless,
    onClose = () => null
  } = props;

  const [isVisible, setVisible] = useState(visible);
  const typeClassName = 'notification--' + variant;

  if (isVisible) {
    return (
      <div ref={ref} className={`notification ${typeClassName} ${className}`}>
        {dismissal && (
          <CloseButton
            onClick={() => {
              if (!stateless) {
                setVisible(false);
                onClose(isVisible, setVisible);
              } else {
                onClose();
              }
            }}
          />
        )}
        {children}
      </div>
    );
  } else {
    return null;
  }
});

Notification.propTypes = {
  variant: PropTypes.oneOf(VariantList),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  visible: PropTypes.bool,
  dismissal: PropTypes.bool,
  onClose: PropTypes.func
};

Notification.defaultProps = {
  variant: 'default',
  className: '',
  visible: true,
  dismissal: false,
  stateless: false
};

export default Notification;
