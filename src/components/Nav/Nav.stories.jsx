import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  color,
} from '@storybook/addon-knobs';
import styles from '@sambego/storybook-styles';
import Nav from './Nav';
import Container from '../Container/Container';

const stories = storiesOf('Nav', module);

stories.addDecorator(styles({
  height: '150vh',
}));
stories.addDecorator(withKnobs);
stories.addWithJSX('Nav', () => (
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
));
