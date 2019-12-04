//@flow
import React from 'react';
import PropTypes from 'prop-types';

type LoaderType = 'bar' | 'spinner';

export type LoaderProps = {
  type: LoaderType,
  loading: Boolean
};
export default function Loader(props: LoaderProps): React.ReactNode {
  const { type, loading } = props;
  if (loading) {
    if (type === 'bar') {
      return <div className="loadingBar"></div>;
    } else {
      return (
        <div className="loadingSpinner">
          <span className="loadingSpinner-inner"></span>
          <span className="loadingSpinner-inner"></span>
          <span className="loadingSpinner-inner"></span>
          <span className="loadingSpinner-inner"></span>
        </div>
      );
    }
  }
  return null;
}

Loader.defaultProps = {
  loading: true
};

Loader.propTypes = {
  loading: PropTypes.bool,
  type: PropTypes.oneOf(['bar', 'spinner'])
};
