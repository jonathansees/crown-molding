import { configure, setAddon } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";

setAddon(JSXAddon);

configure(require.context('../src/components', true, /\.stories\.jsx$/), module);
