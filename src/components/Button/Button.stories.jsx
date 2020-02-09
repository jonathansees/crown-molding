import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';
import styles from '@sambego/storybook-styles';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    jsxDecorator,
    withKnobs,
    withA11y,
    styles({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }),
  ],
};

export const Default = () => (
  <Button>
    {text('Label', 'Submit')}
  </Button>
);
