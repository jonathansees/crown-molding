import React from 'react';
import PropTypes from 'prop-types';
import StyledNav from './Nav.styled';
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
    const show = window.pageYOffset > 40;

    this.setState({
      show,
    });
  }

  render() {
    const {
      children,
      sticky,
      height,
    } = this.props;

    const {
      show,
    } = this.state;

    return (
      <>
        <StyledNav
          height={height}
        >
          { children }
        </StyledNav>
        {sticky ? (
          <StyledNav
            height={height}
            sticky={sticky}
            show={show}
          >
            { children }
          </StyledNav>
        ) : null}
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
};

Nav.defaultProps = {
  sticky: false,
  height: variables.navHeight,
};

export default Nav;
