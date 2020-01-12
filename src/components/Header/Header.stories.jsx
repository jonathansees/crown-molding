import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import styles from '@sambego/storybook-styles';
import Header from './Header';

const stories = storiesOf('Header', module);

stories.addDecorator(styles({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '90vh',
}));
stories.addDecorator(withKnobs);
stories.addWithJSX('Header', () => (
  <Header>
    {text('Label', 'Title')}
  </Header>
));
