import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import themes from '../../utils/themes/utils/keys';
import config from '../../config';
import Select, { Option } from './index';

export default {
  title: 'Select',
  component: Select,
  decorators: [
    jsxDecorator,
    withKnobs,
    withA11y,
    centered,
  ],
};

export const Default = () => (
  <ThemeProvider theme={{ mode: select('Theme', themes, config.theme.mode) }}>
    <Select
      placeholder="Genre"
      size="small"
      name="genres"
      id="genres"
    >
      <Option value="horror">Horror</Option>
      <Option value="action">Action</Option>
      <Option value="comedy">Comedy</Option>
    </Select>
  </ThemeProvider>
);
