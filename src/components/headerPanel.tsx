'use client'

import { HeaderContainer } from '@/styles/styleLayoutHome'
import { defaultTheme } from '@/themes/default'
import { LogOut } from 'lucide-react'
import Link from 'next/link'
import { ThemeProvider } from 'styled-components'

export default function HeaderPanel() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <HeaderContainer>
          <div>Logo</div>
          <Link href="/">
            <button>
              <LogOut />
              SAIR
            </button>
          </Link>
        </HeaderContainer>
      </ThemeProvider>
    </>
  )
}
