import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './Header.styled';

const Header = (props) => {
  const {
    children,
  } = props;

  return (
    <StyledHeader>
      { children }
    </StyledHeader>
  );
};

Header.propTypes = {
  children: PropTypes.string,
};

Header.defaultProps = {
  children: '',
};

export default Header;
