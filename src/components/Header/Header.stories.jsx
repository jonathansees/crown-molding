import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import styles from '@sambego/storybook-styles';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
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
  <Header>
    {text('Label', 'Title')}
  </Header>
);
