import React, { Component } from 'react';
import { StyledHeader } from './Header.styled' 

export default class Header extends Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <StyledHeader>
        { children }
      </StyledHeader>
    )
  }
}
