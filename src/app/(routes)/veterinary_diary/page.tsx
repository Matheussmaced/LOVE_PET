'use client'

import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/themes/default'
import { ThemeProvider } from 'styled-components'
import {
  Main,
  MainContainer,
  ParentContainer,
} from './components/styles/informationsStyle'
import HeaderInformations from './components/Informations'
import ContainerInformations from './components/containerInformations'

export default function VeterinaryDiary() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <ParentContainer>
        <Main>
          <MainContainer>
            <HeaderInformations />

            <ContainerInformations />
            <ContainerInformations />
            <ContainerInformations />
            <ContainerInformations />
          </MainContainer>
        </Main>

        <Main>
          <MainContainer>
            <HeaderInformations />

            <ContainerInformations />
            <ContainerInformations />
          </MainContainer>
        </Main>
        <Main>
          <MainContainer>
            <HeaderInformations />

            <ContainerInformations />
            <ContainerInformations />
          </MainContainer>
        </Main>

        <Main>
          <MainContainer>
            <HeaderInformations />

            <ContainerInformations />
          </MainContainer>
        </Main>
      </ParentContainer>
    </ThemeProvider>
  )
}
