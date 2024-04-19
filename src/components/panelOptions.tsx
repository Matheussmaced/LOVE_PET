'use client'

import {
  Icon,
  IconsContainer,
  LinkContainer,
  MainContainer,
} from '@/components/styles/stylesPanelOptions'
import { defaultTheme } from '@/themes/default'
import {
  BriefcaseMedical,
  CalendarDays,
  CircleUserRound,
  History,
  Home,
} from 'lucide-react'

import { ThemeProvider } from 'styled-components'

export default function PanelOptions() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MainContainer>
        <LinkContainer href="home_panel">
          <IconsContainer>
            <Icon>
              <Home size={40} />
            </Icon>

            <p>Home</p>
          </IconsContainer>
        </LinkContainer>

        <LinkContainer href="bath_and_grooming">
          <IconsContainer>
            <Icon>
              <CalendarDays size={40} />
            </Icon>

            <p>
              Agendar <br /> Banho e Tosa
            </p>
          </IconsContainer>
        </LinkContainer>

        <LinkContainer href="#">
          <IconsContainer>
            <Icon>
              <BriefcaseMedical size={40} />
            </Icon>

            <p>
              Agenda <br /> Veterinária
            </p>
          </IconsContainer>
        </LinkContainer>

        <LinkContainer href="clients">
          <IconsContainer>
            <Icon>
              <CircleUserRound size={40} />
            </Icon>

            <p>Clientes</p>
          </IconsContainer>
        </LinkContainer>

        <LinkContainer href="#">
          <IconsContainer>
            <Icon>
              <History size={40} />
            </Icon>

            <p>Histórico</p>
          </IconsContainer>
        </LinkContainer>
      </MainContainer>
    </ThemeProvider>
  )
}
