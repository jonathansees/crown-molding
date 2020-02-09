import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.styled';

const Button = (props) => {
  const {
    children,
    type,
  } = props;

  return (
    <StyledButton type={type}>
      { children }
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.oneOf(['inverse', 'transparent']),
};

Button.defaultProps = {
  children: 'Submit',
  type: undefined,
};

export default Button;
