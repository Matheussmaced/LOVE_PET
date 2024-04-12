'use client'

import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/themes/default'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components'
import { ButtonsContainer } from './stylesHomeStyle'

export default function Provider() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ButtonsContainer>
        <GlobalStyles />
        <Link href="/login">
          <button>Login</button>
        </Link>
        <Link href="/register">
          <button>Registrar</button>
        </Link>
      </ButtonsContainer>
    </ThemeProvider>
  )
}
