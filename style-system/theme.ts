import { createTheme } from "@shopify/restyle";

const palette = {
  primary: "#2E196A",
  purple1: "#2E196A",
  purple2: "#1E004C",
  purple3: "#160037",
  purple4: "#45335F",
  purple5: "#3F2D70",
  purple6: "#6F6196",
  pink1: "#CD5FC3",
  white: "#FFF"
};
const theme = createTheme({
  colors: {
    mainBackground1: palette.purple1,
    mainBackground2: palette.purple2,
    tabBarBackground: palette.purple3,
    tabBarInactiveForeground: palette.purple4,
    tabBarActiveForeground: palette.pink1,
    headerButtonForeground: palette.white,
    headerButtonBackground: palette.purple5,
    headerTitleChevron: palette.purple6,
    text: palette.white
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40
  },
  breakpoints: {},
  textVariants: {
    body: {
      fontFamily: "System",
      fontWeight: "600",
      fontSize: 16,
      lineHeight: 24,
      color: "text"
    }
  }
});

export type Theme = typeof theme;
export default theme;
