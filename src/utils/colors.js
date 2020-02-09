import theme from 'styled-theming';
import Themes from './themes';

const [
  LIGHT,
  DARK,
] = Themes;

const light = {
  primaryColor: '#0b2647',
  secondaryColor: '#a79344',
  secondaryDarkColor: '#867c35',
  fontColor: '#424242',
  bgColor: '#fff',
  headingColor: '#292922',
};

const dark = {
  primaryColor: '#9A97F3',
  secondaryColor: '#818cab',
  secondaryDarkColor: '#818cab',
  fontColor: '#e1e1ff',
  bgColor: '#161625',
  headingColor: '#818cab',
};

const primaryColor = theme('mode', {
  [LIGHT]: '#0b2647',
  [DARK]: '#9A97F3',
});

const secondaryColor = theme('mode', {
  [LIGHT]: '#a79344',
  [DARK]: '#818cab',
});

const secondaryDarkColor = theme('mode', {
  [LIGHT]: '#867c35',
  [DARK]: '#818cab',
});

const fontColor = theme('mode', {
  [LIGHT]: '#424242',
  [DARK]: '#e1e1ff',
});

const bgColor = theme('mode', {
  [LIGHT]: '#fff',
  [DARK]: '#161625',
});

const headingColor = theme('mode', {
  [LIGHT]: '#292922',
  [DARK]: '#818cab',
});

export {
  primaryColor,
  secondaryColor,
  secondaryDarkColor,
  fontColor,
  bgColor,
  headingColor,
  light,
  dark,
};
