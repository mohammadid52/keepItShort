import { Typography } from 'antd';
import PropTypes from 'prop-types';

import React from 'react';

const { Title } = Typography;

const Text = ({
  type, level, editable, children, ...rest
}) => (
  <Title
    editable={editable}
    type={type}
    level={level}
    {...rest}
>

    {children}

  </Title>
);
Text.defaultProps = {
  type: 'primary',
  level: 1,
  editable: false,

};
Text.propTypes = {
  type: PropTypes.string,
  level: PropTypes.number,
  editable: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

export default Text;
