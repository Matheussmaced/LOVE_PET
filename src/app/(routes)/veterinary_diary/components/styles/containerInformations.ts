'use client'

import styled from 'styled-components'

export const Main = styled.main`
  border-radius: 6px;

  width: 80%;

  margin: 1rem auto;
`

export const Header = styled.header`
  background-color: ${(props) => props.theme['orange-medium']};
  padding: 1rem 0.5rem;

  display: flex;
  justify-content: center;

  gap: 1rem;
  font-size: 1.2rem;
  border-radius: 0 0 6px 6px;
`

export const Body = styled.div`
  display: flex;
  padding: 1rem 0.5rem 2rem;
  font-size: 1.1rem;

  gap: 1rem;
  justify-content: center;

  background-color: ${(props) => props.theme['base-background']};
`
