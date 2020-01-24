/**
  This is an awesome looking button for React.
*/
import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    const { label, onClick } = this.props;
    return <button onClick={onClick}>{label}</button>;
  }
}

Button.propTypes = {
  /**
    Label for the button.
  */
  label: PropTypes.string,

  /**
    Triggered when clicked on the button.
  */
  onClick: PropTypes.func
};
