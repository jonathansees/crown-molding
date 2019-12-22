import { configure, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import '@storybook/addon-console';

setAddon(JSXAddon);

configure(require.context('../src/components', true, /\.stories\.jsx$/), module);
