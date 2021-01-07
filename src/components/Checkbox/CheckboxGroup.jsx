import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, withTheme } from 'styled-components';
import config from '../../config';
import themes from '../../utils/themes/utils/keys';
import StyledCheckboxGroup, { Legend } from './CheckboxGroup.styled';

const Checkbox = (props) => {
  const {
    children,
    theme: themeProp,
    mode,
    variant,
    size,
    legend,
    vertical,
    disabled,
    className,
  } = props;

  const theme = {
    mode: mode || themeProp.mode || config.theme.mode,
    variant: variant || themeProp.variant || config.theme.variant,
    size: size || themeProp.size || config.theme.size,
  };

  return (
    <ThemeProvider theme={{ mode: theme.mode }}>
      <StyledCheckboxGroup vertical={vertical} className={className}>
        {legend && <Legend>{legend}</Legend>}
        {children.map((child) => React.cloneElement(child, {
          disabled,
          variant: theme.variant,
          size: theme.size,
        }))}
      </StyledCheckboxGroup>
    </ThemeProvider>
  );
};

Checkbox.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.shape({
    mode: PropTypes.oneOf(themes),
    variant: PropTypes.oneOf(['primary', 'passive', 'special', 'destructive']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
  }),
  mode: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  vertical: PropTypes.bool,
  legend: PropTypes.bool,
};

Checkbox.defaultProps = {
  children: null,
  theme: {},
  mode: null,
  variant: null,
  size: null,
  className: '',
  disabled: false,
  vertical: false,
  legend: undefined,
};

export default withTheme(Checkbox);
