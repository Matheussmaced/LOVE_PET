'use client'

import { Activitys, Main, SpanContainer } from './styles'

import { GlobalStyles } from '@/styles/global'
import { defaultTheme } from '@/themes/default'
import { ThemeProvider } from 'styled-components'
import Activity from './components/activity'

export default function HomePanel() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main>
        <GlobalStyles />

        <div>
          <SpanContainer>Próximas atividades</SpanContainer>

          <Activitys>
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
          </Activitys>
        </div>
      </Main>
    </ThemeProvider>
  )
}
