import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  box-sizing: border-box;
  font-family: sans-serif;
}

:root {
  --primary: #E50914;
  --black: rgb(10, 10, 10);
  --otherBlack: #111;
  --white: #fff;
  --gray: gray;
}

html,
body {
  background: ${({ errorPage }) =>
    errorPage
      ? `url(${errorPage});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    `
      : `var(--otherBlack)`};
  margin: 0;
  padding: 0;
  user-select: none;
}

a {
  color: inherit;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

body,
input,
button,
textarea {
  font-family: sans-serif;
}
`;
