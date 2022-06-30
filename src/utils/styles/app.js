const appStyle = `
  /* stylelint-disable selector-max-id */

  /**
   * Globals
   */

  html {
    background-color: white;
    height: 100%;
    --100vh: calc(var(--vh, 1vh) * 100);
  }

  * {
    -webkit-tap-highlight-color: transparent;
  }

  body {
    overflow-y: hidden;
    overflow-y: auto;
    height: 100%;
  }

  a {
    color: black;
  }
`

export default appStyle
