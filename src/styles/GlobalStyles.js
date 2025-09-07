import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.dmsans};
    background: ${({ theme }) => theme.colors.bgWhite};
    color: ${({ theme }) => theme.colors.textBody};
  }

  h1 { ${({ theme }) => theme.typography.h1} }
  h2 { ${({ theme }) => theme.typography.h2} }
  h3 { ${({ theme }) => theme.typography.h3} }
  h4 { ${({ theme }) => theme.typography.h4} }
  h5 { ${({ theme }) => theme.typography.h5} }
  h6 { ${({ theme }) => theme.typography.h6} }

  p { ${({ theme }) => theme.typography.body} }
  span { ${({ theme }) => theme.typography.Caption} }
`;

export default GlobalStyles;
