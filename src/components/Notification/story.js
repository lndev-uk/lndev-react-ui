import React from 'react';
import Notification from '.';

export default {
  title: 'Notification'
};

export const Type = () => (
  <div>
    <div>
      <Notification type="success">
        This is a success notification!
      </Notification>
    </div>
    <div>
      <Notification type="info">This is a info notification!</Notification>
    </div>
    <div>
      <Notification type="warning">
        This is a warning notification!
      </Notification>
    </div>
    <div>
      <Notification type="error">This is a error notification!</Notification>
    </div>
  </div>
);
