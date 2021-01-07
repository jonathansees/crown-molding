import React from 'react';
import { ThemeProvider } from 'styled-components';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import themes from '../../utils/themes/utils/keys';
import config from '../../config';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    jsxDecorator,
    withKnobs,
    withA11y,
    centered,
  ],
};

export const Default = () => (
  <ThemeProvider theme={{ mode: select('Theme', themes, config.theme.mode) }}>
    <div>
      <Button size="large">
        {text('Label', 'Submit')}
      </Button>
      <Button size="medium">
        {text('Label', 'Submit')}
      </Button>
      <Button size="small">
        {text('Label', 'Submit')}
      </Button>
      <Button invert size="large">
        {text('Label', 'Submit')}
      </Button>
      <Button invert size="medium">
        {text('Label', 'Submit')}
      </Button>
      <Button invert size="small">
        {text('Label', 'Submit')}
      </Button>
    </div>
    <div>
      <Button variant="passive" size="large">
        {text('Label', 'Submit')}
      </Button>
      <Button variant="passive" size="medium">
        {text('Label', 'Submit')}
      </Button>
      <Button variant="passive" size="small">
        {text('Label', 'Submit')}
      </Button>
      <Button invert variant="passive" size="large">
        {text('Label', 'Submit')}
      </Button>
      <Button invert variant="passive" size="medium">
        {text('Label', 'Submit')}
      </Button>
      <Button invert variant="passive" size="small">
        {text('Label', 'Submit')}
      </Button>
    </div>
    <div>
      <Button variant="special" size="large">
        {text('Label', 'Submit')}
      </Button>
      <Button variant="special" size="medium">
        {text('Label', 'Submit')}
      </Button>
      <Button variant="special" size="small">
        {text('Label', 'Submit')}
      </Button>
      <Button invert variant="special" size="large">
        {text('Label', 'Submit')}
      </Button>
      <Button invert variant="special" size="medium">
        {text('Label', 'Submit')}
      </Button>
      <Button invert variant="special" size="small">
        {text('Label', 'Submit')}
      </Button>
    </div>
    <div>
      <Button variant="destructive" size="large">
        {text('Label', 'Submit')}
      </Button>
      <Button variant="destructive" size="medium">
        {text('Label', 'Submit')}
      </Button>
      <Button variant="destructive" size="small">
        {text('Label', 'Submit')}
      </Button>
      <Button invert variant="destructive" size="large">
        {text('Label', 'Submit')}
      </Button>
      <Button invert variant="destructive" size="medium">
        {text('Label', 'Submit')}
      </Button>
      <Button invert variant="destructive" size="small">
        {text('Label', 'Submit')}
      </Button>
    </div>
  </ThemeProvider>
);
