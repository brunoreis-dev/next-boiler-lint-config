/* eslint-disable import/no-anonymous-default-export */
import { css } from "styled-components";

export const rem = (px: number) => {
  return px / 16 + "rem";
};

export default {
  colors: {
    white: "#fff",
    light02: "E5E7ED",
    light03: "F3F7FB",
    black: "#000",
    black00: "#31374B",
    black01: "#5D606F",
    black02: "#979EA6",

    primary: "#002180",
    primaryDark: "#00144D",
    primaryLight: "#002EB3",

    secondary: "#00E6B8",
    secondaryDark: "#36B29A",
    secondaryLight: "#33FFD6",

    error: "#DB2D2D",
    errorDark: "#B20000",
    errorLight: "#FF4D4D",
    errorUltraLight: "#FF8080",

    alert: "#FFB800",
    alertDark: "#CC9F29",
    alertLight: "#FFCC00",
    alertUltraLight: "#FFF699",

    info: "#6B17E6",
    infoDark: "#501F99",
    infoLight: "#8633FF",
    infoUltraLight: "#CAA6FF",

    success: "#06C270",
    successDark: "#05A660",
    successLight: "#39D98A",
    successUltraLight: "#57EBA1",

    inactive: "#D8D8D8",
  },
  breakpoints: {
    largeMobile: "@media (min-width: 480px)",
    tablet: "@media (min-width: 768px)",
    laptop: "@media (min-width: 1024px)",
    desktop: "@media (min-width: 1280px)",
    wide: "@media (min-width: 1440px)",
  },
  fonts: {
    headings: {
      heading1: (weight = 700) => css`
        font-weight: ${weight};
        font-size: ${rem(46)};
        line-height: 1.25;
      `,
      heading2: (weight = 700) => css`
        font-weight: ${weight};
        font-size: ${rem(40)};
        line-height: 1.25;
      `,
      heading3: (weight = 700) => css`
        font-weight: ${weight};
        font-size: ${rem(32)};
        line-height: 1.25;
      `,
      heading4: (weight = 700) => css`
        font-weight: ${weight};
        font-size: ${rem(24)};
        line-height: 1.25;
      `,
      heading5: (weight = 700) => css`
        font-weight: ${weight};
        font-size: ${rem(20)};
        line-height: 1.25;
      `,
      heading6: (weight = 700) => css`
        font-weight: ${weight};
        font-size: ${rem(18)};
        line-height: 1.25;
      `,
    },
    body: {
      leadParagraph: (weight = 400) => css`
        font-weight: ${weight};
        font-size: ${rem(20)};
        line-height: 1.5;
      `,
      large: (weight = 400) => css`
        font-weight: ${weight};
        font-size: ${rem(18)};
        line-height: 1.5;
      `,
      medium: (weight = 400) => css`
        font-weight: ${weight};
        font-size: ${rem(16)};
        line-height: 1.5;
      `,
      normal: (weight = 400) => css`
        font-weight: ${weight};
        font-size: ${rem(14)};
        line-height: 1.5;
      `,
      small: (weight = 400) => css`
        font-weight: ${weight};
        font-size: ${rem(12)};
        line-height: 1.5;
      `,
    },
  },
};
