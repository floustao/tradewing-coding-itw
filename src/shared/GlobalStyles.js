import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Source Sans Pro', 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: var(--lineHeight);
    background: var(--white);
    color: var(--black);
  }

  html {
    --black: #000;
    --white: #fff;
    --blue: #2F80ED;
    --lightGray: #616A7D;
    --lightGreyish: #F9FAFA;
    --lightGrey: var(--lightGray);
    --grey: #2B3C4B;
    --gray: var(--grey);
    --bs: 0px 0px 4px rgba(47, 128, 237, 0.4);
    --maxWidth: 90vw;
    --lineHeight: 1.5rem;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
    color: var(--blue);
    &:hover {
      text-decoration: underline;
    }
  }

  li {
    line-height: 1.5rem;
  }

  button {
    font-family: 'Source Sans Pro', 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyles;
