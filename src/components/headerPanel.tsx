'use client'

import { HeaderContainer } from '@/styles/styleLayoutHome'
import { defaultTheme } from '@/themes/default'
import { LogOut } from 'lucide-react'
import { ThemeProvider } from 'styled-components'

export default function HeaderPanel() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <HeaderContainer>
          <div>Logo</div>
          <button>
            <LogOut />
            SAIR
          </button>
        </HeaderContainer>
      </ThemeProvider>
    </>
  )
}
