import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import styles from '@sambego/storybook-styles';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [
    jsxDecorator,
    withKnobs,
    styles({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '90vh',
    }),
  ],
};

export const Default = () => (
  <Button>
    {text('Label', 'Submit')}
  </Button>
);
