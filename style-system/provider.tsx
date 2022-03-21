import { ThemeProvider } from "@shopify/restyle";
import * as React from "react";
import theme from "./theme";

type Props = {
  children: JSX.Element;
};

function Provider({ children }: Props): JSX.Element {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Provider;
