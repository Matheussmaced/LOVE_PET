'use client'

import { defaultTheme } from '@/themes/default'
import { PawPrint, UserCircle } from 'lucide-react'
import { ThemeProvider } from 'styled-components'
import {
  BathAndGroomingContainer,
  IconsContainer,
  Main,
  UserInformationContainer,
} from './styles/activityStyle'

export default function Activity() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main>
        <BathAndGroomingContainer>
          <span>Banho e tosa</span>
          <span>10/07</span>
          <span>17:30</span>
        </BathAndGroomingContainer>

        <UserInformationContainer>
          <IconsContainer>
            <UserCircle size={20} color="black" />
            <span>Fulano S.</span>
          </IconsContainer>
          <IconsContainer>
            <PawPrint size={20} color="black" />
            <span>Cão/ Dino</span>
          </IconsContainer>
        </UserInformationContainer>
      </Main>
    </ThemeProvider>
  )
}
