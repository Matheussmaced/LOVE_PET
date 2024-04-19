'use client'

import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/themes/default'
import { ThemeProvider } from 'styled-components'
import {
  AddButton,
  ButtonContainer,
  Main,
  SearchContainer,
  SearchIcon,
} from './styles'
import { PlusCircle } from 'lucide-react'
import UsersComponent from './components/users-component'

export default function Clients() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main>
        <GlobalStyles />

        <SearchContainer>
          <span>
            <SearchIcon size={33} />
            <input type="text" />
          </span>
        </SearchContainer>

        <ButtonContainer>
          <AddButton>
            <PlusCircle width={25} />
            Novo
          </AddButton>
        </ButtonContainer>

        <UsersComponent />
        <UsersComponent />
        <UsersComponent />
      </Main>
    </ThemeProvider>
  )
}
