import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.styled';

const Button = (props) => {
  const {
    children,
  } = props;

  return (
    <StyledButton>
      { children }
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
};

Button.defaultProps = {
  children: 'Release',
};

export default Button;
