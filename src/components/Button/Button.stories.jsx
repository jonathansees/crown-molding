import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from './Button';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
stories.addWithJSX('Button', () => (
  <Button>
    {text('Label', 'Success')}
  </Button>
));
