import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  radios,
  withKnobs,
  text,
  boolean,
} from '@storybook/addon-knobs';
import { jsxDecorator } from 'storybook-addon-jsx';
import { withA11y } from '@storybook/addon-a11y';
import styles from '@sambego/storybook-styles';
import Themes from '../../utils/themes';
import Nav from './Nav';
import Container from '../Container/Container';
import Header from '../Header/Header';
import Button from '../Button/Button';

export default {
  title: 'Nav',
  component: Nav,
  decorators: [
    jsxDecorator,
    withKnobs,
    withA11y,
    styles({
      height: '150vh',
    }),
  ],
};

export const Default = () => (
  <ThemeProvider theme={{ mode: radios('Themes', Themes, Themes[0]) }}>
    <Nav
      sticky={boolean('sticky', false)}
      height={text('height', '40px')}
    >
      <Container>
        <Header
          type="transparent"
        >
          Left
        </Header>
        <div>
          <Button
            type="transparent"
          >
              Right
          </Button>
          <Button>Right</Button>
        </div>
      </Container>
    </Nav>
  </ThemeProvider>
);
