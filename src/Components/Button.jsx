import { Button } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const StyledButton = ({
  type, shape, size, loading, children, ...rest
}) => (

  <Button type={type} shape={shape} size={size} loading={loading} {...rest}>
    {children}
  </Button>
);

StyledButton.defaultProps = {
  type: '',
  shape: '',
  size: 'middle',
  loading: false,
};
StyledButton.propTypes = {
  type: PropTypes.string,
  shape: PropTypes.string,
  size: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

export default StyledButton;
