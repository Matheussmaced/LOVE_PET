'use client'

import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/themes/default'
import { ThemeProvider } from 'styled-components'

export default function HomePanel() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>Home Panel</h1>
    </ThemeProvider>
  )
}
