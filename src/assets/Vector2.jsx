import * as React from "react"
const Vector2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      fill="#fff"
      strokeMiterlimit={10}
      d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zm-4 15h-2c-2.14 0-3 .5-3 2v3h5l-1 5h-4v15h-5V29h-4v-5h4v-3c0-4 2-7 6-7 2.9 0 4 1 4 1z"
      fontFamily="none"
      fontSize="none"
      fontWeight="none"
      style={{
        mixBlendMode: "normal",
      }}
      textAnchor="none"
      transform="scale(5.12)"
    />
  </svg>
)
export default Vector2

