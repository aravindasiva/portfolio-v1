import { Global } from "@emotion/react"
const Fonts = () => (
  <Global
    styles={`

      @font-face {
        font-family: 'Mont';
        font-style: normal;
        font-weight: bold;
        src: url('./fonts/Mont-Bold.ttf') format('truetype');
      },
      `}
  />
)
export default Fonts