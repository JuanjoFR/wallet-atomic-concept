import { createTheme } from "@shopify/restyle";

const palette = {
  primary: "#7993FE",
  secondary: "#CD5FC3",
  purple1: "#2E196A",
  purple2: "#1E004C",
  purple3: "#160037",
  purple4: "#45335F",
  purple5: "#3F2D70",
  purple6: "#6F6196",
  purple7: "#6E5B97",
  purple8: "#8468EA",
  purple9: "#39215F",
  white: "#FFF",
  green: "#18CBA3",
  red: "#FF8F8F",
  gray1: "#8E80A5"
};
const theme = createTheme({
  colors: {
    mainBackground1: palette.purple1,
    mainBackground2: palette.purple2,
    tabBarBackground: palette.purple3,
    tabBarInactiveForeground: palette.purple4,
    tabBarActiveForeground: palette.secondary,
    headerButtonForeground: palette.white,
    headerButtonBackground: palette.purple5,
    headerTitleChevron: palette.purple6,
    text: palette.white,
    text2: palette.purple7,
    text3: palette.gray1,
    success: palette.green,
    buttonBackground: palette.primary,
    increase: palette.green,
    decrease: palette.red,
    equal: palette.white,
    listItemBackground: palette.purple9
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
    },
    lead1: {
      fontFamily: "System",
      fontWeight: "700",
      fontSize: 68,
      lineHeight: 70,
      color: "text"
    },
    lead2: {
      fontFamily: "System",
      fontWeight: "500",
      fontSize: 36,
      lineHeight: 38,
      color: "text2"
    },
    lead3: {
      fontFamily: "System",
      fontWeight: "500",
      fontSize: 20,
      lineHeight: 22,
      color: "success"
    },
    button: {
      fontFamily: "System",
      fontWeight: "700",
      fontSize: 16,
      lineHeight: 24,
      color: "text"
    },
    title: {
      fontFamily: "System",
      fontWeight: "700",
      fontSize: 16,
      lineHeight: 24,
      color: "text3"
    }
  }
});

export type Theme = typeof theme;
export default theme;
