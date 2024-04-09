'use client'

import { ThemeProvider } from 'styled-components'
import { CreateAccount, LoginContainer, Logo, Main } from './style'

import { defaultTheme } from '@/themes/default'
import { GlobalStyles } from '@/styles/global'

export default function Login() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Main>
        <Logo></Logo>

        <LoginContainer>
          <input type="text" placeholder="Login" />
          <input type="text" placeholder="Senha" />
          <input type="submit" placeholder="Entrar" />

          <CreateAccount href="/register">
            <span>Criar conta</span>
          </CreateAccount>
        </LoginContainer>
      </Main>
    </ThemeProvider>
  )
}
