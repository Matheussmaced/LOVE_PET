'use client'

import { GlobalStyles } from "@/styles/global";
import { defaultTheme } from "@/themes/default";
import { ThemeProvider } from "styled-components"

export default function Provider() {
  return (
    <main>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <h1>Hello World</h1>
      </ThemeProvider>
    </main>
  );
}