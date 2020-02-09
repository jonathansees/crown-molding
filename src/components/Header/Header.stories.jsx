import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';
import styles from '@sambego/storybook-styles';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
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
  <Header>
    {text('Label', 'Header')}
  </Header>
);
