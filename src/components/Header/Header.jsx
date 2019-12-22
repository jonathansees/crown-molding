import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './Header.styled';

export default class Header extends Component {
  render() {
    const {
      children,
    } = this.props;

    return (
      <StyledHeader>
        { children }
      </StyledHeader>
    );
  }
}

Header.propTypes = {
  children: PropTypes.string,
};

Header.defaultProps = {
  children: 'Title',
};
