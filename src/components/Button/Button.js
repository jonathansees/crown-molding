import React, { Component } from 'react';
import { StyledButton } from './Button.styled' 

export default class Button extends Component {
  render() {
    const {
      children
    } = this.props;

    return (
      <StyledButton>
        { children }
      </StyledButton>
    )
  }
}
