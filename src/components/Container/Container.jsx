import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './Container.styled';

const Container = (props) => {
  const {
    children,
  } = props;

  return (
    <>
      <StyledContainer>
        { children }
      </StyledContainer>
    </>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
