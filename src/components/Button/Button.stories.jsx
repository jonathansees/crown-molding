import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import styles from '@sambego/storybook-styles';
import Button from './Button';

const stories = storiesOf('Button', module);

stories.addDecorator(styles({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '90vh',
}));
stories.addDecorator(withKnobs);
stories.addWithJSX('Button', () => (
  <Button>
    {text('Label', 'Submit')}
  </Button>
));
