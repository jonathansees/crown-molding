import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import themes from '../../utils/themes/utils/keys';
import config from '../../config';
import Radio, { RadioItem } from './index';

export default {
  title: 'Radio',
  component: Radio,
  decorators: [
    jsxDecorator,
    withKnobs,
    withA11y,
    centered,
  ],
};

export const Default = () => (
  <ThemeProvider theme={{ mode: select('Theme', themes, config.theme.mode) }}>
    <Radio name="vehicle" legend="Which bike did you like?" disabled>
      <RadioItem
        id="vehicle1"
        value="Bike"
      >
        Bike 1
      </RadioItem>
      <RadioItem
        id="vehicle2"
        value="Bike"
      >
        Bike 2
      </RadioItem>
      <RadioItem
        id="vehicle3"
        value="Bike"
      >
        Bike 3
      </RadioItem>
    </Radio>
  </ThemeProvider>
);

export const Vertical = () => (
  <ThemeProvider theme={{ mode: select('Theme', themes, config.theme.mode) }}>
    <Radio
      value="vehicle1"
      name="vehicle"
      legend="Which bike did you like?"
      vertical
    >
      <RadioItem
        id="vehicle1"
        value="Bike"
      >
        Bike 1
      </RadioItem>
      <RadioItem
        id="vehicle2"
        value="Bike"
      >
        Bike 2
      </RadioItem>
      <RadioItem
        id="vehicle3"
        value="Bike"
      >
        Bike 3
      </RadioItem>
    </Radio>
  </ThemeProvider>
);
