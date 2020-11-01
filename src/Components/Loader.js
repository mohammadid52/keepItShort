import { Spin } from 'antd';
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const Loader = ({ style, size, loading, color }) => {
  const antIcon = <LoadingOutlined size={size} spin={loading} />;
  switch (style) {
    case 'normal':
      return <Spin indicator={antIcon} style={{ color }} />;
    case 'circle':
      return <Spin style={{ color }} />;
    default:
      return <Spin indicator={antIcon} />;
  }
};

export default Loader;

Loader.defaultProps = {
  size: 'default',
  style: 'normal',
  color: 'white',
};
Loader.propTypes = {
  size: PropTypes.oneOf(['small', 'default', 'large']),
  style: PropTypes.oneOf(['normal', 'circle']),
  loading: PropTypes.bool.isRequired,
  color: PropTypes.string,
};
