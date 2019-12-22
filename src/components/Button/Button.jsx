import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledButton from './Button.styled';

export default class Button extends Component {
  render() {
    const {
      children,
    } = this.props;

    return (
      <StyledButton>
        { children }
      </StyledButton>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string,
};

Button.defaultProps = {
  children: 'Submit',
};
