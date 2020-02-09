import styled from 'styled-components';
import PropTypes from 'prop-types';
import config from '../../config';
import Themes from '../../utils/themes';
import { fontColor } from '../../utils/colors';

const StyledHeader = styled.h1`
  color: ${fontColor};
`;

StyledHeader.propTypes = {
  theme: PropTypes.shape({
    mode: PropTypes.oneOf(Themes),
  }),
};

StyledHeader.defaultProps = {
  theme: config.defaultTheme,
};

export default StyledHeader;
