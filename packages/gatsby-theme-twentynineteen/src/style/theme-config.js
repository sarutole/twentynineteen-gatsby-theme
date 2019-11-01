import roboto from "@theme-ui/preset-roboto"

export const theme = {
  ...roboto,
  breakpoints: [`550px`, `768px`, `1152px`],
  colors: {
    background: `aliceblue`,
  },
  styles: {
    Layout: {},
    Header: {
      a: { color: `red` },
    },
    Section: {
      backgroundColor: `#454545`,
    },
    Main: {
      flex: `1 0 320px`,
      backgroundColor: `#fff`,
      width: [`100%`, null, `66.666%`],
    },
    Sidebar: {
      flex: `0 0 320px`,
      backgroundColor: `#fff`,
      width: [`100%`, null, `33.333%`],
    },
    Container: {
      backgroundColor: `transparent`,
      maxWidth: `1088px`,
    },
    Footer: {
      justifyContent: `center`,
      py: 3,
    },
  },
}

export default theme
