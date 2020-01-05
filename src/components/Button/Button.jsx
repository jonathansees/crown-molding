import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.styled';

const Button = (props) => {
  const {
    children,
  } = props;

  return (
    <StyledButton>
      Hello
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
};

Button.defaultProps = {
  children: 'Submit',
};

export default Button;
