'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    :focus {
      outline: 0;
      box-shadow: none};
    }
    body {
      background-color: ${(props) => props.theme['base-background']};
      font-size: 1rem;
    }
  
`
