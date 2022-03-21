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
  // secondary: "#151a2d",
  // tertiary: "#2d2267",
  // purpleDark: "#753E82",
  // purpleLight: "#6D5CCE",
  // blueDark: "#545AAA",
  // blueDarker: "#282A51",
  // greenDark: "#49817B",
  // greenLight: "#22bdbb",
  // brownDark: "#883F1B",
  // grayDark: "#807382",
  // red: "#E94C4C",
  // purpleBlue: "#4D33BA",
  // pink: "#7012A4",
  // purplePrimary: "#5A31F4",
  // black: "#000",
  // white: "#FFF",
  // gray1: "#8A8C98",
  // gray2: "#2B334A",
  // gray3: "#5C6272"
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
    // backgroundGradient1: palette.primary,
    // backgroundGradient2: palette.secondary,
    // backgroundGradient3: palette.tertiary,
    // softText: palette.gray1,
    // inputBackground: palette.gray2,
    // inputColor: palette.gray3,
    // progressBarBackground: palette.black,
    // progressBarForeground: palette.white,
    // labelBackground: palette.white,
    // bigLabelForeground: palette.black,
    // taskProgressCardForeground1: palette.purpleDark,
    // taskProgressCardForeground2: palette.blueDark,
    // taskProgressCardForeground3: palette.greenDark,
    // taskProgressCardForeground4: palette.brownDark,
    // taskProgressCardForeground5: palette.grayDark,
    // taskCardBarckground: palette.blueDarker,
    // checkmarkBackground: palette.greenLight,
    // dot: palette.purpleLight,
    // danger: palette.red,
    // leadButtonTopBackground: palette.purpleBlue,
    // leadButtonBottomBackground: palette.pink,
    // leadButtonForeground: palette.white,
    // placeholderText: palette.gray2,
    // buttonPrimaryBackground: palette.purplePrimary,
    // text: palette.white
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
    // screenHeaderLine1: {
    //   fontFamily: "System",
    //   fontWeight: "normal",
    //   fontSize: 16,
    //   lineHeight: 18,
    //   color: "softText"
    // },
    // screenHeaderLine2: {
    //   fontFamily: "System",
    //   fontWeight: "bold",
    //   fontSize: 20,
    //   lineHeight: 24,
    //   color: "text"
    // },
    // input: {
    //   fontFamily: "System",
    //   fontWeight: "normal",
    //   fontSize: 16,
    //   lineHeight: 18
    // },
    // header: {
    //   fontFamily: "System",
    //   fontWeight: "bold",
    //   fontSize: 20,
    //   lineHeight: 24,
    //   color: "text"
    // },
    // subheader: {
    //   fontFamily: "System",
    //   fontWeight: "normal",
    //   fontSize: 20,
    //   lineHeight: 24,
    //   color: "text"
    // },
    // label: {
    //   fontFamily: "System",
    //   fontWeight: "300",
    //   fontSize: 11,
    //   lineHeight: 13,
    //   color: "text"
    // },
    // bigLabel: {
    //   fontFamily: "System",
    //   fontWeight: "bold",
    //   fontSize: 11,
    //   lineHeight: 13,
    //   color: "bigLabelForeground"
    // }
  }
});

export type Theme = typeof theme;
export default theme;
