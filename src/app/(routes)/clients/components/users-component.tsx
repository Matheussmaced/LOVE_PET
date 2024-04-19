'use client'

import { defaultTheme } from '@/themes/default'
import { ThemeProvider } from 'styled-components'

import { UserCircle2 } from 'lucide-react'
import { GlobalStyles } from '@/styles/global'
import {
  InformationContainer,
  UsersContainer,
} from './styles/usersComponentStyles'

export default function UsersComponent() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <UsersContainer>
        <InformationContainer>
          <span>
            <UserCircle2 size={40} />
            <p>Fulano</p>
          </span>

          <button>Detalhes</button>
        </InformationContainer>
      </UsersContainer>
    </ThemeProvider>
  )
}
