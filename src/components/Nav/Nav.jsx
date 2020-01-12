import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { StyledNav, StyledStickyNav } from './Nav.styled';
import variables from '../../utils/variables';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    const show = window.pageYOffset > 30;

    this.setState({
      show,
    });
  }

  render() {
    const {
      children,
      sticky,
      height,
      color,
    } = this.props;

    const {
      show,
    } = this.state;

    const theme = {
      primary: 'mediumseagreen',
    };

    return (
      <>
        <ThemeProvider theme={theme}>
          <StyledNav
            height={height}
            color={color}
          >
            { children }
          </StyledNav>
          {sticky ? (
            <StyledStickyNav
              height={height}
              color={color}
              show={show}
            >
              { children }
            </StyledStickyNav>
          ) : null}
        </ThemeProvider>
      </>
    );
  }
}

Nav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  sticky: PropTypes.bool,
  height: PropTypes.string,
  color: PropTypes.string,
};

Nav.defaultProps = {
  sticky: false,
  height: variables.navHeight,
  color: variables.cream,
};

export default Nav;
