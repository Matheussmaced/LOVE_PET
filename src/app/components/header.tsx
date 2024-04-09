'use client'

import { HeaderContainer } from '@/styles/styleLayoutHome'
import { defaultTheme } from '@/themes/default'
import { ThemeProvider } from 'styled-components'

export default function Header() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <HeaderContainer>
          <div></div>
        </HeaderContainer>
      </ThemeProvider>
    </>
  )
}
