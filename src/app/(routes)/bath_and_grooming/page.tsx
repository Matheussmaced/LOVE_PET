'use client'

import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/themes/default'
import { ThemeProvider } from 'styled-components'

import {
  Main,
  MainContainer,
  ParentContainer,
} from './components/styles/informationsStyle'
import ContainerInformations from './components/containerInformations'
import HeaderInformations from './components/Informations'

export default function BathAndGrooming() {
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
            <ContainerInformations />
            <ContainerInformations />
            <ContainerInformations />
          </MainContainer>
        </Main>
      </ParentContainer>
    </ThemeProvider>
  )
}
