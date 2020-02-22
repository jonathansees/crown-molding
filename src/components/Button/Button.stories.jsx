import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
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
  <>
    <Button>
      {text('Label', 'Submit')}
    </Button>
    <Button type="transparent">
      {text('Label', 'Submit')}
    </Button>
  </>
);
