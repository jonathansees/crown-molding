import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../../src/index";

storiesOf("Button", module)
    .addWithJSX("Button", () => (<Button />));
