import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
  decorators: [
    jsxDecorator,
    withKnobs,
    withA11y,
    centered,
  ],
};

export const Default = () => (
  <Header>
    {text('Label', 'Header')}
  </Header>
);
