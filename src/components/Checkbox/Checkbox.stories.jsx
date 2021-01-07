import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import themes from '../../utils/themes/utils/keys';
import config from '../../config';
import Checkbox, { CheckboxItem } from './index';

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [
    jsxDecorator,
    withKnobs,
    withA11y,
    centered,
  ],
};

export const Default = () => (
  <ThemeProvider theme={{ mode: select('Theme', themes, config.theme.mode) }}>
    <Checkbox legend="Which bike did you like?" disabled>
      <CheckboxItem
        id="vehicle1"
        name="vehicle1"
        value="Bike"
      >
        Bike 1
      </CheckboxItem>
      <CheckboxItem
        id="vehicle2"
        name="vehicle2"
        value="Bike"
      >
        Bike 2
      </CheckboxItem>
      <CheckboxItem
        id="vehicle3"
        name="vehicle3"
        value="Bike"
      >
        Bike 3
      </CheckboxItem>
    </Checkbox>
  </ThemeProvider>
);

export const Vertical = () => (
  <ThemeProvider theme={{ mode: select('Theme', themes, config.theme.mode) }}>
    <Checkbox legend="Which bike did you like?" vertical>
      <CheckboxItem
        id="vehicle1"
        name="vehicle1"
        value="Bike"
      >
        Bike 1
      </CheckboxItem>
      <CheckboxItem
        id="vehicle2"
        name="vehicle2"
        value="Bike"
      >
        Bike 2
      </CheckboxItem>
      <CheckboxItem
        id="vehicle3"
        name="vehicle3"
        value="Bike"
      >
        Bike 3
      </CheckboxItem>
    </Checkbox>
  </ThemeProvider>
);
