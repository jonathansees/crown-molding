import React from 'react';
import {
  withKnobs,
  text,
  boolean,
  color,
} from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import styles from '@sambego/storybook-styles';
import Nav from './Nav';
import Container from '../Container/Container';

export default {
  title: 'Nav',
  component: Nav,
  decorators: [
    jsxDecorator,
    withKnobs,
    styles({
      height: '150vh',
    }),
  ],
};

export const Default = () => (
  <>
    <Nav
      color={color('color', undefined)}
      sticky={boolean('sticky', false)}
      height={text('height', undefined)}
    >
      <Container>
        <div>Left</div>
        <div>Right</div>
      </Container>
    </Nav>
  </>
);
