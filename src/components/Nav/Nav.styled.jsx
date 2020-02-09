import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import config from '../../config';
import Themes from '../../utils/themes';
import { primaryColor, secondaryColor } from '../../utils/colors';
import variables from '../../utils/variables';

const sticky = css`
  position: fixed;
  transition: all .6s;
  opacity: ${(props) => (props.show ? 1 : 0)};
  z-index: ${(props) => (props.show ? 100 : -1)};
`;

const StyledNav = styled.div`
  top: 0;
  left: 0;
  background-color: ${primaryColor};
  color: ${secondaryColor};
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(props) => props.height || variables.height};
  ${(props) => props.sticky && sticky}
`;

StyledNav.propTypes = {
  theme: PropTypes.shape({
    mode: PropTypes.oneOf(Themes),
  }),
};

StyledNav.defaultProps = {
  theme: config.defaultTheme,
};

export default StyledNav;
