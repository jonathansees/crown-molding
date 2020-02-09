import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import config from '../../config';
import Themes from '../../utils/themes';
import { secondaryColor, bgColor } from '../../utils/colors';

const colorProperties = (background, color, border) => css`
  background: ${background};
  color: ${color};
  border: 2px solid ${border};
`;

const handleTypeColor = (type) => {
  switch (type) {
    case 'inverse':
      return colorProperties(bgColor, secondaryColor, secondaryColor);
    case 'transparent':
      return colorProperties('transparent', bgColor, bgColor);
    default:
      return colorProperties(secondaryColor, bgColor, secondaryColor);
  }
};

const StyledButton = styled.button`
  border-radius: 8px;
  display: inline-block;
  padding: 5px 20px;
  margin: 10px;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  ${({ type }) => handleTypeColor(type)};
`;

StyledButton.propTypes = {
  type: PropTypes.oneOf(['inverse', 'transparent']),
  theme: PropTypes.shape({
    mode: PropTypes.oneOf(Themes),
  }),
};

StyledButton.defaultProps = {
  type: undefined,
  theme: config.defaultTheme,
};

export default StyledButton;
