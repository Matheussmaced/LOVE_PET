'use client'

import styled from 'styled-components'

export const ParentContainer = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;

  margin: auto;
  padding: 1rem;

  gap: 1rem;

  margin: 2rem auto 2rem;
`

export const MainContainer = styled.div`
  border-radius: 20px;
`

export const Main = styled.main`
  width: 20rem;

  border-radius: 6px;

  background-color: ${(props) => props.theme['orange-light']};
`

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme['orange-medium']};
  padding: 2rem;
  text-align: center;

  font-size: 1.5rem;

  span {
    display: block;
    line-height: 1.1em;
  }
`
